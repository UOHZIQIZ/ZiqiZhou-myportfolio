/* =========================================================
   页面逻辑：一般不需要改。内容请改 js/data.js
   花和纸张的画法在 js/flora.js
   ========================================================= */
(function () {
  "use strict";
  var D = window.PORTFOLIO, F = window.Flora, P = D.profile, G = window.Diagrams;
  /* draft: true 的作品不显示 */
  var WORKS = D.projects.filter(function (p) { return !p.draft; });
  var $ = function (s) { return document.querySelector(s); };
  var $$ = function (s) { return Array.prototype.slice.call(document.querySelectorAll(s)); };

  /* ---------- 界面文字（6 种语言） ---------- */
  var UI = {
    zh: {
      view: "点击查看 ↗",
      navHome: "首页", aboutMore: "关于我 & 简历 →",
      worksLead: "每个项目都完整记录了从问题到成果的过程。点击卡片查看详情。", viewAll: "查看全部作品 →", explore: "继续了解", readMore: "阅读 →", contactCta: "写信给我 →",
      navPhilosophy: "设计理念", philosophyTitle: "设计理念", imgMissing: "图片待添加", videoMissing: "视频待添加",
      skip: "跳到正文", language: "语言", navWorks: "作品集", navAbout: "关于我", navResume: "简历", navContact: "联系",
      ctaWorks: "查看作品集", ctaAbout: "了解我", resumeDownload: "下载简历", contents: "目 录",
      worksTitle: "精选作品", all: "全部", directions: "我的方向", resumeTitle: "教育与经历",
      education: "教育背景", experience: "经历与活动", skills: "专业技能", certifications: "证书与认证",
      copy: "复制邮箱", copied: "已复制 ", copyFail: "已选中邮箱，按 Ctrl/⌘ + C 复制",
      backTop: "回到顶部 ↑", readCase: "查看作品 →", allWorks: "← 全部作品", onThisPage: "本页目录",
      photoHint: "放置你的个人照片",
      overview: "作品介绍", problem: "问题背景", research: "用户研究", ideation: "概念发想", design: "设计迭代", testing: "测试与验证", outcome: "最终成果",
      preview: "作品预览", web: "网站 / 原型", pdf: "PDF", openFull: "打开完整页面 ↗", loadPreview: "点击加载预览",
      pdfOpen: "在新窗口打开 ↗", pdfFull: "全屏查看", pages: "页", pdfMissing: "在 data.js 里给 pdf.src 填上 PDF 链接后，这里会显示文件。",
      prev: "上一个", next: "下一个", latest: "新作 · "
    },
    zht: {
      view: "點擊查看 ↗",
      navHome: "首頁", aboutMore: "關於我 & 簡歷 →",
      worksLead: "每個項目都完整記錄了從問題到成果的過程。點擊卡片查看詳情。", viewAll: "查看全部作品 →", explore: "繼續了解", readMore: "閱讀 →", contactCta: "寫信給我 →",
      navPhilosophy: "設計理念", philosophyTitle: "設計理念", imgMissing: "圖片待添加", videoMissing: "影片待添加",
      skip: "跳到正文", language: "語言", navWorks: "作品集", navAbout: "關於我", navResume: "簡歷", navContact: "聯絡",
      ctaWorks: "查看作品集", ctaAbout: "了解我", resumeDownload: "下載簡歷", contents: "目 錄",
      worksTitle: "精選作品", all: "全部", directions: "我的方向", resumeTitle: "教育與經歷",
      education: "教育背景", experience: "經歷與活動", skills: "專業技能", certifications: "證書與認證",
      copy: "複製郵箱", copied: "已複製 ", copyFail: "已選中郵箱，按 Ctrl/⌘ + C 複製",
      backTop: "回到頂部 ↑", readCase: "查看作品 →", allWorks: "← 全部作品", onThisPage: "本頁目錄",
      photoHint: "放置你的個人照片",
      overview: "作品介紹", problem: "問題背景", research: "用戶研究", ideation: "概念發想", design: "設計迭代", testing: "測試與驗證", outcome: "最終成果",
      preview: "作品預覽", web: "網站 / 原型", pdf: "PDF", openFull: "開啟完整頁面 ↗", loadPreview: "點擊載入預覽",
      pdfOpen: "在新視窗打開 ↗", pdfFull: "全屏查看", pages: "頁", pdfMissing: "在 data.js 裡給 pdf.src 填上 PDF 連結後，這裡會顯示檔案。",
      prev: "上一個", next: "下一個", latest: "新作 · "
    },
    en: {
      view: "View live ↗",
      navHome: "Home", aboutMore: "About & résumé →",
      worksLead: "Each project documents the journey from problem to outcome. Select a card to read the full case study.", viewAll: "View all works →", explore: "Keep exploring", readMore: "Read more →", contactCta: "Write to me →",
      navPhilosophy: "Philosophy", philosophyTitle: "Design Philosophy", imgMissing: "Image to come", videoMissing: "Video to come",
      skip: "Skip to content", language: "Language", navWorks: "Works", navAbout: "About", navResume: "Résumé", navContact: "Contact",
      ctaWorks: "View works", ctaAbout: "About me", resumeDownload: "Résumé PDF", contents: "Contents",
      worksTitle: "Selected Works", all: "All", directions: "What I work on", resumeTitle: "Education & Experience",
      education: "Education", experience: "Experience & Leadership", skills: "Skills", certifications: "Certifications",
      copy: "Copy email", copied: "Copied ", copyFail: "Email selected. Press Ctrl/⌘ + C to copy.",
      backTop: "Back to top ↑", readCase: "View project →", allWorks: "← All works", onThisPage: "On this page",
      photoHint: "Your photo here",
      overview: "Overview", problem: "Problem & Background", research: "User Research", ideation: "Ideation", design: "Design Iterations", testing: "Testing & Validation", outcome: "Final Outcome",
      preview: "Preview", web: "Website / Prototype", pdf: "PDF", openFull: "Open full page ↗", loadPreview: "Click to load preview",
      pdfOpen: "Open in new tab ↗", pdfFull: "Full screen", pages: "pages", pdfMissing: "Add a PDF link to pdf.src in data.js and the file will show here.",
      prev: "Previous", next: "Next", latest: "New · "
    },
    ja: {
      view: "サイトを見る ↗",
      navHome: "ホーム", aboutMore: "私について・履歴書 →",
      worksLead: "各プロジェクトは課題から成果までのプロセスをまとめています。カードを選ぶと詳細が見られます。", viewAll: "すべての作品 →", explore: "もっと知る", readMore: "続きを読む →", contactCta: "連絡する →",
      navPhilosophy: "デザイン理念", philosophyTitle: "デザイン理念", imgMissing: "画像は準備中", videoMissing: "動画は準備中",
      skip: "作品へ移動", language: "言語", navWorks: "作品集", navAbout: "私について", navResume: "履歴書", navContact: "連絡先",
      ctaWorks: "作品を見る", ctaAbout: "私について", resumeDownload: "履歴書 PDF", contents: "目 次",
      worksTitle: "作品セレクション", all: "すべて", directions: "取り組んでいる分野", resumeTitle: "学歴と経験",
      education: "学歴", experience: "経験・課外活動", skills: "スキル", certifications: "資格・認定",
      copy: "メールをコピー", copied: "コピーしました ", copyFail: "メールを選択しました。Ctrl/⌘ + C でコピー",
      backTop: "トップへ ↑", readCase: "作品を見る →", allWorks: "← すべての作品", onThisPage: "このページ",
      photoHint: "写真をここに",
      overview: "概要", problem: "問題と背景", research: "ユーザーリサーチ", ideation: "アイデア発想", design: "デザイン反復", testing: "テストと検証", outcome: "最終成果",
      preview: "プレビュー", web: "サイト / プロトタイプ", pdf: "PDF", openFull: "全画面で開く ↗", loadPreview: "クリックして読み込む",
      pdfOpen: "新しいタブで開く ↗", pdfFull: "全画面表示", pages: "ページ", pdfMissing: "data.js の pdf.src に PDF のリンクを入れると、ここに表示されます。",
      prev: "前へ", next: "次へ", latest: "新作 · "
    },
    fr: {
      view: "Voir le site ↗",
      navHome: "Accueil", aboutMore: "À propos & CV →",
      worksLead: "Chaque projet retrace le parcours du problème au résultat. Choisissez une carte pour lire l'étude de cas.", viewAll: "Tous les projets →", explore: "Continuer", readMore: "Lire la suite →", contactCta: "M'écrire →",
      navPhilosophy: "Philosophie", philosophyTitle: "Philosophie de design", imgMissing: "Image à venir", videoMissing: "Vidéo à venir",
      skip: "Aller aux projets", language: "Langue", navWorks: "Projets", navAbout: "À propos", navResume: "CV", navContact: "Contact",
      ctaWorks: "Voir les projets", ctaAbout: "À propos", resumeDownload: "CV en PDF", contents: "Sommaire",
      worksTitle: "Projets choisis", all: "Tous", directions: "Mes domaines", resumeTitle: "Formation & Expérience",
      education: "Formation", experience: "Expérience & engagement", skills: "Compétences", certifications: "Certifications",
      copy: "Copier l'email", copied: "Copié ", copyFail: "Email sélectionné. Ctrl/⌘ + C pour copier.",
      backTop: "Haut de page ↑", readCase: "Voir le projet →", allWorks: "← Tous les projets", onThisPage: "Sur cette page",
      photoHint: "Votre photo ici",
      overview: "Présentation", problem: "Problème et contexte", research: "Recherche utilisateur", ideation: "Idéation", design: "Itérations de design", testing: "Tests et validation", outcome: "Résultat final",
      preview: "Aperçu", web: "Site / Prototype", pdf: "PDF", openFull: "Ouvrir en entier ↗", loadPreview: "Cliquer pour charger",
      pdfOpen: "Ouvrir dans un onglet ↗", pdfFull: "Plein écran", pages: "pages", pdfMissing: "Ajoutez le lien du PDF dans pdf.src (data.js) pour l'afficher ici.",
      prev: "Précédent", next: "Suivant", latest: "Nouveau · "
    },
    ko: {
      view: "바로 보기 ↗",
      navHome: "홈", aboutMore: "소개 & 이력서 →",
      worksLead: "각 프로젝트는 문제에서 결과까지의 과정을 담고 있습니다. 카드를 선택해 자세히 보세요.", viewAll: "전체 작품 →", explore: "더 알아보기", readMore: "더 보기 →", contactCta: "연락하기 →",
      navPhilosophy: "디자인 철학", philosophyTitle: "디자인 철학", imgMissing: "이미지 준비 중", videoMissing: "영상 준비 중",
      skip: "작품으로 이동", language: "언어", navWorks: "작품", navAbout: "소개", navResume: "이력서", navContact: "연락처",
      ctaWorks: "작품 보기", ctaAbout: "소개 보기", resumeDownload: "이력서 PDF", contents: "목 차",
      worksTitle: "대표 작품", all: "전체", directions: "나의 분야", resumeTitle: "학력과 경력",
      education: "학력", experience: "경험 · 리더십", skills: "스킬", certifications: "자격 · 인증",
      copy: "이메일 복사", copied: "복사됨 ", copyFail: "이메일을 선택했습니다. Ctrl/⌘ + C로 복사하세요.",
      backTop: "맨 위로 ↑", readCase: "작품 보기 →", allWorks: "← 전체 작품", onThisPage: "이 페이지",
      photoHint: "사진을 넣어 주세요",
      overview: "개요", problem: "문제 및 배경", research: "사용자 리서치", ideation: "아이디어 발상", design: "디자인 반복", testing: "테스트 및 검증", outcome: "최종 결과물",
      preview: "미리보기", web: "웹사이트 / 프로토타입", pdf: "PDF", openFull: "전체 페이지 열기 ↗", loadPreview: "클릭해서 불러오기",
      pdfOpen: "새 탭에서 열기 ↗", pdfFull: "전체 화면", pages: "페이지", pdfMissing: "data.js의 pdf.src에 PDF 링크를 넣으면 여기에 표시됩니다.",
      prev: "이전", next: "다음", latest: "신작 · "
    }
  };
  var PROCESS_KEYS = ["problem", "research", "ideation", "design", "testing", "outcome"];
  var HTML_LANG = { zh: "zh-CN", zht: "zh-TW", en: "en", ja: "ja", fr: "fr", ko: "ko" };

  /* 语言：默认英语；访客自己切换过的话记住他的选择 */
  var lang = null;
  try { lang = localStorage.getItem("portfolioLang"); } catch (e) { lang = null; }
  if (!UI[lang]) lang = "en";

  /* 取某种语言的内容：没有时 繁→简，其它 → 英 → 简 */
  function t(v) {
    if (v == null) return "";
    if (typeof v === "string" || typeof v === "number") return String(v);
    if (v[lang]) return v[lang];
    if (lang === "zht" && v.zh) return v.zh;
    return v.en || v.zh || "";
  }
  function u(key) { return UI[lang][key] || UI.en[key] || key; }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function setAll(sel, html) { $$(sel).forEach(function (n) { n.innerHTML = html; }); }
  function textAll(sel, text) { $$(sel).forEach(function (n) { n.textContent = text; }); }
  function pad(n) { return (n < 10 ? "0" : "") + n; }
  function catLabel(id) {
    for (var i = 0; i < D.categories.length; i++) if (D.categories[i].id === id) return t(D.categories[i]);
    return id || "";
  }
  function findProject(id) {
    for (var i = 0; i < WORKS.length; i++) if (WORKS[i].id === id) return WORKS[i];
    return null;
  }

  /* ---------- 画布登记：尺寸变化或字体加载后重画 ---------- */
  var painters = [];
  var ro = "ResizeObserver" in window ? new ResizeObserver(function (entries) {
    entries.forEach(function (e) {
      var cv = e.target;
      if (Math.abs((cv._w || 0) - e.contentRect.width) < 2 && Math.abs((cv._h || 0) - e.contentRect.height) < 2) return;
      cv._w = e.contentRect.width; cv._h = e.contentRect.height;
      clearTimeout(cv._t);
      cv._t = setTimeout(function () { repaint(cv); }, 140);
    });
  }) : null;
  function register(canvas, fn) {
    painters.push({ canvas: canvas, fn: fn });
    requestAnimationFrame(function () { canvas._w = canvas.clientWidth; canvas._h = canvas.clientHeight; fn(canvas); });
    if (ro) ro.observe(canvas);
  }
  function repaint(canvas) {
    for (var i = 0; i < painters.length; i++) if (painters[i].canvas === canvas) painters[i].fn(canvas);
  }
  function prune() {
    painters = painters.filter(function (p) {
      var keep = document.contains(p.canvas);
      if (!keep && ro) ro.unobserve(p.canvas);
      return keep;
    });
  }
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { prune(); painters.forEach(function (p) { p.fn(p.canvas); }); });
  }

  /* 图片或占位拼贴 */
  function media(container, image, theme, seed, alt) {
    container.innerHTML = "";
    if (image) {
      var img = el("img");
      img.src = image; img.alt = alt || ""; img.loading = "lazy";
      container.appendChild(img);
    } else {
      var cv = el("canvas");
      cv.setAttribute("aria-hidden", "true");
      container.appendChild(cv);
      register(cv, function (c) { F.collage(c, theme || "rose", seed, { letter: P.sealLetter }); });
    }
  }

  /* ================= 首页固定部分（只建一次） ================= */
  function tickClock() {
    try {
      $("#clock").textContent = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: P.timezone }).format(new Date());
    } catch (e) { $("#clock").textContent = ""; }
  }
  tickClock(); setInterval(tickClock, 20000);

  /* 页面底纹：淡淡的线描百合 */
  /* （现在用 images/bg 里的真实纹理图做背景，见 css 顶部的 --bg-* 变量） */

  /* 首页大图：profile.heroImage 有图就用图，没有就画繁花拼贴 */
  if (P.heroImage) $(".hero").style.backgroundImage = "url(" + JSON.stringify(P.heroImage) + ")";
  $$(".page-head__art").forEach(function (cv, i) {
    register(cv, function (c) { F.banner(c, cv.dataset.theme || "rose", "banner" + i, { transparent: true }); });
  });
  $$(".contact__scene").forEach(function (cv, i) {
    register(cv, function (c) { F.corners(c, "contact-" + i); });
  });
  $$(".garland").forEach(function (g, i) {
    register(g, function (c) { F.garland(c, g.dataset.theme || "rose", "garland" + i); });
  });

  /* 个人照片（首页和关于我各一个） */
  $$(".js-photo").forEach(function (box, i) {
    if (P.photo) {
      var img = el("img"); img.src = P.photo; img.alt = P.nameZh + " · " + P.nameEn[1]; img.loading = "lazy";
      box.appendChild(img);
    } else {
      var cv = el("canvas"); cv.setAttribute("aria-hidden", "true"); box.appendChild(cv);
      register(cv, function (c) { F.specimen(c, "rose", "portrait"); });
      box.appendChild(el("span", "photo-frame__hint", ""));
    }
  });
  textAll(".js-photo-cap", P.nameZh + " · " + P.nameEn[1]);

  /* 方向邮票 */
  D.directions.forEach(function (s, i) {
    var li = el("li");
    li.innerHTML =
      '<a class="stamp" href="' + (s.project && findProject(s.project) ? "#case-" + esc(s.project) : "#works") + '"><div class="stamp__in"><div class="stamp__art"><canvas aria-hidden="true"></canvas><span class="stamp__val">' + (i + 1) * 5 + '¢</span></div>' +
      '<span class="stamp__en">' + esc(s.en || t(s.name)) + '</span><span class="stamp__cn"></span><p></p></div></a>';
    $("#directionsList").appendChild(li);
    register(li.querySelector("canvas"), function (c) { F.specimen(c, s.theme || "rose", "dir" + i); });
  });

  /* ================= 文字（切换语言时重填） ================= */
  function renderText() {
    document.documentElement.lang = HTML_LANG[lang] || lang;
    $("#langSelect").value = lang;
    $$("[data-i18n]").forEach(function (n) { n.innerHTML = u(n.dataset.i18n); });

    $("#monogram").textContent = P.monogram;
    $("#heroTag").textContent = t(P.tag);
    $("#heroName").innerHTML = P.nameEn.map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("");
    $("#heroTagline").textContent = t(P.tagline);
    $("#heroBio").textContent = t(P.bio);
    $("#clockCity").textContent = P.city;
    $$(".resume-link").forEach(function (a) {
      if (P.resume) { a.href = P.resume; a.hidden = false; } else a.hidden = true;
    });
    $("#dirCount").textContent = pad(WORKS.length);
    $("#facts").innerHTML = P.facts.map(function (f) {
      return "<div><dt>" + esc(t(f.k)) + "</dt><dd>" + esc(t(f.v)) + "</dd></div>";
    }).join("");

    /* 顶部滚动文字 */
    var tickHtml = "";
    for (var k = 0; k < 8; k++) tickHtml += "<span>" + esc(P.ticker || "Ziqi Zhou's portfolio") + "</span>";
    $("#ticker").innerHTML = tickHtml + tickHtml;

    /* 设计理念 */
    var ph = P.philosophy || {};
    textAll(".js-phil-lead", t(ph.lead));
    setAll(".js-principles", (ph.principles || []).map(function (x) {
      return '<li class="principle"><h3>' + esc(t(x.title)) + "</h3><p>" + esc(t(x.text)) + "</p></li>";
    }).join(""));

    /* 关于我 */
    setAll(".js-about-heading", t(P.aboutHeading));
    setAll(".js-about-paras", P.about.map(function (p) { return '<p class="about__p">' + esc(t(p)) + "</p>"; }).join(""));
    var chips = D.skills[0].items.slice(0, 3).concat(D.skills[1].items.slice(0, 3)).concat(["HTML / CSS"]);
    setAll(".js-about-chips", chips.map(function (c) { return "<li>" + esc(t(c)) + "</li>"; }).join(""));
    textAll(".photo-frame__hint", u("photoHint"));
    $$("#directionsList li").forEach(function (li, i) {
      var s = D.directions[i];
      var cn = li.querySelector(".stamp__cn");
      cn.textContent = t(s.name);
      cn.hidden = t(s.name) === (s.en || "");   /* 英文界面下不重复 */
      li.querySelector(".stamp p").textContent = t(s.desc);
    });

    /* 简历 */
    function detailHtml(d) {
      if (!d) return "";
      if (Array.isArray(d)) return '<ul class="detail-list">' + d.map(function (b) { return "<li>" + esc(t(b)) + "</li>"; }).join("") + "</ul>";
      return '<p class="detail">' + esc(t(d)) + "</p>";
    }
    setAll(".js-edu", D.education.map(function (x) {
      return '<li><span class="years">' + esc(t(x.years)) + '</span><div><div class="place">' + esc(t(x.school)) + '</div><div class="role">' + esc(t(x.major)) + '</div>' + detailHtml(x.detail) + "</div></li>";
    }).join(""));
    setAll(".js-exp", D.experience.map(function (x) {
      return '<li><span class="years">' + esc(t(x.years)) + '</span><div><div class="place">' + esc(t(x.title)) + '</div><div class="role">' + esc(t(x.org)) + '</div>' + detailHtml(x.detail) + "</div></li>";
    }).join(""));
    setAll(".js-certs", (D.certifications || []).map(function (x) {
      return '<li><span class="years">' + esc(t(x.years)) + '</span><div><div class="place">' + esc(t(x.title)) + '</div><div class="role">' + esc(t(x.org)) + '</div>' + detailHtml(x.detail) + "</div></li>";
    }).join(""));
    setAll(".js-skills", D.skills.map(function (g) {
      return '<div class="skill-group"><p class="type">' + esc(t(g.group)) + '</p><ul class="chips">' +
        g.items.map(function (c) { return "<li>" + esc(t(c)) + "</li>"; }).join("") + "</ul></div>";
    }).join(""));

    /* 联系 */
    textAll(".js-seal", P.sealLetter || "C");
    setAll(".js-contact-heading", t(P.contactHeading));
    textAll(".js-contact-sub", t(P.contactSub));
    textAll(".js-email", P.email);
    textAll(".js-contact-note", t(P.contactNote));
    var ICON = { email: "✉", linkedin: "in", behance: "Bē", instagram: "◎", resume: "PDF", other: "↗" };
    setAll(".js-contact-cards", P.contacts.map(function (c) {
      var inner = '<span class="contact-card__icon contact-card__icon--' + esc(c.type) + '">' + (ICON[c.type] || "↗") + '</span>' +
        '<span class="contact-card__label type">' + esc(t(c.label)) + '</span><span class="contact-card__value">' + esc(t(c.value)) + "</span>";
      return c.url
        ? '<li><a class="contact-card" href="' + esc(c.url) + '" target="_blank" rel="noopener">' + inner + "</a></li>"
        : '<li><div class="contact-card">' + inner + "</div></li>";
    }).join(""));

    $("#footName").textContent = "© " + new Date().getFullYear() + " " + P.nameEn[0] + " · " + P.nameZh;
    $("#footLinks").innerHTML = P.contacts.filter(function (c) { return c.url; }).map(function (c) {
      return '<a href="' + esc(c.url) + '" target="_blank" rel="noopener">' + esc(t(c.label)) + "</a>";
    }).join("");

    renderFilters();
    updateTileText();
  }

  /* ================= 精选作品（保持原来的网格样式） ================= */
  var current = "all";
  var filtersEl = $("#filters"), grid = $("#worksGrid"), homeGrid = $("#homeGrid");

  function renderFilters() {
    filtersEl.innerHTML = "";
    var list = [{ id: "all" }].concat(D.categories);
    list.forEach(function (y) {
      var count = y.id === "all" ? WORKS.length : WORKS.filter(function (p) { return p.category === y.id; }).length;
      if (!count && D.hideEmptyCategories) return;
      var b = el("button", "filter", esc(y.id === "all" ? u("all") : t(y)) + "<sup>" + count + "</sup>");
      b.type = "button"; b.setAttribute("role", "tab"); b.dataset.cat = y.id;
      b.setAttribute("aria-selected", y.id === current ? "true" : "false");
      if (!count) b.disabled = true;
      b.addEventListener("click", function () { current = y.id; renderWorks(); });
      filtersEl.appendChild(b);
    });
  }

  /* 每一行的栏宽组合，保证每行都正好铺满，不留空洞 */
  var ROWS_12 = [[6, 3, 3], [4, 4, 4], [3, 3, 6], [7, 5]];
  var ROWS_6 = [[6], [3, 3], [3, 3]];
  function spansFor(n) {
    var wide = window.matchMedia("(min-width: 901px)").matches;
    var rows = wide ? ROWS_12 : ROWS_6, total = wide ? 12 : 6;
    var out = [], i = 0, ri = 0;
    while (i < n) {
      var row = rows[ri % rows.length], left = n - i;
      if (left < row.length) {
        var even = total / left;
        if (Number.isInteger(even)) { for (var k = 0; k < left; k++) out.push(even); }
        else { out.push(total - Math.floor(total / left) * (left - 1)); for (var m = 1; m < left; m++) out.push(Math.floor(total / left)); }
        break;
      }
      row.forEach(function (s) { out.push(s); });
      i += row.length; ri++;
    }
    return out;
  }
  /* 所有作品方框一样大：一排两个（手机一排一个），由 CSS 控制 */
  function applySpans() {
    [grid, homeGrid].forEach(function (g) {
      for (var i = 0; i < g.children.length; i++) g.children[i].style.gridColumn = "";
    });
  }

  /* 作品卡片：整张卡片点进详情页；有 view 链接时多一个“点击查看”按钮，新窗口打开作品网页 */
  function viewUrl(p) { return p.demo && p.demo.url ? p.demo.url : (p.view && p.view.url ? p.view.url : ""); }
  function viewLabel(p) { return t((p.demo && p.demo.url ? p.demo : p.view).label) || u("view"); }
  function fillGrid(g, list) {
    g.innerHTML = "";
    list.forEach(function (p, i) {
      var tile = el("article", "tile");
      tile.dataset.id = p.id;
      tile.style.animationDelay = (i * 40) + "ms";
      var link = el("a", "tile__link", '<span class="sr"></span>');
      link.href = "#case-" + p.id;
      tile.appendChild(link);
      var m = el("div", "tile__media");
      var holder = el("div"); holder.style.cssText = "position:absolute;inset:0";
      m.appendChild(holder);
      m.appendChild(el("span", "tile__no", "№ " + pad(WORKS.indexOf(p) + 1)));
      tile.appendChild(m);
      var url = viewUrl(p);
      tile.appendChild(el("div", "tile__cap",
        '<h3 class="tile__title"></h3><span class="tile__year"></span>' +
        '<span class="tile__meta"><b></b><span></span></span><p class="tile__intro"></p>' +
        '<div class="tile__actions"><span class="tile__read" aria-hidden="true"></span>' +
        (url ? '<a class="tile__view" href="' + esc(url) + '" target="_blank" rel="noopener"></a>' : "") + "</div>"));
      g.appendChild(tile);
      media(holder, p.image, p.theme, p.id, t(p.title));
    });
  }
  function renderWorks() {
    Array.prototype.forEach.call(filtersEl.children, function (b) {
      b.setAttribute("aria-selected", b.dataset.cat === current ? "true" : "false");
    });
    prune();
    fillGrid(grid, WORKS.filter(function (p) { return current === "all" || p.category === current; }));
    applySpans();
    updateTileText();
  }
  function updateTileText() {
    $$(".tile").forEach(function (tile) {
      var p = findProject(tile.dataset.id);
      if (!p) return;
      tile.querySelector(".tile__title").textContent = t(p.title);
      tile.querySelector(".tile__year").textContent = catLabel(p.category);
      tile.querySelector(".tile__meta b").textContent = t(p.course);
      tile.querySelector(".tile__meta span").textContent = t(p.subtitle);
      tile.querySelector(".tile__intro").textContent = t(p.intro || p.summary);
      tile.querySelector(".tile__read").textContent = u("readCase");
      tile.querySelector(".tile__link .sr").textContent = t(p.title) + " — " + u("readCase");
      var v = tile.querySelector(".tile__view");
      if (v) { v.textContent = viewLabel(p); v.setAttribute("aria-label", t(p.title) + " — " + viewLabel(p) + " (new tab)"); }
    });
  }
  window.matchMedia("(min-width: 901px)").addEventListener("change", applySpans);

  /* ================= 作品详情页 ================= */
  var lbList = [], lbIndex = 0;

  function renderCase(p) {
    var i = WORKS.indexOf(p);
    document.title = t(p.title) + " — " + P.nameEn.join(" · ");

    $("#caseEyebrow").textContent = [catLabel(p.category), t(p.course)].filter(Boolean).join(" · ");
    $("#caseTitle").textContent = t(p.title);
    $("#caseSub").textContent = t(p.subtitle);
    $("#caseSummary").textContent = t(p.intro || p.summary);
    $("#caseTags").innerHTML = (p.tags || []).map(function (g) { return "<li>" + esc(t(g)) + "</li>"; }).join("");

    var act = "";
    if (p.demo && p.demo.url) act += '<a class="btn btn--ink" href="' + esc(p.demo.url) + '" target="_blank" rel="noopener">' + esc(t(p.demo.label)) + "</a>";
    if (p.view && p.view.url) act += '<a class="btn ' + (p.demo && p.demo.url ? "btn--line" : "btn--ink") + '" href="' + esc(p.view.url) + '" target="_blank" rel="noopener">' + esc(t(p.view.label) || u("view")) + "</a>";
    if (p.website && p.website.url) act += '<a class="btn btn--ink" href="' + esc(p.website.url) + '" target="_blank" rel="noopener">' + esc(t(p.website.label) || u("openFull")) + " ↗</a>";
    if (p.pdf && p.pdf.src) act += '<a class="btn btn--line" href="' + esc(p.pdf.src) + '" target="_blank" rel="noopener">PDF ↗</a>';
    (p.links || []).forEach(function (l) { act += '<a class="btn btn--line" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(t(l.label)) + "</a>"; });
    $("#caseActions").innerHTML = act;
    $("#caseActions").hidden = !act;

    prune();
    media($("#caseHero"), p.image, p.theme, p.id, t(p.title));

    /* 信息卡 */
    $("#caseGlance").innerHTML = (p.specs || []).map(function (s) {
      return "<div><dt>" + esc(t(s.k)) + "</dt><dd>" + esc(t(s.v)) + "</dd></div>";
    }).join("");
    $("#caseGlance").hidden = !(p.specs && p.specs.length);

    /* 正文 */
    var sections = [];
    lbList = [];
    if (p.outline && p.outline.length) {
      p.outline.forEach(function (st) {
        var html = (st.text || []).map(function (x) { return "<p>" + esc(t(x)) + "</p>"; }).join("");
        html += (st.media || []).map(mediaBlock).join("");
        sections.push({ key: st.key, title: t(st.title), html: html });
      });
    }
    var proc = p.outline ? {} : (p.process || {});
    PROCESS_KEYS.forEach(function (k) {
      var st = proc[k];
      if (!st || (!t(st.text) && !(st.images && st.images.length))) return;
      var html = t(st.text) ? "<p>" + esc(t(st.text)) + "</p>" : "";
      if (st.images && st.images.length) {
        html += '<div class="photo-grid">' + st.images.map(function (src) {
          lbList.push(src);
          return '<button type="button" class="photo-grid__item" data-lb="' + (lbList.length - 1) + '"><img src="' + esc(src) + '" alt="" loading="lazy"></button>';
        }).join("") + "</div>";
      }
      sections.push({ key: k, html: html });
    });
    if (!sections.length) sections.push({ key: "overview", html: "<p>" + esc(t(p.summary) || t(p.intro)) + "</p>" });

    var hasWeb = p.website && p.website.url, hasPdf = !!p.pdf;
    if (hasWeb || hasPdf) sections.push({ key: "preview", html: previewHtml(p, hasWeb, hasPdf) });

    $("#caseContent").innerHTML = sections.map(function (s, n) {
      return '<section class="case__section" id="cs-' + s.key + '" aria-labelledby="h-' + s.key + '"><h2 id="h-' + s.key + '"><span class="type" aria-hidden="true">' + pad(n + 1) + "</span>" + esc(s.title || u(s.key)) + "</h2>" + s.html + "</section>";
    }).join("");
    $("#caseToc").innerHTML = sections.map(function (s) {
      return '<li><a href="#case-' + p.id + '" data-jump="cs-' + s.key + '">' + esc(s.title || u(s.key)) + "</a></li>";
    }).join("");

    /* 上一个 / 下一个 */
    var prev = WORKS[(i - 1 + WORKS.length) % WORKS.length];
    var next = WORKS[(i + 1) % WORKS.length];
    /* 只有两个作品时只显示“下一个”，一个作品时不显示 */
    var pager = "";
    if (WORKS.length > 2) pager += '<a class="pager pager--prev" href="#case-' + prev.id + '"><span class="type">← ' + u("prev") + "</span><strong>" + esc(t(prev.title)) + "</strong></a>";
    else pager += "<span></span>";
    if (WORKS.length > 1) pager += '<a class="pager pager--next" href="#case-' + next.id + '"><span class="type">' + u("next") + " →</span><strong>" + esc(t(next.title)) + "</strong></a>";
    $("#casePager").innerHTML = pager;
    $("#casePager").hidden = WORKS.length < 2;
  }

  /* 流程里的媒体：图片 / 多图 / 视频 / 图表 / 数字 / 引用 */
  function imageFigure(im, wide) {
    var cap = t(im.caption), inner;
    if (im.src) {
      lbList.push(im.src);
      inner = '<button type="button" class="fig__zoom" data-lb="' + (lbList.length - 1) + '" aria-label="' + esc(t(im.alt)) + '">' +
        '<img src="' + esc(im.src) + '" alt="' + esc(t(im.alt)) + '" loading="lazy" decoding="async"' +
        (im.width ? ' width="' + im.width + '" height="' + im.height + '"' : "") + "></button>";
    } else {
      inner = '<div class="fig__empty" role="img" aria-label="' + esc(t(im.alt)) + '"><span>' + esc(u("imgMissing")) + "</span><small>" + esc(t(im.alt)) + "</small></div>";
    }
    return '<figure class="fig' + (wide ? " fig--wide" : "") + '">' + inner + (cap ? "<figcaption>" + esc(cap) + "</figcaption>" : "") + "</figure>";
  }
  function mediaBlock(m) {
    if (m.type === "image") return imageFigure(m, m.wide);
    if (m.type === "gallery") return '<div class="fig-row">' + m.images.map(function (im) { return imageFigure(im); }).join("") + "</div>";
    if (m.type === "video") {
      var cap = t(m.caption);
      var v = m.src
        ? '<video controls preload="none" playsinline' + (m.poster ? ' poster="' + esc(m.poster) + '"' : "") + '><source src="' + esc(m.src) + '" type="video/mp4">' +
          (m.captions ? '<track kind="captions" src="' + esc(m.captions) + '" default>' : "") + "</video>"
        : '<div class="fig__empty fig__empty--video" role="img" aria-label="' + esc(cap) + '"><span>▶ ' + esc(u("videoMissing")) + "</span></div>";
      return '<figure class="fig fig--wide">' + v + (cap ? "<figcaption>" + esc(cap) + "</figcaption>" : "") + "</figure>";
    }
    if (m.type === "diagram") {
      return '<figure class="fig fig--diagram">' + (G ? G.render(m.kind, m.data, t) : "") + (m.caption ? "<figcaption>" + esc(t(m.caption)) + "</figcaption>" : "") + "</figure>";
    }
    if (m.type === "stats") {
      return '<dl class="stats">' + m.items.map(function (x) { return "<div><dt>" + esc(t(x.label)) + "</dt><dd>" + esc(x.value) + "</dd></div>"; }).join("") + "</dl>";
    }
    if (m.type === "list") {
      return '<ul class="case__list case__list--outcomes">' + m.items.map(function (x) { return "<li>" + esc(t(x)) + "</li>"; }).join("") + "</ul>";
    }
    if (m.type === "quotes") {
      return '<div class="quotes">' + m.items.map(function (q) { return "<blockquote><p>" + esc(t(q)) + "</p></blockquote>"; }).join("") + "</div>";
    }
    return "";
  }

  /* 作品预览：网站 / 原型 与 PDF */
  function previewHtml(p, hasWeb, hasPdf) {
    var tabs = [];
    if (hasWeb) tabs.push("web");
    if (hasPdf) tabs.push("pdf");
    var head = '<div class="preview__tabs" role="tablist">' + tabs.map(function (k, n) {
      return '<button type="button" role="tab" class="preview__tab" data-tab="' + k + '" aria-selected="' + (n === 0) + '">' + u(k) + "</button>";
    }).join("") + "</div>";
    var body = "";
    if (hasWeb) {
      body += '<div class="preview__panel" data-panel="web">' +
        '<div class="preview__bar"><span class="type">' + esc(p.website.url) + '</span><a href="' + esc(p.website.url) + '" target="_blank" rel="noopener">' + u("openFull") + "</a></div>" +
        '<div class="preview__frame" data-src="' + esc(p.website.url) + '"><button type="button" class="btn btn--ink preview__load">' + u("loadPreview") + "</button></div></div>";
    }
    if (hasPdf) {
      var pages = p.pdf.pages || 1, label = t(p.pdf.label) || "PDF";
      body += '<div class="preview__panel" data-panel="pdf"' + (hasWeb ? " hidden" : "") + ">" +
        '<div class="preview__bar"><span class="type">' + esc(label) + " · " + pages + " " + u("pages") + "</span>" +
        (p.pdf.src ? '<span class="preview__links"><button type="button" class="linkish" data-pdf-full="' + esc(p.pdf.src) + '" data-pdf-label="' + esc(label) + '">' + u("pdfFull") + '</button><a href="' + esc(p.pdf.src) + '" target="_blank" rel="noopener">' + u("pdfOpen") + "</a></span>" : "") +
        "</div>";
      if (p.pdf.src) {
        body += '<div class="preview__frame preview__frame--pdf"><iframe src="' + esc(p.pdf.src) + '" title="' + esc(label) + '" loading="lazy"></iframe></div>';
      } else {
        var thumbs = "";
        for (var n = 1; n <= Math.min(pages, 12); n++) thumbs += '<span class="pdf-page"><b>' + n + "</b></span>";
        body += '<div class="pdf-empty"><div class="pdf-pages">' + thumbs + '</div><p>' + u("pdfMissing") + "</p></div>";
      }
      body += "</div>";
    }
    return '<div class="preview">' + head + body + "</div>";
  }

  /* 详情页里的点击：目录跳转、预览切换、加载原型、图片放大、PDF 全屏 */
  $("#case").addEventListener("click", function (e) {
    var a = e.target.closest("a[data-jump]");
    if (a) {
      e.preventDefault();
      var target = document.getElementById(a.dataset.jump);
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    var tab = e.target.closest(".preview__tab");
    if (tab) {
      var box = tab.closest(".preview");
      box.querySelectorAll(".preview__tab").forEach(function (b) { b.setAttribute("aria-selected", b === tab ? "true" : "false"); });
      box.querySelectorAll(".preview__panel").forEach(function (pn) { pn.hidden = pn.dataset.panel !== tab.dataset.tab; });
      return;
    }
    var load = e.target.closest(".preview__load");
    if (load) {
      var frame = load.closest(".preview__frame");
      var ifr = el("iframe"); ifr.src = frame.dataset.src; ifr.title = "Prototype";
      frame.innerHTML = ""; frame.appendChild(ifr);
      return;
    }
    var ph = e.target.closest("[data-lb]");
    if (ph) { openLightbox(+ph.dataset.lb); return; }
    var pf = e.target.closest("[data-pdf-full]");
    if (pf) {
      $("#pdfFullFrame").src = pf.dataset.pdfFull;
      $("#pdfFullLabel").textContent = pf.dataset.pdfLabel;
      $("#pdfFull").hidden = false; document.body.style.overflow = "hidden";
    }
  });

  /* 图片放大 */
  function openLightbox(n) {
    if (!lbList.length) return;
    lbIndex = (n + lbList.length) % lbList.length;
    $("#lbImg").src = lbList[lbIndex];
    $("#lbCount").textContent = (lbIndex + 1) + " / " + lbList.length;
    $("#lbPrev").hidden = $("#lbNext").hidden = lbList.length < 2;
    $("#lightbox").hidden = false; document.body.style.overflow = "hidden";
  }
  function closeOverlays() {
    $("#lightbox").hidden = true;
    if (!$("#pdfFull").hidden) { $("#pdfFull").hidden = true; $("#pdfFullFrame").src = "about:blank"; }
    document.body.style.overflow = "";
  }
  $("#lbClose").addEventListener("click", closeOverlays);
  $("#pdfFullClose").addEventListener("click", closeOverlays);
  $("#lbPrev").addEventListener("click", function () { openLightbox(lbIndex - 1); });
  $("#lbNext").addEventListener("click", function () { openLightbox(lbIndex + 1); });
  $("#lightbox").addEventListener("click", function (e) { if (e.target.id === "lightbox") closeOverlays(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeOverlays();
    if ($("#lightbox").hidden) return;
    if (e.key === "ArrowLeft") openLightbox(lbIndex - 1);
    if (e.key === "ArrowRight") openLightbox(lbIndex + 1);
  });

  /* ================= 路由：每个导航项是独立页面 =================
     #home（或空） 首页 · #works 作品集 · #philosophy 设计理念 · #about 关于我
     #resume 简历 · #contact 联系 · #case-作品id 作品详情 */
  var PAGES = ["home", "works", "about", "contact"];
  /* 这些是“关于我”页里的小节，打开时先切到关于我，再滚到对应位置 */
  var SUBSECTIONS = { philosophy: "about", resume: "about" };
  var pageTitles = { works: "worksTitle", about: "navAbout", contact: "navContact" };
  var firstRoute = true, currentPage = null;
  function showPage(name, anchor) {
    var changed = name !== currentPage;
    currentPage = name;
    $$(".page").forEach(function (pg) { pg.hidden = pg.dataset.page !== name; });
    $$(".nav__links a").forEach(function (a) {
      if (a.dataset.page === name || (name === "case" && a.dataset.page === "works")) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    if (anchor) {
      requestAnimationFrame(function () { var t2 = document.getElementById(anchor); if (t2) t2.scrollIntoView({ block: "start" }); });
    } else {
      window.scrollTo(0, 0);
      /* 切页后把焦点移到标题，方便键盘和读屏用户 */
      if (!firstRoute && changed) {
        var h = document.querySelector('.page[data-page="' + name + '"] h1');
        if (h) h.focus({ preventScroll: true });
      }
    }
    firstRoute = false;
  }
  function route() {
    closeOverlays();
    var h = (location.hash || "").slice(1), anchor = null;
    if (h.indexOf("case-") === 0) {
      var p = findProject(h.slice(5));
      if (p) { renderCase(p); currentPage = null; showPage("case"); return; }
      h = "works";
    }
    if (SUBSECTIONS[h]) { anchor = h; h = SUBSECTIONS[h]; }
    if (PAGES.indexOf(h) < 0) h = "home";
    document.title = (h === "home" ? "" : u(pageTitles[h]) + " — ") + P.nameEn.join(" · ") + " · Portfolio";
    showPage(h, anchor);
  }
  window.addEventListener("hashchange", route);
  $("#toTop").addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  /* ---------- 语言切换 ---------- */
  $("#langSelect").addEventListener("change", function () {
    lang = this.value;
    try { localStorage.setItem("portfolioLang", lang); } catch (e) { /* 忽略 */ }
    renderText();
    var caseEl = document.getElementById("case");
    if (caseEl && !caseEl.hidden) { var p = findProject(location.hash.slice(6)); if (p) renderCase(p); }
  });

  /* ---------- 复制邮箱（首页和联系页各一个按钮） ---------- */
  $$(".js-copy").forEach(function (btn) {
    var letter = btn.closest(".letter"), toast = letter.querySelector(".js-toast"), email = letter.querySelector(".js-email");
    btn.addEventListener("click", function () {
      var done = function () { toast.textContent = u("copied") + P.email; };
      var fail = function () {
        var range = document.createRange(); range.selectNodeContents(email);
        var sel = window.getSelection(); sel.removeAllRanges(); sel.addRange(range);
        toast.textContent = u("copyFail");
      };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(P.email).then(done, fail);
        else fail();
      } catch (e) { fail(); }
      setTimeout(function () { toast.textContent = ""; }, 4000);
    });
  });

  /* ---------- 启动 ---------- */
  fillGrid(homeGrid, WORKS);
  renderWorks();
  renderText();
  route();
})();
