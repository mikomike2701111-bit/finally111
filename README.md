# 🚀 Deployment Guide

Run these commands in your terminal one by one to push your changes to GitHub.

### Terminal Commands

```bash
git init
git add .
git commit -m "Fix build errors and update UI"
git branch -M main
git remote set-url origin https://github.com/mikomikE254254/finally111.git
git push -u origin main
```

---

### 💡 Authentication Help
When you run `git push`, it will ask for:
- **Username:** `mikomikE254254`
- **Password:** Paste your **Personal Access Token** (NOT your GitHub password).

**Generate a token here if you don't have one:** [github.com/settings/tokens/new](https://github.com/settings/tokens/new)
*(Make sure to check the **'repo'** box when creating it!)*

---

## ⚙️ Environment Setup for Vercel

Add these keys to your Vercel project **Settings > Environment Variables**:

| Key Name | Value Source |
| :--- | :--- |
| `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` | Paystack Dashboard |
| `PAYSTACK_SECRET_KEY` | Paystack Dashboard |
| `GOOGLE_GENAI_API_KEY` | Google AI Studio |
| `FIREBASE_SERVICE_ACCOUNT` | Firebase JSON Key |
| `NEXT_PUBLIC_ADMIN_EMAIL` | `admin@runway.com` |
