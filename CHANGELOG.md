# Changelog

All notable changes to this project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] — 2026-10-01

Initial release.

### Added

- Six thumbnails per row instead of three in the video grid feed, by overriding a single CSS variable (`--ytd-rich-grid-items-per-row`) that the site's own layout engine uses.
- Toolbar popup with an on/off switch, persisted in `chrome.storage.local`.
- Extension icons (16/32/48/128).
- Bilingual README (EN/RU) with before/after screenshots.

### Changed

- Internal CSS class renamed to `six-column-grid` (was `yt-rows-6`) to match the project name.
- Popup redesigned: title, clear label and a hint about reloading an open tab.
- Removed the unused `scripting` permission (only `storage` is needed).

### Notes

- No data collection, no telemetry, no network requests at all.
- The grid density is fixed at 6; it can be changed manually in `content.css` when loading the extension unpacked.
