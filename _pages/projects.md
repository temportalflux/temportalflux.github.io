---
layout: archive
author_profile: true
permalink: /projects/
---
<div class="grid__wrapper">
	{% assign items = site.projects | sort: 'order' %}
	{% for post in items reversed %}
		{% include archive-single.html type="grid" %}
	{% endfor %}
</div>