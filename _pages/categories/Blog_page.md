---
layout: archive
permalink: Blog_page
title: "Blog"

author_profile: true
sidebar:
  nav: "Blog"
---

{% assign posts = site.categories.Blog %}
{% for post in posts %}
  {% include archive-single.html type=page.entries_layout %}
{% endfor %}