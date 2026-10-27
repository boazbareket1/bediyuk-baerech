/* Gift shelf catalog. shelf:true = instant gift; shelf:false = by request from Boaz. */
window.BOAZ_WA = ""; /* WhatsApp number for requests, international format without +, e.g. 9725XXXXXXXX. Empty = sender picks the chat. */
window.GIFT_TOOLS = [
  {id:"bediyuk", shelf:true, kind:"משחק", name:"בדיוק בערך", url:"https://boazbareket1.github.io/bediyuk-baerech/",
   what:"משחק חידות בוויקיפדיה: יעד סודי מסתתר, קוראים ערכים, אוספים רמזים ומרגישים מתי מתחממים.",
   idea:"כל אחד בטלפון שלו, אותה רמת קושי, ומי שפותר ראשון מנצח."},
  {id:"numerology", shelf:true, kind:"ידע עצמי", name:"מפת המספרים", url:"https://boazbareket1.github.io/numerology-map/",
   what:"ניתוח אישיות לפי תאריך הלידה והשם, כולל התאמה זוגית ותחזית.",
   idea:"מכניסים את התאריך שלך, ואחר כך בודקים יחד את ההתאמה הזוגית."},
  {id:"family", shelf:true, kind:"משפחה", name:"המארג המשפחתי", url:"https://boazbareket1.github.io/family-weave/",
   what:"מכניסים שם ותאריך לידה של כל אחד, ומגלים את המפה האישית ואת החוטים שמחברים בין כולם.",
   idea:"עוברים סביב השולחן, מכניסים את כל מי שיושב בו, וקוראים יחד מה כל אחד מביא למשפחה."},
  {id:"fruty", shelf:false, kind:"משחק", name:"FrutyBeat", url:"https://boazbareket1.github.io/Fruty-Beat-It/",
   what:"משחק קצב עם פירות: מרכיבים תיבות מקצב מקלפי פירות ושומעים אותן מתנגנות.", idea:"מתאים במיוחד לילדים: כל אחד בונה מקצב, וכולם מנחשים איזה פרי הוא."},
  {id:"mazalot", shelf:false, kind:"ידע עצמי", name:"מזלות", url:"https://boazbareket1.github.io/Mazalot/",
   what:"מגלים את תכונות המזל, מדרגים מה נוכח בך, ובודקים התאמה זוגית.", idea:"כל אחד מדרג את עצמו, ואחר כך משווים."},
  {id:"grapholog", shelf:false, kind:"ידע עצמי", name:"הגרפולוג", url:"https://boazbareket1.github.io/grapholog/",
   what:"כותבים דף ביד, מצלמים, ומקבלים קריאה של הכתב והאישיות.", idea:"כותבים דף קצר על הרגע הזה, ומצלמים."},
  {id:"chakra", shelf:false, kind:"ידע עצמי", name:"נתיב האור", url:"https://boazbareket1.github.io/chakra-compass/",
   what:"מסע תלת־ממדי בין מרכזי האנרגיה בגוף, שבסופו נבנה מסע אנרגטי אישי.", idea:"רגע שקט עם אוזניות, ובסוף משתפים משפט אחד."},
  {id:"hagshama", shelf:false, kind:"התבוננות", name:"מעגל הגשמה", url:"https://boazbareket1.github.io/maagal-hagashama/",
   what:"משחק קלפים להתבוננות עצמית: ארבע משבצות וארבעים קלפים.", idea:"בוחרים נושא אחד שמעסיק אותך, ומתחילים מהמשבצת הראשונה."},
  {id:"tovanot", shelf:false, kind:"התבוננות", name:"מפת התובנות", url:"https://boazbareket1.github.io/values-galaxy/",
   what:"מסע בין כוכבים, שבכל אחד מהם מחכה ערך או תובנה.", idea:"כל אחד בוחר כוכב ומקריא את התובנה שקיבל."},
  {id:"oganim", shelf:false, kind:"התבוננות", name:"עוגנים", url:"https://boazbareket1.github.io/OGANIM/",
   what:"פאזל אותיות שבו מרכיבים משפט מפתח מחזק, עם שאלה למחשבה בסוף.", idea:"פותרים חידה אחת ביום."},
  {id:"qualities", shelf:false, kind:"התבוננות", name:"גלקסיית האיכויות", url:"https://boazbareket1.github.io/qualitystars/galaxy_of_qualities_4.html",
   what:"נכנסים לחדר של איכות כמו רוך, אמון או נדיבות, ומעבדים דרכה אירוע.", idea:"בוחרים איכות שהיית רוצה יותר ממנה השנה."},
  {id:"korgesh", shelf:false, kind:"התבוננות", name:"מה קו־רגש", url:"https://boazbareket1.github.io/mah-korgesh/",
   what:"משחק קלפים שמפרק אירוע לפרשנות, רגש ותוצאה, ומזמין לבחור מחשבה אחרת.", idea:"בוחרים אירוע קטן מהשבוע."},
  {id:"toolbox", shelf:false, kind:"התבוננות", name:"ערכת כלים לעיבוד רגשי", url:"https://boazbareket1.github.io/emotionToolbox/",
   what:"שער אחד לכל משחקי העיבוד הרגשי.", idea:"מתחילים מהמשחק הראשון ברשימה."},
  {id:"politikalpi", shelf:false, kind:"לכולם", name:"פוליטיקלפי", url:"https://boazbareket1.github.io/politikalpi/",
   what:"איזו מפלגה הכי קרובה לעמדות שלך, בחירות לכנסת ה־26.", idea:"כל אחד עונה לבד, ואחר כך משווים בלי ויכוחים."},
  {id:"meeting", shelf:false, kind:"לכולם", name:"מתאם הזמנים", url:"https://boazbareket1.github.io/meeting-sync/",
   what:"כל אחד מסמן מתי הוא פנוי, ורואים מיד מתי כולם יכולים להיפגש.", idea:"לתכנן את המפגש המשפחתי הבא."}
];
window.giftEncode = function(obj){
  const bytes = new TextEncoder().encode(JSON.stringify(obj)); let bin = "";
  bytes.forEach(b => bin += String.fromCharCode(b));
  return btoa(bin).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
};
window.giftDecode = function(s){
  s = s.replace(/-/g,"+").replace(/_/g,"/"); while (s.length % 4) s += "=";
  const bin = atob(s); const bytes = Uint8Array.from(bin, c => c.charCodeAt(0));
  return JSON.parse(new TextDecoder().decode(bytes));
};
