[&larr; Back](/about/docs)

# Getting started

We work together on GitHub. The
[felix-schindler/com](https://github.com/felix-schindler/com) repository is the
central starting point for developing. In there is a single SvelteKit app, where
everything is happening.

## Set up

You'll need the following (or equal) applications:

- [VSCode](https://code.visualstudio.com)
- [NodeJS, NPM](https://nodejs.org)
- [Git](https://desktop.github.com)
- [Browser](https://www.mozilla.org/firefox/developer/)

Clone the Git repository to your local machine. After that, install the
dependencies and run the website locally.

```bash
git clone git@github.com:felix-schindler/com.git && cd com

npm ci && npm run dev
```

After that, you can open the [website on your machine](http://localhost:5173).

## Frontend

```text
📂 src
┗ 📂 routes
  ┣ 📂 about - Pages with access for everyone
  ┃ ┣ 📂 auth - Login form
  ┃ ┃ ┣ 📂 forget - Forgot password form
  ┃ ┃ ┣ 📂 logout - Logging out the authenticated user
  ┃ ┃ ┗ 📂 register - Quiz for new customers
  ┃ ┣ 📂 contact - Contact form
  ┃ ┣ 📂 ctf - Current CTF page
  ┃ ┣ 📂 docs - These docs ; All pages are written in Markdown
  ┃ ┣ 📂 imprint - Impressum nach `§5 TMG` (german law)
  ┃ ┣ 📂 privacy - Privacy policy (always has to be up-to-date!)
  ┃ ┣ 📂 team - Team showcase
  ┃ ┗ 📜 +page - General home page
  ┗ 📂 app - Access for authenticated users only
    ┣ 📂 status - Status page for the products of the customer
    ┗ 📜 +page - Customer Dashboard
```

## Backend

Unattached from this repo, there is our
[PocketBase Backend](https://pb.schindlerfelix.de/_/). If there's anything that
can't be done in the PocketBase Backend, it [is / will be] done within the
SvelteKit app.

If you are working for us you can go over there and log in with your admin
account.

## Deployment

The website is deployed via [Vercel](https://vercel.com).
