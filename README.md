# [juletx.github.io](https://juletx.github.io)

[![Deploy Jekyll site to Pages](https://github.com/juletx/juletx.github.io/actions/workflows/jekyll.yml/badge.svg)](https://github.com/juletx/juletx.github.io/actions/workflows/jekyll.yml)

Developer portfolio website showcasing my software development skills, projects, and blog posts.

In this website you will find information about: Biography, Skills, Projects, and Blog Posts.

&copy; 2020&ndash;2026 Julen Etxaniz.

Built with <a href="https://jekyllrb.com/docs/" target="_blank" rel="noopener">Jekyll</a> — 
    the static site generator for <a href="https://pages.github.com/" target="_blank" rel="noopener">GitHub Pages</a>.
    
Uses <a href="https://primer.style/" target="_blank" rel="noopener">Primer</a> — GitHub's design system.

Hosted on <a href="https://github.com/juletx/juletx.github.io" target="_blank" rel="noopener">GitHub</a> · Served by <a href="https://pages.github.com/" target="_blank" rel="noopener">GitHub Pages</a>.

## Local Development

### Fork the `github/personal-website` repo

You'll be making your own copy of the "personal website starter" repository so you have your own project to customize. A "fork" is a copy of a repository. So select "Fork" atop [the `github/personal-website` repository](https://github.com/github/personal-website).

Once you've found a home for your forked repository, it's yours. You're the owner, so you're ready to publish, if you wish.

### Install in your local development environment

If you want to manage your website in a local web development environment, you'll be using [Ruby](https://jekyllrb.com/docs/installation/).

Once you've found a home for your forked repository, **[clone it](https://help.github.com/articles/cloning-a-repository/)**.

#### Install Jekyll

Jekyll is a [Ruby Gem](https://jekyllrb.com/docs/ruby-101/#gems) that can be installed on most systems.

1. Install a full [Ruby development environment](https://jekyllrb.com/docs/installation/)
2. Install Jekyll and [bundler](https://jekyllrb.com/docs/ruby-101/#bundler) [gems](https://jekyllrb.com/docs/ruby-101/#gems)
```
gem install jekyll bundler
```
3. Change into your new directory
```
cd personal-website
```
4. Install missing gems
```
bundle install
```
5. Build the site and make it available on a local server
```
bundle exec jekyll serve
```

You should see something like:

```
Configuration file: /octocat/personal-website/_config.yml
            Source: /octocat/personal-website
       Destination: /octocat/_site
 Incremental build: disabled. Enable with --incremental
      Generating...
   GitHub Metadata: No GitHub API authentication could be found. Some fields may be missing or have incorrect data.
                    done in 14.729 seconds.
 Auto-regeneration: enabled for '/octocat/personal-website'
    Server address: http://127.0.0.1:4000
  Server running... press ctrl-c to stop.
```

Don't worry about the "No GitHub API authentication could be found" message. [API authentication is only necessary](https://github.com/jekyll/github-metadata/blob/master/docs/authentication.md) if you intend to display more detailed metadata, like a branch name.

6. Now browse to [http://localhost:4000](http://localhost:4000)

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
