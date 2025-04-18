var posts=["2025/03/16/test/","2025/04/11/post-1/","2025/03/14/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };