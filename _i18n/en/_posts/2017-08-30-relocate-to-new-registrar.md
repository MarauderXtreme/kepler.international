---
namespace: relocate-registrar
permalink: /blog/umzug-zu-neuem-domainanbieter
permalink_en: /blog/relocate-to-new-registrar
category: blog
tags: administration dns linux
---

# Relocate to a new domain registrar

In the spring of this year I changed my domain registrar.
Initially I followed the recommendation from friends and went to United Domains (UD or ud from here on) and bought myself kepler.international as well as kepler.one there.
In the beginning I was quite pleased with the offer but there have been a few problems.
To set the DKIM signing keys from Fastmail was not the easiest since UD does not allow the creation of domains with a leading underscore.
The support there is quick and very friendly.
After all I just had to write an email with the domain and the values and the record has been set.
But I wanted more control.

## Alternative: do it yourself

As I would say I am now quite profound in operating Linux servers I toyed with the idea of setting up a DNS server myself and if only to learn and to have dealt with the software.
After reading up for a while I very quickly ditched that idea.
To secure and keep an authoritative name server upda to date sounded like a hell of a job.
I did not want the risk of a hijacked nameserver and the implicated dangers of it.

## Alternative: Fastmail

So I looked for another provider.
Since I have both of my domains configured in my mail provider I could use their offer to provide an authoritative nameserver and edit my records directly in Fastmail (FM or fm from here).
This made sense because FM offered a kind of webstorage so you could have everything from mail over domain to website at FM but this did not really fit my use case.
A benefit would have been that I did not have to tend to changing DKIM settings or service records.
I would prefer to have my domain management with a registrar nevertheless.

## Alternative: INWX

After a while I became aware of INWX through friends.
After complaining about UD over and over again Felix showed me the frontend and configuration possibilities of INWX.
I was skeptical at the beginning but finaly decided to move to INWX.

## The move

Oh boy.
A move like that is no mean feat especially if you have some records.
INWX unfortunately does not have an option like UD to set up the records prior to the move so that only the confirmation of the relocation code is needed to set the zone files to active.
But this was a minor problem compared.
It is not easy to start a transfer coming from ud.
I can now recognise why it needs to be this bureaucratic since a domain can be a brand and ip.
For my taste this was a bit much.
Unfortunately there where also obstaces at INWX.
You can only pay without an extra fee via wire transfer.
They offer Paypal but against a fee.
That is unfortunate but okay.
So I had to wait a day longer to move.
After the payment went thorugh I started the transfer and reconfigured all my records again.
Despite the trip hazards the move all in all went well.

## Benefit: INWX

Now that I have more or less full control over my dns records I created the missing service entries for Fastmail.
I noticed that INWX offers DNSSEC for a few tlds.
That is a welcome surprise but I have not looked into that any further.
I now have the option to setup SSHFP Records.
You can store the SSH fingerprints of your servers in them and instruct your client to to check them.
For me as a server administrator this is a huge benefit as I get more security.
To check the fingerprints manually is rather annoying especially of you deal with people that just confirm without checking or even have it completely disabled.
Lastly I pay less for my domains than prior on UD even though one increased in price.

## Conclusion

I moved with everything DNS from UD to INWX and am happy.
Thanks again to Felix for showing me INWX.
I can only recpmmend everyone to look into INWX and think about using or moving to it.
