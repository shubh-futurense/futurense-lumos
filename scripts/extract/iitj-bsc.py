"""Pull the content of the IIT Jodhpur BSc book-a-call page into a TypeScript data file."""
import json, re, sys, os
from bs4 import BeautifulSoup, Tag, NavigableString

SRC = '/tmp/snap/page-1.html'
OUT = '/home/claude/futurense-lumos/src/data/programs/iitj-bsc.ts'
ICONS = '/home/claude/futurense-lumos/src/assets/icons/program'
os.makedirs(os.path.dirname(OUT), exist_ok=True); os.makedirs(ICONS, exist_ok=True)
s = BeautifulSoup(open(SRC).read(), 'lxml')
secs = s.select_one('.main-wrapper').find_all(recursive=False)
CDN_A = 'https://cdn.prod.website-files.com/687e11ae076e4c47d227af38/'

CDN_B = 'https://cdn.prod.website-files.com/688494bfcb56ce5a1e341a42/'
def short(url):
    if url and url.startswith(CDN_A): return 'A/' + url[len(CDN_A):]
    if url and url.startswith(CDN_B): return 'B/' + url[len(CDN_B):]
    return url

def text(el):
    return re.sub(r'\s+', ' ', el.get_text(' ', strip=True)).replace(' ,', ',').replace(' .', '.').strip() if el else ''

KEEP = {'a': ['href', 'target'], 'img': ['src', 'alt']}
def clean(el):
    """Inner HTML with Webflow classes and empty paragraphs removed."""
    el = BeautifulSoup(str(el), 'lxml').find(el.name)
    for t in el.find_all(True):
        t.attrs = {k: v for k, v in t.attrs.items() if k in KEEP.get(t.name, [])}
        if t.name in ('div', 'span') : t.unwrap()
    for p in el.find_all('p'):
        if not p.get_text(strip=True).replace('‍', ''): p.decompose()
    html = el.decode_contents()
    html = re.sub(r'\s+', ' ', html).replace('‍', '').strip()
    return html

icon_files = {}
def save_svg(svg, name):
    if svg is None: return None
    svg = BeautifulSoup(str(svg), 'lxml').find('svg')
    for k in list(svg.attrs):
        if k not in ('viewbox', 'viewBox', 'fill', 'xmlns'): del svg[k]
    raw = str(svg).replace('viewbox=', 'viewBox=')
    if 'xmlns' not in raw: raw = raw.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"', 1)
    for c in ('#B44B3A', '#b44b3a', '#F04438', '#f04438', 'black', '#000', '#000000', 'white'):
        pass
    key = raw
    if key in icon_files: return icon_files[key]
    fname = f'{name}.svg'
    i = 2
    while os.path.exists(os.path.join(ICONS, fname)) and fname in icon_files.values():
        fname = f'{name}-{i}.svg'; i += 1
    open(os.path.join(ICONS, fname), 'w').write(raw)
    icon_files[key] = fname
    return fname

data = {}
# ---- Hero
h = secs[0]
data['hero'] = {
    'eyebrow': text(h.select_one('.content-left strong')),
    'titleStart': text(h.select_one('h1')).replace(text(h.select_one('h1 .text-color-gradient')), '').strip(),
    'titleAccent': text(h.select_one('h1 .text-color-gradient')),
    'lead': text(h.select_one('p.text-size-large')),
    'eligibility': text(h.select_one('.hidhlight-text-quote')),
    'images': {k: short(h.select_one(sel)['src']) for k, sel in [('topPaper', 'img.top-paper'), ('leftPaper', 'img.left-paper'), ('rightPaper', 'img.right-paper'), ('campus', 'img.joshpur-campus-bsc'), ('campusMobile', 'img.joshpur-campus-bsc.hide-desktop-tab')]},
}
form = h.select_one('form')
selects = []
for sel in form.find_all('select'):
    label = sel.find_parent(class_='form_field-wrapper').select_one('label')
    selects.append({'label': text(label), 'name': sel['name'], 'className': [c for c in sel['class'] if c.startswith('mx')][0], 'options': [o.get_text(strip=True) for o in sel.find_all('option') if o.get('value')]})
data['form'] = {'redirect': form.get('data-redirect'), 'selects': selects}

# ---- Program details
data['details'] = [{'label': text(c.select_one('h2')), 'value': text(c.select_one('h3')), 'desktop': '_6th' not in c.get('class', [])} for c in secs[1].select('.content-program-details')]

# ---- Highlights
hl = secs[2]
check = save_svg(hl.select_one('.point-icon svg'), 'check-circle')
data['highlights'] = {'title': text(hl.select_one('h2')), 'points': [text(p) for p in hl.select('.point-icon p')], 'image': short(hl.select_one('img.img-thumbnail')['src'])}

# ---- Report slider
data['report'] = [{'title': text(sl.select_one('h2')), 'body': clean(sl.select_one('.w-richtext')), 'image': short(sl.select_one('img')['src'])} for sl in secs[3].select('.swiper-slide')]

# ---- About college + faculty
ab = secs[4]
panes = ab.select('.tab_content_item, .w-tab-pane, [class*=tab_content]')
tabs_text = [text(t) for t in ab.select('.tab_button_text')]
faculty = []
for card, tab in zip(ab.select('.card-about-landing'), [text(t) for t in ab.select('.tab_button_text')]):
    img = card.select_one('img')
    faculty.append({'tab': tab, 'heading': text(card.select_one('h3')), 'image': short(img['src']), 'alt': img.get('alt', ''), 'html': clean(card.select_one('.w-richtext'))})
data['about'] = {'title': text(ab.select_one('h2')), 'text': text(ab.select_one('p.text-size-medium')), 'image': short(ab.select_one('img')['src']), 'faculty': faculty}

# ---- Why this program
wy = secs[5]
heads = wy.select('h2 .text-color-gradient')
why_cards = []
for i, c in enumerate(wy.select('.card-small')):
    why_cards.append({'icon': save_svg(c.find('svg'), f'why-{i+1}'), 'title': text(c.find('strong')), 'text': text(c.find('p'))})
data['why'] = {'title': [text(x) for x in heads], 'cards': why_cards}

# ---- Curriculum
cu = secs[6]
years = []
for d in cu.select('details'):
    summ = d.find('summary')
    sems = []
    for t in d.select('.table_content'):
        hdr = [text(x) for x in t.select('.table_header-row h3')]
        rows = [{'n': text(r.select_one('.text-weight-semibold')), 'topic': text(r.select_one('.text-weight-medium'))} for r in t.select('.table_item')]
        sems.append({'title': hdr[0] if hdr else '', 'rows': rows})
    fee = None
    rt = [x for x in d.select('.w-richtext') if 'Fee' in x.get_text()]
    if rt: fee = clean(rt[0])
    years.append({'title': clean(summ.select_one('.accordion_1_toggle_heading, h3, div') or summ), 'semesters': sems, 'fee': fee})
data['curriculum'] = {'title': text(cu.select_one('h2')), 'text': text(cu.select_one('p.text-size-medium')), 'years': years}
cur_check = save_svg(cu.select_one('.table_item svg'), 'check-olive')

# ---- Projects
pr = secs[7]
projects = []
for d in pr.select('details'):
    cards_ = []
    for c in d.select('.item-slider_cms_item, .card-small, [class*=project-card]'):
        cards_.append(clean(c))
    projects.append({'title': text(d.find('summary')), 'cards': cards_})
data['projects'] = {'title': text(pr.select_one('h2')), 'text': text(pr.select_one('p.text-size-medium')), 'items': projects}

# ---- Who can apply
wa = secs[8]
who = []
for i, h3 in enumerate(wa.select('h3')):
    item = h3
    while item and not item.find('svg'): item = item.parent
    who.append({'icon': save_svg(item.find('svg'), f'who-{i+1}'), 'title': text(h3), 'html': clean(h3.find_next('p').parent) })
data['who'] = {'title': text(wa.select_one('h2')), 'items': who, 'image': short(wa.select_one('img')['src']), 'alt': wa.select_one('img').get('alt', '')}

# ---- Comparison
cp = secs[9]
svgs = cp.find_all('svg')
data['comparison'] = {
    'muted': text(cp.select_one('.text-color-op-30')), 'accent': text(cp.select_one('.text-color-gradient')),
    'dimension': text(cp.select_one('h3.heading-style-h6')),
    'ours': text(cp.select('h3.headings')[0]), 'theirs': text(cp.select('h3.headings')[1]),
    'iconOurs': save_svg(svgs[0], 'rocket'), 'iconTheirs': save_svg(svgs[1], 'sad-face'),
    'rows': [], 'button': text(cp.select_one('a.button')),
}
labels = cp.select('div.text-weight-semibold')
cells = cp.select('div.text-size-small-mobile')
for i, l in enumerate(labels):
    data['comparison']['rows'].append({'label': text(l), 'ours': text(cells[2*i]), 'theirs': text(cells[2*i+1])})
thumbs = [sv for sv in svgs[2:]]
data['comparison']['iconYes'] = save_svg(thumbs[0], 'thumbs-up')
data['comparison']['iconNo'] = save_svg(thumbs[1], 'thumbs-down')

# ---- Steps
st = secs[10]
data['steps'] = {'title': text(st.select_one('h3.heading-style-h2')), 'image': short(st.select_one('img')['src']), 'alt': st.select_one('img').get('alt', ''),
                 'button': {'label': text(st.select_one('a.button')), 'href': st.select_one('a.button')['href']},
                 'items': [{'step': text(x.select_one('h3')), 'title': text(x.select_one('h4')), 'text': text(x.select_one('p'))} for x in st.select('.step-process-item')],
                 'pattern': short(st.select_one('img.bg-image')['src'])}

# ---- Testimonials
ts = secs[11]
data['testimonials'] = {'title': text(ts.select_one('h2')), 'items': [{'name': text(x.select_one('h3')), 'role': text(x.select_one('p.text-size-medium')), 'quote': text(x.select('p')[-1]), 'image': short(x.select_one('img')['src']), 'alt': x.select_one('img').get('alt', '')} for x in ts.select('.swiper-slide')]}

# ---- After graduation
af = secs[12]
rows = []
for h2 in af.select('h2.heading-style-h2'):
    block = h2
    while block and not block.find('img'): block = block.parent
    body = h2.find_parent().find_parent()
    texts = h2.find_all_next('p', class_='text-size-medium', limit=6)
    content = h2.parent.parent
    rich = content.select_one('.w-richtext') or h2.find_next(class_=re.compile('rich|text-size-medium')).parent
    rich = BeautifulSoup(str(rich), 'lxml').find(rich.name)
    for x in rich.find_all('h2'): x.decompose()
    rows.append({'title': text(h2), 'html': clean(rich), 'image': short(block.find('img')['src']), 'alt': block.find('img').get('alt', '')})
data['after'] = {'title': text(af.select_one('h2 .text-color-gradient') or af.select_one('h2')), 'rows': rows}

# ---- Videos
vd = secs[13]
emb = vd.select('[data-embed]')
imgs_v = vd.select('img.card-image')
data['video'] = {'main': {'youtube': emb[0]['data-embed'], 'image': short(imgs_v[0]['src']), 'alt': imgs_v[0].get('alt', '')},
                 'director': {'title': text(vd.select_one('h2')), 'text': text(vd.select_one('p.text-size-medium')), 'youtube': emb[1]['data-embed'], 'image': short(imgs_v[1]['src']), 'alt': imgs_v[1].get('alt', '')}}
data['playIcon'] = save_svg(vd.select_one('.play-wrapper svg'), 'play')

# ---- FLC marquee
fl = secs[14]
seen = set(); people = []
for c in fl.select('.flc-pop-wrap'):
    n = text(c.select_one('h3'))
    if n in seen: continue
    seen.add(n)
    photo = c.select_one('img.img-flc-round'); logo = c.select_one('img.icon-height-xsmall')
    people.append({'name': n, 'role': text(c.select_one('h4')), 'photo': short(photo['src']) if photo else '', 'logo': short(logo['src']) if logo else '', 'logoAlt': logo.get('alt', '') if logo else ''})
data['flc'] = {'titleStart': 'Led by the', 'titleAccent': 'Futurense Leadership Council', 'titleEnd': '(FLC)', 'text': text(fl.select_one('p.text-size-medium')), 'people': people}

# ---- CTA
ct = secs[15]
data['cta'] = {'title': text(ct.select_one('h2')), 'text': text(ct.select_one('p')), 'button': text(ct.select_one('a.button')), 'image': short(ct.select_one('img')['src'])}

# ---- FAQ
fq = secs[16]
faqs = []
for d in fq.select('details'):
    q = text(d.select_one('h3'))
    ans = d.find(class_=re.compile('accordion_1_content|accordion_content')) or d
    faqs.append({'q': q, 'a': clean(ans).replace(q, '', 1) if ans is d else clean(ans)})
btn = fq.select_one('a.button')
data['faq'] = {'title': text(fq.select_one('h2')), 'text': text(fq.select_one('p')), 'items': faqs, 'button': {'label': text(btn), 'href': btn['href']} if btn else None}

# ---- Nav and footer
nav = s.select_one('.navbar-landing')
data['nav'] = {'logo': short(nav.select_one('img.logo')['src']), 'phone': text(nav.select_one('.phone-number-link-nav'))}
data['phoneIcon'] = save_svg(nav.select_one('svg'), 'phone')
ft = s.select_one('footer')
data['footer'] = {'logo': short(ft.select_one('img.logo')['src']), 'email': 'info@futurense.com', 'supportEmail': 'support@futurense.com',
                  'help': {'title': 'Need Help?', 'text': text(ft.select_one('.program-support_card p'))}}
fsv = ft.find_all('svg')
data['mailIcon'] = save_svg(fsv[1], 'mail')
data['poweredLogo'] = save_svg(ft.select_one('.footer_logo-link svg'), 'futurense-uni-logo')
data['chevron'] = save_svg(s.select_one('.section_faqs details svg'), 'chevron-down')

# ---- SEO
data['seo'] = {'title': s.title.string.strip(), 'description': s.find('meta', attrs={'name': 'description'})['content']}
ld = [sc.string for sc in s.find_all('script', type='application/ld+json')]
data['schema'] = [json.loads(x) for x in ld if x and x.strip().startswith('{')]

ts_out = '// Content of the IIT Jodhpur B.S/B.Sc book-a-call page, copied from futurense.com.\n// Generated by tools/extract_iitj.py from the live page source.\n\nexport const iitjBsc = ' + json.dumps(data, ensure_ascii=False, indent=2) + ' as const;\n'
open(OUT, 'w').write(ts_out)
print('wrote', OUT, len(ts_out)); print('icons', sorted(icon_files.values()))
