
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

## ⚙️ How to get your API Keys

| Key Name | Where to find it |
| :--- | :--- |
| `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` | Paystack Dashboard > Settings > API Keys & Webhooks |
| `PAYSTACK_SECRET_KEY` | Paystack Dashboard > Settings > API Keys & Webhooks |
| `GOOGLE_GENAI_API_KEY` | [Google AI Studio](https://aistudio.google.com/app/apikey) |
| `FIREBASE_SERVICE_ACCOUNT` | Firebase Console > Project Settings > Service Accounts > Generate new private key |
| `NEXT_PUBLIC_FIREBASE_*` | Firebase Console > Project Settings > General > Your Apps (Web App) |

---

## 🎨 Vercel Environment Setup

When you connect this repository to **Vercel**, you must add your keys in the **Settings > Environment Variables** section. Copy them from your local `.env` file. 

**Pro Tip**: You can copy the entire content of your `.env` and paste it into the first key field on Vercel, and it will automatically split them for you!
