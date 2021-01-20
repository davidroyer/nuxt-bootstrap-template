# DevNotes

- I still don't understand `publicRuntimeConfig`

- Experienced lingering error with `.eslintcache` which is a file I've never
  seen before

---

## SEO/Meta

FINALLY figured out how to get the dynamic `titleTemplate` working.

The fix was setting the `title` option in `nuxt.config.js` to `null`.
FYI: `undefined` doesn't work. It has to be `null`.

---

## PWA

- I believe to get the icons built just put the icon I want to use in the
  `static` directory with the name of `icon.png`.

  NOTE: Don't know if this works the same way for the Vue CLI plugin

---

## Fetch/AsyncData

Since `fetch` has been modified to basically serve a new purpose, the way you
used it before to update the state on a route should now happen in middleware.
