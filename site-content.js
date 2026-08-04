// GitHub Pages 前台内容配置
// 手机编辑方法：打开 GitHub 仓库里的 site-content.js，点铅笔图标，改下面引号里的文字或链接，然后提交。
// 注意：GitHub Pages 没有真正后台数据库；这个文件就是最简单的“前台编辑入口”。

window.SITE_CONTENT = {
  pageTitle: "AZ Premium Downloads",
  brand: "AZ PREMIUM",
  navFeatures: "亮点",
  navDownloads: "下载",
  navAbout: "说明",

  badge: "Premium Digital Downloads",
  heroTitle: "高级资源下载中心",
  heroSubtitle: "这是一个适合手机访问的永久公开网站。页面采用蓝白高级风格，别人可以直接打开你的链接，并点击按钮下载资源。",
  primaryButton: "查看下载文件",
  secondaryButton: "了解网站亮点",

  topCard: "永久免费公开访问",
  previewText: "高级前台页面 + 静态真实下载体验",
  bottomCard: "手机也能访问",

  aboutTitle: "适合公开展示和下载",
  aboutText: "这个版本不需要服务器、不需要银行卡、不需要后台运行。只要上传到 GitHub Pages，就会得到一个长期可访问的网址，例如 https://zy-api.github.io/Az/。",

  feature1Title: "高级视觉设计",
  feature1Text: "蓝白配色、玻璃卡片、柔和光效和更克制的字号，让页面更清爽、更干净。",
  feature2Title: "永久公网访问",
  feature2Text: "使用 GitHub Pages 发布后，别人可以直接通过公开网址访问，不是 localhost。",
  feature3Title: "文件下载",
  feature3Text: "下面的按钮会下载真实文件。你可以把按钮链接改成自己的网盘、GitHub 文件或服务器文件地址。",

  downloadsTitle: "可下载文件",
  downloadsText: "这里的文件卡片都在 site-content.js 里编辑。你可以新增、删除、改标题、改说明、改下载链接。",

  editTitle: "怎么编辑前台",
  editText: "用手机打开 GitHub 仓库里的 site-content.js，点编辑按钮，修改文字或下载链接后提交。GitHub Pages 会自动更新前台页面。",
  footer: "© 2026 AZ Premium Downloads. Powered by GitHub Pages.",

  files: [
    {
      icon: "↓",
      title: "示例说明文件",
      description: "点击后会下载一个真实的 TXT 文件，用来证明下载功能可用。",
      type: "TXT",
      meta: "可直接下载",
      button: "立即下载",
      primary: true,
      download: "AZ说明文件.txt",
      url: "data:text/plain;charset=utf-8,%E8%BF%99%E6%98%AFAZ%20Premium%20Downloads%E7%9A%84%E7%A4%BA%E4%BE%8B%E4%B8%8B%E8%BD%BD%E6%96%87%E4%BB%B6%E3%80%82%0A%E4%BD%A0%E5%8F%AF%E4%BB%A5%E6%8A%8A%E8%BF%99%E4%B8%AA%E6%8C%89%E9%92%AE%E6%94%B9%E6%88%90%E8%87%AA%E5%B7%B1%E7%9A%84%E6%96%87%E4%BB%B6%E5%9C%B0%E5%9D%80%E3%80%82"
    },
    {
      icon: "↗",
      title: "外部文件链接",
      description: "如果你的文件放在网盘、GitHub Release 或其他服务器，可以把这个按钮换成那个链接。",
      type: "LINK",
      meta: "可替换",
      button: "查看修改方法",
      primary: false,
      url: "#about"
    },
    {
      icon: "★",
      title: "高级展示位",
      description: "你可以把这里改成产品资料、软件安装包、课程附件、压缩包或其他资源。",
      type: "PREMIUM",
      meta: "展示卡片",
      button: "发布到 Pages",
      primary: false,
      url: "#about"
    }
  ]
};
