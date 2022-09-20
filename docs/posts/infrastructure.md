---
title: Infrastructure
publish_date: 2022-09-20
---

The [mono repo](https://github.com/felix-schindler/com) is the central starting point for developing. In there, you'll find the following directories:

- `ctf/` - The current [CTF website](https://ctf.com.schindlerfelix.de)
- `docs/` - This website
- `www/` - SvelteKit website of our [company site](https://com.schindlerfelix.de)

unattached from that, there is our [PocketBase Backend](https://pb.schindlerfelix.de). If you work for us you'll have your own admin account, with which you can log in. There and in our 🔜 to-be-announced admin panel.

Our company website is deployed via [Vercel](https://vercel.com). This docs site is deployed via [Deno Deploy](https://deno.com/deploy). The CTF site not yet deployed. In the future it will be deployed via GitHub Actions to our own server.

<!-- This folder structure could change. For the future I propose the following change:
In the `www` directory, create a new folder for every website. The name of that folder has to be the same as the domain name. For Apps we could create a new directory `app`.

```
www/
 ∟ com.schindlerfelix.de - Our company SvelteKit website
 ∟ customer.com          - Website for some customer
``` -->

<!-- ```
ctf/
 ∟ CTF website to get application codes
docs/
 ∟ This website
www/
 ∟ SvelteKit website
``` -->
