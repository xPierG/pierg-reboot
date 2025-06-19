---
title: "Blog"
layout: "default"
---
<ul class="post-list">
{%- for post in collections.post | reverse -%}
  <li class="post-list-item">
    <a href="{{ post.url | url }}">
      {{ post.data.title }}
    </a>
    <time class="post-list-date" datetime="{{ post.date | date('yyyy-MM-dd') }}">
      {{ post.date | date('dd LLLL yyyy') }}
    </time>
  </li>
{%- endfor -%}
</ul>