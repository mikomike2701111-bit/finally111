# 🚀 Deployment & Git Guide

Follow these instructions to push your code to GitHub and set up your live environment.

## ⚙️ 1. Environment Setup (Vercel)

Before the app works on Vercel, you **must** add these variables in your Vercel Project Settings:

| Key Name | Value Source |
| :--- | :--- |
| `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` | Paystack Dashboard |
| `PAYSTACK_SECRET_KEY` | Paystack Dashboard |
| `GOOGLE_GENAI_API_KEY` | Google AI Studio |
| `FIREBASE_SERVICE_ACCOUNT` | Firebase JSON Key (as string) |
| `NEXT_PUBLIC_ADMIN_EMAIL` | `admin@runway.com` |

---

## 💻 2. Terminal Commands (Copy & Paste)

Run these commands in your project terminal to push your latest changes.

### A. Standard Method (Prompts for password)
Use this if you want to be asked for your username and token separately.
```bash
git init
git add .
git commit -m "Fix build errors and update UI"
git branch -M main
git remote set-url origin https://github.com/mikomikE254254/finally111.git
git push -u origin main
```

### B. Express Method (No login prompts)
Replace `PASTE_YOUR_TOKEN_HERE` with your GitHub Personal Access Token.
```bash
git push https://mikomikE254254:PASTE_YOUR_TOKEN_HERE@github.com/mikomikE254254/finally111.git main
```

---

## 🔑 3. How to get your Access Token
1. Go to: [**github.com/settings/tokens/new**](https://github.com/settings/tokens/new)
2. Select **'repo'** (Full control of private repositories).
3. Click **Generate token** and copy it immediately.
4. Use this token as your **password** in the terminal.

---

## 🛠️ Troubleshooting Vercel Builds
If you see "Automatic initialization failed", it means your **Firebase Environment Variables** are missing in the Vercel dashboard. Double check that `NEXT_PUBLIC_FIREBASE_API_KEY` and others are set.