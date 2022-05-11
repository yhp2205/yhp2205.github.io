---
layout: archive
permalink: Blog
title: "Blog"

author_profile: true
sidebar:
  nav: "docs"
---

{% assign posts = site.categories.Blog %}
{% for post in posts %}
  {% include custom-archive-single.html type=entries_layout %}
{% endfor %}