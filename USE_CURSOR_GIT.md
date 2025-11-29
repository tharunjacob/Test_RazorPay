# Push to GitHub Using Cursor's Built-in Git (No Installation Needed!)

## ✅ This is the EASIEST way - Cursor has Git built-in!

### Step-by-Step (Takes 30 seconds):

1. **Press `Ctrl+Shift+G`** 
   - This opens the Source Control panel on the left

2. **Click "Initialize Repository"** (if you see this button)
   - If you don't see it, skip to step 3

3. **Stage All Files:**
   - Look for "Changes" section
   - Click the **"+"** button next to "Changes" 
   - OR right-click "Changes" → "Stage All Changes"

4. **Commit:**
   - Type this message in the box at the top:
     ```
     Initial commit: TrackSpendz app ready for Vercel deployment
     ```
   - Press **`Ctrl+Enter`** to commit

5. **Publish to GitHub:**
   - Click the **"Publish Branch"** button (usually at the top)
   - When prompted, enter:
     ```
     https://github.com/tharunjacob/Test_RazorPay.git
     ```
   - Click "OK" or "Publish"

**Done!** Your code is now on GitHub! 🎉

---

## If you don't see "Publish Branch":

1. Click the **"..."** (three dots) menu at the top of Source Control
2. Select **"Remote"** → **"Add Remote"**
3. Name: `origin`
4. URL: `https://github.com/tharunjacob/Test_RazorPay.git`
5. Click "OK"
6. Then click **"..."** again → **"Push"** → **"Push to origin"**

---

## Need to authenticate?

If asked for credentials:
- **Username:** Your GitHub username
- **Password:** Use a Personal Access Token (NOT your GitHub password)
  - Get token: https://github.com/settings/tokens
  - Click "Generate new token (classic)"
  - Select scope: `repo`
  - Copy the token and use it as password


