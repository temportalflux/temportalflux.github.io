---
layout: archive
author_profile: true
permalink: /blog/
paginate: true
---

{% for post in paginator.posts %}
	{% include archive-single.html %}
{% endfor %}

{% include paginator.html %}
