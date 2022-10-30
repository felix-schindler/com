[&larr; Back](/about/docs)

# Mentality

## less code == better

### Style

Also we don't want to write any unnecessary code. Because of that, we try to
write as little polyfills as possible.

This is where modern CSS comes into play. Modern CSS offers a lot of things that
would take hours / days to implement corretly with CSS frameworks like Tailwind.
For example, we're using the `color-scheme` for the dark mode, `accent-color` to
style forms and CSS variables `var` with a small color palette.

```css
html {
	--accent: red;
	--on-accent: white;

	color-scheme: dark light;
	accent-color: var(--red);
}
```

Therefore we try to make a website

1. be fast
2. feel modern
3. be accessible
4. not mimic crazy designs

We can't really effort to do crazy designs like you find on
[dribble](https://dribbble.com), because they often times <mark>aren't
accessible</mark>, take a lot of <mark>time to implement</mark>, <mark>are
bloated</mark> and <mark>don't feel familiar</mark> to the user.

Because of that last point we try to give a native experience with Apps, even
tho they are implemented in [Flutter](https://flutter.dev).

### Backend

Because we want to save time writing code, we also don't code our backends, we
use PocketBase instead.
