# Changelog

Notable changes to ferrsign from 0.0.5 on. Versions follow semver; while the major is 0, any
release may break the API. Breaking changes are marked.

## 0.0.6 - 2026-11-16

### Changed

- The package ships ES2020 modules compiled by `tsc`, one file per source module, instead of a
  bundled `index.js` and a minified `index.min.js` picked by the `development` and `production`
  export conditions. Dev-mode checks now depend on the app's bundler defining
  `process.env.NODE_ENV`. Without a bundler, `process` has to exist at runtime.

## 0.0.5 - 2026-11-15

### Changed

- **Breaking:** `on` and `once` return an `Unsubscribe` function instead of `undefined`, and the
  `FerrsignView` interface declares them that way. Calling it removes the callback. A second call
  does nothing, so it cannot remove a later subscription of the same callback. `Unsubscribe` is
  exported as a type.

### Fixed

- A callback that throws during `emit` no longer leaves the signal mid-emit. Removals requested
  during that emit used to stay deferred, and callbacks removed later were never detached.
