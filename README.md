# 🚀 Deployment & Git Guide

Follow these instructions to push your code to GitHub and set up your live environment on Vercel.

## 🔑 1. How to get your Access Token
1. Go to: [**github.com/settings/tokens/new**](https://github.com/settings/tokens/new)
2. Select **'repo'** (Full control of private repositories).
3. Click **Generate token** and copy it immediately.
4. **Important:** This token is your "password" for the terminal.

---

## 💻 2. Terminal Commands (Copy & Paste)

### Option A: Standard Method (Prompts for password)
This will ask for your GitHub username (`mikomikE254254`) and then your **Access Token** as the password.
```bash
git init
git add .
git commit -m "Fix build errors and update UI"
git branch -M main
git remote set-url origin https://github.com/mikomikE254254/finally111.git
git push -u origin main
```

### Option B: Express Method (No login prompts)
Replace `PASTE_YOUR_TOKEN_HERE` with your token.
```bash
git push https://mikomikE254254:PASTE_YOUR_TOKEN_HERE@github.com/mikomikE254254/finally111.git main
```

---

## ⚙️ 3. Environment Setup (Vercel)

Before the app works on Vercel, you **must** add these variables in your Vercel Project Settings:

| Key Name | Value Source |
| :--- | :--- |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase Config |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Config |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase Config |
| `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` | Paystack Dashboard (TEST) |
| `PAYSTACK_SECRET_KEY` | Paystack Dashboard (TEST) |
| `GOOGLE_GENAI_API_KEY` | Google AI Studio |
| `FIREBASE_SERVICE_ACCOUNT` | Firebase JSON Key (as string) |
| `NEXT_PUBLIC_ADMIN_EMAIL` | `admin@runway.com` |

---

## 🛠️ Troubleshooting
If you see "Automatic initialization failed" on Vercel, it means your **Firebase Environment Variables** are missing in the Vercel dashboard. Double check that all `NEXT_PUBLIC_` variables are set.
