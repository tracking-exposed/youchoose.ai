---
title: Adoptions feedback
subtitle: An internal small summary on how YCAI is doing
type: c3app
date: 2021-11-05T00:00:00
draft: false

og_title: "ytTREX - usage statistics"
og_type: "website"
og_image: "http://youchoose.tracking.exposed/images/user.png"
og_url: "https://youtube.tracking.exposed/impact"
og_description: "this should be fill up properly"
---

<br>

* **Hi reader, a question** this link is not linked to the outside, should it be? 
  * **YES** it should as open data is a form of transparency and awareness. _opportunity_ might be used as a form to show success and adoption.
  * **NO** it might not be as it might show a really small adoption. We can keep these stats password protected (which other accountability metric might we need protected in that way?), but for transparency/accountability reason we might release monthly aggregated stats.
  * **note**: these are also partially shared in [yttrex/impact](https://youtube.tracking.exposed/impact) as the DB they refer is the same (they need a strong update too after the new updates).
---

## Content creators
<div id="creators-graph" class="c3graph"></div>

* **Potential other information**: the channels that subscribed to the service, should they be listed somewhere? should it be an option we offer to creators ("_be indexed in our list_"?)

## Data donors for collaborative analytics 
<div id="supporters-graph" class="c3graph"></div>

* **Potential other information**: Average count on how much a person spend on youtube. (expected-Gaussian) distribution on how many videos they watch. Mapping the diversity of the content observed, statistics on their browser language.

## ADS
<div id="ads-graph" class="c3graph"></div>

* **Potential other information**: Average count on how much a person spend on youtube. (expected-Gaussian) distribution on how many videos they watch. Mapping the diversity of the content observed, statistics on their browser language.


## `ytvids`
<div id="ytvids-graph" class="c3graph"></div>

_Reminder we've a problem here: we should ensure more than the last 30 videos; Reminder we might use collaborative observation to trigger the **repull** API._

* **Potential other information**: total videos / daily added videos. 

## Recommendations 
<div id="recommendations-graph" class="c3graph"></div>

* **Potential other information**: average number of recommendations, statistics on the kind of domain linked outside.

## 🍃 Leaves
<div id="leaves-graph" class="c3graph"></div>

_**Note: This is a technical measurement**. The amount of HTML portion collected from which we mine meaningful information, it should not be reported except if we don't want to work on something that is mean to let us know how the parsers are doing. The quality assurance method should keep collecting leaves for us, ad we should see from a graph like this "**100% processed successfully**"_

<div id="notes"></div>

---

#### Statistics and OpenData enable network effects, data reuse, and collaborative revision of our project. But they are tricky and can't be released carelessly:

* [Data can't be anonymized](https://www.theguardian.com/technology/2019/jul/23/anonymised-data-never-be-anonymous-enough-study-finds) easily, we aggregate them and we use only non-personal metadata to develop the aggregation.
* We don't want to help in any way [social media intelligence](https://responsibledata.io/social-media-intelligence-the-wayward-child-of-open-source-intelligence/).
* It is in our DNA [to enable researchers](/data-activism), we described our [data usage policies](/privacy).
* The public stats below display how the system is performing, how the people use it (no content-related analysis are here).
