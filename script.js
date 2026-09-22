/* UU的小馆 · 现在不需要编辑代码：登录“管理员”后，网站文字、每周问题、我的画都可以直接在网页里改。 */

const weeklyQuestionDefault = {
  zh: "如果今天是一种颜色，你会选择什么颜色？",
  en: "If today were a color, what color would it be?",
  placeholderZh: "比如：今天是很淡很淡的薄荷绿……",
  placeholderEn: "Maybe: a very soft mint green…"
};

const baseArtworks = [
  {type:"series",category:"colored",date:"2026-09-21",title:"示例：我的第一组画",note:"把属于同一个故事的几幅画放在这里。",images:[
    {image:"images/series-01.jpg",title:"第一张"},{image:"images/series-02.jpg",title:"第二张"},{image:"images/series-03.jpg",title:"第三张"}
  ]},
  {type:"single",category:"sketch",date:"2026-09-20",title:"随手画的小鸟",image:"images/sketch-01.jpg",note:"一个很普通的下午，突然想画一只鸟。"}
];

const translations = {
  zh:{
    navSubmit:"投稿",navColored:"有色画",navSketches:"随笔",navTogether:"一起玩",navUuTalk:"UU·和大家说的话",navAbout:"关于",navAdmin:"管理员",navDirectory:"目录",directoryTitle:"目录",directoryDesc:"想去哪里，就点哪里吧～",directorySubmit:"把你的画放进大家的小世界",directoryColored:"看看UU认真留下来的彩色作品",directorySketches:"一些随手画下来的小念头",directoryTogether:"问题、留言、大家的小世界",directoryUuTalk:"看看UU想留给大家的话",directoryAdmin:"管理员专属的小房间",adminTalk:"UU的话",
    heroEyebrow:"A LITTLE PLACE FOR MY DRAWINGS",heroTitle:"UU的小馆",heroIntro:"一页一页，收藏我画过的世界。<br>慢慢画，也慢慢长大。",enter:"进入小馆",
    coloredTitle:"有色画",coloredDesc:"彩色、完整的作品，以及那些被我认真留下来的画。",sketchTitle:"随笔",sketchDesc:"一些随手画下来的东西。小鸟、人物、风景、一个突然出现的念头。",
    submissionPageTitle:"投稿",submissionPageDesc:"如果你愿意，也可以把你的画放进UU的小馆。",shareTitle:"也让我看看你的世界吧。",shareDesc:"把你的画上传给UU，审核通过后会出现在大家的小世界。",previewSubmission:"打开投稿表单",choosePhoto:"放一张你的画",uploadPhoto:"点这里选择照片",uploadHint:"支持 JPG / PNG / WEBP",submissionName:"你的名字（可不填）",submissionNamePlaceholder:"匿名也可以",artName:"作品名字",artNamePlaceholder:"给你的画取个名字",sayAboutArt:"想说的话",artNotePlaceholder:"介绍一下这幅画……",submitArt:"投稿这幅画 ♡",submissionNote:"投稿会先进入UU的审核区。通过后才会公开。",
    togetherTitle:"一起玩",togetherDesc:"这里不只是我的画廊。也想留一点位置，给你的想法和你的世界。",questionTitle:weeklyQuestionDefault.zh,writeOne:"写下一句话",questionPlaceholder:weeklyQuestionDefault.placeholderZh,leaveAnswer:"留下答案 ♡",
    guestbookTitle:"你在想什么呢～写下来吧",nameOptional:"名字（可不填）",anonymous:"匿名也可以",leaveMessage:"留一句话",messagePlaceholder:"写下你想留下的话……",writeGuestbook:"写进留言簿 ♡",
    privateNoteTitle:"想和UU说一点悄悄话",privateNoteDesc:"这里的内容不会显示在大家的小世界里，只会送到UU的管理员区。",privateMessageLabel:"悄悄话",privateMessagePlaceholder:"想告诉UU什么呢……",sendPrivateMessage:"悄悄发给UU ♡",
    worldsTitle:"大家的小世界",worldsDesc:"投稿通过审核后，会直接出现在这里。",uuTalkTitle:"UU·和大家说的话",uuTalkDesc:"这里是UU想留给大家的一些话。每一篇都可以慢慢写。",uuTalkEmpty:"UU还没有写下新的话，等我慢慢来这里放下吧 ♡",communityEmpty:"还没有投稿，等你的第一幅画来这里住下吧 ♡",
    adminUploadShortcut:"上传我的画",adminTitle:"管理员小房间",adminDesc:"登录后，可以直接修改网站文字、每周问题、我的画，并审核投稿和查看私信。",adminLockedTitle:"UU的管理员入口",adminLockedDesc:"只有管理员登录后才能打开这个小房间。",adminPasswordPlaceholder:"管理员密码",adminUnlock:"登录管理员",adminPanelTitle:"UU的管理后台",adminLock:"退出",adminText:"网站文字",adminMyArt:"我的画",adminSubmissions:"投稿审核",adminMessages:"私信",adminSave:"保存修改",adminAddArt:"添加到我的画",adminDelete:"删除",adminApprove:"通过并展示",adminPending:"待审核",adminApproved:"已公开",adminPrivate:"私信 · 只有UU可见",blockedUsers:"已拉黑的用户",noBlockedUsers:"目前还没有拉黑用户。",blocked:"已拉黑",blockUser:"拉黑用户",unblockUser:"取消拉黑",replyToMessage:"回复",replyMessagePlaceholder:"写下要回复的话……",sendAdminReply:"发送回复",yourReply:"UU的回复",adminUuTalk:"UU的话",editUuTalk:"UU·和大家说的话",talkTitle:"标题",talkText:"内容",talkDate:"日期",talkTitlePlaceholder:"比如：给今天的一句话",talkTextPlaceholder:"写一点想和大家说的话……",publishTalk:"发布这句话 ♡",adminEmpty:"这里还没有内容。",adminNoMessages:"暂时没有悄悄话。",adminWrongPassword:"密码不对，再试一次吧 ♡",adminSaved:"已经保存啦 ♡",adminArtSaved:"这幅画已经放进你的画廊啦 ♡",adminNeedImage:"先选择一张图片哦 ♡",adminNeedTitle:"给作品写个名字吧 ♡",adminLoginHint:"管理员入口不会出现在普通客人的页面里。只有打开管理员专用地址并用UU的管理员账号登录，才能进入后台。",
    editHero:"首页",editGallery:"画廊",editTogether:"一起玩",editAbout:"关于",editWeekly:"每周问题",editZh:"中文",editEn:"English",editTitle:"标题",editText:"文字",editQuestion:"问题",editPlaceholder:"回答框提示语",editCategory:"分类",editDate:"日期",editImage:"作品图片",editName:"作品名",editNote:"作品说明",colored:"有色画",sketch:"随笔",single:"单幅",saved:"谢谢你，把这份颜色留在这里了 ♡",guestSaved:"已经写进这本小小留言簿了 ♡",empty:"先写一点点吧 ♡",unsafe:"这句话里有不太友善的词，可以换一种温柔的表达吗？",reply:"回复",replyPlaceholder:"写一条友善的回复……",sendReply:"回复 ♡",seriesWorks:"幅"
  },
  en:{
    navSubmit:"Submit",navColored:"Color Works",navSketches:"Sketches",navTogether:"Together",navUuTalk:"UU · Notes to Everyone",navAbout:"About",navAdmin:"Admin", navDirectory:"Directory", directoryTitle:"Directory", directoryDesc:"Choose where you want to go~", directorySubmit:"Share your art with everyone", directoryColored:"Browse UU's colored works", directorySketches:"Little sketches and passing thoughts", directoryTogether:"Questions, guestbook, and everyone's worlds", directoryUuTalk:"Notes UU wants to leave for everyone", directoryAdmin:"Private admin room", adminTalk:"UU's notes",
    heroEyebrow:"A LITTLE PLACE FOR MY DRAWINGS",heroTitle:"UU's Little Gallery",heroIntro:"A little place for all the worlds I draw.<br>Drawing slowly, growing slowly.",enter:"Enter the gallery",
    coloredTitle:"Color Works",coloredDesc:"Finished pieces, colorful worlds, and drawings I wanted to keep.",sketchTitle:"Sketches",sketchDesc:"Little things I draw along the way — birds, people, landscapes, passing thoughts.",
    submissionPageTitle:"Submit Your Art",submissionPageDesc:"If you would like, you can place a little piece of your art in UU's Little Gallery.",shareTitle:"Show me a little piece of your world.",shareDesc:"Upload your art to UU. After approval, it will appear in Everyone's Little Worlds.",previewSubmission:"Open submission form",choosePhoto:"Add a photo of your art",uploadPhoto:"Click here to choose a photo",uploadHint:"JPG / PNG / WEBP",submissionName:"Your name (optional)",submissionNamePlaceholder:"Anonymous is okay",artName:"Artwork title",artNamePlaceholder:"Give your artwork a name",sayAboutArt:"A little note",artNotePlaceholder:"Tell us about this drawing…",submitArt:"Submit this artwork ♡",submissionNote:"Submissions go to UU's private review area first. Only approved work becomes public.",
    togetherTitle:"Let's Make Something Together",togetherDesc:"This isn't only my gallery. There is a little room here for your thoughts and your world too.",questionTitle:weeklyQuestionDefault.en,writeOne:"Write a little",questionPlaceholder:weeklyQuestionDefault.placeholderEn,leaveAnswer:"Leave an answer ♡",
    guestbookTitle:"What are you thinking? Write it down~",nameOptional:"Name (optional)",anonymous:"Anonymous is okay",leaveMessage:"Leave a note",messagePlaceholder:"Write something you'd like to leave…",writeGuestbook:"Write in the guestbook ♡",
    privateNoteTitle:"A little private note for UU",privateNoteDesc:"This will not appear in Everyone's Little Worlds. It goes only to UU's admin area.",privateMessageLabel:"Private note",privateMessagePlaceholder:"What would you like to tell UU…",sendPrivateMessage:"Send quietly to UU ♡",
    worldsTitle:"Everyone's Little Worlds",worldsDesc:"Approved submissions appear here directly.",uuTalkTitle:"UU · Notes to Everyone",uuTalkDesc:"A little page for notes UU wants to leave for everyone.",uuTalkEmpty:"UU hasn't written a new note yet. Come back soon ♡",communityEmpty:"No submissions yet. Maybe your first drawing will live here ♡",
    adminUploadShortcut:"Upload my art",adminTitle:"Admin Corner",adminDesc:"After logging in, you can edit the website text, weekly question, your own art, submissions, and private notes.",adminLockedTitle:"UU's Admin Entrance",adminLockedDesc:"Only the administrator can open this little room.",adminPasswordPlaceholder:"Admin password",adminUnlock:"Log in as admin",adminPanelTitle:"UU's Admin Desk",adminLock:"Log out",adminText:"Website Text",adminMyArt:"My Art",adminSubmissions:"Submissions",adminMessages:"Private Notes",adminSave:"Save changes",adminAddArt:"Add to my gallery",adminDelete:"Delete",adminApprove:"Approve & show",adminPending:"Pending",adminApproved:"Public",adminPrivate:"Private · only UU can see",blockedUsers:"Blocked users",noBlockedUsers:"No blocked users yet.",blocked:"Blocked",blockUser:"Block user",unblockUser:"Unblock",replyToMessage:"Reply",replyMessagePlaceholder:"Write a reply…",sendAdminReply:"Send reply",yourReply:"UU's reply",adminUuTalk:"UU's Notes",editUuTalk:"UU · Notes to Everyone",talkTitle:"Title",talkText:"Message",talkDate:"Date",talkTitlePlaceholder:"For example: A little note for today",talkTextPlaceholder:"Write something you'd like to tell everyone…",publishTalk:"Publish this note ♡",adminEmpty:"Nothing here yet.",adminNoMessages:"No private notes yet.",adminWrongPassword:"That password is not right ♡",adminSaved:"Saved ♡",adminArtSaved:"This artwork is now in your gallery ♡",adminNeedImage:"Please choose an image first ♡",adminNeedTitle:"Give the artwork a title ♡",adminLoginHint:"The admin entrance is hidden from normal visitors. Only the private admin address plus UU’s admin account can open the dashboard.",
    editHero:"Home",editGallery:"Gallery",editTogether:"Together",editAbout:"About",editWeekly:"Weekly Question",editZh:"Chinese",editEn:"English",editTitle:"Title",editText:"Text",editQuestion:"Question",editPlaceholder:"Answer placeholder",editCategory:"Category",editDate:"Date",editImage:"Artwork image",editName:"Artwork title",editNote:"Artwork note",colored:"Color Works",sketch:"Sketches",single:"Single",saved:"Thank you for leaving your color here ♡",guestSaved:"Your note has been added to this little guestbook ♡",empty:"Write a little something first ♡",unsafe:"That message contains words that may be unkind. Could you try a gentler expression?",reply:"Reply",replyPlaceholder:"Write a kind reply…",sendReply:"Reply ♡",seriesWorks:"works"
  }
};

const blockedTerms=["fuck","shit","bitch","asshole","idiot","stupid","操","妈的","傻逼","煞笔","垃圾","去死","草泥马","他妈的"];
let language="zh",adminUnlocked=false,selectedSubmissionImage=null,selectedMyArtImage=null,currentUser=null;
const $=id=>document.getElementById(id);
const t=k=>translations[language][k]||k;
const getStored=(k,f)=>{try{return JSON.parse(localStorage.getItem(k))??f}catch{return f}};

// ---- Supabase 2.0 shared gallery ----
const supabaseClient = (window.supabase && window.UU_SUPABASE_URL && window.UU_SUPABASE_KEY)
  ? window.supabase.createClient(window.UU_SUPABASE_URL, window.UU_SUPABASE_KEY, {
      auth: { persistSession: true, autoRefreshToken: true }
    }) : null;
let remoteArtworks=[];
let remoteSiteContent=null, remoteWeeklyQuestion=null;
let remoteGuestbook=[], remotePrivateMessages=[], remoteBlockedUsers=[], remoteUuTalks=[], remoteWeeklyAnswers=[];
let realtimeChannel=null;
const imageFiles = files => Array.from(files||[]).filter(f=>f && f.type.startsWith("image/"));
async function uploadGalleryImage(file, folder){
  if(!supabaseClient) throw new Error("Supabase 未连接");
  const ext=(file.name.split(".").pop()||"jpg").toLowerCase().replace(/[^a-z0-9]/g,"")||"jpg";
  const path=`${folder}/${Date.now()}-${crypto.randomUUID()}.${ext}`;
  const {error}=await supabaseClient.storage.from("gallery-images").upload(path,file,{contentType:file.type,upsert:false});
  if(error) throw error;
  const {data}=supabaseClient.storage.from("gallery-images").getPublicUrl(path);
  return data.publicUrl;
}
async function loadRemoteSettings(){
  if(!supabaseClient) return false;
  const {data,error}=await supabaseClient
    .from("site_content")
    .select("content,weekly,updated_at")
    .eq("id",1)
    .maybeSingle();
  if(error){
    console.warn("Supabase site content read failed",error);
    return false;
  }
  if(data){
    remoteSiteContent=data.content||{};
    remoteWeeklyQuestion=data.weekly||{};
    window.UU_REMOTE_CONTENT_UPDATED_AT=data.updated_at||null;
    return true;
  }
  return false;
}

async function saveRemoteSettings(content,weekly){
  if(!supabaseClient || !isAdmin()) throw new Error("管理员未登录");
  const payload={id:1,content,weekly,updated_at:new Date().toISOString()};
  const {error}=await supabaseClient.from("site_content").upsert(payload,{onConflict:"id"});
  if(error) throw error;

  // 保存后立刻重新从数据库读取一次，避免“本地显示保存成功、公开页却还是旧内容”。
  const ok=await loadRemoteSettings();
  if(!ok) throw new Error("已写入但无法重新读取网站文字，请检查 site_content 的公开读取权限");
  const savedTitle=remoteSiteContent?.heroTitle?.zh;
  const expectedTitle=content?.heroTitle?.zh;
  if(savedTitle!==expectedTitle){
    throw new Error("数据库里的首页标题没有更新成功，请检查 site_content 表");
  }
}

async function loadRemoteInteractions(){
  if(!supabaseClient) return;
  const [g,gr,p,b,talk,a]=await Promise.all([
    supabaseClient.from("guestbook_messages").select("id,name,message,created_at").order("created_at",{ascending:false}),
    supabaseClient.from("guestbook_replies").select("id,message_id,name,message,created_at").order("created_at",{ascending:true}),
    supabaseClient.from("private_messages").select("id,name,message,reply,replied_at,created_at").order("created_at",{ascending:false}),
    supabaseClient.from("blocked_users").select("name"),
    supabaseClient.from("uu_talks").select("id,title,text,date,created_at").order("created_at",{ascending:false}),
    supabaseClient.from("weekly_answers").select("id,name,answer,created_at").order("created_at",{ascending:false})
  ]);
  if(!g.error){
    const replies=gr.error?[]:(gr.data||[]);
    remoteGuestbook=(g.data||[]).map(x=>({...x,replies:replies.filter(r=>r.message_id===x.id)}));
  } else console.warn("guestbook read failed",g.error);
  if(!p.error) remotePrivateMessages=p.data||[]; else console.warn("private messages read failed",p.error);
  if(!b.error) remoteBlockedUsers=(b.data||[]).map(x=>x.name); else console.warn("blocked users read failed",b.error);
  if(!talk.error) remoteUuTalks=talk.data||[]; else console.warn("UU talks read failed",talk.error);
  if(!a.error) remoteWeeklyAnswers=a.data||[]; else console.warn("weekly answers read failed",a.error);
  renderGuestbook(); renderUuTalks(); renderWeeklyAnswerHistory();
  if(adminUnlocked) renderAdminMessages();
}
function setupRealtime(){
  if(!supabaseClient) return;
  if(realtimeChannel) supabaseClient.removeChannel(realtimeChannel);
  realtimeChannel=supabaseClient.channel("uu-global-sync")
    .on("postgres_changes",{event:"*",schema:"public",table:"site_content"},async()=>{await loadRemoteSettings();applyContentToPage();applyLanguage();})
    .on("postgres_changes",{event:"*",schema:"public",table:"artwork"},async()=>{await loadRemoteArtworks();if(adminUnlocked){renderAdminSubmissions();renderAdminMyArt();}})
    .on("postgres_changes",{event:"*",schema:"public",table:"guestbook_messages"},async()=>{await loadRemoteInteractions();})
    .on("postgres_changes",{event:"*",schema:"public",table:"guestbook_replies"},async()=>{await loadRemoteInteractions();})
    .on("postgres_changes",{event:"*",schema:"public",table:"private_messages"},async()=>{await loadRemoteInteractions();})
    .on("postgres_changes",{event:"*",schema:"public",table:"blocked_users"},async()=>{await loadRemoteInteractions();})
    .on("postgres_changes",{event:"*",schema:"public",table:"uu_talks"},async()=>{await loadRemoteInteractions();})
    .on("postgres_changes",{event:"*",schema:"public",table:"weekly_answers"},async()=>{await loadRemoteInteractions();})
    .subscribe();
}

async function loadRemoteArtworks(){
  if(!supabaseClient) return;
  const {data,error}=await supabaseClient.from("artwork").select("*").eq("is_approved",true).order("created_at",{ascending:false});
  if(error){console.warn("Supabase artwork read failed",error);return;}
  remoteArtworks=(data||[]).map(x=>({id:x.id,type:x.type||"single",category:x.category||"colored",date:(x.created_at||"").slice(0,10)||new Date().toISOString().slice(0,10),title:x.title||"",note:x.note||"",image:x.image_url||"",name:x.name||""}));
  renderAll();
}
async function saveRemoteSubmission(file,title,note,name){
  const image_url=await uploadGalleryImage(file,"submissions");
  const {error}=await supabaseClient.from("artwork").insert({title,image_url,note,name:name||"匿名投稿",category:"community",is_approved:false,is_owner:false,type:"single"});
  if(error) throw error;
  return image_url;
}

async function refreshAuth(){
  if(!supabaseClient)return;
  const {data}=await supabaseClient.auth.getSession();
  currentUser=data?.session?.user||null;
  adminUnlocked=!!currentUser && isAdmin();
  updateAdminVisibility();
}
function isAdmin(){return !!currentUser && currentUser.app_metadata?.role === "admin";}
function updateAdminVisibility(){
  const section=$("admin"); if(!section)return;
  const open=document.body.classList.contains("admin-page") || new URLSearchParams(location.search).get("admin")==="1";
  section.classList.toggle("admin-private-hidden",!open);
  section.classList.toggle("admin-visible",open);
  if(open && adminUnlocked){$("admin-locked")?.classList.add("hidden");$("admin-panel")?.classList.remove("hidden");renderAdminAll();}
}
async function signInAdmin(){
  const email=$("admin-email")?.value.trim(),password=$("admin-password")?.value||"";
  if(!email||!password){$("admin-message").textContent=language==="zh"?"请输入管理员邮箱和密码 ♡":"Enter the admin email and password ♡";return;}
  const {data,error}=await supabaseClient.auth.signInWithPassword({email,password});
  if(error){$("admin-message").textContent=language==="zh"?"登录没有成功，请检查邮箱和密码。":"Login failed. Please check the email and password.";return;}
  currentUser=data.user;
  if(!isAdmin()){await supabaseClient.auth.signOut();currentUser=null;adminUnlocked=false;$("admin-message").textContent=language==="zh"?"这个账号还没有管理员权限。请先在 Supabase 用户的 App Metadata 里设置 role=admin。":"This account is not an admin. Set role=admin in the user's App Metadata in Supabase.";return;}
  adminUnlocked=true;$("admin-locked").classList.add("hidden");$("admin-panel").classList.remove("hidden");$("admin-password").value="";renderAdminAll();
}
const saveStored=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
const uid=()=>crypto.randomUUID?crypto.randomUUID():String(Date.now()+Math.random());
function containsBlockedLanguage(text){const n=(text||"").toLowerCase().replace(/\s+/g,"");return blockedTerms.some(x=>n.includes(x.toLowerCase()));}
function escapeHtml(v){const d=document.createElement("div");d.textContent=v??"";return d.innerHTML;}

const defaultContent={
  heroTitle:{zh:"UU的小馆",en:"UU's Little Gallery"},heroIntro:{zh:"一页一页，收藏我画过的世界。<br>慢慢画，也慢慢长大。",en:"A little place for all the worlds I draw.<br>Drawing slowly, growing slowly."},
  coloredTitle:{zh:"有色画",en:"Color Works"},coloredDesc:{zh:"彩色、完整的作品，以及那些被我认真留下来的画。",en:"Finished pieces, colorful worlds, and drawings I wanted to keep."},
  sketchTitle:{zh:"随笔",en:"Sketches"},sketchDesc:{zh:"一些随手画下来的东西。小鸟、人物、风景、一个突然出现的念头。",en:"Little things I draw along the way — birds, people, landscapes, passing thoughts."},
  togetherTitle:{zh:"一起玩",en:"Let's Make Something Together"},togetherDesc:{zh:"这里不只是我的画廊。也想留一点位置，给你的想法和你的世界。",en:"This isn't only my gallery. There is a little room here for your thoughts and your world too."},
  guestbookTitle:{zh:"你在想什么呢～写下来吧",en:"What are you thinking? Write it down~"},
  privateNoteTitle:{zh:"想和UU说一点悄悄话",en:"A little private note for UU"},privateNoteDesc:{zh:"这里的内容不会显示在大家的小世界里，只会送到UU的管理员区。",en:"This will not appear in Everyone's Little Worlds. It goes only to UU's admin area."},
  worldsTitle:{zh:"大家的小世界",en:"Everyone's Little Worlds"},worldsDesc:{zh:"投稿通过审核后，会直接出现在这里。",en:"Approved submissions appear here directly."},uuTalkTitle:{zh:"UU·和大家说的话",en:"UU · Notes to Everyone"},uuTalkDesc:{zh:"这里是UU想留给大家的一些话。每一篇都可以慢慢写。",en:"A little page for notes UU wants to leave for everyone."},
  aboutTitle:{zh:"关于这个小地方",en:"About this little place"},aboutP1:{zh:"这里是UU的小馆。我把画画过的时间，一点一点放进这里。",en:"This is UU's Little Gallery — a place where I keep pieces of time spent drawing."},aboutP2:{zh:"有些画很认真，有些只是随手画下来的。它们都值得被留下。",en:"Some drawings are carefully made, and some are just little moments. They all deserve a place."}
};
function getContent(){return {...defaultContent,...(remoteSiteContent||getStored("uu_site_content",{}))};}
function getWeekly(){return remoteWeeklyQuestion||getStored("uu_weekly_question",weeklyQuestionDefault);}
function getMyArt(){return getStored("uu_my_art",[]);}
function allArtworks(){return [...baseArtworks,...getMyArt(),...remoteArtworks.filter(x=>x.category!=="community")];}

function applyContentToPage(){
  const c=getContent();
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(c[key] && c[key][language]!==undefined) el.innerHTML=c[key][language];
  });
  // 顶部 logo、浏览器标题也跟随管理员设置的首页标题。
  const heroTitle=c.heroTitle?.[language] || (language==="zh"?"UU的小馆":"UU's Little Gallery");
  document.querySelectorAll("[data-site-title]").forEach(el=>el.textContent=heroTitle);
  document.title=heroTitle.replace(/<[^>]*>/g,"");
  const q=getWeekly();
  $("question-title").innerHTML=language==="zh"?q.zh:q.en;
  $("question-answer").placeholder=language==="zh"?q.placeholderZh:q.placeholderEn;
}
function applyLanguage(){
  document.documentElement.lang=language==="zh"?"zh-CN":"en";document.body.classList.toggle("language-en",language==="en");
  document.querySelectorAll("[data-i18n]").forEach(el=>el.innerHTML=t(el.dataset.i18n));
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>el.placeholder=t(el.dataset.i18nPlaceholder));
  $("language-toggle").textContent=language==="zh"?"EN":"中";
  applyContentToPage();renderAll();if(adminUnlocked)renderAdminAll();
}
function formatDate(s){return new Intl.DateTimeFormat(language==="zh"?"zh-CN":"en-US",{year:"numeric",month:"long",day:"numeric"}).format(new Date(s+"T12:00:00"));}
function groupByYear(items){const years={};[...items].sort((a,b)=>b.date.localeCompare(a.date)).forEach(x=>{const y=x.date.slice(0,4),m=x.date.slice(0,7);years[y]??={};years[y][m]??=[];years[y][m].push(x);});return years;}
function createSingle(x){return `<article class="art-card"><img class="art-image" src="${x.image}" alt="${escapeHtml(x.title)}" loading="lazy"><div class="art-info"><h3 class="art-title">${escapeHtml(x.title)}</h3><p class="art-date">${formatDate(x.date)}</p>${x.note?`<p class="art-note">${escapeHtml(x.note)}</p>`:""}</div></article>`;}
function createSeries(x){return `<article class="series-card"><div class="series-head"><div><h3 class="series-title">${escapeHtml(x.title)}</h3><p class="series-meta">${formatDate(x.date)} · ${x.images.length}${t("seriesWorks")}</p>${x.note?`<p class="series-note">${escapeHtml(x.note)}</p>`:""}</div></div><div class="series-grid">${x.images.map(i=>`<figure><img class="art-image" src="${i.image}" alt="${escapeHtml(i.title||x.title)}" loading="lazy"><figcaption>${escapeHtml(i.title||"")}</figcaption></figure>`).join("")}</div></article>`;}
function renderGallery(id,items){
  const box=$(id);
  const years=groupByYear(items);
  const html=Object.entries(years).map(([y,months])=>{
    const monthHtml=Object.entries(months).map(([m,list])=>{
      const cards=list.map(x=>x.type==="series"?createSeries(x):createSingle(x)).join("");
      const monthName=new Date(m+"-01T12:00:00").toLocaleDateString(language==="zh"?"zh-CN":"en-US",{month:"long"});
      return `<div class="month-block"><h4>${monthName}</h4><div class="art-grid">${cards}</div></div>`;
    }).join("");
    return `<div class="year-block"><h3 class="year-title">${y}</h3>${monthHtml}</div>`;
  }).join("");
  box.innerHTML=html||`<p class="admin-empty">${t("adminEmpty")}</p>`;
}
function renderCommunityGallery(){const local=getStored("uu_submissions",[]).filter(x=>x.status==="approved");const remote=remoteArtworks.filter(x=>x.category==="community");const list=[...remote,...local];$("community-gallery").innerHTML=list.map(x=>`<article class="community-card"><img src="${x.image}" alt="${escapeHtml(x.title)}" loading="lazy"><div class="community-info"><h4>${escapeHtml(x.title)}</h4><p class="community-by">${escapeHtml(x.name||"匿名投稿")}</p>${x.note?`<p>${escapeHtml(x.note)}</p>`:""}</div></article>`).join("");$("community-empty").classList.toggle("hidden",list.length>0);}
function renderAll(){renderGallery("colored-gallery",allArtworks().filter(x=>x.category==="colored"));renderGallery("sketch-gallery",allArtworks().filter(x=>x.category==="sketch"));renderCommunityGallery();}

// 投稿
$("share-preview-button").addEventListener("click",()=>$("share-preview").classList.toggle("hidden"));
$("share-image").addEventListener("change",e=>{
  const files=imageFiles(e.target.files);
  if(!files.length)return;
  selectedSubmissionImage=files;
  $("share-image-preview").innerHTML=files.map((f,i)=>`<div class="upload-thumb"><img src="${URL.createObjectURL(f)}" alt="preview ${i+1}"></div>`).join("");
  $("share-image-preview").classList.remove("hidden");
});
$("share-submit-button").addEventListener("click",async()=>{
  const files=imageFiles(selectedSubmissionImage),title=$("share-title").value.trim(),note=$("share-note").value.trim(),name=$("share-name").value.trim()||"匿名投稿";
  if(!files.length){$("share-message").textContent=t("adminNeedImage");return}
  if(!title){$("share-message").textContent=t("adminNeedTitle");return}
  if(containsBlockedLanguage(title+note)){$("share-message").textContent=t("unsafe");return}
  $("share-submit-button").disabled=true;
  try{
    if(!supabaseClient) throw new Error("Supabase 未连接");
    for(const file of files) await saveRemoteSubmission(file,title,note,name);
    $("share-message").textContent=language==="zh"?`收到啦 ♡ ${files.length} 幅已经送进UU的审核小房间。`:`Got it ♡ ${files.length} artwork(s) are waiting for UU's review.`;
    $("share-name").value=$("share-title").value=$("share-note").value="";$("share-image").value="";selectedSubmissionImage=null;$("share-image-preview").classList.add("hidden");
  }catch(err){console.error(err);$("share-message").textContent=language==="zh"?"投稿没有成功，请稍后再试 ♡":"The submission could not be uploaded. Please try again ♡";}
  finally{$("share-submit-button").disabled=false;if(adminUnlocked)renderAdminAll();}
});

// 全站互动：统一写入 Supabase，所有设备共享
function renderGuestbook(){
  const box=$("guestbook-list"); if(!box)return;
  const items=remoteGuestbook;
  box.innerHTML=items.map(x=>`<div class="guest-note"><strong>${escapeHtml(x.name||"匿名")}：</strong>${escapeHtml(x.message)}<button class="reply-button" data-reply="${x.id}">${t("reply")}</button><div class="reply-list">${(x.replies||[]).map(r=>`<div class="reply-note"><strong>${escapeHtml(r.name||"匿名")}：</strong>${escapeHtml(r.message)}</div>`).join("")}</div><form class="reply-form hidden" data-reply-form="${x.id}"><input maxlength="40" placeholder="${t("anonymous")}"><textarea maxlength="180" placeholder="${t("replyPlaceholder")}"></textarea><button type="submit">${t("sendReply")}</button></form></div>`).join("");
}
$("guestbook-form").addEventListener("submit",async e=>{e.preventDefault();const name=$("guest-name").value.trim()||"匿名",message=$("guest-message").value.trim();if(!message){$("guestbook-message").textContent=t("empty");return}if(containsBlockedLanguage(message)){$("guestbook-message").textContent=t("unsafe");return}try{const {error}=await supabaseClient.from("guestbook_messages").insert({name,message});if(error)throw error;await loadRemoteInteractions();$("guestbook-form").reset();$("guestbook-message").textContent=t("guestSaved");}catch(err){console.error(err);$("guestbook-message").textContent=language==="zh"?"留言没有成功，请稍后再试 ♡":"The note could not be posted. Please try again ♡";}});
$("guestbook-list").addEventListener("click",e=>{const b=e.target.closest("[data-reply]");if(b)document.querySelector(`[data-reply-form="${b.dataset.reply}"]`)?.classList.toggle("hidden");});
$("guestbook-list").addEventListener("submit",async e=>{if(!e.target.matches("[data-reply-form]"))return;e.preventDefault();const id=e.target.dataset.replyForm,ins=e.target.querySelectorAll("input,textarea"),name=ins[0].value.trim()||"匿名",message=ins[1].value.trim();if(!message)return;if(containsBlockedLanguage(message)){alert(t("unsafe"));return}try{const {error}=await supabaseClient.from("guestbook_replies").insert({message_id:id,name,message});if(error)throw error;await loadRemoteInteractions();}catch(err){console.error(err);alert(language==="zh"?"回复没有成功，请稍后再试。":"Reply failed. Please try again.");}});

$("question-form").addEventListener("submit",async e=>{e.preventDefault();const answer=$("question-answer").value.trim();if(!answer){$("question-message").textContent=t("empty");return}if(containsBlockedLanguage(answer)){$("question-message").textContent=t("unsafe");return}try{const {error}=await supabaseClient.from("weekly_answers").insert({name:"匿名",answer});if(error)throw error;$("question-answer").value="";await loadRemoteInteractions();$("question-message").textContent=t("guestSaved");}catch(err){console.error(err);$("question-message").textContent=language==="zh"?"答案没有送出去，请稍后再试。":"The answer could not be sent. Please try again.";}});

$("private-message-form").addEventListener("submit",async e=>{e.preventDefault();const name=$("private-name").value.trim()||"匿名",message=$("private-message").value.trim();if(!message){$("private-message-status").textContent=t("empty");return}if(containsBlockedLanguage(message)){$("private-message-status").textContent=t("unsafe");return}if(remoteBlockedUsers.includes(name)){$("private-message-status").textContent=language==="zh"?"暂时不能发送悄悄话。":"Private messages are unavailable for this sender.";return}try{const {error}=await supabaseClient.from("private_messages").insert({name,message});if(error)throw error;$("private-message-status").textContent=language==="zh"?"已经悄悄送给UU啦 ♡":"Your private note has been sent to UU ♡";$("private-message-form").reset();await loadRemoteInteractions();}catch(err){console.error(err);$("private-message-status").textContent=language==="zh"?"发送失败，请稍后再试 ♡":"Sending failed. Please try again ♡";}});

function getUuTalks(){return remoteUuTalks;}
function renderUuTalks(){const list=$("uu-talk-list"),empty=$("uu-talk-empty"),items=remoteUuTalks;if(!list)return;list.innerHTML=items.map(x=>`<article class="uu-talk-card"><div class="uu-talk-date">${escapeHtml(formatDate(x.date||x.created_at.slice(0,10)))}</div><h3>${escapeHtml(x.title)}</h3><p>${escapeHtml(x.text).replace(/\n/g,"<br>")}</p></article>`).join("");empty?.classList.toggle("hidden",items.length>0);}
function renderWeeklyAnswerHistory(){const box=$("weekly-answer-history");if(!box)return;const cutoff=Date.now()-14*24*60*60*1000;const items=remoteWeeklyAnswers.filter(x=>new Date(x.created_at).getTime()>=cutoff);box.innerHTML=items.length?items.map(x=>`<div class="weekly-answer-item"><span>${escapeHtml(x.name||"匿名")}</span><p>${escapeHtml(x.answer)}</p></div>`).join(""):"";}

// 管理员后台
function getUuTalks(){return getStored("uu_uu_talks",[]);}
function renderUuTalks(){const list=$("uu-talk-list"),empty=$("uu-talk-empty"),items=getUuTalks().sort((a,b)=>b.createdAt.localeCompare(a.createdAt));if(!list)return;list.innerHTML=items.map(x=>`<article class="uu-talk-card"><div class="uu-talk-date">${escapeHtml(formatDate(x.date||x.createdAt.slice(0,10)))}</div><h3>${escapeHtml(x.title)}</h3><p>${escapeHtml(x.text).replace(/\n/g,"<br>")}</p></article>`).join("");empty.classList.toggle("hidden",items.length>0);}

function renderAdminAll(){renderAdminEditor();renderAdminMyArt();renderAdminSubmissions();renderAdminMessages();renderAdminTalks();renderUuTalks();}
function field(key,label,large=false){const c=getContent(),v=c[key]||{zh:"",en:""};return `<div class="editor-field"><label>${label}</label><div class="editor-lang"><textarea data-content-edit="${key}" data-lang="zh" class="${large?"large":""}">${escapeHtml(v.zh)}</textarea><textarea data-content-edit="${key}" data-lang="en" class="${large?"large":""}">${escapeHtml(v.en)}</textarea></div><div class="editor-lang-label"><span>中文</span><span>English</span></div></div>`;}
function renderAdminEditor(){const q=getWeekly();$("admin-editor-panel").innerHTML=`<div class="admin-editor-grid"><div class="editor-section"><h3>${t("editHero")}</h3>${field("heroTitle",t("editTitle"))}${field("heroIntro",t("editText"),true)}</div><div class="editor-section"><h3>${t("editGallery")}</h3>${field("coloredTitle",t("colored")+" · "+t("editTitle"))}${field("coloredDesc",t("editText"),true)}${field("sketchTitle",t("sketch")+" · "+t("editTitle"))}${field("sketchDesc",t("editText"),true)}</div><div class="editor-section"><h3>${t("editTogether")}</h3>${field("togetherTitle",t("editTitle"))}${field("togetherDesc",t("editText"),true)}${field("guestbookTitle",t("editTitle"))}${field("privateNoteTitle",t("editTitle"))}${field("privateNoteDesc",t("editText"),true)}${field("worldsTitle",t("editTitle"))}${field("worldsDesc",t("editText"),true)}${field("uuTalkTitle",t("editUuTalk"))}${field("uuTalkDesc",t("editText"),true)}</div><div class="editor-section weekly-editor"><h3>${t("editWeekly")}</h3><div class="editor-lang"><div><label>中文</label><textarea id="weekly-zh" class="large">${escapeHtml(q.zh)}</textarea><textarea id="weekly-ph-zh">${escapeHtml(q.placeholderZh)}</textarea></div><div><label>English</label><textarea id="weekly-en" class="large">${escapeHtml(q.en)}</textarea><textarea id="weekly-ph-en">${escapeHtml(q.placeholderEn)}</textarea></div></div></div></div><button class="admin-save-main" id="save-site-content">${t("adminSave")}</button><p id="admin-content-message" class="form-message"></p>`;$("save-site-content").addEventListener("click",()=>{const c=getContent();document.querySelectorAll("[data-content-edit]").forEach(el=>{c[el.dataset.contentEdit]??={zh:"",en:""};c[el.dataset.contentEdit][el.dataset.lang]=el.value;});const weekly={zh:$("weekly-zh").value,en:$("weekly-en").value,placeholderZh:$("weekly-ph-zh").value,placeholderEn:$("weekly-ph-en").value};saveStored("uu_site_content",c);saveStored("uu_weekly_question",weekly);(async()=>{try{await saveRemoteSettings(c,weekly);await loadRemoteSettings();applyContentToPage();applyLanguage();$("admin-content-message").textContent=t("adminSaved");}catch(err){console.error(err);const detail=err?.message||err?.details||"未知错误";$("admin-content-message").textContent=(language==="zh"?"保存失败：":"Save failed: ")+detail;}})();});}

async function renderAdminMyArt(){
  const p=$("admin-myart-panel");
  if(!p)return;
  let items=[];
  if(supabaseClient && isAdmin()){
    const {data,error}=await supabaseClient.from("artwork").select("id,created_at,title,image_url,category,note,type,user_id").eq("is_owner",true).eq("user_id",currentUser.id).order("created_at",{ascending:false});
    if(!error)items=(data||[]).map(x=>({id:x.id,image:x.image_url,title:x.title||"",category:x.category||"colored",date:(x.created_at||"").slice(0,10),note:x.note||""}));
  }
  p.innerHTML=`<div class="my-art-form"><h3>${t("adminMyArt")}</h3><label>${t("editImage")}</label><label class="upload-box" for="my-art-image"><span class="upload-icon">＋</span><span>${t("uploadPhoto")}</span></label><input id="my-art-image" class="visually-hidden" type="file" accept="image/*"><div id="my-art-preview" class="upload-preview hidden"></div><label>${t("editName")}</label><input id="my-art-title"><label>${t("editCategory")}</label><select id="my-art-category"><option value="colored">${t("colored")}</option><option value="sketch">${t("sketch")}</option></select><label>${t("editDate")}</label><input id="my-art-date" type="date" value="${new Date().toISOString().slice(0,10)}"><label>${t("editNote")}</label><textarea id="my-art-note"></textarea><button id="add-my-art" class="admin-save-main">${t("adminAddArt")}</button><p id="my-art-message" class="form-message"></p></div><div class="admin-own-list">${items.map(x=>`<article class="admin-own-item"><img src="${x.image}" alt="${escapeHtml(x.title)}"><div><h4>${escapeHtml(x.title)}</h4><p>${x.category==="colored"?t("colored"):t("sketch")} · ${escapeHtml(x.date)}</p>${x.note?`<p>${escapeHtml(x.note)}</p>`:""}<button class="danger-button" data-own-delete="${x.id}">${t("adminDelete")}</button></div></article>`).join("")||`<p class="admin-empty">${t("adminEmpty")}</p>`}</div>`;
  $("my-art-image").addEventListener("change",e=>{selectedMyArtImage=e.target.files?.[0]||null;if(selectedMyArtImage){const u=URL.createObjectURL(selectedMyArtImage);$("my-art-preview").innerHTML=`<img src="${u}" alt="preview">`;$("my-art-preview").classList.remove("hidden");}});
  $("add-my-art").addEventListener("click",async()=>{
    const title=$("my-art-title").value.trim(),f=selectedMyArtImage;
    if(!f){$("my-art-message").textContent=t("adminNeedImage");return}
    if(!title){$("my-art-message").textContent=t("adminNeedTitle");return}
    try{
      const image=await uploadGalleryImage(f,"owner");
      const {error}=await supabaseClient.from("artwork").insert({title,image_url:image,category:$('my-art-category').value,note:$('my-art-note').value.trim(),is_approved:true,is_owner:true,user_id:currentUser.id,type:"single"});
      if(error)throw error;
      selectedMyArtImage=null;await loadRemoteArtworks();await renderAdminMyArt();renderAll();$("my-art-message").textContent=t("adminArtSaved");
    }catch(err){console.error(err);$("my-art-message").textContent=language==="zh"?"上传没有成功，请检查 Supabase 权限。":"Upload failed. Please check Supabase permissions.";}
  });
  p.addEventListener("click",async e=>{const b=e.target.closest("[data-own-delete]");if(!b)return;const {error}=await supabaseClient.from("artwork").delete().eq("id",b.dataset.ownDelete);if(error){console.error(error);return;}await loadRemoteArtworks();renderAdminMyArt();renderAll();});
}
async function renderAdminSubmissions(){
  const p=$("admin-submissions-panel");
  if(!p)return;
  if(!isAdmin()){p.innerHTML="";return;}
  const {data,error}=await supabaseClient.from("artwork").select("id,created_at,title,image_url,category,is_approved,note,name").eq("is_owner",false).order("created_at",{ascending:false});
  if(error){console.error(error);p.innerHTML=`<p class="admin-empty">${language==="zh"?"暂时读不到投稿，请检查 RLS。":"Could not load submissions. Check RLS."}</p>`;return;}
  p.innerHTML=(data||[]).map(x=>`<article class="admin-item"><img src="${x.image_url}" alt="${escapeHtml(x.title||"")}"><div><div class="admin-item-top"><span class="status-pill ${x.is_approved?"approved":"pending"}">${x.is_approved?t("adminApproved"):t("adminPending")}</span><small>${new Date(x.created_at).toLocaleString()}</small></div><h4>${escapeHtml(x.title||"")}</h4><p class="admin-author">${escapeHtml(x.name||"匿名投稿")}</p>${x.note?`<p>${escapeHtml(x.note)}</p>`:""}<div class="admin-actions">${!x.is_approved?`<button data-remote-action="approve" data-id="${x.id}">${t("adminApprove")}</button>`:""}<button class="danger-button" data-remote-action="delete" data-id="${x.id}">${t("adminDelete")}</button></div></div></article>`).join("")||`<p class="admin-empty">${t("adminEmpty")}</p>`;
}

async function renderAdminMessages(){const p=$("admin-messages-panel");if(!p)return;const items=remotePrivateMessages,blocked=remoteBlockedUsers;p.innerHTML=`<div class="admin-private-tools"><strong>${t("blockedUsers")}</strong><div class="blocked-list">${blocked.map(n=>`<span class="blocked-chip">${escapeHtml(n)} <button type="button" data-unblock-user="${escapeHtml(n)}">×</button></span>`).join("")||`<span class="small-note">${t("noBlockedUsers")}</span>`}</div></div>`+(items.map(x=>{const isBlocked=blocked.includes(x.name||"匿名");return `<article class="private-admin-note ${isBlocked?"is-blocked":""}"><div class="admin-item-top"><span class="status-pill private">${t("adminPrivate")}</span><small>${new Date(x.created_at).toLocaleString()}</small></div><h4>${escapeHtml(x.name||"匿名")}${isBlocked?` <span class="blocked-label">${t("blocked")}</span>`:""}</h4><p>${escapeHtml(x.message)}</p>${x.reply?`<div class="admin-reply-preview"><strong>${t("yourReply")}</strong><p>${escapeHtml(x.reply)}</p></div>`:""}<div class="private-actions"><button type="button" data-message-reply="${x.id}">${t("replyToMessage")}</button><button type="button" data-block-user="${escapeHtml(x.name||"匿名")}">${isBlocked?t("unblockUser"):t("blockUser")}</button><button type="button" class="danger-button" data-message-delete="${x.id}">${t("adminDelete")}</button></div><form class="private-reply-form hidden" data-reply-message-form="${x.id}"><textarea maxlength="500" placeholder="${t("replyMessagePlaceholder")}">${escapeHtml(x.reply||"")}</textarea><button type="submit" class="admin-save-main">${t("sendAdminReply")}</button></form></article>`}).join("")||`<p class="admin-empty">${t("adminNoMessages")}</p>`);}
async function renderAdminTalks(){const p=$("admin-talk-panel");if(!p)return;const talks=getUuTalks();p.innerHTML=`<h3>${t("editUuTalk")}</h3><label>${t("talkTitle")}</label><input id="talk-title" maxlength="80" placeholder="${t("talkTitlePlaceholder")}"><label>${t("talkText")}</label><textarea id="talk-text" maxlength="1000" placeholder="${t("talkTextPlaceholder")}"></textarea><label>${t("talkDate")}</label><input id="talk-date" type="date" value="${new Date().toISOString().slice(0,10)}"><button id="add-uu-talk" class="admin-save-main">${t("publishTalk")}</button><div class="admin-talk-list">${talks.map(x=>`<article><div><strong>${escapeHtml(x.title)}</strong><small>${escapeHtml(x.date||"")}</small><p>${escapeHtml(x.text)}</p></div><button class="danger-button" data-talk-delete="${x.id}">${t("adminDelete")}</button></article>`).join("")}</div>`;$("add-uu-talk").onclick=async()=>{const title=$("talk-title").value.trim(),text=$("talk-text").value.trim();if(!title||!text)return;const {error}=await supabaseClient.from("uu_talks").insert({title,text,date:$("talk-date").value});if(error){console.error(error);return}await loadRemoteInteractions();renderAdminTalks();renderUuTalks();};p.onclick=async e=>{const b=e.target.closest("[data-talk-delete]");if(!b)return;const {error}=await supabaseClient.from("uu_talks").delete().eq("id",b.dataset.talkDelete);if(error)console.error(error);await loadRemoteInteractions();renderAdminTalks();renderUuTalks();};}

$("admin-submissions-panel")?.addEventListener("click",async e=>{const b=e.target.closest("[data-remote-action]");if(!b||!isAdmin())return;const id=b.dataset.id;if(b.dataset.remoteAction==="approve"){const {error}=await supabaseClient.from("artwork").update({is_approved:true}).eq("id",id);if(error)console.error(error);}else if(b.dataset.remoteAction==="delete"){const {error}=await supabaseClient.from("artwork").delete().eq("id",id);if(error)console.error(error);}await loadRemoteArtworks();renderAdminSubmissions();renderCommunityGallery();});
$("admin-messages-panel")?.addEventListener("click",async e=>{const del=e.target.closest("[data-message-delete]");if(del){const {error}=await supabaseClient.from("private_messages").delete().eq("id",del.dataset.messageDelete);if(error)console.error(error);await loadRemoteInteractions();return;}const rep=e.target.closest("[data-message-reply]");if(rep){document.querySelector(`[data-reply-message-form="${rep.dataset.messageReply}"]`)?.classList.toggle("hidden");return;}const block=e.target.closest("[data-block-user]");if(block){const name=block.dataset.blockUser;if(remoteBlockedUsers.includes(name)){await supabaseClient.from("blocked_users").delete().eq("name",name);}else{await supabaseClient.from("blocked_users").insert({name});}await loadRemoteInteractions();return;}const unblock=e.target.closest("[data-unblock-user]");if(unblock){await supabaseClient.from("blocked_users").delete().eq("name",unblock.dataset.unblockUser);await loadRemoteInteractions();}});
$("admin-messages-panel")?.addEventListener("submit",async e=>{if(!e.target.matches("[data-reply-message-form]"))return;e.preventDefault();const id=e.target.dataset.replyMessageForm,text=e.target.querySelector("textarea").value.trim();if(!text)return;const {error}=await supabaseClient.from("private_messages").update({reply:text,replied_at:new Date().toISOString()}).eq("id",id);if(error){console.error(error);return}await loadRemoteInteractions();});

$("admin-unlock")?.addEventListener("click",signInAdmin);$("admin-password")?.addEventListener("keydown",e=>{if(e.key==="Enter")signInAdmin();});
$("admin-lock")?.addEventListener("click",async()=>{if(supabaseClient)await supabaseClient.auth.signOut();currentUser=null;adminUnlocked=false;$("admin-panel").classList.add("hidden");$("admin-locked").classList.remove("hidden");});
document.querySelectorAll(".admin-tab").forEach(tab=>tab.addEventListener("click",()=>{document.querySelectorAll(".admin-tab").forEach(x=>x.classList.remove("active"));tab.classList.add("active");const target=tab.dataset.adminTab;["editor","myart","submissions","messages","talk"].forEach(x=>$(`admin-${x}-panel`)?.classList.toggle("hidden",x!==target));}));
$("admin-open-upload")?.addEventListener("click",()=>{const tab=document.querySelector("[data-admin-tab=\"myart\"]");tab?.click();$("my-art-image")?.focus();});

$("language-toggle").addEventListener("click",()=>{language=language==="zh"?"en":"zh";applyLanguage();});

(async()=>{
  // 首次打开时先读取云端文字，再渲染页面；云端成功后绝不让旧默认文字覆盖它。
  await loadRemoteSettings();
  applyLanguage();
  await loadRemoteArtworks();
  await loadRemoteInteractions();
  setupRealtime();
})();
refreshAuth();
if(supabaseClient)supabaseClient.auth.onAuthStateChange(async(_event,session)=>{
  currentUser=session?.user||null;
  adminUnlocked=!!currentUser&&isAdmin();
  updateAdminVisibility();
  if(adminUnlocked){
    await loadRemoteSettings();
    applyLanguage();
    renderAdminAll();
  }
});
