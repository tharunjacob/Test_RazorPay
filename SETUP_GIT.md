# Git Setup Instructions

Follow these steps to push your code to GitHub:

## Step 1: Initialize Git Repository (if not already done)
```bash
git init
```

## Step 2: Add the Remote Repository
```bash
git remote add origin https://github.com/tharunjacob/Test_RazorPay.git
```

## Step 3: Add All Files
```bash
git add .
```

## Step 4: Commit Your Changes
```bash
git commit -m "Initial commit: TrackSpendz app ready for Vercel deployment"
```

## Step 5: Push to GitHub
```bash
git branch -M main
git push -u origin main
```

## If the repository already exists on GitHub:
If the repository already has files, you may need to pull first:
```bash
git pull origin main --allow-unrelated-histories
```
Then push:
```bash
git push -u origin main
```

## Alternative: Using GitHub Desktop or VS Code
- Open the repository in VS Code
- Use the Source Control panel (Ctrl+Shift+G)
- Initialize repository, stage files, commit, and push

