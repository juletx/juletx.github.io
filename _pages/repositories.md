---
layout: page
permalink: /repositories/
title: repositories
description:
nav: true
nav_order: 4
published: true
---

{% if site.data.repositories.github_users %}

## GitHub Stats

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% include repository/repo_user.liquid username=user %}
  {% endfor %}
</div>

---

## GitHub Trophies

{% if site.repo_trophies.enabled %}
{% for user in site.data.repositories.github_users %}
{% if site.data.repositories.github_users.size > 1 %}

  <h4>{{ user }}</h4>
  {% endif %}
  <div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% include repository/repo_trophies.liquid username=user %}
  </div>

---

{% endfor %}
{% endif %}

## Top Languages

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for user in site.data.repositories.github_users %}
    {% assign locale = site.lang | split: '-' | first %}
    <div class="repo p-2 text-center">
      <a href="https://github.com/{{ user }}">
        <img
          class="only-light w-100"
          alt="{{ user }} top languages"
          src="{{ site.external_services.github_readme_stats_url }}/api/top-langs/?username={{ user }}&theme={{ site.repo_theme_light }}&locale={{ locale }}&layout=compact&langs_count=10&custom_title=Top%20Languages"
        >
        <img
          class="only-dark w-100"
          alt="{{ user }} top languages"
          src="{{ site.external_services.github_readme_stats_url }}/api/top-langs/?username={{ user }}&theme={{ site.repo_theme_dark }}&locale={{ locale }}&layout=compact&langs_count=10&custom_title=Top%20Languages"
        >
      </a>
    </div>
  {% endfor %}
</div>

---

{% endif %}

{% if site.data.repositories.github_repos %}

## Featured Repositories

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in site.data.repositories.github_repos %}
    {% include repository/repo.liquid repository=repo %}
  {% endfor %}
</div>

---

{% endif %}

## GitHub Repositories

<p class="text-muted">Sorted by stars. Excludes forks and archived repositories.</p>

{% assign sort_order = 'stargazers_count' %}
{% assign filtered_repos = site.github.public_repositories | where: 'archived', false | where: 'fork', false | sort: sort_order | reverse %}

{% assign featured_repos = site.data.repositories.github_repos %}

<div class="repositories d-flex flex-wrap flex-md-row flex-column justify-content-between align-items-center">
  {% for repo in filtered_repos %}
    {% unless featured_repos contains repo.full_name %}
      {% include repository/repo.liquid repository=repo.full_name %}
    {% endunless %}
  {% endfor %}
</div>
