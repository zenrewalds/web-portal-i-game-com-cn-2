const contentMap = {
  sections: [
    {
      id: "home",
      title: "首页",
      keywords: ["爱游戏", "游戏资讯", "热门推荐"],
      content: "欢迎来到爱游戏门户，探索最新游戏动态与攻略。"
    },
    {
      id: "news",
      title: "新闻",
      keywords: ["爱游戏", "行业新闻", "新游发布"],
      content: "聚焦爱游戏行业前沿，第一时间报道重磅消息。"
    },
    {
      id: "reviews",
      title: "评测",
      keywords: ["爱游戏", "游戏评测", "深度分析"],
      content: "爱游戏专业评测团队为你解析每款游戏的亮点与不足。"
    },
    {
      id: "guides",
      title: "攻略",
      keywords: ["爱游戏", "攻略", "技巧"],
      content: "爱游戏攻略合集，助你快速上手、通关无压力。"
    }
  ],
  tags: [
    "爱游戏",
    "手游",
    "端游",
    "独立游戏",
    "电竞",
    "福利",
    "活动"
  ],
  siteUrl: "https://web-portal-i-game.com.cn"
};

function searchSections(query) {
  if (!query || typeof query !== "string") return [];
  const lowerQuery = query.toLowerCase().trim();
  return contentMap.sections.filter(section => {
    const titleMatch = section.title.toLowerCase().includes(lowerQuery);
    const keywordMatch = section.keywords.some(kw => kw.toLowerCase().includes(lowerQuery));
    const contentMatch = section.content.toLowerCase().includes(lowerQuery);
    return titleMatch || keywordMatch || contentMatch;
  });
}

function getTagRelatedSections(tag) {
  if (!tag || typeof tag !== "string") return [];
  const lowerTag = tag.toLowerCase().trim();
  return contentMap.sections.filter(section =>
    section.keywords.some(kw => kw.toLowerCase() === lowerTag)
  );
}

function listAllKeywords() {
  const keywordSet = new Set();
  contentMap.sections.forEach(section => {
    section.keywords.forEach(kw => keywordSet.add(kw));
  });
  contentMap.tags.forEach(tag => keywordSet.add(tag));
  return Array.from(keywordSet);
}

function displaySearchResults(query) {
  const results = searchSections(query);
  if (results.length === 0) {
    console.log(`未找到与“${query}”相关的分区。`);
    return;
  }
  console.log(`找到 ${results.length} 个与“${query}”相关的分区：`);
  results.forEach(section => {
    console.log(`  [${section.id}] ${section.title} — ${section.content.slice(0, 30)}...`);
  });
}

displaySearchResults("爱游戏");
displaySearchResults("攻略");
displaySearchResults("不存在的内容");