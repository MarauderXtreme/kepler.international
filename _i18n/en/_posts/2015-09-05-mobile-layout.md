---
namespace: mobile-layout
permalink: /projects/mobiles-layout
permalink_en: /projects/mobile-layout
category: projects
tags: mobile drupal website development
---

# Mobile Layout

## Finaly Mobile

I succeeded to switch my website to a mobile layout.
At first this should have happened roughly half a year ago but my IHK exams prevented it.
After another semester I had enough spare time in my holidays and now it should happen.
Google notified me last spring that my website was badly optimized for mobile devices.
Because I care about the ranking by google and I did not like the old layout anymore the refresh of my website commenced.
Of course the bitching of Google was not the only thing because I had planned a mobile layout for a long time.

## Playground Foundation

I still can not understand why we had set up special subdomains, installed mobile detect libraries and completely depended on jQuery UI only to server a mobile website for smartphones.
Why were there no good frameworks earlier for developing mobile layouts out of the box?
Meanwhile there are potent frameworks that will do all the work and are straight forward in their development process.
I know two examples a bit better and of course I choose one for myself.
On one hand the is Bootstrap that is developed and maintained by Twitter.
On the other hand there is Foundation from ZURB.
The last one is the choosen one and now my daily driver.
I have to thank my boss for introducing me to this framework.

## Foundation vs. Bootstrap - FIGHT

Why Foundation is quite easily to explain.
Roughly a year ago over a complete semester the software technology project took place.
Its goal was to create a web application.
Further information in the [article][swt].
My task was it to handle the markup and the design of the shop.
(Oh, i did not see that coming)
For this purpose I examined those two frameworks because I wanted to show that I can develop "mobile first".
While testing both frameworks and evaluating which will fit better the decision came to Foundation.
In general both frameworks are equally good and provide nearly the same elements that one uses on websites.
But there were small differences that made the decision easy.

[swt]: /projects/softwaretechnologie-praktikum

## CSS-Classes

The main reason were the semantically readable classes of Foundation.
Best example is the definition of a button.
While in Bootstrap you need classes like `btn-sm btn-success btn` the readability of Foundation with "small success button" is way better.
You can find this through the whole definition of classes.
I have to admit that it can happen to you that you loose the overview with the long classnames.
This only happens to very specific objects that get so many classes for a special purpose.

## JS Validation

On Bootstrap they think that the already implemented validation through the new input types is sufficient.
I see this a good idea because HTML5 was developed for a reason.
However is the spreading of these new types and a final definition not really present.
Foundation as well as Bootstrap follows this approach but provides a possibility to define own regular expressions.
This comes in handy if you require certain specific formats like special password requirements.
Furthermore the HTML5 specification are not enough and we often need other formats where custom patterns are important.

## Foundation Wins

All things considered I personally prefer Foundation because it seems to fit my "needs" better.
Everyone should decide for themselves what suits them best.
However Bootstrap should not be choosen on popularity.
Lately I see more an more site using bootstrap and I start to think that it comes into vogue.

## Drupal Foundation

As we expect there is a drupal theme build with foundation.
Currently the most recent version 5 of Foundation is only available as release candidate but this should not hold you of from using it because many productive site are using it.
There are some small problems, mainly issues within the documentation but those can be dealt with easily.
Once more I was positively surprised by Foundation.
SCSS is a beautiful thing but Foundation takes it to the next level.
For all elements provided by the framework the are certain variables that allow you to completely adjust everything to you needs and design.
While the swt project I just used plain CSS I was not aware of this genius.
Definition of custom styles is nearly completely obsolete.
You just alter a long list of variables and in the end you get a beautiful layout.
This is webdesign like I as a webdeveloper want to do.
