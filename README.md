# YatraSetu Official APK Download Website

Minimal responsive static website.

## Included
- `index.html` — landing and APK download page
- `styles.css` — responsive minimal design
- `config.js` — APK URL, release version and contact configuration
- `app.js` — download button and page configuration
- `privacy.html` — starter privacy notice
- `assets/favicon.svg` — website icon

## Configure your APK
Open `config.js` and set the exact APK asset URL from your GitHub Release:
- `version`
- `releaseDate`
- `apkUrl`
- `releaseUrl`
- `apkSize`

The download button intentionally remains disabled until `apkUrl` is set. Do not guess the URL.

## Free Cloudflare Pages deployment
1. Create a GitHub repository, e.g. `yatrasetu-download`.
2. Upload the contents of this folder to the repository root.
3. Sign in at https://dash.cloudflare.com/
4. Go to Workers & Pages → Create → Pages → Connect to Git.
5. Select your repository.
6. Choose framework preset: None.
7. Leave build command empty.
8. Set output directory to `/` or `.` as requested by the dashboard.
9. Deploy. Cloudflare provides a `*.pages.dev` address.

## Important
- Feedback currently opens the user's email app. It is not saved to a database.
- Reviews are not collected yet.
- Automatic APK updates are not implemented; the page points to the release URL.
- Complete the privacy policy before public release.
- Keep your APK signing key private and use the same key for future app updates.
