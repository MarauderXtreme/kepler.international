---
namespace: swt
permalink: /projects/softwaretechnologie-praktikum
permalink_en: /projects/softwaretechnology-internship
category: projects
tags: java development university
---

# Softwaretechnology Internship

## Bookshop Schiller

A fictive bookshop named Schiller approached our randomly put together team so that we create a professional web application for them.
Of course we started to work enthusiastically on this project.
That is the theory now we had over to the real project details.

In our third semester we were facing the softwaretechnology internship.
What does this mean? We are working nearly a complete semester on a project that should be done with the classical scheme of project procedure.
Our tutor was both customer and contact person and we also had a "competition team".
We had to do the phases of analysis, design, implementation, testing and the final delivery.
I will look on some aspects from this project.

## Problems with the software from last year

A year before one group had completely redesigned, recoded and improved the software that is used to manage the swt projects.
After their work they gave their resulting application to the department of software technology and their project was finished.
As it was time for the next round with internships they realised that the software was unfinished and did not work.
So they decided without further ado to reuse the old application what resulted in trouble and drawbacks.
The commonly used feature to apply for custom and self chosen groups was not available.
It seems that the department that is preaching "test-first" development can not deploy, test and fix last bugs within one semester in a software they accepted.
So much for that.
This is at least the half official story that made its round in the run-up to the internships.
This makes fun to this project.

## Randomly assigned groups

First I was skeptical because I was assigned 1,5x to bad groups.
First time there where the [Emimafia][emimafia] group with one imposter.
He said he understands everything and can do it quite well but not really.
Read through the article to see who I mean.
This was nothing but selfmade trouble because we could choose our groups.
Next thing was the Robolab (coming soon) with randomly assigned groups.
From completely missing persons over a language barrier to complete nescience where this group was not the best I had worked in.
So I braced myself against the worst but I was positively surprised.
This group worked together quite well on this project.
Of coursed there were problems and some miscommunication but nothing that could be dealt with.
Alltogether I was satisfied with the teamwork.

[emimafia]: /projects/emimafia

## Preparations

From the beginning we knew that this project could cause a lot of trouble.
In hindsight I have to admit that it was not that bad.
Nevertheless someone gets easily influenced by friends or higher semester.
This is the reason why for this project my enthusiasm was not the best.
After we got to know each other and our task was revealed the preparations started.
We were required to use a version control system but it was left to us to decide wether to use git or svn.
Before anyone could dare I convinced everyone that git woul be the better choice.
(You can use svn but than it will be shit.)
The hosting was organised by [Fusionforge][fusionforge] from the TU.
I once had to work with Fusionforge on the Robolab but it was not the best.
At least the fact that you are required to type https explicitly otherwise you can not connect is repellant.
To configure this redirect it at most takes half an hour of internet search.
After I arranged myself with it and configured all neccessarry rights out tutor told us that we also can use Github with private repositories.
After I heard that the migration from Fusionforge to Github took place quite fast.
The management got all load easier.
We also got some [webspace][webspace] to document our project history.
Because I was too lazy to upload the new files twice a week or more often I just linked the [public repo][public-schiller] I created on Github.
There you can find nearly all documents related to our project.
The source code resides in a [private repo][bookshop-schiller] which I open-sourced in the meantime.

[fusionforge]: https://fusionforge.zih.tu-dresden.de/
[webspace]: http://group17.kepler.international/
[public-schiller]: https://github.com/MarauderXtreme/public-schiller
[bookshop-schiller]: https://github.com/MarauderXtreme/bookshop-schiller

## Analysis

In this phase we created all important documents.
For example the contract specifications which was created by us and was not given to the group.
Additionally some uml diagrams and further documents were added that we consequently wrote in TeX after some problems on start.
We were required to use MagicDraw to create the diagrams.
Its output is default a proprietary and binary file.
This can be easily handled with git.
`</irony>`
There is an option to export the diagrams in XML that is much more git friendly.

## Design

In the next phase we worked for the first time with Spring and SalesPoint both Java frameworks we should use for this project.
The documentation of SalesPoint is one of the worst I have ever seen.
Because of that working with it is unneccessary.
Someone told me that the concept of Spring is now what is used in Java EE7.
Anyway Spring is extensive.
This makes it quite confusing for someone who starts to use it on a complete new project.
There were two crash courses at the beginning of this internship.
They were held by [Oliver Gierke][oliver-gierke] who at least managed to make them interesting.
Nevertheless are only two short lectures not enough to learn everything needed but only show some main features.
So we had to look at the example project and rewrite the most of it.
Many good features especially for web were not used because we did not know them.
Furthermore we had to implement the first prototypes.
Luckily we decided to include all prototype in one major so that we reduced our work later.
I had to write the complete GUI prototype what was nearly the end product.
I decided to develop mobile first and used ZURB Foundation for it.
Developing the GUI got easy because of it.

[oliver-gierke]: https://github.com/olivergierke

## Implementation and Testing

After we got through the interim presentation christmas and the implementation came near.
We diligently worked on functionalities but nevertheless our working times exploded since the delivery for cross testing approached.
Finally we were able to hand over a complete product to the other group for cross testing.
Unfortunately their product was not in a ready condition.
At the moment I wanted to compile their project for testing the first time there was a huge load of errors.
So I was unable to test their application.
No one from the other group was attainable.
Short before of the end of the cross testing we got a version which was heroically put to the acid test by our secretary.
So we could provide feedback for the other group.

The tests were a bit neglected and were introduced late to the project.
Some things could hardly be tested because of the mvc pattern of the spring project.
At last we got a bunch of test that were ran by Travis with every Push.

Sadly I remembered to use Github Issues for tracking the functionalities.
It was a bit hard to introduce working with issues to my fellow group members but in the end it worked.
aber letzten Endes lief das auch gut.

## Delivery

Within the final phase shortly it got hectic but not for long.
We rocked the presentation with our project.
In my opinion our end product was much more sophisticated than that one from competition team.
Unfortunately not even Miss Demuth was present at our presentation.
What a pity.

## What remains?

After all our Product was not honored in any way.
We even could have done just the less and we would have passed.
There was a mark but this is not mentioned anywhere.
There is just passed or not.
The year before the best project got an award and the group members got a prize.
This year nothing at all.
At least I wished for some honor.
A presentation of all current work for a half year on the servers of the TU and a ranking even without a prize.
So this project is just thrown into a Github repo and at most helps people the next years.
But there was a pull request so maybe this project will not sleep.

## Last thought

I just rememberes that our tutor promised to pay for a round in the Bierstube after we just passed this internship.
Unfortunately until today it did not happen.
Maybe I create an Issue on Github and assign him.
Let's look what will happen.
