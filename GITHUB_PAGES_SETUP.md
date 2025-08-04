# GitHub Pages Setup Guide

## 🔧 Repository Settings

### 1. Enable GitHub Pages

1. Go to your repository: `https://github.com/SK1PPR/portfolio`
2. Navigate to **Settings** → **Pages**
3. Set **Source** to "GitHub Actions"
4. Click **Save**

### 2. Repository Permissions

1. Go to **Settings** → **Actions** → **General**
2. Under "Workflow permissions", select:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**
3. Click **Save**

### 3. Pages Permissions

1. Go to **Settings** → **Pages**
2. Under "Build and deployment":
   - **Source**: GitHub Actions
   - **Branch**: (will be automatically managed)
3. Click **Save**

## 🚀 Deployment

### Automatic Deployment
- Push any changes to the `main` branch
- GitHub Actions will automatically build and deploy
- Your site will be available at: `https://skippr.github.io/portfolio/`

### Manual Deployment (if needed)
```bash
npm run deploy
```

## 🔍 Troubleshooting

### If deployment fails:
1. Check the **Actions** tab in your repository
2. Look for any error messages in the workflow logs
3. Ensure all permissions are set correctly
4. Verify the repository name matches the base path in `vite.config.js`

### Common Issues:
- **403 Error**: Check repository permissions
- **404 Error**: Ensure GitHub Pages is enabled
- **Build Failures**: Check the build logs in Actions tab

## 📝 Notes

- The new workflow uses GitHub's official Pages deployment
- No need for `gh-pages` branch anymore
- Automatic deployment on every push to `main`
- Better security with proper permissions

---

**Your site will be live at: https://skippr.github.io/portfolio/** 