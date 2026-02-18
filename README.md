# 🚀 Fast Deployment Guide

Follow these steps to upload your changes to GitHub immediately.

### 1. Get Your Token
If you don't have one, create it here: [**github.com/settings/tokens/new**](https://github.com/settings/tokens/new)
*Check the **'repo'** box when creating it.*

### 2. Copy & Paste These Commands
Run these in your terminal one by one. Replace `PASTE_YOUR_TOKEN_HERE` with your actual token in the last command.

```bash
git init
git add .
git commit -m "Update store UI and Admin features"
git branch -M main
# This next command is the one that uses your token:
git push https://mikomikE254254:PASTE_YOUR_TOKEN_HERE@github.com/mikomikE254254/finally111.git main --force
```

---

## ⚙️ Environment Variables
Ensure your `.env` file in the project root contains:
```
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY="YOUR_KEY"
PAYSTACK_SECRET_KEY="YOUR_SECRET"
FIREBASE_SERVICE_ACCOUNT='{"type": "service_account", ...}'
NEXT_PUBLIC_ADMIN_EMAIL="admin@runway.com"
```

## 🎨 UI Standards Applied
- **Straight Text**: No italics used anywhere ("no bending").
- **Card Aspect**: 4/5.5 ratio for an elegant silhouette.
- **Glassmorphism**: 25% transparent info bubbles on product cards.
- **Security**: Admin dashboard locked to authorized email only.
