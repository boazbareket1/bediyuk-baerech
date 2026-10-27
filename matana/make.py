import json,sys,html,os
here=os.path.dirname(os.path.abspath(__file__))
g=json.load(open(sys.argv[1]))
if 'tools' in g:
    import re as _re
    src=open(os.path.join(here,'tools.js')).read()
    cat=json.loads(_re.search(r'window.GIFT_TOOLS = (\[.*?\]);\n',src,_re.S).group(1))
    g['apps']=[{'name':t['name'],'what':t['what'],'idea':t['idea'],'url':t['url']+('&' if '?' in t['url'] else '?')+'s=gift','button':'לפתוח'} for i in g['tools'] for t in cat if t['id']==i]

t=open(os.path.join(here,'template.html')).read()
og=f'<title>{html.escape(g["title"])}</title>\n<meta property="og:title" content="{html.escape(g["title"])}">\n<meta property="og:description" content="{html.escape(g["ogDesc"])}">\n<meta name="description" content="{html.escape(g["ogDesc"])}">'
t=t.replace('OGIMG',{'box':'og.png','balloons':'og-balloons.png','flowers':'og-flowers.png'}.get(g.get('skin','box'),'og.png')).replace('<!--OG-->',og).replace('/*GIFT*/','const GIFT='+json.dumps(g,ensure_ascii=False)+';')
open(os.path.join(here,g['file']),'w').write(t)
print('wrote',g['file'])
