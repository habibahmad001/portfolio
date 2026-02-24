# Netlify Deployment Guide

This is a static HTML/CSS/JavaScript portfolio site that can be deployed to Netlify.

## Quick Deploy (Drag & Drop)

1. **Build your site locally:**
   ```bash
   # Your site is already built! The public folder contains all files.
   ```

2. **Deploy to Netlify:**
   - Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
   - Drag and drop the entire `public` folder into the deploy area
   - Your site will be live instantly!

## Deploy via Git (Recommended for CI/CD)

### Step 1: Push to GitHub

```bash
# Initialize git if not already done
cd /d/nodejsapps/portfolio/portfolio

# Add all files
git add .

# Commit changes
git commit -m "Initial portfolio commit"

# Push to GitHub (replace with your repo URL)
git remote add origin https://github.com/habibahmad001/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Select **GitHub** and authorize Netlify
4. Select your portfolio repository
5. Configure build settings:
   - **Build command:** Leave empty (or `echo "No build needed"`)
   - **Publish directory:** `public`
   - **Branch to deploy:** `main`
6. Click **"Deploy site"**

## Netlify CLI Deployment

### Install Netlify CLI

```bash
# Install globally
npm install -g netlify-cli

# Or use npx (no installation needed)
npx netlify-cli
```

### Deploy via CLI

```bash
# Navigate to your portfolio folder
cd /d/nodejsapps/portfolio/portfolio

# Login to Netlify
netlify login

# Initialize site (first time only)
netlify init

# Deploy to production
netlify deploy --prod

# Or deploy with specific directory
netlify deploy --prod --dir=public
```

## Continuous Deployment (Auto-Deploy on Push)

Once connected to GitHub, Netlify will automatically:

✅ Deploy when you push to `main` branch
✅ Create deploy previews for pull requests
✅ Deploy preview URLs for every branch
✅ Rollback to any previous deployment

## Manual Deployment Workflow

```bash
# After making changes to your portfolio

# 1. Stage changes
git add .

# 2. Commit changes
git commit -m "Update portfolio content"

# 3. Push to GitHub
git push origin main

# Netlify will automatically deploy!
```

## Custom Domain Setup

1. Go to **Site settings** → **Domain management**
2. Click **Add custom domain**
3. Enter your domain (e.g., `habibahmad.com`)
4. Update DNS records as instructed by Netlify

## Environment Variables (Optional)

If you need environment variables:

1. Go to **Site settings** → **Environment variables**
2. Add your variables (e.g., `CONTACT_EMAIL`, `API_KEY`)
3. Access via `process.env.VARIABLE_NAME` in JS

## Deploy Hooks for Automation

Trigger deployments from external services:

1. Go to **Site settings** → **Build & deploy** → **Deploy hooks**
2. Create a new hook (e.g., `github-update`)
3. Use the URL to trigger deployments:
   ```bash
   curl -X POST https://api.netlify.com/build_hooks/YOUR_HOOK_ID
   ```

## Cache and Performance

Netlify automatically:
- Optimizes images
- Minifies HTML, CSS, and JavaScript
- Implements CDN caching
- Provides HTTPS automatically
- Supports HTTP/2

## Troubleshooting

### Site not updating?
```bash
# Clear Netlify cache
# Go to Site settings → Build & deploy → Cached assets → Clear cache
```

### Build failing?
- Check the **Deploy logs** in Netlify dashboard
- Ensure `public` folder exists
- Verify `netlify.toml` configuration

### 404 errors?
- Check `netlify.toml` redirect rules
- Ensure `index.html` exists in `public` folder

## Local Testing Before Deploy

```bash
# Install serve locally
npm install -g serve

# Serve your site locally
cd public
serve .

# Or use Python
cd public
python -m http.server 8080

# Or use PHP built-in server
cd public
php -S localhost:8080
```

## Files Structure for Deployment

```
portfolio/
├── netlify.toml          # Netlify configuration
├── public/               # Publish directory
│   ├── index.html       # Main HTML file
│   ├── styles.css       # Styles
│   ├── script.js        # JavaScript
│   └── profile.jpg      # Your profile picture
└── .gitignore           # Git ignore file
```

## Netlify Configuration Options

Your `netlify.toml` includes:

✅ **Publish directory:** `public`
✅ **SPA routing:** Redirects all routes to `index.html`
✅ **Asset optimization:** Minification and bundling
✅ **Cache headers:** Optimized caching for static assets
✅ **Security headers:** XSS protection, frame options

## Deployment Commands Summary

```bash
# Quick deploy (drag & drop to https://app.netlify.com/drop)

# Git-based deploy (recommended)
git push origin main

# CLI deploy
netlify deploy --prod --dir=public

# Deploy preview (draft)
netlify deploy --dir=public
```

## Monitoring and Analytics

- **Deploy logs:** Netlify dashboard → Deploys
- **Site analytics:** Netlify dashboard → Analytics
- **Form submissions:** Netlify dashboard → Forms (if you add Netlify forms)
- **Functions logs:** Netlify dashboard → Functions (if you add serverless functions)

## Updating Your Portfolio

1. Edit files in `public/` folder
2. Test locally: `cd public && serve .`
3. Commit and push:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
4. Netlify auto-deploys in seconds!

## Support

- Netlify Docs: https://docs.netlify.com
- Netlify Community: https://answers.netlify.com
- GitHub Issues: https://github.com/netlify/netlify-cli/issues
