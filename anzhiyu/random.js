var posts=["2025/03/14/hello-world/","2025/03/16/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };