source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 3"
# This is the default theme for new Jekyll sites. You may change this to anything you like.
# gem "minima", "~> 2.5"
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!
group :gh_extenstions do
  gem "github-pages-health-check"
  gem "html-pipeline"
  gem "jekyll-gist"
  gem "jekyll-github-metadata"
	gem "jekyll-include-cache"
  gem "jekyll-redirect-from"
  gem "jekyll-relative-links"
  gem "jekyll-sass-converter"
  gem "jemoji"
  gem "kramdown-parser-gfm"
  gem "kramdown"
  gem "liquid"
  gem "nokogiri"
  gem "rouge"
  gem "safe_yaml"
  gem "sass"
end

group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-optional-front-matter"
  gem "jekyll-sitemap"
  gem "jekyll-titles-from-headings"
  gem "jekyll-assets", git: "https://github.com/envygeeks/jekyll-assets"
  gem "jekyll-paginate-v2"
  gem "jekyll-multiple-languages-plugin"
	gem "jekyll-target-blank"
  gem "jekyll-email-protect"
end

group :assets_plugins do
	gem "sprockets"
  gem "uglifier"
	gem "autoprefixer-rails"
  gem "image_optim"
  gem "image_optim_pack"
end

gem "html-proofer"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
