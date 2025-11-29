# Vercel Deployment Fixes - Summary for AI Code Generation

This document summarizes all the critical changes needed to make a Vite + React application deploy successfully on Vercel.

## Critical Issues Fixed

### 1. **Removed CDN Import Maps from index.html** ⚠️ CRITICAL
**Problem:** The original `index.html` had import maps pointing to `aistudiocdn.com` which conflicted with npm packages installed locally.

**Before:**
```html
<script type="importmap">
{
  "imports": {
    "react": "https://aistudiocdn.com/react@^19.2.0",
    "react-dom/": "https://aistudiocdn.com/react-dom@^19.2.0/",
    ...
  }
}
</script>
```

**After:**
```html
<!-- Remove the entire importmap script block -->
<!-- Vite will bundle from node_modules automatically -->
```

**Why:** When using npm packages, you should NOT have CDN import maps. Vite handles bundling from `node_modules`.

---

### 2. **Created vercel.json Configuration** ✅ REQUIRED
**File:** `vercel.json`

**Content:**
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**Why:**
- `buildCommand`: Explicitly tells Vercel to run `npm run build`
- `outputDirectory`: Points to `dist` where Vite outputs the build
- `rewrites`: Essential for React Router (HashRouter or BrowserRouter) - ensures all routes serve `index.html` for client-side routing

---

### 3. **Updated .gitignore** ✅ IMPORTANT
**Added:**
```
# Environment variables
.env
.env.local
.env.*.local
```

**Why:** Prevents committing sensitive environment variables to Git.

---

### 4. **Removed ESLint Script from package.json** ✅ IF ESLINT NOT INSTALLED
**Problem:** If `package.json` has a lint script but ESLint isn't in `devDependencies`, Vercel build may fail.

**Before:**
```json
"scripts": {
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
}
```

**After:**
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

**Why:** Only include scripts for packages that are actually installed.

---

### 5. **Vite Configuration** ✅ VERIFY
**File:** `vite.config.ts`

**Ensure:**
```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Must match vercel.json outputDirectory
    emptyOutDir: true,
    sourcemap: false
  }
});
```

---

## Vercel Dashboard Configuration

After pushing code, configure in Vercel Dashboard:

1. **Root Directory:** Leave EMPTY (not `./` or any path)
2. **Framework Preset:** `Vite` (or leave blank for auto-detect)
3. **Build Command:** `npm run build` (or leave blank - uses vercel.json)
4. **Output Directory:** `dist` (or leave blank - uses vercel.json)
5. **Install Command:** Leave blank (defaults to `npm install`)
6. **Node.js Version:** `18.x` or `20.x`

---

## Checklist for AI Code Generation

When generating Vite + React code for Vercel deployment, ensure:

- [ ] **NO CDN import maps** in `index.html` if using npm packages
- [ ] **vercel.json** exists with proper configuration
- [ ] **.gitignore** includes `.env*` files
- [ ] **package.json** only has scripts for installed packages
- [ ] **vite.config.ts** has `outDir: 'dist'`
- [ ] **Build script** exists: `"build": "vite build"` in package.json
- [ ] **React Router** uses either HashRouter or BrowserRouter (both work with rewrites)

---

## Common Issues & Solutions

### Issue: Build completes in <20ms (nothing built)
**Solution:** 
- Check Vercel is using latest commit (not cached)
- Reconnect repository in Vercel dashboard
- Verify `vercel.json` has `buildCommand`

### Issue: 404 NOT_FOUND error
**Solution:**
- Ensure `rewrites` in `vercel.json` redirects all routes to `/index.html`
- Check `outputDirectory` matches Vite's `outDir`
- Verify build actually ran (should take 30+ seconds)

### Issue: "Unknown" deployment permission error
**Solution:**
- Connect GitHub account in Vercel Settings → Authentication
- Make repository public (if on free plan)
- Reconnect repository in project settings

---

## Final Working Configuration

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### package.json (scripts section)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  }
}
```

### index.html (NO import maps)
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.tsx"></script>
  </body>
</html>
```

---

## Key Takeaways for AI

1. **Never mix CDN imports with npm packages** - Choose one approach
2. **Always create vercel.json** for Vite projects on Vercel
3. **Include rewrites** for React Router client-side routing
4. **Verify build output directory** matches between vite.config.ts and vercel.json
5. **Remove unused scripts** from package.json to avoid build failures

---

**Last Updated:** Based on successful deployment of TrackSpendz app to Vercel

