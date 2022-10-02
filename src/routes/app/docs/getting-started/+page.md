[&larr; Back](/app/docs)

# Getting started

We work on GitHub. The
[felix-schindler/com](https://github.com/felix-schindler/com) repository is the
central starting point for developing. In there is a single SvelteKit app, where
everything is happening.

## Frontend

```text
📂 src
┗ 📂 routes
  ┣ 📂 about - Access for Everyone
  ┃ ┣ 📂 auth
  ┃ ┃ ┣ 📂 forget - Forgot password
  ┃ ┃ ┣ 📂 register - Quiz for new customers
  ┃ ┃ ┗ 📜 +page.svelte - Login form
  ┃ ┣ 📂 contact - Contact form
  ┃ ┣ 📂 ctf - Current CTF page
  ┃ ┣ 📂 imprint
  ┃ ┣ 📂 privacy - Privacy policy (always has to be up-to-date!)
  ┃ ┗ 📂 team - Team showcase
  ┗ 📂 app - Access for authenticated users only
    ┣ 📂 docs - Access for Admins only; All pages are written in Markdown
    ┗ 📂 dash - Dashboard for customers
```

## Backend

Unattached from that repo, there is our
[PocketBase Backend](https://pb.schindlerfelix.de). Since you seem to be working
for us, you can go over there and log in with your admin account, with which you
already logged in to on this website.

If there's anything that can't be done in the PocketBase Backend, it's done in
the SvelteKit app.

## Deployment

The website is deployed via [Vercel](https://vercel.com).
