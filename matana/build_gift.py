"""Builds the dynamic gift pages (one per wrap skin) from template.html."""
import os
here=os.path.dirname(os.path.abspath(__file__))
t=open(os.path.join(here,'template.html')).read()
SK={'box':('gift.html','og.png'),'balloons':('gift-balloons.html','og-balloons.png'),'flowers':('gift-flowers.html','og-flowers.png')}
og='<title>הגיעה אליך מתנה</title>\n<meta property="og:title" content="הגיעה אליך מתנה">\n<meta property="og:description" content="חבילה קטנה עם משחק או כלי שנבחרו במיוחד בשבילך. לחיצה פותחת את החבילה.">\n<meta name="description" content="חבילה קטנה עם משחק או כלי שנבחרו במיוחד בשבילך.">'
for skin,(fn,img) in SK.items():
    code='''<script src="tools.js"></script>
<script>
const HEADS={"יום הולדת":"מזל טוב, {t}!","תודה":"תודה, {t}!","חג":"חג שמח, {t}!","מזל טוב":"מזל טוב, {t}!","סתם כי בא לי":"זה בשבילך, {t}"};
let GIFT;
try{
  const d=giftDecode(new URLSearchParams(location.search).get('d')||'');
  const apps=(d.a||[]).map(id=>GIFT_TOOLS.find(x=>x.id===id)).filter(Boolean).map(x=>({name:x.name,what:x.what,idea:x.idea,url:x.url+(x.url.includes('?')?'&':'?')+'s=gift',button:'לפתוח'}));
  if(!apps.length)throw 0;
  const t=d.t||'',f=d.f||'',o=d.o||'מתנה';
  GIFT={skin:d.s||"SKIN",title:'מתנה ל'+t,occasion:o,toLine:t+', הגיעה אליך חבילה',tag:'ל'+t+(f?', מ'+f:''),
    headline:(HEADS[o]||'זה בשבילך, {t}').replace('{t}',t),message:d.m||'',signature:f?'באהבה, '+f:'',
    insideLabel:'בתוך החבילה',ideaLabel:'איך מתחילים:',apps,footer:'רוצים לשלוח מתנה כזו למישהו? למדף המתנות',footerHref:'./'};
}catch(e){
  GIFT={skin:"SKIN",title:'מתנה',occasion:'',toLine:'החבילה לא נפתחה',tag:'',headline:'משהו בקישור השתבש',message:'כדאי לבקש מהשולח לשלוח את הקישור שוב, בשלמותו.',signature:'',insideLabel:'',ideaLabel:'',apps:[],footer:'למדף המתנות',footerHref:'./'};
}
'''.replace('SKIN',skin)
    g=t.replace('OGIMG',img).replace('<!--OG-->',og).replace('<script>\n/*GIFT*/\n',code)
    assert 'giftDecode' in g
    open(os.path.join(here,fn),'w').write(g)
print('built',[v[0] for v in SK.values()])
