---
layout: archive
title: Blog
author_profile: true
permalink: /blog/
pagination: 
  enabled: true
---

{% if paginator %}
	Found Paginator
{% else %}
	No Paginator
{% endif %}

Posts: {{ paginator.total_posts }}
Pages: {{ paginator.total_pages }}

{% for post in paginator.posts %}
	{% include archive-single.html %}
{% endfor %}

{% for post in site.posts %}
	{{ post.title }}
{% endfor %}

<!--{ % include paginator.html %} -->
