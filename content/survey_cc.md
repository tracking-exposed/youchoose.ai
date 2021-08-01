---
title: "YouChoose? YouAnswer: the survey"
subtitle: Help us understanding how to deveope YouChoose.
date: 2021-07-07T05:01:21+02:00
draft: false
extracss: "/css/youchoose.css" 
type: fullscreen
---
<div class="container">
<div class="col-md-10">

  <div id="main"></div>
  <script src="/js/generated/questions.js"></script>
  <!-- this load the mUI webapp -->

  <script type="text/javascript">
    if (typeof (history.pushState) != "undefined" && window.location.href.split('#').length == 1)  {
        const obj = { Title: "YouChoose? YouAnswer: the survey", Url: window.location.href + "#web"};
        history.pushState(obj, obj.Title, obj.Url);
    }
  </script>

</div>
</div>
