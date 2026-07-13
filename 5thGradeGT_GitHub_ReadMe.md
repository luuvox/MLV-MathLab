# 5thGradeGT GitHub Maintenance Notes

This workspace is a single git repository rooted at:

```bash
/Users/luvo/codex-projects/MLV
```

The current 5th Grade GT Math app lives in:

```bash
5thGradeGT/
```

The GitHub remote is:

```bash
origin  git@github.com:luuvox/MLV-MathLab.git
```

The active branch is:

```bash
main
```

GitHub access uses SSH, not HTTPS. Pushes and pulls go through the SSH remote above.

## Upload Policy

The `MLV` workspace contains more than one app workspace and many local development/material-processing files. For GitHub, we do not automatically upload everything under `MLV`.

For the `5thGradeGT` app, the source of truth for uploadable app files is:

```bash
5thGradeGT_GitUpload.txt
```

That file currently lists the static Unit 1 app payload needed to run the `5thGradeGT` web app, including:

- app runtime files such as `index.html`, `styles.css`, `script.js`, and `unit1-practice-bank.js`
- selected Unit 1 source PDFs used by Practice card source modals
- selected Unit 1 rendered preview images used by Practice card source modals

Files not listed there should remain local unless there is a deliberate reason to publish them.

The upload-list file is for the deployable app payload. When this README or `5thGradeGT_GitUpload.txt` changes, stage those maintenance files explicitly in addition to staging the app payload.

## Do Not Use `git add .`

Avoid:

```bash
git add .
```

That would stage local-only files such as:

- `node_modules/`
- `test-results/`
- `tests/`
- `scripts/`
- `.DS_Store`
- generated processing notes not needed by the static app
- other app folders that are not part of the intended update
- local package/test configuration such as `package.json`, `package-lock.json`, and `playwright.config.js`

Instead, stage only the intended static app payload:

```bash
git add --pathspec-from-file=5thGradeGT_GitUpload.txt
```

If the maintenance files changed, also stage them explicitly:

```bash
git add 5thGradeGT_GitHub_ReadMe.md 5thGradeGT_GitUpload.txt
```

## Normal Update Flow

From the workspace root:

```bash
cd /Users/luvo/codex-projects/MLV
```

Check current state:

```bash
git status --short
```

Stage only the upload-list app files:

```bash
git add --pathspec-from-file=5thGradeGT_GitUpload.txt
```

If the maintenance files changed, stage them too:

```bash
git add 5thGradeGT_GitHub_ReadMe.md 5thGradeGT_GitUpload.txt
```

Review what is staged:

```bash
git diff --cached --name-only
```

Commit:

```bash
git commit -m "Update 5thGradeGT app"
```

Push:

```bash
git push
```

For the first push of a new branch, use:

```bash
git push -u origin main
```

## Updating the Upload List

Update `5thGradeGT_GitUpload.txt` whenever a new runtime dependency is needed by the published app.

Common examples:

- a new app JavaScript file
- a new CSS file
- a new image or media asset referenced by `index.html`, `styles.css`, or `script.js`
- a new `unit*-practice-bank.js`
- a source PDF used by a Practice card source modal
- a rendered page image used by a source modal

Do not add local development or material-generation files unless the published static app directly needs them.

After editing the list, verify every path exists:

```bash
node -e "const fs=require('fs'),p=require('path');const file='5thGradeGT_GitUpload.txt';const list=fs.readFileSync(file,'utf8').split(/\r?\n/).filter(Boolean);const missing=list.filter(x=>!fs.existsSync(p.join(process.cwd(),x)));console.log({paths:list.length,missing:missing.length});if(missing.length){console.log(missing.join('\n'));process.exit(1);}"
```

Then stage with:

```bash
git add --pathspec-from-file=5thGradeGT_GitUpload.txt
```

## Current Local Git Author

This repo has a local-only git author identity configured in `.git/config`:

```bash
user.name=luuvox
user.email=luuvox@users.noreply.github.com
```

This was needed because Git requires every commit to have an author name and email. The setting applies only to this `MLV` repository and does not change global Git settings on the machine.

## Useful Checks

Show the configured remote:

```bash
git remote -v
```

Show the current branch:

```bash
git branch --show-current
```

Confirm SSH authentication to GitHub:

```bash
ssh -T git@github.com
```

Show the latest commit:

```bash
git log -1 --oneline
```

Check for accidentally staged local-only files:

```bash
git diff --cached --name-only | rg '(^|/)node_modules/|(^|/)test-results/|^5thGradeGT/tests/|^5thGradeGT/scripts/|\.DS_Store$|^4thGradeGT/|package-lock\.json$|package\.json$|playwright\.config\.js$'
```

If that command prints anything, inspect carefully before committing.
