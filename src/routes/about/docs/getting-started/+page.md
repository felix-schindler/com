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
git clone git@github.com:felix-schindler/com.git
cd com

npm ci && npm run dev
```

After that, you can open the [website on your machine](http://localhost:5173).

## Frontend

- ๐ `/about` - Pages with access for everyone
  - ๐ `/auth` - Login form
    - ๐ `/forget` - Forgot password form
    - ๐ `/logout` - Logging out the authenticated user
    - ๐ `/register` - Quiz for new customers
  - ๐ `/contact` - Contact form
  - ๐ `/ctf` - Current CTF page
  - ๐ `/docs` - These docs ; All pages are written in Markdown
  - ๐ `/imprint` - Impressum nach ยง5 TMG (german law)
  - ๐ `/privacy` - Privacy policy (always has to be up-to-date!)
  - ๐ `/team` - Team showcase
  - ๐ `/+page` - General home page
- ๐ `/app` - Access for authenticated users only
  - ๐ `/status` - Status page for the products of the customer
  - ๐ `/+page` - Customer Dashboard

## Backend

Unattached from this repo, there is our
[PocketBase Backend](https://pb.schindlerfelix.de/_/). If there's anything that
can't be done in the PocketBase Backend, it [is / will be] done within the
SvelteKit app.

If you are working for us you can go over there and log in with your admin
account.

## Deployment

The website is deployed via [Vercel](https://vercel.com).
