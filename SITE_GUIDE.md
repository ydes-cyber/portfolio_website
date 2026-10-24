# Yanira's Portfolio Site Guide

## What is where?

This folder (`C:\Users\Yanir\portfolio`) is your **local website project**. It is separate from your robotics repository and does not change it.

- `src/data/content.js` — your content control room: introduction, contact, projects, interests, and skills.
- `src/styles.css` — colors, fonts, layout, texture, and responsive design.
- `src/main.jsx` — the page structure and reusable project card.
- `public/favicon.svg` — the small browser icon.

Your local preview is only visible on your own computer. A GitHub repository is the online copy of the source code. A deployed GitHub Pages website is the public link you can share. They are three different things.

## Start it on your computer

Open **PowerShell**, then run:

```powershell
cd C:\Users\Yanir\portfolio
npm install
npm run dev
```

Vite will print a `Local:` address such as `http://localhost:5173/`. Hold `Ctrl` and click it, or paste it in your browser. Keep that PowerShell window open while previewing. Press `Ctrl + C` to stop the preview.

The first `npm install` downloads the site’s development packages. After that, you normally only need `npm run dev`.

## Change your introduction or contact details

Open `src/data/content.js` in an editor. At the very top is `profile`.

- Change `introduction` for the home-page sentence.
- Change `about` for the About section.
- Add a public contact email by replacing `email: ''` with, for example, `email: 'your-address@example.com'`.
- Change `github` only if your profile URL changes.

Save the file; the open local preview should update automatically.

## Add or update a project

In `src/data/content.js`, find `export const projects = [...]`. Copy one whole project `{ ... }` block and edit it. Give it a unique `title`, a category from the existing list, a direct public `url`, clear `summary` and `detail`, honest `status`, and only technologies the repository supports.

Set `featured: true` to put it in Selected Exhibits. Use `review: true` for coursework or any project you want visitors to see with a caution note. Delete a whole project block to remove it.

Before linking coursework or sensitive work, check your course rules and repository visibility. A public portfolio cannot provide access to a private GitHub repository; never add a link you are not allowed to share.

## Change the design

At the top of `src/styles.css`, the `:root` block holds the main palette and fonts. The most useful variables are `--ink`, `--paper`, `--mauve`, `--plum`, `--olive`, and `--silver`.

The named sections below it (`.hero`, `.featured`, `.gallery`, `.research`, `.about`, and `footer`) control the page’s major areas. The motion accessibility setting is already at the bottom; preserve it if you add animations.

## Check the production version

From PowerShell in the portfolio folder, run:

```powershell
npm run build
npm run preview
```

`npm run build` checks that the site compiles and creates a `dist` folder. `npm run preview` lets you inspect that production build locally. Press `Ctrl + C` when you are done.

## Put the source in a new GitHub repository (when you are ready)

Do **not** do this until you have reviewed the site. First create an empty GitHub repository named `portfolio` at https://github.com/new. Do not add a README from GitHub during creation.

Then, from PowerShell in this folder, run (replace `YOUR-GITHUB-USERNAME` if it differs):

```powershell
cd C:\Users\Yanir\portfolio
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/ydes-cyber/portfolio.git
git push -u origin main
```

This makes the **source repository**. It does not automatically publish a website.

## Publish to GitHub Pages (only after you approve it)

This project includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`. After you push `main`, open your repository on GitHub, go to **Settings → Pages**, and choose **GitHub Actions** as the source if GitHub asks you to choose one. Each later push to `main` rebuilds and redeploys the site automatically. Before enabling deployment, confirm every linked project is appropriate for public viewing.

Your stable future public URL will normally be `https://ydes-cyber.github.io/portfolio/`. It is different from the repository URL (`https://github.com/ydes-cyber/portfolio`) and from the local preview URL.

## Common problems

- **`npm` is not recognized:** install the current LTS release of Node.js, close and reopen PowerShell, then retry.
- **Blank page after editing:** check the terminal for an error, undo the most recent unmatched quote/bracket in `content.js`, and refresh.
- **A GitHub link shows 404:** the repository may be private, renamed, or the link may be wrong. Do not link private coursework publicly.
- **Changes do not appear online:** run `npm run build`, commit the changed files, push them, and wait for the hosting deployment to finish.
