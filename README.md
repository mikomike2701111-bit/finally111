
# 🚀 Fast Deployment Guide

Follow these steps to upload your changes to GitHub and deploy to Vercel.

### 1. Get Your GitHub Token
If you don't have one, create it here: [**github.com/settings/tokens/new**](https://github.com/settings/tokens/new)
*Check the **'repo'** box when creating it.*

### 2. Copy & Paste These Commands
Run these in your terminal one by one. Replace `PASTE_YOUR_TOKEN_HERE` with your actual token in the last command.

```bash
git init
git add .
git commit -m "Finalizing environment setup and UI updates"
git branch -M main
# This next command is the one that uses your token:
git push https://mikomikE254254:PASTE_YOUR_TOKEN_HERE@github.com/mikomikE254254/finally111.git main --force
```

---

## ⚙️ Vercel Environment Setup

When you connect this repository to **Vercel**, you must add your keys in the **Settings > Environment Variables** section. Copy them from your local `.env` file:

| Key | Description |
| :--- | :--- |
| `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` | Your Paystack Public Key |
| `PAYSTACK_SECRET_KEY` | Your Paystack Secret Key |
| `FIREBASE_SERVICE_ACCOUNT` | The entire JSON string from your Firebase Service Account file |
| `GOOGLE_GENAI_API_KEY` | Your Gemini API Key for AI features |
| `NEXT_PUBLIC_ADMIN_EMAIL` | The email authorized to access the admin dashboard |

---

## 🎨 UI Standards Applied
- **Straight Text**: No italics used anywhere ("no bending").
- **Card Aspect**: 4/5.5 ratio for an elegant silhouette.
- **Glassmorphism**: 25% transparent info bubbles on product cards.
- **Security**: Admin dashboard locked to authorized email only.
