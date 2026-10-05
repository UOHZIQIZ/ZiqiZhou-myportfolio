/* =========================================================
   作品集内容配置 —— 以后只需要改这个文件
   ---------------------------------------------------------
   【多语言】凡是写成 { zh: "简体", zht: "繁體", en: "English", ja: "日本語", fr: "Français", ko: "한국어" }
            的地方，右上角切换语言时会自动换。
            没写的语言会自动退回：繁体 → 简体，其它 → 英文 → 简体。
            只写一种也可以：直接写 "文字"。
   【图片】image 留空 ""：自动画一张繁花拼贴图（占位）
          填路径：例如 "images/campus-cover.jpg"；或完整网址
   【配色】theme 决定占位拼贴的配色：
          "rose" 粉玫瑰 / "blue" 蓝花蝴蝶 / "garden" 红花鼠尾草 / "pressed" 干燥压花 / "meadow" 黄色野花
   【案例】process、website、pdf 都可以删掉，删掉的部分详情页就不显示
   ========================================================= */

window.PORTFOLIO = {
  /* 个人信息
     photo：个人照片路径，例如 "images/me.jpg"；留空显示占位
     resume：简历 PDF（files/resume.pdf），替换同名文件即可更新
     about：关于我页面的段落；bio：首页名片下的一句话 */
  profile: {
    nameEn: [
      "Ziqi Zhou",
      "Cathy"
    ],
    nameZh: "周子淇",
    monogram: "Cathy Z.",
    ticker: "Ziqi Zhou's portfolio",
    sealLetter: "C",
    photo: "",
    heroImage: "",
    tag: {
      zh: "交互设计 · Interaction Design Portfolio",
      zht: "互動設計 · Interaction Design Portfolio",
      en: "Interaction Design Portfolio",
      ja: "インタラクションデザイン · ポートフォリオ",
      fr: "Design d'Interaction · Portfolio",
      ko: "인터랙션 디자인 · 포트폴리오"
    },
    tagline: {
      zh: "用设计连接人与体验",
      zht: "用設計連接人與體驗",
      en: "Connecting people through design",
      ja: "デザインで人と体験をつなぐ",
      fr: "Connecter les personnes à travers le design",
      ko: "디자인으로 사람과 경험을 연결하다"
    },
    bio: {
      zh: "我是周子淇（Cathy），Sheridan College 交互设计专业学生，擅长用户研究、线框图、交互原型和可用性测试。",
      zht: "我是周子淇（Cathy），Sheridan College 互動設計專業學生，擅長用戶研究、線框圖、互動原型和可用性測試。",
      en: "I'm Ziqi Zhou (Cathy), an Interaction Design student at Sheridan College, skilled in UX research, wireframing, interactive prototyping and usability testing.",
      ja: "周子淇（Cathy）です。Sheridan College でインタラクションデザインを学び、UXリサーチ、ワイヤーフレーム、インタラクティブプロトタイプ、ユーザビリティテストを得意としています。",
      fr: "Je suis Ziqi Zhou (Cathy), étudiante en design d'interaction à Sheridan College : recherche UX, wireframes, prototypage interactif et tests d'utilisabilité.",
      ko: "저는 저우쯔치(Cathy)입니다. Sheridan College 인터랙션 디자인 전공생으로 UX 리서치, 와이어프레임, 인터랙티브 프로토타이핑, 사용성 테스트에 강점이 있습니다."
    },
    aboutHeading: {
      zh: "你好，我是<br><em>周子淇</em>",
      zht: "你好，我是<br><em>周子淇</em>",
      en: "Hi, I'm<br><em>Ziqi Zhou</em>",
      ja: "こんにちは、<br><em>周子淇</em>です",
      fr: "Bonjour, je suis<br><em>Ziqi Zhou</em>",
      ko: "안녕하세요,<br><em>저우쯔치</em>입니다"
    },
    about: [
      {
        zh: "你好！我是周子淇（Cathy），在 Sheridan College 攻读交互设计荣誉学士（预计 2028 年 4 月毕业）。我擅长用户研究、线框图、交互原型和可用性测试，关注数字产品、信息架构、交互原型和创意编程。",
        zht: "你好！我是周子淇（Cathy），在 Sheridan College 攻讀互動設計榮譽學士（預計 2028 年 4 月畢業）。我擅長用戶研究、線框圖、互動原型和可用性測試，關注數位產品、資訊架構、互動原型和創意編程。",
        en: "Hi! I’m Ziqi Zhou (Cathy), studying for an Honours Bachelor of Interaction Design at Sheridan College (expected April 2028). I’m skilled in UX research, wireframing, interactive prototyping and usability testing, and I focus on digital products, information architecture, interactive prototypes and creative coding.",
        ja: "こんにちは！周子淇（Cathy）です。Sheridan College でインタラクションデザインの Honours Bachelor を学んでいます（2028年4月卒業予定）。UXリサーチ、ワイヤーフレーム、インタラクティブプロトタイプ、ユーザビリティテストが得意で、デジタルプロダクト、情報設計、インタラクティブプロトタイプ、クリエイティブコーディングに取り組んでいます。",
        fr: "Bonjour ! Je suis Ziqi Zhou (Cathy), en Honours Bachelor of Interaction Design à Sheridan College (diplôme prévu en avril 2028). Je pratique la recherche UX, les wireframes, le prototypage interactif et les tests d’utilisabilité, et je me concentre sur les produits numériques, l’architecture de l’information, les prototypes interactifs et le creative coding.",
        ko: "안녕하세요! 저우쯔치(Cathy)입니다. Sheridan College에서 인터랙션 디자인 우등 학사 과정을 공부하고 있습니다(2028년 4월 졸업 예정). UX 리서치, 와이어프레임, 인터랙티브 프로토타이핑, 사용성 테스트에 강점이 있으며 디지털 제품, 정보 구조, 인터랙티브 프로토타입, 크리에이티브 코딩에 집중하고 있습니다."
      },
      {
        zh: "我是一个细心、注重细节的问题解决者，习惯用 Figma、ProtoPie 和 p5.js 做直观的界面，以及实体与数字结合的原型。从启发式评估、有声思维测试，到无障碍的触觉导航设计，我喜欢用研究和测试的证据来推动每一次迭代。",
        zht: "我是一個細心、注重細節的問題解決者，習慣用 Figma、ProtoPie 和 p5.js 做直觀的介面，以及實體與數位結合的原型。從啟發式評估、有聲思維測試，到無障礙的觸覺導航設計，我喜歡用研究和測試的證據來推動每一次迭代。",
        en: "I'm a thoughtful, detail-driven problem solver who builds intuitive interfaces and physical/digital prototypes with Figma, ProtoPie and p5.js. From heuristic evaluations and think-aloud testing to barrier-free haptic navigation, I like to let research and testing evidence drive each iteration.",
        ja: "細部にこだわる問題解決型のデザイナーとして、Figma・ProtoPie・p5.js で直感的なインターフェースやフィジカル／デジタルのプロトタイプを制作しています。ヒューリスティック評価や思考発話テストからバリアフリーの触覚ナビゲーションまで、リサーチとテストの結果をもとに改善を重ねます。",
        fr: "Attentive aux détails, j'aime résoudre des problèmes en créant des interfaces intuitives et des prototypes physiques et numériques avec Figma, ProtoPie et p5.js. De l'évaluation heuristique aux tests à voix haute, jusqu'à la navigation haptique sans obstacles, je laisse la recherche et les tests guider chaque itération.",
        ko: "세심하고 디테일을 중시하는 문제 해결자로서 Figma, ProtoPie, p5.js로 직관적인 인터페이스와 피지컬·디지털 프로토타입을 만듭니다. 휴리스틱 평가와 사고 발화 테스트부터 배리어프리 햅틱 내비게이션까지, 리서치와 테스트 근거로 각 반복을 이끌어 갑니다."
      }
    ],
    philosophy: {
      lead: {
        zh: "",
        en: ""
      },
      principles: [
        {
          title: {
            zh: "交互是身体的",
            en: "Interaction is physical"
          },
          text: {
            zh: "屏幕只是其中一个入口。我最近的作品用到触摸、声音和手工做的控制器——铝箔和木条琴键、戴上就会亮的发带——因为人首先是用身体认识世界的。我想做的是可以感受到、在动手中学会的交互，而不是需要读说明才能用的交互。",
            en: "A screen is only one way in. My recent work uses touch, voice, sound and hand-built controllers — foil and wooden keys, a headband that lights up when you wear it — because people understand the world through their bodies first. I want interactions you can feel and learn by doing, not ones you have to read instructions for."
          }
        }
      ]
    },
    city: "Toronto",
    timezone: "America/Toronto",
    status: {
      zh: "寻找 2026 实习机会",
      zht: "尋找 2026 實習機會",
      en: "Looking for 2026 internships",
      ja: "2026年のインターンを探しています",
      fr: "À la recherche d'un stage 2026",
      ko: "2026 인턴십 구하는 중"
    },
    email: "zhou37@sheridancollege.ca",
    resume: "files/resume.pdf",
    contactHeading: {
      zh: "一起创造<em>有意义</em>的设计",
      zht: "一起創造<em>有意義</em>的設計",
      en: "Let's create something <em>meaningful</em>",
      ja: "一緒に<em>意味のある</em>デザインを",
      fr: "Créons quelque chose <em>de sens</em>",
      ko: "함께 <em>의미 있는</em> 디자인을"
    },
    contactSub: {
      zh: "如果你有任何合作想法、实习机会，或只是想打个招呼，都欢迎联系我！",
      zht: "如果你有任何合作想法、實習機會，或只是想打個招呼，都歡迎聯絡我！",
      en: "Whether you have a collaboration idea, an internship opportunity, or just want to say hello — feel free to reach out!",
      ja: "コラボレーションのアイデア、インターンシップの機会、または単なる挨拶でも、お気軽にご連絡ください！",
      fr: "Que vous ayez une idée de collaboration, une offre de stage, ou juste envie de dire bonjour — n'hésitez pas !",
      ko: "협업 아이디어, 인턴십 기회, 또는 인사라도 언제든지 연락 주세요!"
    },
    contactNote: {
      zh: "我目前在 Sheridan College 就读，欢迎关于实习合作、设计交流的联系。我会在 24 小时内回复邮件。",
      zht: "我目前在 Sheridan College 就讀，歡迎關於實習合作、設計交流的聯絡。我會在 24 小時內回覆郵件。",
      en: "I'm currently studying at Sheridan College and open to internship and design collaboration opportunities. I reply to emails within 24 hours.",
      ja: "現在 Sheridan College に在学中です。インターンシップやデザインコラボレーションに関するお問い合わせをお待ちしています。24時間以内に返信します。",
      fr: "J'étudie actuellement à Sheridan College et suis ouverte aux opportunités de stage et de collaboration design. Je réponds aux emails sous 24h.",
      ko: "현재 Sheridan College 재학 중이며 인턴십 및 디자인 협업 기회를 환영합니다. 이메일은 24시간 내에 답장드립니다."
    },
    contacts: [
      {
        type: "email",
        label: {
          zh: "邮件",
          zht: "郵件",
          en: "Email",
          ja: "メール",
          fr: "Email",
          ko: "이메일"
        },
        value: "zhou37@sheridancollege.ca",
        url: "mailto:zhou37@sheridancollege.ca"
      },
      {
        type: "linkedin",
        label: "LinkedIn",
        value: "Ziqi Zhou (Cathy)",
        url: "https://www.linkedin.com/in/ziqi-zhou-cathy-05oct/"
      },
      {
        type: "resume",
        label: {
          zh: "简历",
          zht: "簡歷",
          en: "Résumé",
          ja: "履歴書",
          fr: "CV",
          ko: "이력서"
        },
        value: {
          zh: "下载 PDF",
          zht: "下載 PDF",
          en: "Download PDF",
          ja: "PDF をダウンロード",
          fr: "Télécharger le PDF",
          ko: "PDF 다운로드"
        },
        url: "files/resume.pdf"
      }
    ],
    facts: [
      {
        k: {
          zh: "学校",
          zht: "學校",
          en: "School",
          ja: "学校",
          fr: "École",
          ko: "학교"
        },
        v: "Sheridan"
      },
      {
        k: {
          zh: "专业",
          zht: "專業",
          en: "Major",
          ja: "専攻",
          fr: "Filière",
          ko: "전공"
        },
        v: {
          zh: "交互设计",
          zht: "互動設計",
          en: "IxD",
          ja: "IxD",
          fr: "IxD",
          ko: "IxD"
        }
      },
      {
        k: {
          zh: "年份",
          zht: "年份",
          en: "Years",
          ja: "在学",
          fr: "Années",
          ko: "기간"
        },
        v: "2024—28"
      }
    ]
  },
  /* 作品分类（精选作品上方的标签）
     id 用英文；每个作品的 category 填这里的 id
     没有作品的分类会显示成灰色、点不了；想完全隐藏就把 hideEmptyCategories 改成 true */
  hideEmptyCategories: true,
  categories: [
    {
      id: "ux",
      zh: "UX 与网页",
      zht: "UX 與網頁",
      en: "UX & Web",
      ja: "UX・Web",
      fr: "UX & Web",
      ko: "UX & 웹"
    },
    {
      id: "research",
      zh: "用户研究与可用性",
      zht: "用戶研究與可用性",
      en: "UX Research & Usability",
      ja: "UXリサーチ・ユーザビリティ",
      fr: "Recherche UX & utilisabilité",
      ko: "UX 리서치 & 사용성"
    },
    {
      id: "inclusive",
      zh: "无障碍与包容性设计",
      zht: "無障礙與包容性設計",
      en: "Accessible & Inclusive Design",
      ja: "アクセシブル・インクルーシブデザイン",
      fr: "Design accessible et inclusif",
      ko: "접근성 · 포용적 디자인"
    },
    {
      id: "physical",
      zh: "实体与交互",
      zht: "實體與互動",
      en: "Physical & Interactive",
      ja: "フィジカル・インタラクティブ",
      fr: "Physique & Interactif",
      ko: "피지컬 & 인터랙티브"
    },
    {
      id: "games",
      zh: "游戏与工具",
      zht: "遊戲與工具",
      en: "Games & Tools",
      ja: "ゲーム・ツール",
      fr: "Jeux & Outils",
      ko: "게임 & 도구"
    },
    {
      id: "brand",
      zh: "品牌与标识",
      zht: "品牌與標識",
      en: "Branding & Identity",
      ja: "ブランド・ロゴ",
      fr: "Identité visuelle",
      ko: "브랜딩 & 아이덴티티"
    },
    {
      id: "type",
      zh: "字体排版",
      zht: "字體排版",
      en: "Typography",
      ja: "タイポグラフィ",
      fr: "Typographie",
      ko: "타이포그래피"
    },
    {
      id: "client",
      zh: "客户",
      zht: "客戶",
      en: "Client",
      ja: "クライアント",
      fr: "Client",
      ko: "클라이언트"
    }
  ],

  /* ---------------- 作品 ----------------
     id：英文短名（小写字母、数字、-），网址里会用到：index.html#case-id
     category：填上面 categories 里的 id
     specs：详情页顶部的信息卡（课程、学期、工具、时长……），可以增减
     website：网站 / Figma / Protopie 原型链接
     pdf：src 填 PDF 链接（放在 files 文件夹里，或 Google Drive 预览链接）
     process：问题背景 / 用户研究 / 概念发想 / 设计迭代 / 测试与验证 / 最终成果
              每一步的 images 里可以放多张图片，例如 ["images/campus-01.jpg", "images/campus-02.jpg"]
     intro：首页卡片和详情页上的简短介绍
     outline：长流程大纲（只需要给一个作品写）；每一步有 text（段落）和 media：
              image 图片 / gallery 多张图 / video 视频 / diagram 图表 / stats 数字 / quotes 引用
     demo：做出来的成品网页（“体验成品”按钮），比如 Project 2、3
     view：作品的过程记录网站（“过程网站”按钮）（需要单独打开的那种）。填 { url: "projects/你的文件夹/index.html" } 或完整网址，
           作品卡片和详情页就会出现“点击查看”按钮，点击在新窗口打开
     draft: true 的作品不会显示；删掉这一行就会出现在网站上
     顺序就是网站上的顺序 */
  projects: [
    {
      id: "mmb-p2-time-data",
      category: "ux",
      course: "IXD: Media, Motion & Body",
      title: {
        zh: "Time and Data",
        en: "Time and Data"
      },
      subtitle: {
        zh: "p5.js 声音可视化网站",
        en: "p5.js sound-visualization website"
      },
      intro: {
        zh: "声音每天包围着我们，却看不见。这个 p5.js 网站把声音变成可以看、也可以参与的图形：跟着歌曲，频谱、脉冲和 3D 立方体随节奏变化；打开麦克风，你用自己的声音让放下的图形呼吸和变形。我想证明，数据可视化不一定是一张静态图表，它可以是一种让人愿意停下来“玩”的体验。",
        en: "Sound surrounds us all day, yet we never see it. This p5.js website turns sound into shapes you can watch and take part in: with a song, a spectrum, a pulse and 3D cubes move to the beat; with the microphone on, your own voice makes the shapes you place breathe and change. I wanted to show that data visualization doesn't have to be a static chart — it can be an experience people want to stop and play with."
      },
      summary: {
        zh: "",
        en: ""
      },
      tags: [
        "p5.js",
        "Sound",
        "Web"
      ],
      image: "images/projects/p2/cover.webp",
      theme: "blue",
      view: {
        url: "projects/MM%26B%20Module%202%20Web%20Template/index.html",
        label: {
          zh: "过程网站 ↗",
          zht: "過程網站 ↗",
          en: "Process site ↗",
          ja: "プロセスサイト ↗",
          fr: "Site du processus ↗",
          ko: "과정 사이트 ↗"
        }
      },
      links: [
        {
          label: {
            zh: "YouTube 演示视频 ↗",
            en: "Demo video on YouTube ↗"
          },
          url: "https://youtu.be/AmP7iFSQApk"
        }
      ],
      pdf: {
        src: "files/MMB-Project2-Time-and-Data.pdf",
        pages: 40,
        label: "Project 2 · Time and Data.pdf"
      },
      specs: [
        {
          k: {
            zh: "课程",
            zht: "課程",
            en: "Course",
            ja: "コース",
            fr: "Cours",
            ko: "과목"
          },
          v: "IXD: Media, Motion & Body"
        },
        {
          k: {
            zh: "学期",
            zht: "學期",
            en: "Term",
            ja: "学期",
            fr: "Session",
            ko: "학기"
          },
          v: {
            zh: "2026 冬季学期",
            en: "Winter 2026"
          }
        },
        {
          k: {
            zh: "路线",
            zht: "路線",
            en: "Path",
            ja: "コース",
            fr: "Parcours",
            ko: "경로"
          },
          v: {
            zh: "个人路线",
            en: "Individual path"
          }
        },
        {
          k: {
            zh: "工具与材料",
            zht: "工具與材料",
            en: "Tools & materials",
            ja: "ツール・素材",
            fr: "Outils et matériaux",
            ko: "도구 · 재료"
          },
          v: {
            zh: "p5.js、p5.sound、麦克风、HTML / CSS / JS",
            en: "p5.js, p5.sound, microphone, HTML / CSS / JS"
          }
        },
        {
          k: {
            zh: "作品类型",
            zht: "作品類型",
            en: "Type",
            ja: "種類",
            fr: "Type",
            ko: "유형"
          },
          v: {
            zh: "交互网页",
            en: "Interactive website"
          }
        }
      ],
      outline: [
        {
          key: "brief",
          title: {
            zh: "项目要求",
            zht: "項目要求",
            en: "The brief",
            ja: "課題の内容",
            fr: "Le brief",
            ko: "과제 내용"
          },
          text: [
            {
              zh: "项目二把声音当作设计媒介：在很多文化更重视视觉的背景下，探索声音如何引发视觉回应，又如何被其他感官的互动所触发。",
              en: "Project 2 treats sound as a design medium. Since many cultures put sight ahead of the other senses, it explored how sound can drive a visual response and how other kinds of interaction can produce sound."
            },
            {
              zh: "我选择了个人路线：用 p5.sound 库做一个带交互声音的 p5.js 网页页头，发布在 Phoenix 服务器上。它要能回应麦克风输入或页面上的声音互动，也要体现我作为设计师的兴趣。",
              en: "I took the individual path: an interactive p5.js web header built with the p5.sound library and published on the Phoenix server. It had to respond to microphone input or on-page sound, and to say something about my interests as a designer."
            }
          ],
          media: []
        },
        {
          key: "problem",
          title: {
            zh: "设计概念",
            en: "Concept"
          },
          text: [
            {
              zh: "这个项目想把无形的声音能量变成看得见、摸得着的视觉形式。我用 p5.js 搭了一个会实时回应声音的网页环境：首页有四个按钮，分别进入 Song 1、Song 2、Song 3 和 Sound 4 四个视觉“环境”。前三个跟着内置音乐变化，第四个读取麦克风。",
              en: "This project turns intangible sound into a visible, touchable form. I built a p5.js web environment that responds to audio in real time. The home page has four buttons leading to four visual environments: Song 1, Song 2 and Song 3 react to built-in music, and Sound 4 listens to the microphone."
            },
            {
              zh: "三个设计原则：实时反馈——音量和频率的变化立刻带来可辨认的画面变化；多种呈现——同一段声音可以有四种视觉解读；抽象表达——用几何图形而不是具象图片，让人更直接地感受声音本身。",
              en: "Three principles guided it: real-time feedback, so changes in volume and frequency instantly change the image; multiple readings, with four ways to see the same sound; and abstraction, using geometry instead of pictures so people feel the sound itself."
            }
          ],
          media: [
            {
              type: "image",
              src: "images/projects/p2/home.webp",
              alt: {
                zh: "网站首页，四个按钮选择歌曲",
                en: "Website home page with four song buttons"
              },
              caption: {
                zh: "首页：选择你的歌",
                en: "Home page: choose your song"
              },
              wide: true
            }
          ]
        },
        {
          key: "research",
          title: {
            zh: "艺术家研究",
            en: "Artist research"
          },
          text: [
            {
              zh: "Bill Viola《The Messenger》（1996）：一段 28 分钟循环播放的影像，一个人在深水中缓缓浮起、呼吸、又沉下去。它的循环结构启发我加入“循环记忆”，让前几秒的声音影响当前画面；黑暗与光的交替让我明白，安静和空白同样是视觉语言的一部分，画面不需要时刻被填满。",
              en: "Bill Viola, The Messenger (1996): a 28-minute looping video in which a figure slowly rises from dark water, breathes and sinks again. Its loop inspired a kind of cyclic memory, where the last few seconds of sound shape the current frame. Its shifts between dark and light taught me that silence and empty space are part of the visual language too."
            },
            {
              zh: "Granular-Synthesis《Modell 5》（1994–1996）：把影像和声音拆成最小单元再重新组合。它启发我尝试“采样—重组”的逻辑，把声音拆成细小的粒子来驱动画面，也提醒我节奏和重复本身就有很强的情绪力量。",
              en: "Granular-Synthesis, Modell 5 (1994–1996): image and sound broken into tiny units and recombined. It led me to try a sample-and-recombine logic, driving the visuals with sound broken into particles, and reminded me how much emotional force rhythm and repetition carry."
            }
          ],
          media: [
            {
              type: "quotes",
              items: [
                {
                  zh: "“安静和空白同样是视觉语言的重要组成部分。”",
                  en: "“Silence and gaps are just as much part of the visual language.”"
                }
              ]
            }
          ]
        },
        {
          key: "ideation",
          title: {
            zh: "形态探索",
            en: "Formstorming"
          },
          text: [
            {
              zh: "活动一（第 6 周）：用手机录了 25 段日常声音，建立自己的声音库，发现每种声音都有独特的波形和频率特征。",
              en: "Activity 1 (Week 6): I recorded 25 everyday sounds on my phone to build a sound library, and found that each has its own waveform and frequency character."
            },
            {
              zh: "活动二（第 7 周）：学习 p5.js 声音可视化。一开始只能用音量控制一个圆的大小，画面太单调；之后尝试了频谱图和 3D 几何体；最大的突破来自 Granular-Synthesis 的启发，开始做“粒子”效果。",
              en: "Activity 2 (Week 7): learning p5.js sound visualization. At first I could only scale a circle with volume, which felt flat. I then tried spectrograms and 3D geometry; the breakthrough, inspired by Granular-Synthesis, was particle effects."
            }
          ],
          media: [
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p2/recordings.webp",
                  alt: {
                    zh: "录制日常声音的场景照片",
                    en: "Photos of everyday sounds being recorded"
                  },
                  caption: {
                    zh: "活动一：25 段日常声音",
                    en: "Activity 1: 25 everyday sounds"
                  }
                },
                {
                  src: "images/projects/p2/sketches.webp",
                  alt: {
                    zh: "早期 p5.js 视觉效果合集",
                    en: "Early p5.js visual experiments"
                  },
                  caption: {
                    zh: "活动二：p5.js 视觉实验",
                    en: "Activity 2: p5.js experiments"
                  }
                }
              ]
            },
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p2/proto-spectrum.webp",
                  alt: {
                    zh: "紫粉色频谱图原型",
                    en: "Purple-pink spectrogram prototype"
                  },
                  caption: {
                    zh: "原型：频谱图",
                    en: "Prototype: spectrogram"
                  }
                },
                {
                  src: "images/projects/p2/proto-cubes.webp",
                  alt: {
                    zh: "漂浮的 3D 立方体原型",
                    en: "Floating 3D cube prototype"
                  },
                  caption: {
                    zh: "原型：3D 几何",
                    en: "Prototype: 3D geometry"
                  }
                },
                {
                  src: "images/projects/p2/proto-shapes.webp",
                  alt: {
                    zh: "由点击生成的几何图形原型",
                    en: "Click-generated geometric shapes"
                  },
                  caption: {
                    zh: "原型：几何粒子",
                    en: "Prototype: geometric particles"
                  }
                }
              ]
            }
          ]
        },
        {
          key: "design",
          title: {
            zh: "四个视觉环境",
            en: "Four visual environments"
          },
          text: [
            {
              zh: "Song 1 用频谱图呈现音乐中的“高频截止”，模拟黑胶唱片温暖的复古音色；Song 2 用放射状的脉冲波，跟着 R&B 的节奏起伏；Song 3 让立方体旋转、出现，表现星际穿越的眩晕感；Sound 4 让用户点击屏幕放下图形，再用麦克风的声音控制它们变化。",
              en: "Song 1 uses a spectrogram to show the high-frequency cut-off that gives vinyl its warm, retro sound. Song 2 is a radial pulse that swells with an R&B beat. Song 3 spins and spawns cubes to evoke the dizziness of space travel. In Sound 4, you click to place shapes and your microphone input makes them move."
            },
            {
              zh: "关键决定：不把所有声音参数都塞进画面，而是每个环境只设置一两种变化，让人一眼就能看出“声音在控制什么”。",
              en: "Key decision: rather than mapping every sound parameter to the visuals, each environment responds in only one or two ways, so it's always clear what the sound is controlling."
            }
          ],
          media: [
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p2/song1.webp",
                  alt: {
                    zh: "Song 1 频谱图页面",
                    en: "Song 1 spectrogram page"
                  },
                  caption: {
                    zh: "Song 1：频谱",
                    en: "Song 1: spectrum"
                  }
                },
                {
                  src: "images/projects/p2/song2.webp",
                  alt: {
                    zh: "Song 2 放射状脉冲页面",
                    en: "Song 2 radial pulse page"
                  },
                  caption: {
                    zh: "Song 2：放射脉冲",
                    en: "Song 2: radial pulse"
                  }
                }
              ]
            },
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p2/song3.webp",
                  alt: {
                    zh: "Song 3 立方体页面",
                    en: "Song 3 cube page"
                  },
                  caption: {
                    zh: "Song 3：星际立方体",
                    en: "Song 3: space cubes"
                  }
                },
                {
                  src: "images/projects/p2/sound4.webp",
                  alt: {
                    zh: "Sound 4 麦克风互动页面",
                    en: "Sound 4 microphone page"
                  },
                  caption: {
                    zh: "Sound 4：用声音控制",
                    en: "Sound 4: voice control"
                  }
                }
              ]
            }
          ]
        },
        {
          key: "testing",
          title: {
            zh: "调试与挑战",
            en: "Debugging & challenges"
          },
          text: [
            {
              zh: "最大的挑战是代码调试中的“多米诺效应”。做 3D 立方体时，粒子系统本来运行流畅，加上 FFT 频谱分析后粒子开始卡顿；花一天优化好粒子后，颜色映射又失效了；修好颜色，麦克风输入又不能用了……每改一个模块，另一个原本正常的部分就会出问题。",
              en: "The biggest challenge was a domino effect while debugging. On the 3D cubes, the particles ran smoothly until I added FFT analysis, then they stuttered. After a day fixing that, the colour mapping broke; fixing the colours broke the microphone input. Every fix to one module broke another."
            },
            {
              zh: "这让我真正意识到：在交互系统里，声音输入、数据分析、画面渲染和界面看似独立，其实在代码里紧密耦合。",
              en: "It made me realise that in an interactive system, sound input, analysis, rendering and interface look separate but are tightly coupled in the code."
            }
          ],
          media: []
        },
        {
          key: "outcome",
          title: {
            zh: "反思",
            en: "Reflection"
          },
          text: [
            {
              zh: "我逐渐理解了“声音即数据”：振幅、频率、波形不再是抽象概念，而是可以操作的视觉效果。更重要的是，交互设计的核心不是展示技术有多复杂，而是让一切保持足够清晰，在人和媒介之间建立有意义、有情感的对话。",
              en: "I came to understand sound as data: amplitude, frequency and waveform became visuals I could work with rather than abstract ideas. More importantly, I learned that interaction design is not about showing off technical complexity but about keeping things clear, so people and media can have a meaningful, emotional dialogue."
            }
          ],
          media: []
        },
        {
          key: "outcomes",
          title: {
            zh: "项目学习成果",
            zht: "項目學習成果",
            en: "Learning outcomes",
            ja: "学習成果",
            fr: "Acquis d'apprentissage",
            ko: "학습 성과"
          },
          text: [
            {
              zh: "这个项目展示了课程的以下学习成果：",
              en: "This project demonstrates these course learning outcomes:"
            }
          ],
          media: [
            {
              type: "list",
              items: [
                {
                  zh: "把文字、视觉媒体、声音、时间和动态元素整合进交互设计概念。",
                  en: "Integrate text, visual media, sound, time and motion into interaction design concepts."
                },
                {
                  zh: "把时间（包括顺序和节奏）作为交互设计的元素。",
                  en: "Incorporate time, including sequence and pace, as an element of interactive design."
                },
                {
                  zh: "编写和修改代码，制作交互设计草图、原型和作品。",
                  en: "Write and modify scripts and source code to create interactive sketches, prototypes and compositions."
                },
                {
                  zh: "分析电子元件、输入传感器和显示设备等实体计算元素带来的设计机会。",
                  en: "Analyze the design opportunities of physical computing elements such as electronics, input sensors and displays."
                },
                {
                  zh: "通过图像、口头和文字记录，说明项目背景、过程和个人贡献。",
                  en: "Describe the context, process and individual contribution through visual, verbal and written documentation."
                }
              ]
            }
          ]
        }
      ],
      demo: {
        url: "projects/Sound_Header_Template/index.html",
        label: {
          zh: "体验成品 ↗",
          zht: "體驗成品 ↗",
          en: "Try final design ↗",
          ja: "完成作品を体験 ↗",
          fr: "Essayer le projet ↗",
          ko: "완성작 체험 ↗"
        }
      }
    },
    {
      id: "mmb-p3-living-systems",
      category: "games",
      course: "IXD: Media, Motion & Body",
      title: {
        zh: "Design for Living Systems",
        en: "Design for Living Systems"
      },
      subtitle: {
        zh: "Monet's Garden · Makey Makey 音乐游戏",
        en: "Monet's Garden · a Makey Makey rhythm game"
      },
      intro: {
        zh: "最后做出来的是一个可以用手“弹”的莫奈花园：玩家触摸木条、铝箔和布艺花朵做成的控制板，击中落下的花朵音符，屏幕上随之绽放花瓣、泛起涟漪，背景像四季一样变化。我做它，是因为想让人通过身体和触感去理解一个活的系统，而不是只看着屏幕点按钮；为了让它真的好玩，我经历了多轮测试和修改。",
        en: "The result is a Monet garden you can play with your hands: players touch a board of wooden keys, foil and fabric flowers to hit falling flower notes, and the screen answers with petals, ripples and a background that drifts through the seasons. I made it because I wanted people to understand a living system through touch and movement, not by tapping buttons on a screen — and it took several rounds of testing and fixes to make it genuinely fun to play."
      },
      summary: {
        zh: "",
        en: ""
      },
      tags: [
        "Makey Makey",
        "p5.js",
        "Game"
      ],
      image: "images/projects/p3/cover.webp",
      theme: "meadow",
      view: {
        url: "projects/MM%26B%20Module%203%20Web%20Template/index.html",
        label: {
          zh: "过程网站 ↗",
          zht: "過程網站 ↗",
          en: "Process site ↗",
          ja: "プロセスサイト ↗",
          fr: "Site du processus ↗",
          ko: "과정 사이트 ↗"
        }
      },
      pdf: {
        src: "files/MMB-Project3-Design-for-Living-Systems.pdf",
        pages: 26,
        label: "Project 3 · Design for Living Systems.pdf"
      },
      specs: [
        {
          k: {
            zh: "课程",
            zht: "課程",
            en: "Course",
            ja: "コース",
            fr: "Cours",
            ko: "과목"
          },
          v: "IXD: Media, Motion & Body"
        },
        {
          k: {
            zh: "学期",
            zht: "學期",
            en: "Term",
            ja: "学期",
            fr: "Session",
            ko: "학기"
          },
          v: {
            zh: "2026 冬季学期",
            en: "Winter 2026"
          }
        },
        {
          k: {
            zh: "路线",
            zht: "路線",
            en: "Path",
            ja: "コース",
            fr: "Parcours",
            ko: "경로"
          },
          v: {
            zh: "个人路线",
            en: "Individual path"
          }
        },
        {
          k: {
            zh: "工具与材料",
            zht: "工具與材料",
            en: "Tools & materials",
            ja: "ツール・素材",
            fr: "Outils et matériaux",
            ko: "도구 · 재료"
          },
          v: {
            zh: "Makey Makey、p5.js、p5.sound、铝箔、木板",
            en: "Makey Makey, p5.js, p5.sound, aluminium foil, wood"
          }
        },
        {
          k: {
            zh: "作品类型",
            zht: "作品類型",
            en: "Type",
            ja: "種類",
            fr: "Type",
            ko: "유형"
          },
          v: {
            zh: "实体交互游戏",
            en: "Physical interactive game"
          }
        }
      ],
      outline: [
        {
          key: "brief",
          title: {
            zh: "项目要求",
            zht: "項目要求",
            en: "The brief",
            ja: "課題の内容",
            fr: "Le brief",
            ko: "과제 내용"
          },
          text: [
            {
              zh: "项目三把前两个模块学到的东西连起来：继续连接实体与数字，用触摸作为输入，把交互电路和传感器做成可视化的作品。",
              en: "Project 3 brings the first two modules together, continuing to bridge physical and digital with touch as the input, and turning interactive circuits and sensors into something visual."
            },
            {
              zh: "我选择了个人路线：用 Makey Makey 和 p5.js 实验不同的输入方式，把触摸和屏幕上的输出连接起来，做出一件超越每周形态探索的最终交互作品。",
              en: "I took the individual path: experimenting with input methods through the Makey Makey and p5.js, connecting touch to on-screen output, and building a final interactive piece that goes beyond the weekly formstorming."
            }
          ],
          media: []
        },
        {
          key: "problem",
          title: {
            zh: "设计概念",
            en: "Concept"
          },
          text: [
            {
              zh: "我用 Makey Makey 和 p5.js 做了一个有趣的小游戏：屏幕上有四个按键，对应键盘的上下左右方向键。玩家触摸连接在 Makey Makey 上的实物来控制它们，在音符落到判定区时准确击中，触发音效并累积连击。连击越多，游戏越难。",
              en: "I made a small game with Makey Makey and p5.js. Four on-screen keys map to the arrow keys, and players control them by touching real objects wired to the Makey Makey. Hitting a note as it reaches the target zone plays a sound and adds to the combo, and the game gets harder as the combo grows."
            },
            {
              zh: "操作：连接控制板 → 触摸对应位置击中音符 → 每次命中得分，失误也不会结束游戏 → 按空格暂停或继续。",
              en: "How to play: connect the board, touch the matching spot to hit a note, score on every hit (a miss doesn't end the game), and press Space to pause or resume."
            }
          ],
          media: [
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p3/title.webp",
                  alt: {
                    zh: "游戏标题画面 Monet's Garden",
                    en: "Game title screen, Monet's Garden"
                  },
                  caption: {
                    zh: "标题画面",
                    en: "Title screen"
                  }
                },
                {
                  src: "images/projects/p3/play.webp",
                  alt: {
                    zh: "游戏进行中，花朵音符落下",
                    en: "Gameplay with falling flower notes"
                  },
                  caption: {
                    zh: "游戏中",
                    en: "In play"
                  }
                },
                {
                  src: "images/projects/p3/paused.webp",
                  alt: {
                    zh: "暂停画面",
                    en: "Pause screen"
                  },
                  caption: {
                    zh: "暂停",
                    en: "Paused"
                  }
                }
              ]
            }
          ]
        },
        {
          key: "research",
          title: {
            zh: "研究",
            en: "Research"
          },
          text: [
            {
              zh: "游戏研究：分析了 Arcaea、Cytus II 和 Cross†Soul 三款音乐游戏，总结出它们的共同点——清晰的判定位置、点击和长按两种音符、与音乐重音同步、击中时的粒子和连击反馈、Miss/Good/Perfect 分级评价，以及“连击越高节奏越快”的机制。",
              en: "Game research: I studied Arcaea, Cytus II and Cross†Soul and found what they share: a clear judgement line, tap and hold notes, input synced to the music's accents, particle and combo feedback on hits, Miss/Good/Perfect ratings, and a combo mechanic that speeds up the tempo."
            },
            {
              zh: "视觉灵感：配乐是潘佳杰的钢琴曲《Monet's Garden》，灵感来自莫奈在吉维尼的花园。我根据对应画作取色，让游戏背景的颜色随音乐变化，就像四季更替。",
              en: "Visual inspiration: the soundtrack is Pan Jiajie's piano piece Monet's Garden, inspired by Monet's garden at Giverny. I took the palette from the matching paintings and let the background colour shift with the music, like the seasons turning."
            },
            {
              zh: "控制板：用铝箔条做导电材料，木条做琴键，布艺花朵做装饰，通过 Makey Makey 把触摸变成键盘信号传给 p5.js。",
              en: "Control board: aluminium foil strips conduct, wooden sticks form the keys and fabric flowers decorate it. The Makey Makey turns each touch into a keyboard signal for p5.js."
            }
          ],
          media: [
            {
              type: "image",
              src: "images/projects/p3/board.webp",
              alt: {
                zh: "铝箔、木条和布艺花朵做的控制板",
                en: "Control board made of foil, wooden keys and fabric flowers"
              },
              caption: {
                zh: "手工控制板",
                en: "Handmade control board"
              }
            }
          ]
        },
        {
          key: "ideation",
          title: {
            zh: "形态探索",
            en: "Formstorming"
          },
          text: [
            {
              zh: "活动一：学习 p5.js 做新的视觉效果，并尝试让声音和 Makey Makey 的交互影响画面。",
              en: "Activity 1: learning to create new visuals in p5.js and to let sound and Makey Makey input change them."
            },
            {
              zh: "活动二：测试了五种导电材料，看哪些导电性好、能稳定地通过 Makey Makey 控制画面变化。",
              en: "Activity 2: testing five conductive materials to see which conducted well enough to control the visuals reliably through the Makey Makey."
            }
          ],
          media: [
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p3/activity1.webp",
                  alt: {
                    zh: "活动一的 p5.js 视觉实验截图",
                    en: "Screenshots of Activity 1 p5.js experiments"
                  },
                  caption: {
                    zh: "活动一：p5.js 视觉实验",
                    en: "Activity 1: p5.js experiments"
                  }
                },
                {
                  src: "images/projects/p3/materials.webp",
                  alt: {
                    zh: "五种导电材料的测试照片",
                    en: "Photos testing five conductive materials"
                  },
                  caption: {
                    zh: "活动二：导电材料测试",
                    en: "Activity 2: conductive materials"
                  }
                }
              ]
            }
          ]
        },
        {
          key: "design",
          title: {
            zh: "迭代过程",
            en: "Iteration"
          },
          text: [
            {
              zh: "游戏一步步搭起来：确定玩法 → 分配按键 → 加入底部花瓣 → 加入判定点 → 加入背景花瓣等视觉反馈 → 加入 Miss/Good/Perfect 评分 → 加入连击计数 → 加入“点击”和“长按”两种音符 → 加入按键背光 → 加入暂停画面 → 修改主界面。",
              en: "The game was built step by step: set the game mode, assign the keys, add petals along the bottom, add the judgement points, add visual feedback such as background petals, add Miss/Good/Perfect scoring, add a combo counter, add tap and hold notes, add key backlighting, add a pause screen, and finally rework the title screen."
            },
            {
              zh: "代码结构：用 preload() 预先加载音乐和音效，setup() 建立画布并切换到 HSB 色彩模式，draw() 每秒约 60 帧重绘。Note、MacaronKey、GrowthRipple 三个类分别管理音符、底部按键和金色涟漪；GAME_STATE 管理标题、过渡、游戏中和暂停四种状态。",
              en: "Code structure: preload() loads the music and sound effects up front, setup() creates the canvas in HSB colour mode, and draw() redraws about 60 times a second. Three classes, Note, MacaronKey and GrowthRipple, handle the notes, the keys and the golden ripples, and GAME_STATE switches between title, transition, playing and paused."
            }
          ],
          media: [
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p3/iter1.webp",
                  alt: {
                    zh: "最早版本：黑色背景和简单音符",
                    en: "Earliest version: black background and simple notes"
                  },
                  caption: {
                    zh: "早期版本",
                    en: "Early version"
                  }
                },
                {
                  src: "images/projects/p3/iter2.webp",
                  alt: {
                    zh: "加入粉色背景和花朵按键",
                    en: "Pink background and flower keys added"
                  },
                  caption: {
                    zh: "加入花朵按键",
                    en: "Flower keys"
                  }
                },
                {
                  src: "images/projects/p3/iter3.webp",
                  alt: {
                    zh: "加入花瓣和马卡龙按键",
                    en: "Petals and macaron keys added"
                  },
                  caption: {
                    zh: "加入花瓣",
                    en: "Petals"
                  }
                },
                {
                  src: "images/projects/p3/iter4.webp",
                  alt: {
                    zh: "加入长按音符的光柱",
                    en: "Light beams for hold notes"
                  },
                  caption: {
                    zh: "长按音符",
                    en: "Hold notes"
                  }
                }
              ]
            }
          ]
        },
        {
          key: "testing",
          title: {
            zh: "测试与改进",
            en: "Testing & fixes"
          },
          text: [
            {
              zh: "问题一：连续快速点击时，长按音符会有延迟，打乱节奏。解决：在 preload() 里预加载所有音效，击中时直接调用 .play()，不再每次新建音频对象。",
              en: "Problem 1: tapping quickly made hold notes lag and broke the rhythm. Fix: preload every sound in preload() and call .play() directly instead of creating a new audio object each time."
            },
            {
              zh: "问题二：早期颜色不协调，和想要的梦幻感冲突。解决：改用 p5.js 的 HSB 色彩模式，用 globalHueShift 让色相缓慢循环，过渡变得柔和。",
              en: "Problem 2: early colours clashed with the dreamy mood I wanted. Fix: switch to HSB colour mode and slowly cycle the hue with globalHueShift for soft transitions."
            },
            {
              zh: "问题三：用户测试时，玩家不确定自己有没有击中。解决：加了三种反馈——击中时炸开的花瓣、Perfect 时的金色涟漪，以及画布的轻微震动。",
              en: "Problem 3: in user testing, players couldn't tell whether they had hit a note. Fix: three kinds of feedback, a petal burst on each hit, a golden ripple on a Perfect, and a slight shake of the canvas."
            }
          ],
          media: [
            {
              type: "gallery",
              images: [
                {
                  src: "images/projects/p3/perfect.webp",
                  alt: {
                    zh: "Perfect 评价和金色涟漪",
                    en: "Perfect rating with golden ripple"
                  },
                  caption: {
                    zh: "Perfect 反馈",
                    en: "Perfect feedback"
                  }
                },
                {
                  src: "images/projects/p3/combo.webp",
                  alt: {
                    zh: "连击数显示 COMBO 6",
                    en: "Combo counter showing 6"
                  },
                  caption: {
                    zh: "连击计数",
                    en: "Combo counter"
                  }
                }
              ]
            }
          ]
        },
        {
          key: "outcome",
          title: {
            zh: "反思与下一步",
            en: "Reflection & next steps"
          },
          text: [
            {
              zh: "我学会了 p5.js 的 preload / setup / draw 结构、音频预加载和平滑的过渡动画；用 HSB 色彩和 globalHueShift 还原了莫奈画作里梦幻的光影；用状态机和面向对象的类让代码清晰、好维护。",
              en: "I learned the preload/setup/draw structure, audio preloading and smooth transitions; recreated the dreamy light of Monet's paintings with HSB colour and globalHueShift; and kept the code clear and maintainable with a state machine and object-oriented classes."
            },
            {
              zh: "下一步：在控制板上加入实体 LED，利用 Makey Makey 触摸导电的特性让灯同步亮起，形成触觉、灯光、声音和画面四重反馈。",
              en: "Next: add physical LEDs to the board that light up with each touch through the Makey Makey, giving four kinds of feedback at once: touch, light, sound and image."
            }
          ],
          media: []
        },
        {
          key: "outcomes",
          title: {
            zh: "项目学习成果",
            zht: "項目學習成果",
            en: "Learning outcomes",
            ja: "学習成果",
            fr: "Acquis d'apprentissage",
            ko: "학습 성과"
          },
          text: [
            {
              zh: "这个项目展示了课程的以下学习成果：",
              en: "This project demonstrates these course learning outcomes:"
            }
          ],
          media: [
            {
              type: "list",
              items: [
                {
                  zh: "运用实体与数字空间的理论和方法，结合行业标准工具，解决交互设计问题。",
                  en: "Employ theories and methodologies of physical and digital space to solve interaction design problems, using industry-standard design tools and methods."
                },
                {
                  zh: "把文字、视觉媒体、声音、时间和动态元素整合进交互设计概念。",
                  en: "Integrate text, visual media, sound, time and motion into interaction design concepts."
                },
                {
                  zh: "分析电子元件、输入传感器和显示设备等实体计算元素带来的设计机会。",
                  en: "Analyze the design opportunities of physical computing elements such as electronics, input sensors and displays."
                },
                {
                  zh: "把时间（包括顺序和节奏）作为交互设计的元素。",
                  en: "Incorporate time, including sequence and pace, as an element of interactive design."
                },
                {
                  zh: "通过图像、口头和文字记录，说明项目背景、过程和个人贡献。",
                  en: "Describe the context, process and individual contribution through visual, verbal and written documentation."
                },
                {
                  zh: "在创客空间中遵守相应的健康与安全规范和最佳做法。",
                  en: "Follow appropriate health and safety protocols and best practices for maker-space tools and techniques."
                }
              ]
            }
          ]
        }
      ],
      demo: {
        url: "projects/P3.Final_Project_3_Design/index.html",
        label: {
          zh: "体验成品 ↗",
          zht: "體驗成品 ↗",
          en: "Try final design ↗",
          ja: "完成作品を体験 ↗",
          fr: "Essayer le projet ↗",
          ko: "완성작 체험 ↗"
        }
      }
    }
  ],

  /* 我的方向（首页邮票）：project 填对应作品的 id，点击会跳到那个作品 */
  directions: [],

  education: [
    {
      years: {
        zh: "预计 2028 年 4 月毕业",
        zht: "預計 2028 年 4 月畢業",
        en: "Expected: Apr 2028",
        ja: "2028年4月卒業予定",
        fr: "Prévu : avr. 2028",
        ko: "2028년 4월 졸업 예정"
      },
      school: "Sheridan College | Oakville, ON",
      major: "",
      detail: ""
    }
  ],
  experience: [
    {
      years: {
        zh: "2026.03 — 至今",
        zht: "2026.03 — 至今",
        en: "Mar 2026 — Present",
        ja: "2026年3月 — 現在",
        fr: "mars 2026 — aujourd'hui",
        ko: "2026.03 — 현재"
      },
      title: {
        zh: "社交媒体运营",
        zht: "社群媒體營運",
        en: "Social Media Operations",
        ja: "SNS運用",
        fr: "Gestion des réseaux sociaux",
        ko: "소셜 미디어 운영"
      },
      org: {
        zh: "中国学生学者联合会（CSSA）",
        zht: "中國學生學者聯合會（CSSA）",
        en: "Chinese Students and Scholars Association (CSSA)",
        ja: "中国学生学者連合会（CSSA）",
        fr: "Chinese Students and Scholars Association (CSSA)",
        ko: "중국 학생학자 연합회(CSSA)"
      },
      detail: [
        {
          zh: "负责微信公众号、Bilibili、微博、抖音、小红书和 Instagram 等多个平台的日常内容发布与维护，覆盖 1,000 多名中国校园成员。",
          zht: "負責微信公眾號、Bilibili、微博、抖音、小紅書和 Instagram 等多個平台的日常內容發布與維護，覆蓋 1,000 多名中國校園成員。",
          en: "Publish and maintain daily content across WeChat Official Account, Bilibili, Weibo, TikTok, RED (Xiaohongshu) and Instagram, reaching 1,000+ Chinese campus members.",
          ja: "WeChat公式アカウント、Bilibili、Weibo、TikTok、RED（小紅書）、Instagram で日々の投稿と運用を担当し、1,000人以上の中国人キャンパスメンバーに発信。",
          fr: "Publication et suivi quotidiens du contenu sur WeChat, Bilibili, Weibo, TikTok, RED (Xiaohongshu) et Instagram, touchant plus de 1 000 membres chinois du campus.",
          ko: "WeChat 공식 계정, Bilibili, 웨이보, 틱톡, RED(샤오홍슈), 인스타그램의 일일 콘텐츠 게시와 관리를 담당하며 1,000명 이상의 중국인 캠퍼스 구성원에게 도달."
        },
        {
          zh: "管理用户社群，回复评论和私信，保持账号活跃度和互动。",
          zht: "管理用戶社群，回覆評論和私訊，保持帳號活躍度和互動。",
          en: "Manage the community, reply to comments and messages, and keep accounts active and engaging.",
          ja: "コミュニティを管理し、コメントやDMに対応してアカウントの活発さとエンゲージメントを維持。",
          fr: "Animation de la communauté, réponses aux commentaires et messages, maintien de l'engagement.",
          ko: "커뮤니티를 관리하고 댓글과 메시지에 응답하며 계정 활동과 참여를 유지."
        },
        {
          zh: "收集整理用户反馈，为内容和互动策略的优化提供依据。",
          zht: "收集整理用戶回饋，為內容和互動策略的優化提供依據。",
          en: "Collect and organise user feedback to improve content and engagement strategy.",
          ja: "ユーザーの声を集めて整理し、コンテンツとエンゲージメント戦略の改善に活用。",
          fr: "Collecte et organisation des retours utilisateurs pour améliorer la stratégie de contenu.",
          ko: "사용자 피드백을 수집·정리해 콘텐츠와 참여 전략 개선에 활용."
        },
        {
          zh: "协调团队内部沟通，确保内容按时发布。",
          zht: "協調團隊內部溝通，確保內容按時發布。",
          en: "Coordinate team communication so content goes out on time.",
          ja: "チーム内の連絡を調整し、予定どおりの公開を実現。",
          fr: "Coordination de l'équipe pour publier dans les délais.",
          ko: "팀 내부 소통을 조율해 콘텐츠가 제때 게시되도록 관리."
        }
      ]
    }
  ],
  /* 证书 */
  certifications: [
    {
      years: {
        zh: "2025.11",
        zht: "2025.11",
        en: "Nov 2025",
        ja: "2025年11月",
        fr: "nov. 2025",
        ko: "2025.11"
      },
      title: "ProtoPie 101 Crash Course",
      org: "ProtoPie"
    },
    {
      years: {
        zh: "2025.10",
        zht: "2025.10",
        en: "Oct 2025",
        ja: "2025年10月",
        fr: "oct. 2025",
        ko: "2025.10"
      },
      title: "UX Foundations: Logic and Content",
      org: "LinkedIn Learning"
    },
    {
      years: {
        zh: "2025.01",
        zht: "2025.01",
        en: "Jan 2025",
        ja: "2025年1月",
        fr: "janv. 2025",
        ko: "2025.01"
      },
      title: "TCPS 2: CORE 2022",
      org: {
        zh: "加拿大研究伦理委员会（PRE）",
        zht: "加拿大研究倫理委員會（PRE）",
        en: "Panel on Research Ethics (PRE)",
        ja: "研究倫理パネル（PRE）",
        fr: "Groupe en éthique de la recherche (GER)",
        ko: "연구윤리위원회(PRE)"
      }
    }
  ],
  skills: [
    {
      group: {
        zh: "专长",
        zht: "專長",
        en: "Focus areas",
        ja: "得意分野",
        fr: "Points forts",
        ko: "핵심 역량"
      },
      items: [
        {
          zh: "用户研究",
          zht: "用戶研究",
          en: "UX Research",
          ja: "UXリサーチ",
          fr: "Recherche UX",
          ko: "UX 리서치"
        },
        {
          zh: "线框图",
          zht: "線框圖",
          en: "Wireframing",
          ja: "ワイヤーフレーム",
          fr: "Wireframes",
          ko: "와이어프레임"
        },
        {
          zh: "交互原型",
          zht: "互動原型",
          en: "Interactive Prototyping",
          ja: "インタラクティブプロトタイピング",
          fr: "Prototypage interactif",
          ko: "인터랙티브 프로토타이핑"
        },
        {
          zh: "可用性测试",
          zht: "可用性測試",
          en: "Usability Testing",
          ja: "ユーザビリティテスト",
          fr: "Tests d'utilisabilité",
          ko: "사용성 테스트"
        },
        {
          zh: "信息架构",
          zht: "資訊架構",
          en: "Information Architecture",
          ja: "情報設計",
          fr: "Architecture de l'information",
          ko: "정보 구조"
        },
        {
          zh: "创意编程",
          zht: "創意編程",
          en: "Creative Coding",
          ja: "クリエイティブコーディング",
          fr: "Creative coding",
          ko: "크리에이티브 코딩"
        }
      ]
    },
    {
      group: {
        zh: "设计工具",
        zht: "設計工具",
        en: "Design tools",
        ja: "デザインツール",
        fr: "Outils de design",
        ko: "디자인 툴"
      },
      items: [
        "Figma",
        "ProtoPie",
        "Framer",
        "Adobe Illustrator",
        "Adobe Photoshop",
        "Adobe InDesign",
        "Notion",
        "Microsoft Office 365"
      ]
    },
    {
      group: {
        zh: "技术",
        zht: "技術",
        en: "Technical",
        ja: "技術",
        fr: "Technique",
        ko: "기술"
      },
      items: [
        "HTML / CSS / JavaScript",
        "p5.js",
        "Visual Studio Code",
        "GitHub",
        "Arduino IDE",
        "Makey Makey",
        {
          zh: "实体原型",
          zht: "實體原型",
          en: "Physical Prototyping",
          ja: "フィジカルプロトタイピング",
          fr: "Prototypage physique",
          ko: "피지컬 프로토타이핑"
        }
      ]
    },
    {
      group: {
        zh: "AI 与工作流",
        zht: "AI 與工作流",
        en: "AI & workflow",
        ja: "AI・ワークフロー",
        fr: "IA & flux de travail",
        ko: "AI · 워크플로"
      },
      items: [
        "Claude",
        "ChatGPT",
        "DeepSeek",
        "Gemini",
        "Dola"
      ]
    },
    {
      group: {
        zh: "语言",
        zht: "語言",
        en: "Languages",
        ja: "言語",
        fr: "Langues",
        ko: "언어"
      },
      items: [
        {
          zh: "英语",
          zht: "英語",
          en: "English",
          ja: "英語",
          fr: "Anglais",
          ko: "영어"
        },
        {
          zh: "中文（普通话）",
          zht: "中文（普通話）",
          en: "Chinese (Mandarin)",
          ja: "中国語（普通話）",
          fr: "Chinois (mandarin)",
          ko: "중국어(표준어)"
        }
      ]
    }
  ]
};
