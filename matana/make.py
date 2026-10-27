import json,sys,html,os
here=os.path.dirname(os.path.abspath(__file__))
g=json.load(open(sys.argv[1]))
t=open(os.path.join(here,'template.html')).read()
og=f'<title>{html.escape(g["title"])}</title>\n<meta property="og:title" content="{html.escape(g["title"])}">\n<meta property="og:description" content="{html.escape(g["ogDesc"])}">\n<meta name="description" content="{html.escape(g["ogDesc"])}">'
t=t.replace('<!--OG-->',og).replace('/*GIFT*/','const GIFT='+json.dumps(g,ensure_ascii=False)+';')
open(os.path.join(here,g['file']),'w').write(t)
print('wrote',g['file'])
