---
title: Thoughts on Search Engines
# subtitle: And other thoughts on the Origin of this Blog
date: "2020-06-20"
tags:
  - "extensions"
  - "apis"
  - "thoughts"
---

[This](https://news.ycombinator.com/item?id=25127371) showed up on Hacker News and elicted a very interesting discussion.

Here are some high level thoughts:

- Start with a small scope
- Support "deep search" using APIs where available/useful
  - Includes semantic web
- Try to do indexing on the browser
  - Of course there are trust issues
- Use some heuristics
  - E.g. if movies, music, or TV, also search Youtube for videos
  - If there are links in the content section of a news article, they are likely directly related to the topic
- Use a combination of Knowledge Graphs and Machine learning to learn heuristics above automatically
- Run the ML on the browser (using GPUs if possible) to offload hard work

> is somebody aware of a project where the end-user Browser acts as a Crawler? it already spent the energy to render the content. Readability.js extracts page section, does some processing for keywords, hashes anchor links, signs it and sends it off. Cache-Control response headers indicate if the page is public or private. Of course, where it is sending to will have an electricity bill to pay to index the submissions.

This means that the server only has to focus on:

- Querying approved "deep search" endpoints, like
  - Wikipedia, Wikidata
  - DBPedia
- Recieving
  - Indexes
  - ML extracted triples, and predictions on the "closeness" or relevance of content
- And performing associated rate limiting and verification if needed in order to deter bad actors.

Some computation could be compiled to WASM?

This would by nature focus mainly on the content of the sites that users were visiting. Thus maybe some good names are

- CommunoSearch
- bsearch
- IDK

This would of course mean that volunteers would be providing some information about what they are looking at, which could have a host of consequences ranging from embarassment to violating business confidentiality and more.

So maybe we use some differential privacy techniques to not show results to users if the data that backs those results is only from one user.

Also of course we would by necessity keep certain de-anonymizable data like IPs in order to deter bad actors as mentioned, but those would if possible not be accessible to sysadmins, and if so, only trusted vetted ones.

See https://lunrjs.com/guides/index_prebuilding.html for search index serialization (formats)

Maybe we have a "slot" system so user sends minimal info instead of full ingress POST req.

E.g. sends a hash of certain relevant response headers via `GET /slots/new?q=hash`

which returns plaintext

`<slotUUID>` or `0` or smth

to which the client then goes `POST /slots/<slotUUID>` with

serialized index, along with full headers? hash of some headers?
even could be full response --> more indepth parsing or ML could be done

Would have to have extension to inject into all web pages to get resp. headers

Could have context menu (rightclick) option to say: here's my answer

That answer would go into local history to refer back to, would also help train NLP system?

Could have levels of intelligence

- All (collects time on page, cursor location, etc)
- Less (links clicked etc)
- None

Might need to build models to adjust to different reading/consumption styles

Would this truly deliver better search

## Prior Art

marc_abonce 5 days ago [–]

Yes. Both PeARS[1] and Cliqz[2] tried to do that. Both got direct support from Mozilla[3][4] but it looks like neither really kicked off.

PeARS was meant to be installed voluntarily by users who would then choose to share their indexes only to those they personally trusted, so the idea is very privacy conscious but also very hard to scale.

Cliqz, on the other hand, apparently tried to work around that issue by having their add-on bundled by default in some Firefox installations[5] which was obviously very controversial because of its privacy and user consent implications.

I still think the idea has potential, though, even if it's in a more limited scope.

[1] https://github.com/PeARSearch/PeARS-orchard [2] https://cliqz.com/en/whycliqz/human-web [3] https://blog.mozilla.org/press-uk/2016/06/22/mozilla-gives-3... [4] https://blog.mozilla.org/press-uk/2016/08/23/mozilla-makes-s... [5] https://www.zdnet.com/article/firefox-tests-cliqz-engine-whi...
