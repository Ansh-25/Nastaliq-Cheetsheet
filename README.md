# Urdu by Letter

A mobile Urdu script cheat sheet with the alphabet, joining forms, word examples, dot patterns, and a Nastaliq/Naskh switch. Both scripts are available offline after the first online visit finishes loading.

## Publish on GitHub Pages

1. Create a public GitHub repository, for example `urdu-by-letter`.
2. Unzip the download. In the repository, choose **Add file → Upload files**. Upload the extracted contents and commit them to `main`. Put `index.html`, `manifest.webmanifest`, and `sw.js` at the repository root, alongside the `fonts` and `icons` folders. The included `.nojekyll` is optional if your file picker hides it.
3. Go to **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, then **main** and **/(root)**. Click **Save**.
4. Once the deployment is ready, open the HTTPS link shown under **Settings → Pages**.

[GitHub Pages publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## Install on your phone

- **iPhone or iPad** — Open the published link in Safari. Tap **Share → Add to Home Screen**, switch on **Open as Web App** if offered, then tap **Add**. [Apple instructions](https://support.apple.com/guide/iphone/open-as-web-app-iphea86e5236/ios)
- **Android** — Open the link in Chrome. Choose **Install app** from the browser menu or use the **Install app** button in the page footer when Chrome offers it. The browser may group installation under **Add to Home screen** or **Install and create shortcut**. [Chrome instructions](https://support.google.com/chrome/answer/9658361?co=GENIE.Platform%3DAndroid)

Let the page load online once in the browser you use to install it. If your phone opens the installed copy with its own storage, open that copy online once too. The cheat sheet and both fonts can then load offline. The external further-practice link needs internet access.

## Update the site

After editing a file, change the `VERSION` value in `sw.js` so installed copies download the new files. If you add local assets used by the page, add them to `SHELL_PATHS` in the same file. Commit the changes to the publishing branch.

The bundled fonts are provided under the SIL Open Font License. Their license files are in `fonts/`.
