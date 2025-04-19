var posts=["2025/03/30/hello-world/","2025/04/07/计算机40小时配套单词/","2025/04/04/计算机40小时入门笔记/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };