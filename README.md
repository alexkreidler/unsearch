# Unsearch

I challenged myself to build the "un-search" engine somewhat articulated in a recent Hacker News post.

Here goes.

Time plan

30 mins for research and setup

30 mins for getting indexing working on basic response
30 mins for crappy express backend server, in-memory store (pluggable, redis?)
x2

then look at ML if possible

And we come full circle:
https://github.com/olivernn/lunr.js/issues/29

Although we're able to extract text content and create individual indexes on the client, currently there is no default supported way to merge them back on the server.

This could require some more research into DS and A.
