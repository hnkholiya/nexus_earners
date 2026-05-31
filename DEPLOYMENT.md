# 🚀 Deployment & Production Guide

## Pre-Deployment Checklist

### Content Verification
- ✅ All sections display correctly
- ✅ Text content is accurate
- ✅ Links are functional
- ✅ Images are optimized
- ✅ Meta tags are updated
- ✅ Social links configured
- ✅ Contact information current

### Technical Verification
- ✅ No console errors
- ✅ Responsive on all devices
- ✅ All animations smooth
- ✅ Loading performance good
- ✅ No 404 errors
- ✅ Forms (if any) working
- ✅ All external links working

### Security Checklist
- ✅ HTTPS enabled
- ✅ No sensitive data exposed
- ✅ API keys protected
- ✅ Security headers configured
- ✅ CORS configured correctly
- ✅ Rate limiting in place

---

## Build Process

### Step 1: Clean Build
```bash
# Remove old build artifacts
rm -rf dist

# Clear Node modules cache
npm cache clean --force
```

### Step 2: Install Latest Dependencies
```bash
npm install
```

### Step 3: Build for Production
```bash
npm run build
```

**Output**:
- `/dist/index.html` - Main HTML file
- `/dist/assets/` - CSS, JS, images
- File size: ~15KB gzipped

### Step 4: Test Production Build
```bash
npm run preview
```

Visit `http://localhost:4173/` to test

---

## Deployment Platforms

### 🌐 Netlify (Recommended - Easiest)

#### Method 1: Git Integration
1. Push code to GitHub
2. Connect repo to Netlify
3. Settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Click "Deploy"
5. Done! ✅

#### Method 2: Drag & Drop
1. Run `npm run build`
2. Go to netlify.com
3. Drag `/dist` folder onto Netlify
4. Done! ✅

#### Method 3: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**Advantages**:
- Free HTTPS
- Automatic deployments
- CDN included
- Perfect uptime SLA
- Form handling available

---

### ⚡ Vercel (Very Easy)

```bash
npm install -g vercel
vercel --prod
```

Or connect GitHub repo at vercel.com

**Advantages**:
- Automatic deployments
- Edge functions available
- Analytics included
- Serverless functions
- Fastest performance

---

### 📚 GitHub Pages

#### Setup
1. Go to GitHub repo settings
2. Pages section
3. Select "Deploy from branch"
4. Select `main` branch and `/root`

#### Build and Deploy
```bash
npm run build
git add dist
git commit -m "Deploy to GitHub Pages"
git push origin main
```

**Advantages**:
- Free hosting
- Git-based workflow
- Custom domain support

---

### 🏢 Traditional Hosting (cPanel, etc.)

#### Manual Upload
```bash
# Build locally
npm run build

# Upload dist folder via FTP/SFTP to public_html
# Set index.html as default document
```

#### Via Git
```bash
# Connect to hosting via SSH
git clone your-repo.git
cd nexus-earners
npm run build
```

---

## Environment Configuration

### Production Environment Variables
Create `.env.production`:
```env
VITE_API_URL=https://api.yourdomain.com
VITE_ENV=production
VITE_ANALYTICS_ID=your-analytics-id
```

### Build Configuration
Edit `vite.config.js`:
```javascript
export default defineConfig({
  build: {
    minify: 'terser',
    target: 'es2020',
    cssCodeSplit: true
  }
})
```

---

## Performance Optimization

### 1. Image Optimization
```bash
# Install imagemin if needed
npm install imagemin

# Compress images before deployment
```

### 2. Enable Gzip Compression
**Netlify** (automatic)
**Vercel** (automatic)
**Traditional hosting** (configure in .htaccess):
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

### 3. Cache Configuration
**Netlify/Vercel** (automatic)
**Traditional hosting** (.htaccess):
```apache
<FilesMatch "\.(jpg|jpeg|png|gif|css|js)$">
  Header set Cache-Control "max-age=31536000, public"
</FilesMatch>
```

### 4. CDN Setup
- Netlify/Vercel: Included
- CloudFlare: Optional for all hosts
  - Free plan available
  - Automatic caching
  - DDoS protection

---

## Custom Domain Setup

### Netlify
1. Domain settings
2. Add custom domain
3. Update DNS records
4. Wait for propagation (up to 48h)

### Vercel
1. Project settings
2. Domains
3. Add new domain
4. Follow DNS instructions

### GitHub Pages
1. Repository settings
2. Pages section
3. Custom domain field
4. Update DNS CNAME record

---

## SSL/HTTPS Certificate

### Netlify
- Automatic Let's Encrypt
- Free & automatic renewal

### Vercel
- Automatic Let's Encrypt
- Free & automatic renewal

### Traditional Hosting
- Use cPanel AutoSSL (free)
- Or purchase from provider
- Or use Let's Encrypt free

---

## Monitoring & Analytics

### Google Analytics
1. Create GA4 property
2. Add tracking code to HTML:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### Error Monitoring (Sentry)
```bash
npm install @sentry/browser
```

### Performance Monitoring
- Netlify Analytics (built-in)
- Vercel Analytics (built-in)
- Google PageSpeed Insights

---

## Continuous Deployment

### GitHub Actions Example
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: netlify/actions/cli@master
        with:
          args: deploy --prod --dir=dist
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## Post-Deployment Verification

### Functional Testing
- ✅ All pages load
- ✅ Navigation works
- ✅ Forms submit (if applicable)
- ✅ Links are correct
- ✅ Animations play
- ✅ Responsive works

### Performance Testing
- ✅ Lighthouse score > 90
- ✅ Load time < 2 seconds
- ✅ Mobile score > 85
- ✅ No broken resources

### SEO Verification
- ✅ Meta tags present
- ✅ Structured data valid
- ✅ Robots.txt configured
- ✅ Sitemap.xml created
- ✅ Mobile-friendly verified

### Security Testing
- ✅ HTTPS working
- ✅ Security headers set
- ✅ No console errors
- ✅ No sensitive data exposed
- ✅ CSP configured

---

## Rollback Procedure

### If Issues Occur

**Netlify**:
1. Go to deploy history
2. Click previous successful deploy
3. Click "Restore"
4. Automatic rollback in seconds

**Vercel**:
1. Go to deployments
2. Find previous version
3. Click the "..." menu
4. Select "Promote to production"

**Traditional Hosting**:
1. Access FTP/SFTP
2. Replace dist folder with backup
3. Restart services if needed

---

## Regular Maintenance

### Weekly
- ✅ Check error logs
- ✅ Monitor analytics
- ✅ Test key functionality

### Monthly
- ✅ Update dependencies
- ✅ Check security updates
- ✅ Review performance metrics
- ✅ Check for 404 errors

### Quarterly
- ✅ Security audit
- ✅ Performance optimization
- ✅ Content update
- ✅ Backup verification

---

## Troubleshooting Deployment

### Build Fails
```bash
# Clear cache
rm -rf .next dist
npm cache clean --force

# Reinstall
npm install

# Rebuild
npm run build
```

### Site Shows Old Content
- Clear browser cache (Ctrl+Shift+Del)
- Clear CDN cache (Netlify/Vercel panel)
- Wait 5-10 minutes for propagation

### HTTPS Not Working
- Check DNS propagation (dns.google.com)
- Wait for certificate issuance (24-48h)
- Check security settings in panel

### Domain Not Resolving
- Verify DNS records:
  - A record points to server IP
  - CNAME record configured if using subdomain
  - TTL set appropriately (usually 3600)
- Wait for propagation (up to 48h)

---

## Backup & Recovery

### Automated Backups
- Netlify: Automatic (14-day retention)
- Vercel: Automatic (7-day retention)
- GitHub: Use git branches for versions

### Manual Backup
```bash
# Backup source code
git clone your-repo backup-$(date +%Y%m%d)

# Export configuration
npm list > npm-packages.txt
```

### Recovery
```bash
# Restore from git
git revert <commit-hash>
npm run build
git push
```

---

## Scaling & Growth

### When Traffic Increases
1. Monitor analytics
2. Check performance metrics
3. Optimize if needed
4. Consider upgrading plan
5. Enable advanced caching

### Adding Features
1. Test locally
2. Push to staging branch
3. Deploy to preview
4. Verify functionality
5. Merge to main
6. Deploy to production

---

## Documentation for Team

### Handover Checklist
- ✅ Share login credentials securely
- ✅ Provide deployment instructions
- ✅ Share analytics access
- ✅ Document customizations made
- ✅ List all third-party services
- ✅ Provide contact information
- ✅ Create maintenance guide

---

## Support Resources

### Official Documentation
- Netlify: netlify.com/docs
- Vercel: vercel.com/docs
- Vite: vitejs.dev/guide
- Tailwind: tailwindcss.com/docs

### Community Help
- Stack Overflow (tag your platform)
- GitHub Discussions
- Official Discord/Slack channels
- Community forums

---

**Deployment Complete! 🎉**

Your Nexus Earner's website is now live and ready to serve your community!
