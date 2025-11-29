# Push to GitHub - Quick Instructions

## ✅ Your code is ready! All files are prepared for deployment.

## Choose ONE of these methods:

### Method 1: Using Cursor/VS Code (Easiest - No Git Installation Needed)

1. **Open Source Control Panel**
   - Press `Ctrl+Shift+G` or click the Source Control icon in the sidebar

2. **Initialize Repository**
   - Click "Initialize Repository" button (if not already initialized)

3. **Stage All Files**
   - Click the "+" button next to "Changes" to stage all files
   - Or click "Stage All Changes"

4. **Commit**
   - Enter commit message: `Initial commit: TrackSpendz app ready for Vercel deployment`
   - Press `Ctrl+Enter` or click the checkmark

5. **Publish to GitHub**
   - Click "Publish Branch" button
   - Select "GitHub" as remote
   - Enter repository URL: `https://github.com/tharunjacob/Test_RazorPay.git`
   - Or select from your GitHub account if it appears

### Method 2: Install Git and Run Script

1. **Install Git**: https://git-scm.com/download/win
2. **Restart your terminal/Cursor**
3. **Run the script**:
   ```powershell
   .\push-to-github.ps1
   ```

### Method 3: Manual Git Commands (After Installing Git)

```bash
git init
git remote add origin https://github.com/tharunjacob/Test_RazorPay.git
git add .
git commit -m "Initial commit: TrackSpendz app ready for Vercel deployment"
git branch -M main
git push -u origin main
```

### Method 4: GitHub Desktop (User-Friendly GUI)

1. Install: https://desktop.github.com/
2. Open GitHub Desktop
3. File → Add Local Repository
4. Select this folder: `C:\Users\tharunj\OneDrive - Zenoti\Documents\Cursor\Razorpay-Trial`
5. Click "Publish repository"
6. Repository name: `Test_RazorPay`
7. Click "Publish Repository"

---

## After Pushing:

1. ✅ Your code will be at: https://github.com/tharunjacob/Test_RazorPay
2. ✅ Connect to Vercel for automatic deployments
3. ✅ Your app will be live!

## Need Help?

If you encounter authentication issues:
- Use a Personal Access Token instead of password
- Generate token: https://github.com/settings/tokens
- Use token as password when prompted


