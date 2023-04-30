---
namespace: feel-offended
permalink: /blog/ich-fuehle-mich-beleidigt
permalink_en: /blog/i-feel-offended
category: blog
tags: website
---

# I feel offended

I regularly check to see if there are any errors on my website and try to fix them.
This includes page access errors.
If Google can not find certain pages anymore that can be quite deadly for all the SEO stuff.
It is just the links to the CSS files that have fallen out of the cache most of the time and are being fetched again.
This results in access errors, which are not too worrying.

But there are also error messages that worry me more.
These include urls such as those used to register or create new content.
There seem to be some people trying to see if I have misconfigured my site.
Okay.
Come at me bro!

What I find more interesting are urls that as a quick Google search reveals are used to exploit security vulnerabilities.
I always keep my modules up to date and the holes that are tested do not exist in my setup.
So I usually have to smile and pat myself on the back.

Urls are used in addition that are related to Magento-based shop systems, for example.
It's really not difficult to find out which software my website is based on.
(see Metatag generator HINT HINT)
I keep nevertheless seeing entries of urls that absolutely do not match my site.

That wouldn't be so bad in itself, if there weren't also the obligatory attempts to access wp-admin.php or similar.

## NOT WORDPRESS

Guys.
This is a Drupal site.
It borders on insulting to imply that I run a wordpress site.
I have already made it known in various ways that I use Drupal and not Wordpress.
There are several reasons for this, one of which is that I somewhat detest the angry fruit salad nature of Wordpress.
I see myself as a serious web developer who produces tailor-made solutions and does not simply use any drag'n'drop solutions.
In my opinion Wordpress is just such a thing.

## Fail2Ban them all

One good thing about this is that I'm thinking of building a fail2ban mechanism that automatically bans IPs accessing the usual suspects of wordpress URLs for x amount of time.
Either I program a module that does the evaluation and then redirects to a hint page as long as the ban is in place.
On the other hand, I could use fail2ban directly and use existing infrastructure.
