# Hello, GitHub! 👋

A tiny, beginner‑friendly web page (HTML + CSS + JS). Click a button to show a random motivational quote.  
Perfect as a **first GitHub project** and to try **GitHub Pages**.

## Files
- `index.html` – the web page
- `style.css` – styles
- `script.js` – button logic
- `README.md` – you’re reading it

## How to view locally
1. Download or clone this project.
2. Open `index.html` by double‑clicking it. That’s it!

---

## Upload to GitHub (Quick, no Git needed)
1. Sign in at github.com.
2. Click **+** (top‑right) → **New repository**.
3. **Repository name**: `hello-github-website` (or any name you like).  
   Visibility: Public → **Create repository**.
4. On the repo page, click **Add file** → **Upload files**.
5. Drag‑and‑drop `index.html`, `style.css`, `script.js`, and `README.md` here.
6. Scroll down → **Commit changes**.
7. Done ✅ Your code is now on GitHub.

### (Optional) Publish with GitHub Pages
1. Go to **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
3. Choose **Branch**: `main` and **Folder**: `/ (root)` → **Save**.
4. Wait ~1–2 minutes; a public URL will appear on the same page (refresh if needed).
5. Share your link! 🎉

> If your Pages UI shows **GitHub Actions** instead: pick the **Static HTML** starter workflow and click **Commit**—it will auto‑publish.

---

## Upload with Git (command line)
If you have Git installed and want to learn the basics:

```bash
# 1) Inside this project folder
git init
git add .
git commit -m "First commit: Hello GitHub website"

# 2) Create a new repo on GitHub named hello-github-website (empty repo, no README)
# 3) Connect and push (replace YOUR_USERNAME)
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/hello-github-website.git
git push -u origin main
```

### Common tips
- If asked to log in, use your GitHub username/password or a personal access token.
- If `main` doesn’t exist, create it with `git branch -M main` before pushing.
- To update your site later: change files → `git add .` → `git commit -m "update"` → `git push`.

---

## License
This project is MIT‑licensed. Feel free to copy, modify, and share.
