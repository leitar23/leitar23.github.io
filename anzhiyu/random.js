var posts=["posts/4257a649/","posts/6cb5a254/","posts/4a17b156/","posts/a0ca7bc4/","posts/4787801/","posts/73626faf/","posts/be82d226/","posts/9daba997/","posts/7ec7be7a/"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}