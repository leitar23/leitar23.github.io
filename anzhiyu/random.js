var posts=["posts/a0ca7bc4/","posts/4257a649/","posts/4a17b156/","posts/882edeea/","posts/be82d226/","posts/aaba1da3/","posts/928debf2/","posts/73626faf/","posts/7ec7be7a/","posts/4787801/","posts/9daba997/","posts/6cb5a254/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};