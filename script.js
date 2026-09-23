/* UU的小馆 · 修正版 3.4.3
   修复：
   1. 每日问题答案增加回复按钮
   2. 每日问题答案只能删除自己的
   3. 每日问题回复只能删除自己的
   4. 管理员可以删除所有每日问题答案和回复
   5. 强制显示每日问题的回复/删除按钮
*/

const weeklyQuestionDefault = {
  zh: "如果今天是一种颜色，你会选择什么颜色？",
  en: "If today were a color, what color would it be?",
  placeholderZh: "比如：今天是很淡很淡的薄荷绿……",
  placeholderEn: "Maybe: a very soft mint green…"
};

const baseArtworks = [];

const translations = {
  zh: {
    navSubmit:"投稿",
    navColored:"有色画",
    navSketches:"随笔",
    navTogether:"一起玩",
    navUuTalk:"UU·和大家说的话",
    navAbout:"关于",
    navAdmin:"管理员",
    navDirectory:"目录",

    directoryTitle:"目录",
    directoryDesc:"想去哪里，就点哪里吧～",
    directorySubmit:"把你的画放进大家的小世界",
    directoryColored:"看看UU认真留下来的彩色作品",
    directorySketches:"一些随手画下来的小念头",
    directoryTogether:"问题、留言、大家的小世界",
    directoryUuTalk:"看看UU想留给大家的话",
    directoryAdmin:"管理员专属的小房间",
    adminTalk:"UU的话",

    heroEyebrow:"A LITTLE PLACE FOR MY DRAWINGS",
    heroTitle:"UU的小馆",
    heroIntro:"一页一页，收藏我画过的世界。<br>慢慢画，也慢慢长大。",
    enter:"进入小馆",

    coloredTitle:"有色画",
    coloredDesc:"彩色、完整的作品，以及那些被我认真留下来的画。",
    sketchTitle:"随笔",
    sketchDesc:"一些随手画下来的东西。小鸟、人物、风景、一个突然出现的念头。",

    submissionPageTitle:"投稿",
    submissionPageDesc:"如果你愿意，也可以把你的画放进UU的小馆。",
    shareTitle:"也让我看看你的世界吧。",
    shareDesc:"把你的画上传给UU，审核通过后会出现在大家的小世界。",
    previewSubmission:"打开投稿表单",
    choosePhoto:"放一张你的画",
    uploadPhoto:"点这里选择照片",
    uploadHint:"支持 JPG / PNG / WEBP",
    submissionName:"你的名字（可不填）",
    submissionNamePlaceholder:"匿名也可以",
    artName:"作品名字",
    artNamePlaceholder:"给你的画取个名字",
    sayAboutArt:"想说的话",
    artNotePlaceholder:"介绍一下这幅画……",
    submitArt:"投稿这幅画 ♡",
    submissionNote:"投稿会先进入UU的审核区。通过后才会公开。",

    togetherTitle:"一起玩",
    togetherDesc:"这里不只是我的画廊。也想留一点位置，给你的想法和你的世界。",
    questionTitle:weeklyQuestionDefault.zh,
    writeOne:"写下一句话",
    questionPlaceholder:weeklyQuestionDefault.placeholderZh,
    leaveAnswer:"留下答案 ♡",

    guestbookTitle:"你在想什么呢～写下来吧",
    nameOptional:"名字（可不填）",
    anonymous:"匿名也可以",
    leaveMessage:"留一句话",
    messagePlaceholder:"写下你想留下的话……",
    writeGuestbook:"写进留言簿 ♡",

    privateNoteTitle:"想和UU说一点悄悄话",
    privateNoteDesc:"这里的内容不会显示在大家的小世界里，只会送到UU的管理员区。",
    privateMessageLabel:"悄悄话",
    privateMessagePlaceholder:"想告诉UU什么呢……",
    sendPrivateMessage:"悄悄发给UU ♡",

    worldsTitle:"大家的小世界",
    worldsDesc:"投稿通过审核后，会直接出现在这里。",
    uuTalkTitle:"UU·和大家说的话",
    uuTalkDesc:"这里是UU想留给大家的一些话。每一篇都可以慢慢写。",
    uuTalkEmpty:"UU还没有写下新的话，等我慢慢来这里放下吧 ♡",
    communityEmpty:"还没有投稿，等你的第一幅画来这里住下吧 ♡",

    adminUploadShortcut:"上传我的画",
    adminTitle:"管理员小房间",
    adminDesc:"登录后，可以直接修改网站文字、每周问题、我的画，并审核投稿和查看私信。",
    adminLockedTitle:"UU的管理员入口",
    adminLockedDesc:"只有管理员登录后才能打开这个小房间。",
    adminPasswordPlaceholder:"管理员密码",
    adminUnlock:"登录管理员",
    adminPanelTitle:"UU的管理后台",
    adminLock:"退出",
    adminText:"网站文字",
    adminMyArt:"我的画",
    adminSubmissions:"投稿审核",
    adminMessages:"私信",
    adminSave:"保存修改",
    adminAddArt:"添加到我的画",
    adminDelete:"删除",
    deleteMy:"删除我的",
    adminApprove:"通过并展示",
    adminPending:"待审核",
    adminApproved:"已公开",
    adminPrivate:"私信 · 只有UU可见",
    blockedUsers:"已拉黑的用户",
    noBlockedUsers:"目前还没有拉黑用户。",
    blocked:"已拉黑",
    blockUser:"拉黑用户",
    unblockUser:"取消拉黑",
    replyToMessage:"回复",
    replyMessagePlaceholder:"写下要回复的话……",
    sendAdminReply:"发送回复",
    yourReply:"UU的回复",
    adminUuTalk:"UU的话",
    editUuTalk:"UU·和大家说的话",
    talkTitle:"标题",
    talkText:"内容",
    talkDate:"日期",
    talkTitlePlaceholder:"比如：给今天的一句话",
    talkTextPlaceholder:"写一点想和大家说的话……",
    publishTalk:"发布这句话 ♡",
    adminEmpty:"这里还没有内容。",
    adminNoMessages:"暂时没有悄悄话。",
    adminWrongPassword:"密码不对，再试一次吧 ♡",
    adminSaved:"已经保存啦 ♡",
    adminArtSaved:"这幅画已经放进你的画廊啦 ♡",
    adminNeedImage:"先选择一张图片哦 ♡",
    adminNeedTitle:"给作品写个名字吧 ♡",
    adminLoginHint:"管理员入口不会出现在普通客人的页面里。只有打开管理员专用地址并用UU的管理员账号登录，才能进入后台。",

    editHero:"首页",
    editGallery:"画廊",
    editTogether:"一起玩",
    editAbout:"关于",
    editWeekly:"每周问题",
    editZh:"中文",
    editEn:"English",
    editTitle:"标题",
    editText:"文字",
    editQuestion:"问题",
    editPlaceholder:"回答框提示语",
    editCategory:"分类",
    editDate:"日期",
    editImage:"作品图片",
    editName:"作品名",
    editNote:"作品说明",

    colored:"有色画",
    sketch:"随笔",
    single:"单幅",

    saved:"谢谢你，把这份颜色留在这里了 ♡",
    guestSaved:"已经写进这本小小留言簿了 ♡",
    empty:"先写一点点吧 ♡",
    unsafe:"这句话里有不太友善的词，可以换一种温柔的表达吗？",

    reply:"回复",
    replyPlaceholder:"写一条友善的回复……",
    sendReply:"回复 ♡",
    seriesWorks:"幅"
  },

  en: {
    navSubmit:"Submit",
    navColored:"Color Works",
    navSketches:"Sketches",
    navTogether:"Together",
    navUuTalk:"UU · Notes to Everyone",
    navAbout:"About",
    navAdmin:"Admin",
    navDirectory:"Directory",

    directoryTitle:"Directory",
    directoryDesc:"Choose where you want to go~",
    directorySubmit:"Share your art with everyone",
    directoryColored:"Browse UU's colored works",
    directorySketches:"Little sketches and passing thoughts",
    directoryTogether:"Questions, guestbook, and everyone's worlds",
    directoryUuTalk:"Notes UU wants to leave for everyone",
    directoryAdmin:"Private admin room",
    adminTalk:"UU's notes",

    heroEyebrow:"A LITTLE PLACE FOR MY DRAWINGS",
    heroTitle:"UU's Little Gallery",
    heroIntro:"A little place for all the worlds I draw.<br>Drawing slowly, growing slowly.",
    enter:"Enter the gallery",

    coloredTitle:"Color Works",
    coloredDesc:"Finished pieces, colorful worlds, and drawings I wanted to keep.",
    sketchTitle:"Sketches",
    sketchDesc:"Little things I draw along the way — birds, people, landscapes, passing thoughts.",

    submissionPageTitle:"Submit Your Art",
    submissionPageDesc:"If you would like, you can place a little piece of your art in UU's Little Gallery.",
    shareTitle:"Show me a little piece of your world.",
    shareDesc:"Upload your art to UU. After approval, it will appear in Everyone's Little Worlds.",
    previewSubmission:"Open submission form",
    choosePhoto:"Add a photo of your art",
    uploadPhoto:"Click here to choose a photo",
    uploadHint:"JPG / PNG / WEBP",
    submissionName:"Your name (optional)",
    submissionNamePlaceholder:"Anonymous is okay",
    artName:"Artwork title",
    artNamePlaceholder:"Give your artwork a name",
    sayAboutArt:"A little note",
    artNotePlaceholder:"Tell us about this drawing…",
    submitArt:"Submit this artwork ♡",
    submissionNote:"Submissions go to UU's private review area first. Only approved work becomes public.",

    togetherTitle:"Let's Make Something Together",
    togetherDesc:"This isn't only my gallery. There is a little room here for your thoughts and your world too.",
    questionTitle:weeklyQuestionDefault.en,
    writeOne:"Write a little",
    questionPlaceholder:weeklyQuestionDefault.placeholderEn,
    leaveAnswer:"Leave an answer ♡",

    guestbookTitle:"What are you thinking? Write it down~",
    nameOptional:"Name (optional)",
    anonymous:"Anonymous is okay",
    leaveMessage:"Leave a note",
    messagePlaceholder:"Write something you'd like to leave…",
    writeGuestbook:"Write in the guestbook ♡",

    privateNoteTitle:"A little private note for UU",
    privateNoteDesc:"This will not appear in Everyone's Little Worlds. It goes only to UU's admin area.",
    privateMessageLabel:"Private note",
    privateMessagePlaceholder:"What would you like to tell UU…",
    sendPrivateMessage:"Send quietly to UU ♡",

    worldsTitle:"Everyone's Little Worlds",
    worldsDesc:"Approved submissions appear here directly.",
    uuTalkTitle:"UU · Notes to Everyone",
    uuTalkDesc:"A little page for notes UU wants to leave for everyone.",
    uuTalkEmpty:"UU hasn't written a new note yet. Come back soon ♡",
    communityEmpty:"No submissions yet. Maybe your first drawing will live here ♡",

    adminUploadShortcut:"Upload my art",
    adminTitle:"Admin Corner",
    adminDesc:"After logging in, you can edit the website text, weekly question, your own art, submissions, and private notes.",
    adminLockedTitle:"UU's Admin Entrance",
    adminLockedDesc:"Only the administrator can open this little room.",
    adminPasswordPlaceholder:"Admin password",
    adminUnlock:"Log in as admin",
    adminPanelTitle:"UU's Admin Desk",
    adminLock:"Log out",
    adminText:"Website Text",
    adminMyArt:"My Art",
    adminSubmissions:"Submissions",
    adminMessages:"Private Notes",
    adminSave:"Save changes",
    adminAddArt:"Add to my gallery",
    adminDelete:"Delete",
    deleteMy:"Delete mine",
    adminApprove:"Approve & show",
    adminPending:"Pending",
    adminApproved:"Public",
    adminPrivate:"Private · only UU can see",
    blockedUsers:"Blocked users",
    noBlockedUsers:"No blocked users yet.",
    blocked:"Blocked",
    blockUser:"Block user",
    unblockUser:"Unblock",
    replyToMessage:"Reply",
    replyMessagePlaceholder:"Write a reply…",
    sendAdminReply:"Send reply",
    yourReply:"UU's reply",
    adminUuTalk:"UU's Notes",
    editUuTalk:"UU · Notes to Everyone",
    talkTitle:"Title",
    talkText:"Message",
    talkDate:"Date",
    talkTitlePlaceholder:"For example: A little note for today",
    talkTextPlaceholder:"Write something you'd like to tell everyone…",
    publishTalk:"Publish this note ♡",
    adminEmpty:"Nothing here yet.",
    adminNoMessages:"No private notes yet.",
    adminWrongPassword:"That password is not right ♡",
    adminSaved:"Saved ♡",
    adminArtSaved:"This artwork is now in your gallery ♡",
    adminNeedImage:"Please choose an image first ♡",
    adminNeedTitle:"Give the artwork a title ♡",
    adminLoginHint:"The admin entrance is hidden from normal visitors. Only the private admin address plus UU's admin account can open the dashboard.",

    editHero:"Home",
    editGallery:"Gallery",
    editTogether:"Together",
    editAbout:"About",
    editWeekly:"Weekly Question",
    editZh:"Chinese",
    editEn:"English",
    editTitle:"Title",
    editText:"Text",
    editQuestion:"Question",
    editPlaceholder:"Answer placeholder",
    editCategory:"Category",
    editDate:"Date",
    editImage:"Artwork image",
    editName:"Artwork title",
    editNote:"Artwork note",

    colored:"Color Works",
    sketch:"Sketches",
    single:"Single",

    saved:"Thank you for leaving your color here ♡",
    guestSaved:"Your note has been added to this little guestbook ♡",
    empty:"Write a little something first ♡",
    unsafe:"That message contains words that may be unkind. Could you try a gentler expression?",

    reply:"Reply",
    replyPlaceholder:"Write a kind reply…",
    sendReply:"Reply ♡",
    seriesWorks:"works"
  }
};

const blockedTerms=[
  "fuck",
  "shit",
  "bitch",
  "asshole",
  "idiot",
  "stupid",
  "操",
  "妈的",
  "傻逼",
  "煞笔",
  "垃圾",
  "去死",
  "草泥马",
  "他妈的"
];

let language="zh",
    adminUnlocked=false,
    selectedSubmissionImage=null,
    selectedMyArtImage=null,
    currentUser=null;

const $=id=>document.getElementById(id);

const t=k=>
  (translations[language]&&translations[language][k])||k;

const getStored=(k,f)=>{
  try{
    return JSON.parse(localStorage.getItem(k))??f;
  }catch{
    return f;
  }
};

const saveStored=(k,v)=>
  localStorage.setItem(k,JSON.stringify(v));

const uid=()=>
  crypto.randomUUID?
  crypto.randomUUID():
  String(Date.now()+Math.random());

const supabaseClient=
  (window.supabase&&window.UU_SUPABASE_URL&&window.UU_SUPABASE_KEY)
  ?
  window.supabase.createClient(
    window.UU_SUPABASE_URL,
    window.UU_SUPABASE_KEY,
    {
      auth:{
        persistSession:true,
        autoRefreshToken:true
      }
    }
  )
  :
  null;


/* 游客身份：只保存在自己的浏览器里，不显示给其他人。 */

function getGuestToken(){
  const key="uu_guest_token";

  let token=localStorage.getItem(key);

  if(!token){
    token=
      (window.crypto&&crypto.randomUUID)
      ?
      crypto.randomUUID()
      :
      "uu-"+
      Date.now().toString(36)+
      "-"+
      Math.random().toString(36).slice(2)+
      Math.random().toString(36).slice(2);

    localStorage.setItem(key,token);
  }

  return token;
}

let myGuestGuestbookIds=new Set();
let myGuestArtworkIds=new Set();
let myWeeklyAnswerIds=new Set();
let myWeeklyReplyIds=new Set();


async function loadGuestOwnership(){
  if(!supabaseClient)return;

  const token=getGuestToken();

  const [g,a,w,wr]=await Promise.all([

    supabaseClient.rpc(
      "get_my_guestbook_ids",
      {p_token:token}
    ),

    supabaseClient.rpc(
      "get_my_artwork_ids",
      {p_token:token}
    ),

    supabaseClient.rpc(
      "get_my_weekly_answer_ids",
      {p_token:token}
    ),

    supabaseClient.rpc(
      "get_my_weekly_reply_ids",
      {p_token:token}
    )

  ]);

  if(!g.error){
    myGuestGuestbookIds=
      new Set((g.data||[]).map(x=>String(x.id)));
  }

  if(!a.error){
    myGuestArtworkIds=
      new Set((a.data||[]).map(x=>String(x.id)));
  }

  if(!w.error){
    myWeeklyAnswerIds=
      new Set((w.data||[]).map(x=>String(x.id)));
  }

  if(!wr.error){
    myWeeklyReplyIds=
      new Set((wr.data||[]).map(x=>String(x.id)));
  }
}


async function deleteMyGuestbookMessage(id){
  const {data,error}=
    await supabaseClient.rpc(
      "delete_my_guestbook_message",
      {
        p_id:String(id),
        p_token:getGuestToken()
      }
    );

  if(error)throw error;

  if(!data){
    throw new Error("这条留言不是当前浏览器发布的");
  }
}


async function deleteMyArtwork(id){
  const {data,error}=
    await supabaseClient.rpc(
      "delete_my_artwork",
      {
        p_id:String(id),
        p_token:getGuestToken()
      }
    );

  if(error)throw error;

  if(!data){
    throw new Error("这幅画不是当前浏览器投稿的");
  }
}


async function deleteMyWeeklyAnswer(id){
  const {data,error}=
    await supabaseClient.rpc(
      "delete_my_weekly_answer",
      {
        p_id:String(id),
        p_token:getGuestToken()
      }
    );

  if(error)throw error;

  if(!data){
    throw new Error("这条答案不是当前浏览器发布的");
  }
}


async function deleteMyWeeklyReply(id){
  const {data,error}=
    await supabaseClient.rpc(
      "delete_my_weekly_reply",
      {
        p_id:String(id),
        p_token:getGuestToken()
      }
    );

  if(error)throw error;

  if(!data){
    throw new Error("这条回复不是当前浏览器发布的");
  }
}


let remoteArtworks=[];
let remoteSiteContent=null;
let remoteWeeklyQuestion=null;

let remoteGuestbook=[];
let remotePrivateMessages=[];
let remoteBlockedUsers=[];
let remoteUuTalks=[];
let remoteWeeklyAnswers=[];

let realtimeChannel=null;


function imageFiles(files){
  return Array.from(files||[])
    .filter(f=>f&&f.type.startsWith("image/"));
}


function containsBlockedLanguage(text){
  const n=(text||"")
    .toLowerCase()
    .replace(/\s+/g,"");

  return blockedTerms.some(
    x=>n.includes(x.toLowerCase())
  );
}


function escapeHtml(v){
  const d=document.createElement("div");
  d.textContent=v??"";
  return d.innerHTML;
}


function isAdmin(){
  // 管理员页面本身已经是专用入口。只要 Supabase 登录成功，
  // 就允许进入后台，不再要求 App Metadata 里的 role=admin。
  return !!currentUser;
}


async function uploadGalleryImage(file,folder){
  if(!supabaseClient){
    throw new Error("Supabase 未连接");
  }

  const ext=
    (file.name.split(".").pop()||"jpg")
      .toLowerCase()
      .replace(/[^a-z0-9]/g,"")
    ||
    "jpg";

  const path=
    `${folder}/${Date.now()}-${crypto.randomUUID()}.${ext}`;

  const {error}=
    await supabaseClient
      .storage
      .from("gallery-images")
      .upload(
        path,
        file,
        {
          contentType:file.type,
          upsert:false
        }
      );

  if(error)throw error;

  return supabaseClient
    .storage
    .from("gallery-images")
    .getPublicUrl(path)
    .data
    .publicUrl;
}


async function loadRemoteSettings(){
  if(!supabaseClient)return false;

  const {data,error}=
    await supabaseClient
      .from("site_content")
      .select("content,weekly,updated_at")
      .eq("id",1)
      .maybeSingle();

  if(error){
    console.warn(
      "Supabase site content read failed",
      error
    );
    return false;
  }

  if(data){
    remoteSiteContent=data.content||{};
    remoteWeeklyQuestion=data.weekly||{};
    window.UU_REMOTE_CONTENT_UPDATED_AT=
      data.updated_at||null;

    return true;
  }

  return false;
}


async function saveRemoteSettings(content,weekly){
  if(!supabaseClient||!isAdmin()){
    throw new Error("管理员未登录");
  }

  const {error}=
    await supabaseClient
      .from("site_content")
      .upsert(
        {
          id:1,
          content,
          weekly,
          updated_at:new Date().toISOString()
        },
        {
          onConflict:"id"
        }
      );

  if(error)throw error;

  const ok=await loadRemoteSettings();

  if(!ok){
    throw new Error(
      "已写入但无法重新读取网站文字，请检查 site_content 的公开读取权限"
    );
  }

  if(
    remoteSiteContent?.heroTitle?.zh
    !==
    content?.heroTitle?.zh
  ){
    throw new Error(
      "数据库里的首页标题没有更新成功，请检查 site_content 表"
    );
  }
}


async function loadRemoteArtworks(){
  if(!supabaseClient)return;

  const {data,error}=
    await supabaseClient
      .from("artwork")
      .select("*")
      .eq("is_approved",true)
      .order("created_at",{ascending:false});

  if(error){
    console.warn("Supabase artwork read failed",error);
    return;
  }

  const rows=data||[];
  const seriesMap=new Map();
  const result=[];

  rows.forEach(x=>{
    const date=(x.created_at||"").slice(0,10)||new Date().toISOString().slice(0,10);

    if(x.series_id){
      const key=String(x.series_id);
      if(!seriesMap.has(key)){
        seriesMap.set(key,{
          id:key,
          series_id:key,
          type:"series",
          category:x.category||"colored",
          date,
          title:x.title||"",
          note:x.note||"",
          name:x.name||"",
          images:[]
        });
      }
      seriesMap.get(key).images.push({
        id:x.id,
        image:x.image_url||"",
        title:x.image_title||"",
        order:Number(x.series_order)||0
      });
      return;
    }

    result.push({
      id:x.id,
      type:x.type||"single",
      category:x.category||"colored",
      date,
      title:x.title||"",
      note:x.note||"",
      image:x.image_url||"",
      name:x.name||""
    });
  });

  seriesMap.forEach(series=>{
    series.images.sort((a,b)=>a.order-b.order);
    result.push(series);
  });

  remoteArtworks=result.sort((a,b)=>
    String(b.date).localeCompare(String(a.date))
  );

  await loadGuestOwnership();
  renderAll();
}

async function loadRemoteInteractions(){
  if(!supabaseClient)return;

  const [
    g,
    gr,
    p,
    b,
    talk,
    a,
    waReplies
  ]=
    await Promise.all([

      supabaseClient
        .from("guestbook_messages")
        .select(
          "id,name,message,created_at"
        )
        .order(
          "created_at",
          {ascending:false}
        ),

      supabaseClient
        .from("guestbook_replies")
        .select(
          "id,message_id,name,message,created_at"
        )
        .order(
          "created_at",
          {ascending:true}
        ),

      supabaseClient
        .from("private_messages")
        .select(
          "id,name,message,reply,replied_at,created_at"
        )
        .order(
          "created_at",
          {ascending:false}
        ),

      supabaseClient
        .from("blocked_users")
        .select("name"),

      supabaseClient
        .from("uu_talks")
        .select(
          "id,title,text,date,created_at"
        )
        .order(
          "created_at",
          {ascending:false}
        ),

      supabaseClient
        .from("weekly_answers")
        .select(
          "id,name,answer,created_at"
        )
        .order(
          "created_at",
          {ascending:false}
        ),

      supabaseClient
        .from("weekly_answer_replies")
        .select(
          "id,answer_id,name,message,created_at"
        )
        .order(
          "created_at",
          {ascending:true}
        )

    ]);

  if(!g.error){
    const replies=
      gr.error
      ?
      []
      :
      (gr.data||[]);

    remoteGuestbook=
      (g.data||[]).map(x=>({
        ...x,
        replies:replies.filter(
          r=>r.message_id===x.id
        )
      }));
  }

  if(!p.error){
    remotePrivateMessages=p.data||[];
  }

  if(!b.error){
    remoteBlockedUsers=
      (b.data||[]).map(x=>x.name);
  }

  if(!talk.error){
    remoteUuTalks=talk.data||[];
  }

  if(!a.error){
    remoteWeeklyAnswers=
      (a.data||[]).map(x=>({
        ...x,
        replies:
          waReplies.error
          ?
          []
          :
          (waReplies.data||[])
            .filter(
              r=>r.answer_id===x.id
            )
      }));
  }

  await loadGuestOwnership();

  renderGuestbook();
  renderUuTalks();
  renderWeeklyAnswerHistory();

  if(adminUnlocked){
    renderAdminMessages();
  }
}


function setupRealtime(){
  if(!supabaseClient)return;

  if(realtimeChannel){
    supabaseClient.removeChannel(
      realtimeChannel
    );
  }

  realtimeChannel=
    supabaseClient
      .channel("uu-global-sync")

      .on(
        "postgres_changes",
        {
          event:"*",
          schema:"public",
          table:"site_content"
        },
        async()=>{
          await loadRemoteSettings();
          applyContentToPage();
        }
      )

      .on(
        "postgres_changes",
        {
          event:"*",
          schema:"public",
          table:"artwork"
        },
        async()=>{
          await loadRemoteArtworks();

          if(adminUnlocked){
            renderAdminSubmissions();
            renderAdminMyArt();
          }
        }
      )

      .on(
        "postgres_changes",
        {
          event:"*",
          schema:"public",
          table:"guestbook_messages"
        },
        loadRemoteInteractions
      )

      .on(
        "postgres_changes",
        {
          event:"*",
          schema:"public",
          table:"guestbook_replies"
        },
        loadRemoteInteractions
      )

      .on(
        "postgres_changes",
        {
          event:"*",
          schema:"public",
          table:"private_messages"
        },
        loadRemoteInteractions
      )

      .on(
        "postgres_changes",
        {
          event:"*",
          schema:"public",
          table:"blocked_users"
        },
        loadRemoteInteractions
      )

      .on(
        "postgres_changes",
        {
          event:"*",
          schema:"public",
          table:"uu_talks"
        },
        loadRemoteInteractions
      )

      .on(
        "postgres_changes",
        {
          event:"*",
          schema:"public",
          table:"weekly_answers"
        },
        loadRemoteInteractions
      )

      .on(
        "postgres_changes",
        {
          event:"*",
          schema:"public",
          table:"weekly_answer_replies"
        },
        loadRemoteInteractions
      )

      .subscribe();
}


async function saveRemoteSubmission(files,title,note,name){
  const list=imageFiles(files);
  if(!list.length)throw new Error("没有可上传的图片");

  const seriesId=list.length>1 ? crypto.randomUUID() : null;
  const uploaded=[];

  try{
    for(let i=0;i<list.length;i++){
      const file=list[i];
      const image_url=await uploadGalleryImage(file,"submissions");
      uploaded.push({file,image_url,index:i});
    }

    const rows=uploaded.map(({file,image_url,index})=>({
      title,
      image_url,
      image_title:file.name.replace(/\.[^.]+$/,""),
      note,
      name:name||"匿名投稿",
      category:"community",
      is_approved:false,
      is_owner:false,
      type:seriesId ? "series" : "single",
      series_id:seriesId,
      series_order:seriesId ? index : null,
      owner_token:getGuestToken()
    }));

    const {error}=await supabaseClient.from("artwork").insert(rows);
    if(error)throw error;
  }catch(err){
    console.error("批量投稿失败",err);
    throw err;
  }
}

async function refreshAuth(){
  if(!supabaseClient){
    setAdminMessage(
      "管理员系统连接失败：Supabase 配置没有加载。",
      "error"
    );
    return;
  }

  const {data}=
    await supabaseClient.auth.getSession();

  currentUser=
    data?.session?.user||null;

  adminUnlocked=
    !!currentUser&&isAdmin();

  updateAdminVisibility();
}


function setAdminMessage(
  msg,
  type=""
){
  const el=$("admin-message");

  if(!el)return;

  el.textContent=msg;
  el.dataset.state=type;
}


function updateAdminVisibility(){
  const section=$("admin");

  if(!section)return;

  const open=
    document.body.classList.contains("admin-page")
    ||
    new URLSearchParams(location.search)
      .get("admin")==="1";

  section.classList.toggle(
    "admin-private-hidden",
    !open
  );

  section.classList.toggle(
    "admin-visible",
    open
  );

  if(open&&adminUnlocked){
    $("admin-locked")?.classList.add("hidden");
    $("admin-panel")?.classList.remove("hidden");
    renderAdminAll();
  }
}


async function signInAdmin(){
  const email=
    $("admin-email")?.value.trim();

  const password=
    $("admin-password")?.value||"";

  if(!email||!password){
    setAdminMessage(
      "请输入管理员邮箱和密码 ♡"
    );
    return;
  }

  if(!supabaseClient){
    setAdminMessage(
      "管理员系统没有连接到 Supabase，请检查配置文件。",
      "error"
    );
    return;
  }

  const button=$("admin-unlock");

  if(button)button.disabled=true;

  setAdminMessage(
    "正在登录……"
  );

  try{

    const {data,error}=
      await supabaseClient.auth.signInWithPassword({
        email,
        password
      });

    if(error)throw error;

    currentUser=data.user;

    // 登录成功就进入后台，不再检查 role=admin。
    adminUnlocked=true;

    setAdminMessage(
      "登录成功 ♡"
    );

    $("admin-locked")?.classList.add("hidden");
    $("admin-panel")?.classList.remove("hidden");

    if($("admin-password")){
      $("admin-password").value="";
    }

    await loadRemoteSettings();
    await loadRemoteArtworks();
    await loadRemoteInteractions();

    renderAdminAll();

  }catch(err){

    console.error(err);

    setAdminMessage(
      `登录没有成功：${err?.message||"请检查邮箱和密码"}`
    );

  }finally{

    if(button)button.disabled=false;

  }
}


const defaultContent={

  heroTitle:{
    zh:"UU的小馆",
    en:"UU's Little Gallery"
  },

  heroIntro:{
    zh:"一页一页，收藏我画过的世界。<br>慢慢画，也慢慢长大。",
    en:"A little place for all the worlds I draw.<br>Drawing slowly, growing slowly."
  },

  coloredTitle:{
    zh:"有色画",
    en:"Color Works"
  },

  coloredDesc:{
    zh:"彩色、完整的作品，以及那些被我认真留下来的画。",
    en:"Finished pieces, colorful worlds, and drawings I wanted to keep."
  },

  sketchTitle:{
    zh:"随笔",
    en:"Sketches"
  },

  sketchDesc:{
    zh:"一些随手画下来的东西。小鸟、人物、风景、一个突然出现的念头。",
    en:"Little things I draw along the way — birds, people, landscapes, passing thoughts."
  },

  togetherTitle:{
    zh:"一起玩",
    en:"Let's Make Something Together"
  },

  togetherDesc:{
    zh:"这里不只是我的画廊。也想留一点位置，给你的想法和你的世界。",
    en:"This isn't only my gallery. There is a little room here for your thoughts and your world too."
  },

  guestbookTitle:{
    zh:"你在想什么呢～写下来吧",
    en:"What are you thinking? Write it down~"
  },

  privateNoteTitle:{
    zh:"想和UU说一点悄悄话",
    en:"A little private note for UU"
  },

  privateNoteDesc:{
    zh:"这里的内容不会显示在大家的小世界里，只会送到UU的管理员区。",
    en:"This will not appear in Everyone's Little Worlds. It goes only to UU's admin area."
  },

  worldsTitle:{
    zh:"大家的小世界",
    en:"Everyone's Little Worlds"
  },

  worldsDesc:{
    zh:"投稿通过审核后，会直接出现在这里。",
    en:"Approved submissions appear here directly."
  },

  uuTalkTitle:{
    zh:"UU·和大家说的话",
    en:"UU · Notes to Everyone"
  },

  uuTalkDesc:{
    zh:"这里是UU想留给大家的一些话。每一篇都可以慢慢写。",
    en:"A little page for notes UU wants to leave for everyone."
  }

};


function getContent(){
  return {
    ...defaultContent,
    ...(remoteSiteContent||getStored(
      "uu_site_content",
      {}
    ))
  };
}


function getWeekly(){
  return remoteWeeklyQuestion
    ||
    getStored(
      "uu_weekly_question",
      weeklyQuestionDefault
    );
}


function getMyArt(){
  return getStored(
    "uu_my_art",
    []
  );
}


function allArtworks(){
  return [
    ...baseArtworks,
    ...getMyArt(),
    ...remoteArtworks.filter(
      x=>x.category!=="community"
    )
  ];
}


function applyContentToPage(){

  const c=getContent();

  document
    .querySelectorAll("[data-i18n]")
    .forEach(el=>{
      const key=el.dataset.i18n;

      if(
        c[key]
        &&
        c[key][language]!==undefined
      ){
        el.innerHTML=
          c[key][language];
      }
    });

  const heroTitle=
    c.heroTitle?.[language]
    ||
    (
      language==="zh"
      ?
      "UU的小馆"
      :
      "UU's Little Gallery"
    );

  document
    .querySelectorAll("[data-site-title]")
    .forEach(el=>{
      el.textContent=heroTitle;
    });

  document.title=
    heroTitle.replace(
      /<[^>]*>/g,
      ""
    );

  const q=getWeekly();

  if($("question-title")){
    $("question-title").innerHTML=
      language==="zh"
      ?
      q.zh
      :
      q.en;
  }

  if($("question-answer")){
    $("question-answer").placeholder=
      language==="zh"
      ?
      q.placeholderZh
      :
      q.placeholderEn;
  }
}


function applyLanguage(){

  document.documentElement.lang=
    language==="zh"
    ?
    "zh-CN"
    :
    "en";

  document.body.classList.toggle(
    "language-en",
    language==="en"
  );

  document
    .querySelectorAll("[data-i18n]")
    .forEach(el=>{
      el.innerHTML=
        t(el.dataset.i18n);
    });

  document
    .querySelectorAll("[data-i18n-placeholder]")
    .forEach(el=>{
      el.placeholder=
        t(el.dataset.i18nPlaceholder);
    });

  if($("language-toggle")){
    $("language-toggle").textContent=
      language==="zh"
      ?
      "EN"
      :
      "中";
  }

  applyContentToPage();
  renderAll();

  if(adminUnlocked){
    renderAdminAll();
  }
}


function formatDate(s){
  return new Intl.DateTimeFormat(
    language==="zh"
      ?
      "zh-CN"
      :
      "en-US",
    {
      year:"numeric",
      month:"long",
      day:"numeric"
    }
  ).format(
    new Date(
      s+"T12:00:00"
    )
  );
}


function groupByYear(items){

  const years={};

  [...items]
    .sort(
      (a,b)=>
        b.date.localeCompare(a.date)
    )
    .forEach(x=>{

      const y=x.date.slice(0,4);
      const m=x.date.slice(0,7);

      years[y]??={};
      years[y][m]??=[];

      years[y][m].push(x);

    });

  return years;
}


function createSingle(x){

  return `
    <article class="art-card">

      <img
        class="art-image art-image-auto-size"
        src="${x.image}"
        alt="${escapeHtml(x.title)}"
        loading="lazy"
        decoding="async"
      >

      <div class="art-info">

        <h3 class="art-title">
          ${escapeHtml(x.title)}
        </h3>

        <p class="art-date">
          ${formatDate(x.date)}
        </p>

        ${
          x.note
          ?
          `<p class="art-note">${escapeHtml(x.note)}</p>`
          :
          ""
        }

      </div>

    </article>
  `;
}


function createSeries(x){

  return `
    <article class="series-card">

      <div class="series-head">

        <div>

          <h3 class="series-title">
            ${escapeHtml(x.title)}
          </h3>

          <p class="series-meta">
            ${formatDate(x.date)}
            ·
            ${x.images.length}${t("seriesWorks")}
          </p>

          ${
            x.note
            ?
            `<p class="series-note">${escapeHtml(x.note)}</p>`
            :
            ""
          }

        </div>

      </div>

      <div class="series-grid">

        ${x.images.map(i=>`

          <figure>

            <img
              class="art-image art-image-auto-size"
              src="${i.image}"
              alt="${escapeHtml(i.title||x.title)}"
              loading="lazy"
              decoding="async"
            >

            <figcaption>
              ${escapeHtml(i.title||"")}
            </figcaption>

          </figure>

        `).join("")}

      </div>

    </article>
  `;
}


function renderGallery(id,items){
  const box=$(id);
  if(!box)return;

  const years=groupByYear(items);

  const html=Object.entries(years).map(([y,months])=>
    Object.entries(months).map(([m,list])=>{
      const cards=list.map(x=>
        x.type==="series" ? createSeries(x) : createSingle(x)
      ).join("");

      const monthName=new Date(m+"-01T12:00:00").toLocaleDateString(
        language==="zh" ? "zh-CN" : "en-US",
        {month:"long"}
      );

      return `
        <div class="month-block">
          <h4>${monthName}</h4>
          <div class="art-grid art-masonry-grid">
            ${cards}
          </div>
        </div>
      `;
    }).join("")
  ).join("");

  box.innerHTML=html||`<p class="admin-empty">${t("adminEmpty")}</p>`;
}

function renderCommunityGallery(){

  const box=$("community-gallery");

  if(!box)return;

  const local=
    getStored(
      "uu_submissions",
      []
    )
    .filter(
      x=>x.status==="approved"
    );

  const remote=
    remoteArtworks.filter(
      x=>x.category==="community"
    );

  const list=[
    ...remote,
    ...local
  ];

  box.innerHTML=
    list
      .map(
        x=>`

          <article class="community-card">

            <img
              src="${x.image}"
              alt="${escapeHtml(x.title)}"
              loading="lazy"
            >

            <div class="community-info">

              <h4>
                ${escapeHtml(x.title)}
              </h4>

              <p class="community-by">
                ${escapeHtml(x.name||"匿名投稿")}
              </p>

              ${
                x.note
                ?
                `<p>${escapeHtml(x.note)}</p>`
                :
                ""
              }

              ${
                myGuestArtworkIds.has(String(x.id))
                ?
                `
                  <button
                    class="danger-button"
                    data-guest-art-delete="${x.id}"
                  >
                    ${t("deleteMy")}
                  </button>
                `
                :
                ""
              }

            </div>

          </article>

        `
      )
      .join("");

  $("community-empty")
    ?.classList.toggle(
      "hidden",
      list.length>0
    );
}


function renderAll(){

  renderGallery(
    "colored-gallery",
    allArtworks().filter(
      x=>x.category==="colored"
    )
  );

  renderGallery(
    "sketch-gallery",
    allArtworks().filter(
      x=>x.category==="sketch"
    )
  );

  renderCommunityGallery();
}


function injectGalleryAdaptiveStyles(){
  if(document.getElementById("uu-gallery-performance-styles"))return;

  const style=document.createElement("style");
  style.id="uu-gallery-performance-styles";

  style.textContent=`

    /* =========================================
       UU的小馆 · 真正的响应式原图比例画廊

       核心规则：
       1. 图片永远保持自己的原始长宽比例
       2. 不固定图片高度
       3. 不裁切、不拉伸
       4. 电脑限制最大显示尺寸，避免太大
       5. 手机解除“两列挤压”，让图片有足够展示空间
       ========================================= */

    .art-grid.art-masonry-grid{
      display:flex !important;
      flex-wrap:wrap !important;
      align-items:flex-start !important;
      justify-content:flex-start !important;

      width:100% !important;
      gap:28px !important;
    }

    /* 单幅作品：宽度由图片自己决定 */
    .art-grid.art-masonry-grid .art-card{
      display:flex !important;
      flex-direction:column !important;

      width:fit-content !important;
      max-width:100% !important;

      flex:0 0 auto !important;

      margin:0 !important;
      padding:0 !important;

      overflow:visible !important;
      box-sizing:border-box !important;
    }

    /* 核心：
       auto + max-width + max-height
       三者一起保证“比例不变 + 尺寸合适”
    */
    .art-grid.art-masonry-grid .art-card .art-image{
      display:block !important;

      width:auto !important;
      height:auto !important;

      max-width:min(44vw,460px) !important;
      max-height:min(62vh,560px) !important;

      min-width:0 !important;
      min-height:0 !important;

      aspect-ratio:auto !important;

      object-fit:contain !important;
      object-position:center !important;

      flex:none !important;

      box-sizing:border-box !important;
    }

    .art-grid.art-masonry-grid .art-card .art-info{
      width:fit-content !important;
      max-width:min(44vw,460px) !important;

      box-sizing:border-box !important;
    }

    .art-grid.art-masonry-grid .art-card .art-title,
    .art-grid.art-masonry-grid .art-card .art-date,
    .art-grid.art-masonry-grid .art-card .art-note{
      max-width:100% !important;
      overflow-wrap:anywhere !important;
    }

    /* =========================================
       组画
       ========================================= */

    .art-grid.art-masonry-grid .series-card{
      width:100% !important;
      max-width:100% !important;

      flex:0 0 100% !important;

      margin:0 !important;
      padding:0 !important;

      overflow:visible !important;
    }

    .art-grid.art-masonry-grid .series-grid{
      display:flex !important;
      flex-wrap:wrap !important;

      align-items:flex-start !important;
      justify-content:flex-start !important;

      width:100% !important;
      gap:22px !important;
    }

    .art-grid.art-masonry-grid .series-grid figure{
      display:flex !important;
      flex-direction:column !important;

      width:fit-content !important;
      max-width:100% !important;

      flex:0 0 auto !important;

      margin:0 !important;
      padding:0 !important;

      overflow:visible !important;
    }

    .art-grid.art-masonry-grid .series-grid figure .art-image{
      display:block !important;

      width:auto !important;
      height:auto !important;

      max-width:min(38vw,420px) !important;
      max-height:min(58vh,500px) !important;

      min-width:0 !important;
      min-height:0 !important;

      aspect-ratio:auto !important;

      object-fit:contain !important;
      object-position:center !important;

      flex:none !important;

      box-sizing:border-box !important;
    }

    .art-grid.art-masonry-grid .series-grid figcaption{
      max-width:min(38vw,420px) !important;
      overflow-wrap:anywhere !important;
    }

    /* =========================================
       平板
       ========================================= */

    @media(max-width:900px){

      .art-grid.art-masonry-grid{
        gap:20px !important;
      }

      .art-grid.art-masonry-grid .art-card .art-image{
        max-width:46vw !important;
        max-height:58vh !important;
      }

      .art-grid.art-masonry-grid .art-card .art-info{
        max-width:46vw !important;
      }

      .art-grid.art-masonry-grid .series-grid{
        gap:16px !important;
      }

      .art-grid.art-masonry-grid .series-grid figure .art-image{
        max-width:44vw !important;
        max-height:54vh !important;
      }

      .art-grid.art-masonry-grid .series-grid figcaption{
        max-width:44vw !important;
      }

    }

    /* =========================================
       手机

       不再强制 50% 两列。
       这样竖长图不会因为“半屏宽”而变得特别小。
       ========================================= */

    @media(max-width:600px){

      .art-grid.art-masonry-grid{
        gap:18px !important;
      }

      .art-grid.art-masonry-grid .art-card{
        width:fit-content !important;
        max-width:88vw !important;
      }

      .art-grid.art-masonry-grid .art-card .art-image{
        width:auto !important;
        height:auto !important;

        max-width:88vw !important;
        max-height:68vh !important;

        aspect-ratio:auto !important;
        object-fit:contain !important;
      }

      .art-grid.art-masonry-grid .art-card .art-info{
        width:fit-content !important;
        max-width:88vw !important;
      }

      .art-grid.art-masonry-grid .series-grid{
        gap:12px !important;
      }

      .art-grid.art-masonry-grid .series-grid figure{
        max-width:88vw !important;
      }

      .art-grid.art-masonry-grid .series-grid figure .art-image{
        width:auto !important;
        height:auto !important;

        max-width:88vw !important;
        max-height:64vh !important;

        aspect-ratio:auto !important;
        object-fit:contain !important;
      }

      .art-grid.art-masonry-grid .series-grid figcaption{
        max-width:88vw !important;
      }

    }

    /* =========================================
       超窄手机
       ========================================= */

    @media(max-width:380px){

      .art-grid.art-masonry-grid{
        gap:14px !important;
      }

      .art-grid.art-masonry-grid .art-card,
      .art-grid.art-masonry-grid .series-grid figure{
        max-width:94vw !important;
      }

      .art-grid.art-masonry-grid .art-card .art-image,
      .art-grid.art-masonry-grid .series-grid figure .art-image{
        max-width:94vw !important;
      }

      .art-grid.art-masonry-grid .art-card .art-info,
      .art-grid.art-masonry-grid .series-grid figcaption{
        max-width:94vw !important;
      }

    }

    .batch-upload-count{
      margin:8px 0 0;
      font-size:.78rem;
      opacity:.72;
    }

  `;

  document.head.appendChild(style);
}
async function initEvents(){

  // 管理员登录优先绑定：即使后面某个普通页面元素出错，
  // 也不会让管理员按钮失效。
  const adminUnlockButton=$("admin-unlock");
  if(adminUnlockButton){
    adminUnlockButton.onclick=signInAdmin;
  }
  const adminPasswordInput=$("admin-password");
  if(adminPasswordInput){
    adminPasswordInput.onkeydown=e=>{
      if(e.key==="Enter")signInAdmin();
    };
  }

  injectGalleryAdaptiveStyles();

  $("share-preview-button")
    ?.addEventListener(
      "click",
      ()=>$("share-preview")
        .classList.toggle("hidden")
    );


  $("share-image")
    ?.addEventListener(
      "change",
      e=>{

        const files=
          imageFiles(
            e.target.files
          );

        if(!files.length)return;

        selectedSubmissionImage = files;

        const preview = $("share-image-preview");
        if(preview){
          preview.innerHTML = files
            .map(
              (f,i)=>`
                <div class="upload-thumb">
                  <img
                    src="${URL.createObjectURL(f)}"
                    alt="preview ${i+1}"
                  >
                </div>
              `
            )
            .join("")
            + `<p class="batch-upload-count">${language==="zh" ? `已选择 ${files.length} 幅` : `${files.length} selected`}</p>`;
          preview.classList.remove("hidden");
        }

      }
    );


  $("share-submit-button")
    ?.addEventListener(
      "click",
      async()=>{

        const files=
          imageFiles(
            selectedSubmissionImage
          );

        const title=
          $("share-title")
            .value
            .trim();

        const note=
          $("share-note")
            .value
            .trim();

        const name=
          $("share-name")
            .value
            .trim()
          ||
          "匿名投稿";

        if(!files.length){
          $("share-message")
            .textContent=
              t("adminNeedImage");
          return;
        }

        if(!title){
          $("share-message")
            .textContent=
              t("adminNeedTitle");
          return;
        }

        if(
          containsBlockedLanguage(
            title+note
          )
        ){
          $("share-message")
            .textContent=
              t("unsafe");
          return;
        }

        const b=$("share-submit-button");

        b.disabled=true;

        try{

          if(!supabaseClient){
            throw new Error(
              "Supabase 未连接"
            );
          }

          await saveRemoteSubmission(
            files,
            title,
            note,
            name
          );

          $("share-message")
            .textContent=
              language==="zh"
              ?
              `收到啦 ♡ ${files.length} 幅已经送进UU的审核小房间。`
              :
              `Got it ♡ ${files.length} artwork(s) are waiting for UU's review.`;

          $("share-name").value="";
          $("share-title").value="";
          $("share-note").value="";
          $("share-image").value="";

          selectedSubmissionImage = null;

          const preview = $("share-image-preview");
          if(preview){
            preview.innerHTML = "";
            preview.classList.add("hidden");
          }

        }catch(err){

          console.error(err);

          $("share-message")
            .textContent=
              language==="zh"
              ?
              "投稿没有成功，请稍后再试 ♡"
              :
              "The submission could not be uploaded. Please try again ♡";

        }finally{

          b.disabled=false;

          if(adminUnlocked){
            renderAdminAll();
          }

        }

      }
    );


  $("guestbook-form")
    ?.addEventListener(
      "submit",
      async e=>{

        e.preventDefault();

        const name=
          $("guest-name")
            .value
            .trim()
          ||
          "匿名";

        const message=
          $("guest-message")
            .value
            .trim();

        if(!message){
          $("guestbook-message")
            .textContent=
              t("empty");
          return;
        }

        if(
          containsBlockedLanguage(message)
        ){
          $("guestbook-message")
            .textContent=
              t("unsafe");
          return;
        }

        try{

          const {error}=
            await supabaseClient
              .from("guestbook_messages")
              .insert({
                name,
                message,
                owner_token:getGuestToken()
              });

          if(error)throw error;

          await loadRemoteInteractions();

          $("guestbook-form").reset();

          $("guestbook-message")
            .textContent=
              t("guestSaved");

        }catch(err){

          console.error(err);

          $("guestbook-message")
            .textContent=
              language==="zh"
              ?
              "留言没有成功，请稍后再试 ♡"
              :
              "The note could not be posted. Please try again ♡";

        }

      }
    );


  $("guestbook-list")
    ?.addEventListener(
      "click",
      async e=>{

        const del=
          e.target.closest(
            "[data-guest-delete]"
          );

        if(del){

          if(
            !confirm(
              language==="zh"
              ?
              "确定要删除这条留言吗？"
              :
              "Delete this message?"
            )
          ){
            return;
          }

          try{

            del.disabled=true;

            await deleteMyGuestbookMessage(
              del.dataset.guestDelete
            );

            await loadRemoteInteractions();

          }catch(err){

            console.error(err);

            alert(
              language==="zh"
              ?
              "这条留言不能由当前浏览器删除。"
              :
              "This message cannot be deleted from this browser."
            );

          }finally{

            del.disabled=false;

          }

          return;
        }

        const b=
          e.target.closest(
            "[data-reply]"
          );

        if(b){

          document
            .querySelector(
              `[data-reply-form="${b.dataset.reply}"]`
            )
            ?.classList
            .toggle("hidden");

        }

      }
    );


  $("community-gallery")
    ?.addEventListener(
      "click",
      async e=>{

        const b=
          e.target.closest(
            "[data-guest-art-delete]"
          );

        if(!b)return;

        if(
          !confirm(
            language==="zh"
            ?
            "确定要删除这幅投稿吗？"
            :
            "Delete this artwork?"
          )
        ){
          return;
        }

        try{

          b.disabled=true;

          await deleteMyArtwork(
            b.dataset.guestArtDelete
          );

          await loadRemoteArtworks();

        }catch(err){

          console.error(err);

          alert(
            language==="zh"
            ?
            "这幅画不能由当前浏览器删除。"
            :
            "This artwork cannot be deleted from this browser."
          );

        }finally{

          b.disabled=false;

        }

      }
    );


  $("guestbook-list")
    ?.addEventListener(
      "submit",
      async e=>{

        if(
          !e.target.matches(
            "[data-reply-form]"
          )
        ){
          return;
        }

        e.preventDefault();

        const id=
          e.target.dataset.replyForm;

        const ins=
          e.target.querySelectorAll(
            "input,textarea"
          );

        const name=
          ins[0].value.trim()
          ||
          "匿名";

        const message=
          ins[1].value.trim();

        if(!message)return;

        if(
          containsBlockedLanguage(message)
        ){
          alert(t("unsafe"));
          return;
        }

        try{

          const {error}=
            await supabaseClient
              .from("guestbook_replies")
              .insert({
                message_id:id,
                name,
                message
              });

          if(error)throw error;

          await loadRemoteInteractions();

        }catch(err){

          console.error(err);

          alert(
            language==="zh"
            ?
            "回复没有成功，请稍后再试。"
            :
            "Reply failed. Please try again."
          );

        }

      }
    );


  /* ================================
     每日问题：提交答案
     ================================ */

  $("question-form")
    ?.addEventListener(
      "submit",
      async e=>{

        e.preventDefault();

        const answer=
          $("question-answer")
            .value
            .trim();

        if(!answer){
          $("question-message")
            .textContent=
              t("empty");
          return;
        }

        if(
          containsBlockedLanguage(answer)
        ){
          $("question-message")
            .textContent=
              t("unsafe");
          return;
        }

        try{

          const {error}=
            await supabaseClient
              .from("weekly_answers")
              .insert({
                name:"匿名",
                answer,
                owner_token:getGuestToken()
              });

          if(error)throw error;

          $("question-answer").value="";

          await loadRemoteInteractions();

          $("question-message")
            .textContent=
              t("guestSaved");

        }catch(err){

          console.error(err);

          $("question-message")
            .textContent=
              language==="zh"
              ?
              "答案没有送出去，请稍后再试。"
              :
              "The answer could not be sent. Please try again.";

        }

      }
    );


  /* ================================
     每日问题：回复 / 删除
     ================================ */

  $("weekly-answer-history")
    ?.addEventListener(
      "click",
      async e=>{

        /* 回复 */

        const replyButton=
          e.target.closest(
            "[data-weekly-reply]"
          );

        if(replyButton){

          const form=
            document.querySelector(
              `[data-weekly-reply-form="${replyButton.dataset.weeklyReply}"]`
            );

          if(form){
            form.classList.toggle("hidden");
          }

          return;
        }


        /* 删除答案 */

        const del=
          e.target.closest(
            "[data-weekly-delete]"
          );

        if(del){

          if(
            !confirm(
              language==="zh"
              ?
              "确定要删除这条答案吗？"
              :
              "Delete this answer?"
            )
          ){
            return;
          }

          try{

            del.disabled=true;

            if(isAdmin()){

              const {data,error}=
                await supabaseClient
                  .rpc(
                    "admin_delete_weekly_answer",
                    {
                      p_id:String(
                        del.dataset.weeklyDelete
                      )
                    }
                  );

              if(error)throw error;

              if(!data){
                throw new Error(
                  "管理员删除失败"
                );
              }

            }else{

              await deleteMyWeeklyAnswer(
                del.dataset.weeklyDelete
              );

            }

            await loadRemoteInteractions();

          }catch(err){

            console.error(err);

            alert(
              language==="zh"
              ?
              "这条答案不能删除。"
              :
              "This answer cannot be deleted."
            );

          }finally{

            del.disabled=false;

          }

          return;
        }


        /* 删除自己的回复 */

        const delReply=
          e.target.closest(
            "[data-weekly-reply-delete]"
          );

        if(delReply){

          if(
            !confirm(
              language==="zh"
              ?
              "确定要删除这条回复吗？"
              :
              "Delete this reply?"
            )
          ){
            return;
          }

          try{

            delReply.disabled=true;

            if(isAdmin()){

              const {data,error}=
                await supabaseClient
                  .rpc(
                    "admin_delete_weekly_reply",
                    {
                      p_id:String(
                        delReply.dataset.weeklyReplyDelete
                      )
                    }
                  );

              if(error)throw error;

              if(!data){
                throw new Error(
                  "管理员删除失败"
                );
              }

            }else{

              await deleteMyWeeklyReply(
                delReply.dataset.weeklyReplyDelete
              );

            }

            await loadRemoteInteractions();

          }catch(err){

            console.error(err);

            alert(
              language==="zh"
              ?
              "这条回复不能删除。"
              :
              "This reply cannot be deleted."
            );

          }finally{

            delReply.disabled=false;

          }

          return;
        }

      }
    );


  /* ================================
     每日问题：提交回复
     ================================ */

  $("weekly-answer-history")
    ?.addEventListener(
      "submit",
      async e=>{

        if(
          !e.target.matches(
            "[data-weekly-reply-form]"
          )
        ){
          return;
        }

        e.preventDefault();

        const id=
          e.target.dataset.weeklyReplyForm;

        const ins=
          e.target.querySelectorAll(
            "input,textarea"
          );

        const name=
          ins[0].value.trim()
          ||
          "匿名";

        const message=
          ins[1].value.trim();

        if(!message)return;

        if(
          containsBlockedLanguage(message)
        ){
          alert(t("unsafe"));
          return;
        }

        try{

          const {error}=
            await supabaseClient
              .from("weekly_answer_replies")
              .insert({
                answer_id:id,
                name,
                message,
                owner_token:getGuestToken()
              });

          if(error)throw error;

          await loadRemoteInteractions();

        }catch(err){

          console.error(err);

          alert(
            language==="zh"
            ?
            "回复没有成功，请稍后再试。"
            :
            "Reply failed. Please try again."
          );

        }

      }
    );


  $("private-message-form")
    ?.addEventListener(
      "submit",
      async e=>{

        e.preventDefault();

        const name=
          $("private-name")
            .value
            .trim()
          ||
          "匿名";

        const message=
          $("private-message")
            .value
            .trim();

        if(!message){

          $("private-message-status")
            .textContent=
              t("empty");

          return;
        }

        if(
          containsBlockedLanguage(message)
        ){

          $("private-message-status")
            .textContent=
              t("unsafe");

          return;
        }

        if(
          remoteBlockedUsers.includes(name)
        ){

          $("private-message-status")
            .textContent=
              language==="zh"
              ?
              "暂时不能发送悄悄话。"
              :
              "Private messages are unavailable for this sender.";

          return;
        }

        try{

          const {error}=
            await supabaseClient
              .from("private_messages")
              .insert({
                name,
                message
              });

          if(error)throw error;

          $("private-message-status")
            .textContent=
              language==="zh"
              ?
              "已经悄悄送给UU啦 ♡"
              :
              "Your private note has been sent to UU ♡";

          $("private-message-form")
            .reset();

          await loadRemoteInteractions();

        }catch(err){

          console.error(err);

          $("private-message-status")
            .textContent=
              language==="zh"
              ?
              "发送失败，请稍后再试 ♡"
              :
              "Sending failed. Please try again ♡";

        }

      }
    );



  $("admin-lock")
    ?.addEventListener(
      "click",
      async()=>{

        if(supabaseClient){
          await supabaseClient
            .auth
            .signOut();
        }

        currentUser=null;
        adminUnlocked=false;

        $("admin-panel")
          ?.classList
          .add("hidden");

        $("admin-locked")
          ?.classList
          .remove("hidden");

      }
    );


  document
    .querySelectorAll(".admin-tab")
    .forEach(
      tab=>
        tab.addEventListener(
          "click",
          ()=>{
            document
              .querySelectorAll(".admin-tab")
              .forEach(
                x=>
                  x.classList.remove(
                    "active"
                  )
              );

            tab.classList.add("active");

            const target=
              tab.dataset.adminTab;

            [
              "editor",
              "myart",
              "submissions",
              "messages",
              "talk"
            ].forEach(
              x=>
                $(`admin-${x}-panel`)
                  ?.classList
                  .toggle(
                    "hidden",
                    x!==target
                  )
            );
          }
        )
    );


  $("language-toggle")
    ?.addEventListener(
      "click",
      ()=>{
        language=
          language==="zh"
          ?
          "en"
          :
          "zh";

        applyLanguage();
      }
    );

}


/* =========================================
   留言簿
   ========================================= */

function renderGuestbook(){

  const box=$("guestbook-list");

  if(!box)return;

  box.innerHTML=
    remoteGuestbook
      .map(
        x=>`

          <div class="guest-note">

            <strong>
              ${escapeHtml(x.name||"匿名")}：
            </strong>

            ${escapeHtml(x.message)}

            <button
              class="reply-button"
              data-reply="${x.id}"
            >
              ${t("reply")}
            </button>

            ${
              myGuestGuestbookIds.has(
                String(x.id)
              )
              ?
              `
                <button
                  class="reply-button danger-button"
                  data-guest-delete="${x.id}"
                >
                  ${t("deleteMy")}
                </button>
              `
              :
              ""
            }

            <div class="reply-list">

              ${(x.replies||[])
                .map(
                  r=>`

                    <div class="reply-note">

                      <strong>
                        ${escapeHtml(r.name||"匿名")}：
                      </strong>

                      ${escapeHtml(r.message)}

                    </div>

                  `
                )
                .join("")}

            </div>

            <form
              class="reply-form hidden"
              data-reply-form="${x.id}"
            >

              <input
                maxlength="40"
                placeholder="${t("anonymous")}"
              >

              <textarea
                maxlength="180"
                placeholder="${t("replyPlaceholder")}"
              ></textarea>

              <button type="submit">
                ${t("sendReply")}
              </button>

            </form>

          </div>

        `
      )
      .join("");
}


/* =========================================
   UU 的话
   ========================================= */

function renderUuTalks(){

  const list=$("uu-talk-list");
  const empty=$("uu-talk-empty");

  if(!list)return;

  const items=remoteUuTalks;

  list.innerHTML=
    items
      .map(
        x=>`

          <article class="uu-talk-card">

            <div class="uu-talk-date">
              ${escapeHtml(
                formatDate(
                  x.date||
                  x.created_at.slice(0,10)
                )
              )}
            </div>

            <h3>
              ${escapeHtml(x.title)}
            </h3>

            <p>
              ${escapeHtml(x.text)
                .replace(/\n/g,"<br>")}
            </p>

          </article>

        `
      )
      .join("");

  empty?.classList.toggle(
    "hidden",
    items.length>0
  );
}


/* =========================================
   每日问题答案列表
   这里是这次重点修改的地方
   ========================================= */

function renderWeeklyAnswerHistory(){

  const box=$("weekly-answer-history");

  if(!box)return;

  const cutoff=
    Date.now()-
    14*24*60*60*1000;

  const items=
    remoteWeeklyAnswers
      .filter(
        x=>
          new Date(
            x.created_at
          ).getTime()>=cutoff
      );


  if(!items.length){

    box.innerHTML="";

    return;
  }


  box.innerHTML=
    items
      .map(
        x=>{

          const mine=
            myWeeklyAnswerIds.has(
              String(x.id)
            );

          const canDelete=
            mine||
            isAdmin();


          return `

            <div
              class="weekly-answer-item"
              data-weekly-answer-item="${x.id}"
            >

              <div
                class="weekly-answer-name"
                style="
                  display:block!important;
                  visibility:visible!important;
                  opacity:1!important;
                "
              >
                ${escapeHtml(
                  x.name||"匿名"
                )}
              </div>


              <p
                class="weekly-answer-text"
                style="
                  display:block!important;
                  visibility:visible!important;
                  opacity:1!important;
                "
              >
                ${escapeHtml(x.answer)}
              </p>


              <!-- 每日问题按钮 -->
              <div
                class="weekly-answer-actions"
                style="
                  display:flex!important;
                  visibility:visible!important;
                  opacity:1!important;
                  align-items:center!important;
                  flex-wrap:wrap!important;
                  gap:10px!important;
                  margin-top:14px!important;
                  margin-bottom:10px!important;
                "
              >

                <!-- 回复按钮：所有人都能看到 -->
                <button
                  type="button"
                  class="weekly-reply-btn"
                  data-weekly-reply="${x.id}"
                  style="
                    display:inline-flex!important;
                    visibility:visible!important;
                    opacity:1!important;
                    align-items:center!important;
                    justify-content:center!important;
                    cursor:pointer!important;
                    padding:8px 18px!important;
                    border:1px solid #8ab9b0!important;
                    border-radius:999px!important;
                    background:#ffffff!important;
                    color:#496d68!important;
                    font-size:14px!important;
                    line-height:1.2!important;
                  "
                >
                  ${t("reply")}
                </button>


                <!-- 删除按钮：只有自己的答案才能看到 -->
                ${
                  canDelete
                  ?
                  `
                    <button
                      type="button"
                      class="weekly-delete-btn danger-button"
                      data-weekly-delete="${x.id}"
                      style="
                        display:inline-flex!important;
                        visibility:visible!important;
                        opacity:1!important;
                        align-items:center!important;
                        justify-content:center!important;
                        cursor:pointer!important;
                        padding:8px 18px!important;
                        border-radius:999px!important;
                        font-size:14px!important;
                        line-height:1.2!important;
                      "
                    >
                      ${t("deleteMy")}
                    </button>
                  `
                  :
                  ""
                }

              </div>


              <!-- 这个答案下面的所有回复 -->

              <div
                class="weekly-answer-replies"
                style="
                  display:block!important;
                  visibility:visible!important;
                  opacity:1!important;
                "
              >

                ${
                  (x.replies||[])
                    .map(
                      r=>{

                        const replyMine=
                          myWeeklyReplyIds.has(
                            String(r.id)
                          );

                        const replyCanDelete=
                          replyMine||
                          isAdmin();


                        return `

                          <div
                            class="weekly-answer-reply"
                            style="
                              display:block!important;
                              visibility:visible!important;
                              opacity:1!important;
                            "
                          >

                            <strong>
                              ${escapeHtml(
                                r.name||"匿名"
                              )}：
                            </strong>

                            ${escapeHtml(
                              r.message
                            )}

                            ${
                              replyCanDelete
                              ?
                              `
                                <button
                                  type="button"
                                  class="weekly-delete-reply-btn danger-button"
                                  data-weekly-reply-delete="${r.id}"
                                  style="
                                    display:inline-flex!important;
                                    visibility:visible!important;
                                    opacity:1!important;
                                    align-items:center!important;
                                    justify-content:center!important;
                                    cursor:pointer!important;
                                    margin-left:10px!important;
                                    padding:5px 12px!important;
                                    border-radius:999px!important;
                                    font-size:12px!important;
                                  "
                                >
                                  ${t("deleteMy")}
                                </button>
                              `
                              :
                              ""
                            }

                          </div>

                        `;
                      }
                    )
                    .join("")
                }

              </div>


              <!-- 回复输入框 -->

              <form
                class="reply-form hidden"
                data-weekly-reply-form="${x.id}"
                style="
                  margin-top:12px;
                "
              >

                <input
                  maxlength="40"
                  placeholder="${t("anonymous")}"
                >

                <textarea
                  maxlength="180"
                  placeholder="${t("replyPlaceholder")}"
                ></textarea>

                <button type="submit">
                  ${t("sendReply")}
                </button>

              </form>


            </div>

          `;

        }
      )
      .join("");
}


/* =========================================
   管理员编辑器
   ========================================= */

function field(
  key,
  label,
  large=false
){

  const c=getContent();

  const v=
    c[key]||
    {
      zh:"",
      en:""
    };

  return `

    <div class="editor-field">

      <label>
        ${label}
      </label>

      <div class="editor-lang">

        <textarea
          data-content-edit="${key}"
          data-lang="zh"
          class="${large?"large":""}"
        >${escapeHtml(v.zh)}</textarea>

        <textarea
          data-content-edit="${key}"
          data-lang="en"
          class="${large?"large":""}"
        >${escapeHtml(v.en)}</textarea>

      </div>

      <div class="editor-lang-label">

        <span>中文</span>
        <span>English</span>

      </div>

    </div>

  `;
}


function renderAdminEditor(){

  const q=getWeekly();

  const p=$("admin-editor-panel");

  if(!p)return;

  p.innerHTML=`

    <div class="admin-editor-grid">

      <div class="editor-section">

        <h3>
          ${t("editHero")}
        </h3>

        ${field(
          "heroTitle",
          t("editTitle")
        )}

        ${field(
          "heroIntro",
          t("editText"),
          true
        )}

      </div>


      <div class="editor-section">

        <h3>
          ${t("editGallery")}
        </h3>

        ${field(
          "coloredTitle",
          t("colored")+" · "+t("editTitle")
        )}

        ${field(
          "coloredDesc",
          t("editText"),
          true
        )}

        ${field(
          "sketchTitle",
          t("sketch")+" · "+t("editTitle")
        )}

        ${field(
          "sketchDesc",
          t("editText"),
          true
        )}

      </div>


      <div class="editor-section">

        <h3>
          ${t("editTogether")}
        </h3>

        ${field(
          "togetherTitle",
          t("editTitle")
        )}

        ${field(
          "togetherDesc",
          t("editText"),
          true
        )}

        ${field(
          "guestbookTitle",
          t("editTitle")
        )}

        ${field(
          "privateNoteTitle",
          t("editTitle")
        )}

        ${field(
          "privateNoteDesc",
          t("editText"),
          true
        )}

        ${field(
          "worldsTitle",
          t("editTitle")
        )}

        ${field(
          "worldsDesc",
          t("editText"),
          true
        )}

        ${field(
          "uuTalkTitle",
          t("editUuTalk")
        )}

        ${field(
          "uuTalkDesc",
          t("editText"),
          true
        )}

      </div>


      <div class="editor-section weekly-editor">

        <h3>
          ${t("editWeekly")}
        </h3>

        <div class="editor-lang">

          <div>

            <label>中文</label>

            <textarea
              id="weekly-zh"
              class="large"
            >${escapeHtml(q.zh)}</textarea>

            <textarea
              id="weekly-ph-zh"
            >${escapeHtml(q.placeholderZh)}</textarea>

          </div>


          <div>

            <label>English</label>

            <textarea
              id="weekly-en"
              class="large"
            >${escapeHtml(q.en)}</textarea>

            <textarea
              id="weekly-ph-en"
            >${escapeHtml(q.placeholderEn)}</textarea>

          </div>

        </div>

      </div>

    </div>


    <button
      class="admin-save-main"
      id="save-site-content"
    >
      ${t("adminSave")}
    </button>

    <p
      id="admin-content-message"
      class="form-message"
    ></p>

  `;


  $("save-site-content")
    .addEventListener(
      "click",
      async()=>{

        const c=getContent();

        document
          .querySelectorAll(
            "[data-content-edit]"
          )
          .forEach(
            el=>{

              c[
                el.dataset.contentEdit
              ]??={
                zh:"",
                en:""
              };

              c[
                el.dataset.contentEdit
              ][el.dataset.lang]=
                el.value;

            }
          );


        const weekly={
          zh:$("weekly-zh").value,
          en:$("weekly-en").value,
          placeholderZh:$("weekly-ph-zh").value,
          placeholderEn:$("weekly-ph-en").value
        };


        saveStored(
          "uu_site_content",
          c
        );

        saveStored(
          "uu_weekly_question",
          weekly
        );


        try{

          await saveRemoteSettings(
            c,
            weekly
          );

          applyContentToPage();

          $("admin-content-message")
            .textContent=
              t("adminSaved");

        }catch(err){

          console.error(err);

          $("admin-content-message")
            .textContent=
              (
                language==="zh"
                ?
                "保存失败："
                :
                "Save failed: "
              )
              +
              (
                err?.message||
                "未知错误"
              );

        }

      }
    );

}


/* =========================================
   管理员：我的画
   ========================================= */

async function renderAdminMyArt(){

  const p=$("admin-myart-panel");

  if(!p)return;

  let items=[];

  if(
    supabaseClient&&
    isAdmin()
  ){

    const {data,error}=
      await supabaseClient
        .from("artwork")
        .select(
          "id,created_at,title,image_url,category,note,type,user_id,series_id,series_order"
        )
        .eq(
          "is_owner",
          true
        )
        .eq(
          "user_id",
          currentUser.id
        )
        .order(
          "created_at",
          {
            ascending:false
          }
        );

    if(!error){

      items=
        (data||[]).map(
          x=>({
            id:x.id,
            image:x.image_url,
            title:x.title||"",
            category:x.category||"colored",
            date:
              (x.created_at||"")
                .slice(0,10)
              ||
              new Date().toISOString().slice(0,10),
            note:x.note||"",
            type:x.type||"single",
            seriesId:x.series_id||null,
            seriesOrder:Number(x.series_order)||0
          })
        );

    }

  }


  p.innerHTML=`

    <div class="my-art-form">

      <h3>
        ${t("adminMyArt")}
      </h3>

      <label>
        ${t("editImage")}
      </label>

      <label
        class="upload-box"
        for="my-art-image"
      >

        <span class="upload-icon">
          ＋
        </span>

        <span>
          ${t("uploadPhoto")}
        </span>

      </label>

      <input
        id="my-art-image"
        class="visually-hidden"
        type="file"
        accept="image/*"
        multiple
      >

      <div
        id="my-art-preview"
        class="upload-preview hidden"
      ></div>

      <label>
        ${t("editName")}
      </label>

      <input
        id="my-art-title"
      >

      <label>
        ${t("editCategory")}
      </label>

      <select
        id="my-art-category"
      >

        <option value="colored">
          ${t("colored")}
        </option>

        <option value="sketch">
          ${t("sketch")}
        </option>

      </select>

      <label>
        ${t("editDate")}
      </label>

      <input
        id="my-art-date"
        type="date"
        value="${new Date().toISOString().slice(0,10)}"
      >

      <label>
        ${t("editNote")}
      </label>

      <textarea
        id="my-art-note"
      ></textarea>

      <button
        id="add-my-art"
        class="admin-save-main"
      >
        ${t("adminAddArt")}
      </button>

      <p
        id="my-art-message"
        class="form-message"
      ></p>

    </div>


    <div class="admin-own-list">

      ${
        items
          .map(
            x=>`

              <article
                class="admin-own-item"
                data-own-art-card="${x.id}"
              >

                <img
                  src="${x.image}"
                  alt="${escapeHtml(x.title)}"
                >

                <div>

                  <label>
                    ${t("editName")}
                  </label>

                  <input
                    class="admin-own-title-input"
                    data-own-title="${x.id}"
                    value="${escapeHtml(x.title)}"
                  >

                  <label>
                    ${t("editDate")}
                  </label>

                  <input
                    class="admin-own-date-input"
                    data-own-date="${x.id}"
                    type="date"
                    value="${x.date}"
                  >

                  <p class="admin-own-category">
                    ${
                      x.category==="colored"
                      ?
                      t("colored")
                      :
                      t("sketch")
                    }
                  </p>

                  ${
                    x.note
                    ?
                    `<p>${escapeHtml(x.note)}</p>`
                    :
                    ""
                  }

                  <div class="admin-actions">

                    <button
                      type="button"
                      class="admin-save-main"
                      data-own-save="${x.id}"
                    >
                      ${t("adminSave")}
                    </button>

                    <button
                      type="button"
                      class="danger-button"
                      data-own-delete="${x.id}"
                    >
                      ${t("adminDelete")}
                    </button>

                  </div>

                </div>

              </article>

            `
          )
          .join("")
      }

      ${
        items.length
        ?
        ""
        :
        `<p class="admin-empty">${t("adminEmpty")}</p>`
      }

    </div>

  `;


  $("my-art-image")
    .addEventListener(
      "change",
      e=>{
        const files=imageFiles(e.target.files);
        selectedMyArtImage=files;

        const preview=$("my-art-preview");
        if(!preview)return;

        if(!files.length){
          preview.innerHTML="";
          preview.classList.add("hidden");
          return;
        }

        preview.innerHTML=files.map((f,i)=>`
          <div class="upload-thumb">
            <img
              src="${URL.createObjectURL(f)}"
              alt="preview ${i+1}"
            >
          </div>
        `).join("")+
        `<p class="batch-upload-count">${language==="zh" ? `已选择 ${files.length} 幅` : `${files.length} selected`}</p>`;
        preview.classList.remove("hidden");
      }
    );


  $("add-my-art")
    .addEventListener(
      "click",
      async()=>{
        const title=$("my-art-title").value.trim();
        const files=imageFiles(selectedMyArtImage);
        const selectedDate=$("my-art-date")?.value || new Date().toISOString().slice(0,10);

        if(!files.length){
          $("my-art-message").textContent=t("adminNeedImage");
          return;
        }

        if(!title){
          $("my-art-message").textContent=t("adminNeedTitle");
          return;
        }

        const button=$("add-my-art");
        button.disabled=true;

        try{
          const seriesId=files.length>1 ? crypto.randomUUID() : null;
          const rows=[];

          for(let i=0;i<files.length;i++){
            const file=files[i];
            const image=await uploadGalleryImage(file,"owner");
            rows.push({
              title,
              image_url:image,
              image_title:file.name.replace(/\.[^.]+$/, ""),
              category:$("my-art-category").value,
              note:$("my-art-note").value.trim(),
              is_approved:true,
              is_owner:true,
              user_id:currentUser.id,
              type:seriesId ? "series" : "single",
              series_id:seriesId,
              series_order:seriesId ? i : null,
              created_at:`${selectedDate}T12:00:0${i}.000Z`
            });
          }

          const {error}=await supabaseClient.from("artwork").insert(rows);
          if(error)throw error;

          selectedMyArtImage=[];
          $("my-art-image").value="";
          $("my-art-preview").innerHTML="";
          $("my-art-preview").classList.add("hidden");

          await loadRemoteArtworks();
          await renderAdminMyArt();

          $("my-art-message").textContent=
            language==="zh"
            ? `已经上传 ${files.length} 幅${files.length>1 ? "组画" : "作品"} ♡`
            : `${files.length} artwork${files.length>1 ? "s" : ""} uploaded ♡`;

        }catch(err){
          console.error(err);
          $("my-art-message").textContent=
            language==="zh"
            ? "上传没有成功，请检查 Supabase 权限。"
            : "Upload failed. Please check Supabase permissions.";
        }finally{
          button.disabled=false;
        }
      }
    );


  p.onclick=
    async e=>{

      const save=e.target.closest("[data-own-save]");

      if(save){
        const id=save.dataset.ownSave;
        const card=p.querySelector(`[data-own-art-card="${id}"]`);
        const titleInput=card?.querySelector(`[data-own-title="${id}"]`);
        const dateInput=card?.querySelector(`[data-own-date="${id}"]`);

        const title=(titleInput?.value||"").trim();
        const date=dateInput?.value||"";

        if(!title){
          alert(
            language==="zh"
            ? "作品名字不能为空。"
            : "Artwork title cannot be empty."
          );
          return;
        }

        if(!date){
          alert(
            language==="zh"
            ? "请选择日期。"
            : "Please choose a date."
          );
          return;
        }

        save.disabled=true;

        try{
          const {error}=
            await supabaseClient
              .from("artwork")
              .update({
                title,
                created_at:`${date}T12:00:00.000Z`
              })
              .eq(
                "id",
                id
              )
              .eq(
                "is_owner",
                true
              );

          if(error)throw error;

          await loadRemoteArtworks();
          await renderAdminMyArt();

          $("my-art-message").textContent=
            language==="zh"
            ? "已经保存好啦 ♡"
            : "Saved ♡";

        }catch(err){
          console.error(err);
          alert(
            language==="zh"
            ? `保存失败：${err?.message||"未知错误"}`
            : `Save failed: ${err?.message||"Unknown error"}`
          );
        }finally{
          save.disabled=false;
        }

        return;
      }

      const b=e.target.closest("[data-own-delete]");

      if(!b)return;

      const {error}=
        await supabaseClient
          .from("artwork")
          .delete()
          .eq(
            "id",
            b.dataset.ownDelete
          );

      if(error){
        console.error(error);
        return;
      }

      await loadRemoteArtworks();
      renderAdminMyArt();

    };

}


/* =========================================
   管理员：投稿审核
   ========================================= */

async function renderAdminSubmissions(){

  const p=$("admin-submissions-panel");

  if(!p)return;

  if(!isAdmin()){
    p.innerHTML="";
    return;
  }

  const {data,error}=
    await supabaseClient
      .from("artwork")
      .select(
        "id,created_at,title,image_url,category,is_approved,note,name"
      )
      .eq(
        "is_owner",
        false
      )
      .order(
        "created_at",
        {
          ascending:false
        }
      );

  if(error){

    p.innerHTML=`

      <p class="admin-empty">

        ${
          language==="zh"
          ?
          "暂时读不到投稿，请检查 RLS。"
          :
          "Could not load submissions. Check RLS."
        }

      </p>

    `;

    return;
  }


  p.innerHTML=
    (data||[])
      .map(
        x=>`

          <article class="admin-item">

            <img
              src="${x.image_url}"
              alt="${escapeHtml(x.title||"")}"
            >

            <div>

              <div class="admin-item-top">

                <span
                  class="status-pill ${
                    x.is_approved
                    ?
                    "approved"
                    :
                    "pending"
                  }"
                >
                  ${
                    x.is_approved
                    ?
                    t("adminApproved")
                    :
                    t("adminPending")
                  }
                </span>

                <small>
                  ${new Date(
                    x.created_at
                  ).toLocaleString()}
                </small>

              </div>

              <h4>
                ${escapeHtml(x.title||"")}
              </h4>

              <p class="admin-author">
                ${escapeHtml(
                  x.name||"匿名投稿"
                )}
              </p>

              ${
                x.note
                ?
                `<p>${escapeHtml(x.note)}</p>`
                :
                ""
              }

              <div class="admin-actions">

                ${
                  !x.is_approved
                  ?
                  `
                    <button
                      data-remote-action="approve"
                      data-id="${x.id}"
                    >
                      ${t("adminApprove")}
                    </button>
                  `
                  :
                  ""
                }

                <button
                  class="danger-button"
                  data-remote-action="delete"
                  data-id="${x.id}"
                >
                  ${t("adminDelete")}
                </button>

              </div>

            </div>

          </article>

        `
      )
      .join("")
    ||
    `<p class="admin-empty">${t("adminEmpty")}</p>`;

}


/* =========================================
   管理员：私信
   ========================================= */

async function renderAdminMessages(){

  const p=$("admin-messages-panel");

  if(!p)return;

  const items=remotePrivateMessages;
  const blocked=remoteBlockedUsers;

  p.innerHTML=

    `
      <div class="admin-private-tools">

        <strong>
          ${t("blockedUsers")}
        </strong>

        <div class="blocked-list">

          ${
            blocked
              .map(
                n=>`

                  <span class="blocked-chip">

                    ${escapeHtml(n)}

                    <button
                      type="button"
                      data-unblock-user="${escapeHtml(n)}"
                    >
                      ×
                    </button>

                  </span>

                `
              )
              .join("")
            ||
            `
              <span class="small-note">
                ${t("noBlockedUsers")}
              </span>
            `
          }

        </div>

      </div>
    `

    +

    (
      items
        .map(
          x=>{

            const isBlocked=
              blocked.includes(
                x.name||"匿名"
              );

            return `

              <article
                class="private-admin-note ${
                  isBlocked
                  ?
                  "is-blocked"
                  :
                  ""
                }"
              >

                <div class="admin-item-top">

                  <span class="status-pill private">
                    ${t("adminPrivate")}
                  </span>

                  <small>
                    ${new Date(
                      x.created_at
                    ).toLocaleString()}
                  </small>

                </div>

                <h4>
                  ${escapeHtml(
                    x.name||"匿名"
                  )}
                </h4>

                <p>
                  ${escapeHtml(x.message)}
                </p>

                ${
                  x.reply
                  ?
                  `
                    <div class="admin-reply-preview">

                      <strong>
                        ${t("yourReply")}
                      </strong>

                      <p>
                        ${escapeHtml(x.reply)}
                      </p>

                    </div>
                  `
                  :
                  ""
                }

                <div class="private-actions">

                  <button
                    type="button"
                    data-message-reply="${x.id}"
                  >
                    ${t("replyToMessage")}
                  </button>

                  <button
                    type="button"
                    data-block-user="${escapeHtml(
                      x.name||"匿名"
                    )}"
                  >
                    ${
                      isBlocked
                      ?
                      t("unblockUser")
                      :
                      t("blockUser")
                    }
                  </button>

                  <button
                    type="button"
                    class="danger-button"
                    data-message-delete="${x.id}"
                  >
                    ${t("adminDelete")}
                  </button>

                </div>

                <form
                  class="private-reply-form hidden"
                  data-reply-message-form="${x.id}"
                >

                  <textarea
                    maxlength="500"
                    placeholder="${t("replyMessagePlaceholder")}"
                  >${escapeHtml(
                    x.reply||""
                  )}</textarea>

                  <button
                    type="submit"
                    class="admin-save-main"
                  >
                    ${t("sendAdminReply")}
                  </button>

                </form>

              </article>

            `;

          }
        )
        .join("")
    )

    ||

    `<p class="admin-empty">${t("adminNoMessages")}</p>`;

}


/* =========================================
   管理员：UU的话
   ========================================= */

async function renderAdminTalks(){

  const p=$("admin-talk-panel");

  if(!p)return;

  const talks=remoteUuTalks;

  p.innerHTML=`

    <h3>
      ${t("editUuTalk")}
    </h3>

    <label>
      ${t("talkTitle")}
    </label>

    <input
      id="talk-title"
      maxlength="80"
      placeholder="${t("talkTitlePlaceholder")}"
    >

    <label>
      ${t("talkText")}
    </label>

    <textarea
      id="talk-text"
      maxlength="1000"
      placeholder="${t("talkTextPlaceholder")}"
    ></textarea>

    <label>
      ${t("talkDate")}
    </label>

    <input
      id="talk-date"
      type="date"
      value="${new Date().toISOString().slice(0,10)}"
    >

    <button
      id="add-uu-talk"
      class="admin-save-main"
    >
      ${t("publishTalk")}
    </button>

    <div class="admin-talk-list">

      ${
        talks
          .map(
            x=>`

              <article>

                <div>

                  <strong>
                    ${escapeHtml(x.title)}
                  </strong>

                  <small>
                    ${escapeHtml(x.date||"")}
                  </small>

                  <p>
                    ${escapeHtml(x.text)}
                  </p>

                </div>

                <button
                  class="danger-button"
                  data-talk-delete="${x.id}"
                >
                  ${t("adminDelete")}
                </button>

              </article>

            `
          )
          .join("")
      }

    </div>

  `;


  $("add-uu-talk").onclick=
    async()=>{

      const title=
        $("talk-title")
          .value
          .trim();

      const text=
        $("talk-text")
          .value
          .trim();

      if(!title||!text)return;

      const {error}=
        await supabaseClient
          .from("uu_talks")
          .insert({
            title,
            text,
            date:$("talk-date").value
          });

      if(error){
        console.error(error);
        return;
      }

      await loadRemoteInteractions();

      renderAdminTalks();

    };


  p.onclick=
    async e=>{

      const b=
        e.target.closest(
          "[data-talk-delete]"
        );

      if(!b)return;

      const {error}=
        await supabaseClient
          .from("uu_talks")
          .delete()
          .eq(
            "id",
            b.dataset.talkDelete
          );

      if(error){
        console.error(error);
      }

      await loadRemoteInteractions();

      renderAdminTalks();

    };

}


function renderAdminAll(){

  renderAdminEditor();
  renderAdminMyArt();
  renderAdminSubmissions();
  renderAdminMessages();
  renderAdminTalks();

}


/* =========================================
   管理员事件
   ========================================= */

function bindAdminDelegates(){

  $("admin-submissions-panel")
    ?.addEventListener(
      "click",
      async e=>{

        const b=
          e.target.closest(
            "[data-remote-action]"
          );

        if(!b||!isAdmin())return;

        const id=b.dataset.id;

        if(
          b.dataset.remoteAction==="approve"
        ){

          await supabaseClient
            .from("artwork")
            .update({
              is_approved:true
            })
            .eq(
              "id",
              id
            );

        }else if(
          b.dataset.remoteAction==="delete"
        ){

          await supabaseClient
            .from("artwork")
            .delete()
            .eq(
              "id",
              id
            );

        }

        await loadRemoteArtworks();

        renderAdminSubmissions();

      }
    );


  $("admin-messages-panel")
    ?.addEventListener(
      "click",
      async e=>{

        const del=
          e.target.closest(
            "[data-message-delete]"
          );

        if(del){

          await supabaseClient
            .from("private_messages")
            .delete()
            .eq(
              "id",
              del.dataset.messageDelete
            );

          await loadRemoteInteractions();

          return;
        }


        const rep=
          e.target.closest(
            "[data-message-reply]"
          );

        if(rep){

          document
            .querySelector(
              `[data-reply-message-form="${rep.dataset.messageReply}"]`
            )
            ?.classList
            .toggle("hidden");

          return;
        }


        const block=
          e.target.closest(
            "[data-block-user]"
          );

        if(block){

          const name=
            block.dataset.blockUser;

          if(
            remoteBlockedUsers.includes(name)
          ){

            await supabaseClient
              .from("blocked_users")
              .delete()
              .eq(
                "name",
                name
              );

          }else{

            await supabaseClient
              .from("blocked_users")
              .insert({
                name
              });

          }

          await loadRemoteInteractions();

          return;
        }


        const unblock=
          e.target.closest(
            "[data-unblock-user]"
          );

        if(unblock){

          await supabaseClient
            .from("blocked_users")
            .delete()
            .eq(
              "name",
              unblock.dataset.unblockUser
            );

          await loadRemoteInteractions();

        }

      }
    );


  $("admin-messages-panel")
    ?.addEventListener(
      "submit",
      async e=>{

        if(
          !e.target.matches(
            "[data-reply-message-form]"
          )
        ){
          return;
        }

        e.preventDefault();

        const id=
          e.target.dataset.replyMessageForm;

        const text=
          e.target
            .querySelector("textarea")
            .value
            .trim();

        if(!text)return;

        await supabaseClient
          .from("private_messages")
          .update({
            reply:text,
            replied_at:
              new Date().toISOString()
          })
          .eq(
            "id",
            id
          );

        await loadRemoteInteractions();

      }
    );

}


/* =========================================
   启动
   ========================================= */

(async function boot(){

  try{

    await initEvents();

    bindAdminDelegates();

    if(!supabaseClient){

      setAdminMessage(
        "管理员系统没有连接到 Supabase，请检查 supabase-config.js。",
        "error"
      );

      applyLanguage();

      return;
    }

    await loadRemoteSettings();

    applyLanguage();

    await loadRemoteArtworks();

    await loadRemoteInteractions();

    setupRealtime();

    await refreshAuth();


    supabaseClient
      .auth
      .onAuthStateChange(
        async(
          _event,
          session
        )=>{

          currentUser=
            session?.user||null;

          adminUnlocked=
            !!currentUser;

          updateAdminVisibility();

          if(adminUnlocked){

            await loadRemoteSettings();

            applyLanguage();

            renderAdminAll();

          }

        }
      );

  }catch(err){

    console.error(
      "UU boot error",
      err
    );

    setAdminMessage(
      "页面初始化失败，请刷新一次。",
      "error"
    );

  }

})();
