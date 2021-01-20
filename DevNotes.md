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
