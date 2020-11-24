# Unsearch

I challenged myself to build the "un-search" engine somewhat articulated in a recent Hacker News post.

Here goes.

## Time plan

- 30 mins for research and setup
- 30 mins for getting indexing working on basic response
- 30 mins for crappy express backend server, in-memory store (pluggable, redis?), x2
- then look at ML if possible

## Conclusion

And we come full circle:
https://github.com/olivernn/lunr.js/issues/29

Although we're able to extract text content and create individual indexes on the client, currently there is no default supported way to merge them back on the server using the Lunr library.

The issue mentions a naive algorithm to do the merge, but describes that performance is bad. To finish out this proof of concept, maybe I'll come back to this and do that.

A more efficient algorithm would require some more research into the relevant literature for data structures and algotihms.
