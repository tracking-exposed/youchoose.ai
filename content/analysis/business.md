---
title: "YouChoose.AI business case"
subtitle: "business, competitors and opportunity analysis for youchoose"
draft: false
type: "webslides"
og_title: "YouChoose.AI business case"
og_description: "business, competitors and opportunity analysis for youchoose"
og_type: "website"
og_image: "http://youchoose.tracking.exposed/images/compare.jpg" 
og_url: "https://youchoose.tracking.exposed/analysis/business"

extraCSS: "/css/business-case-slide.css"
---

<section>

## Problem

**Algorithms are the gatekeepers** of YouTube.

The various search and recommendation engines select [more than 70%](https://www.journalism.org/wp-content/uploads/sites/8/2020/09/Many-Americans-Get-News-on-YouTube-Where-News-Organizations-and-Independent-Producers-Thrive-Side-by-Side.pdf) of the content viewed on the platform.

Yet, these opaque systems have serious drawbacks:
* They favor clickbaity and sensationalist content
* They are not accountable and hardly customizable
* Their results are confined within YouTube.com
- - -
### ➜ An AI with misaligned interest decides most of what people watch.

</section><section>

## YouChoose

**Gain back control over your recommendations** on YouTube.

YouChoose allows you to choose your recommendation model on YouTube.com, including:

* From your content creators
* From other websites and social media feeds
* From alternative recommendation engines like Tournesol.app
- - -
### ➜️ YouChoose helps you design recommendations that are optimized for you, not for YouTube.

</section><section>

## Motivation

There is a **growing frustration** on the monopolistic influence platforms have in shaping information flows.

**Content creators** are at the mercy of an opaque AI which favors engagement over quality.

**YouTube users** have their attention monetized and pushed towards addictive consumption patterns.

**Regulators** are demanding more AI transparency and market competition. 
- - -
We believe that **algorithmic platforms** like YouChoose will soon emerge, similar to how app stores offered alternatives to native applications.

YouChoose is an early **attempt to end the era of algorithmic monopolies**.

A step toward a **more open and decentralized internet**, with more user agency.

</section><section>

## Our approach

**YouChoose is an alternative recommendation system** for YouTube.

Rather than purely relying on AI, **YouChoose leverages human expertise** to identify the best related content. 

Such specialized human expertise is found among:
* Content creators (main feature)
* Volunteer contributors (Tournesol.app)
* Existing online communities (Reddit tab)
* Users' personal feeds on other platforms (Facebook)
 
</section><section>

## Unique Value Proposition

**For YouTube users**:

* Recommendations that are aligned with your own interest, not someone else's profit.
* Gaining back agency over your informational diet.
* Super light habit change: Simple extension which overrides recommendations directly on YouTube.com.

---
**For content creators**:
* Gain back control on the other videos your content promotes.
* Gain a new direct connection to your audience, through recommendations.
* Get analytics on the recommendations and ads which YouTube puts on your content

</section><section>

## Competition

There is an existing market for extensions that improve the experience on YouTube.com. 

Most implement a targeted UX improvement, such as [ad-blockers](https://chrome.google.com/webstore/detail/adblock-for-youtube/cmedhionkhpnakcndndgjdbohmhepckk), [UI modifications](https://chrome.google.com/webstore/detail/color-changer-for-youtube/nbgajjpkheaedahobdmhgkomjkpnnhfn) or [additional player controlers](https://chrome.google.com/webstore/detail/magic-actions-for-youtube/abjcfabbhafbcdfjoecdgepllmpfceif). 

The only other actor with a similar intention of replacing YouTube recommendations is our partner [Tournesol.app](https://tournesol.app/) 

**Our real competitor is YouTube itself.** They added some [customizability features](https://support.google.com/youtube/answer/6342839?hl=en&co=GENIE.Platform%3DAndroid) to their algorithm over the past year. 

They might also attack us, by obfuscating their code to break our extension, removing it from the Google Store or through legal actions.

We are accounting for these scenarios in our design and strategy. 

</section><section>

## Value Chain Positioning

**YouTube:**

* [Adversarial Interoperability](https://www.eff.org/deeplinks/2019/10/adversarial-interoperability): we plug ourselves onto YouTube, without their approval
* [Context of antitrust scrutiny](https://www.cnbc.com/2020/12/18/google-antitrust-cases-in-us-and-europe-overview.html): we bet on the favourable legal and public opinion context to limit YouTube's aggressiveness 

---
**Content Creators:**
* Essential to our growth strategy so they promote YouChoose directly to their audience
* Content creators are like our first customers, who pay us with free advertisement

</section><section>

## Market Perspectives

[2.3 billions](https://www.oberlo.com/blog/youtube-statistics?utm_source=pocket_mylist) of YouTube users worldwide

Our target user segments: 

* Most **digitally literate users**, aware of the power of the algorithm and eager to customize it
* Users who speak **non-english languages** where recommendations are less relevant and less moderated
* **Heavy YouTube users**, who like to dig and browse content
* **Users frustrated** by YouTube's discretionary power to curate content

</section><section>

## Business Model

One of the features of YouChoose is to enable **recommendations outside of YouTube.com**

This has a highly lucrative potential: YouChoose will be a **gateway from YouTube** to other platforms, opposite to the typical dynamic.

This monetization scheme is both **politically aligned** with our internet decentralization mission and has **high lucrative potential**.

**Ex:** _offer National Geographics to pay for sponsored recommendations toward their website on related YouTube content_.

</section><section>

## Who we are

YouChoose is a **not-for-profit project**, ran by a **transdisciplinary team** of experienced technologists:

**Marc Faddoul - Strategy and Outreach** <br>
Data Scientist and AI researcher | *UC Berkeley, ex-Facebook AI*

**Claudio Agosti - CTO** <br>
Privacy expert and open-source developer | *Founder of Tracking.Exposed*

**Primavera - Legal & Community Development** <br>
Legal Scholar and blockchain expert | *Harvard Berkman Center, CNRS*

**Salvatore Romano - UX Research** <br>
Social Psychologist | *University of Padova*

**Giulia Corona - Communication and UI**<br>
Communication Designer | *University of Milano*

</section>

<script>
  removeHeaderFooter(1500)

  $(document).ready(function() {
      let visibleFooter = false;
      /* if the mouse goes out, for four second leave the bar */
      $(document).mouseleave(function() {
        $('header').fadeIn(300);
        window.setTimeout(function() {
          $('header').fadeOut(300);
        }, 4000);
      });
      $("#final-slide").on('mousemove', function() {
        visibileFooter = !visibleFooter && restoreHeaderFooter(800);
      });
    }
  );
</script>