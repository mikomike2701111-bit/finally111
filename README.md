# 🚀 Deployment & Git Guide

Follow these instructions to push your code to GitHub and set up your live environment on Vercel.

## 🔑 1. Environment Variables (Vercel)

Before the app works on Vercel, you **must** add these variables in your Vercel Project Settings.

### Variable List
| Key Name | Value Source |
| :--- | :--- |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase Config |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase Config |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase Config |
| `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY` | Paystack Dashboard (TEST) |
| `PAYSTACK_SECRET_KEY` | Paystack Dashboard (TEST) |
| `FIREBASE_SERVICE_ACCOUNT` | **FULL JSON STRING** (See template below) |
| `NEXT_PUBLIC_ADMIN_EMAIL` | `admin@runway.com` |

### 🛠️ Service Account JSON Template
When adding `FIREBASE_SERVICE_ACCOUNT` to Vercel, copy the **entire** content of your downloaded JSON key file and paste it into the value field as a single string. It should look like this:

```json
{
  "type": "service_account",
  "project_id": "your-project-id",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk...@your-project.iam.gserviceaccount.com",
  ...
}
```

---

## 💻 2. Terminal Commands (Copy & Paste)

### Standard Method (Prompts for password)
This will ask for your GitHub username (`mikomikE254254`) and then your **Access Token** as the password.
```bash
git init
git add .
git commit -m "Fix build errors and update Firebase initialization"
git branch -M main
git remote set-url origin https://github.com/mikomikE254254/finally111.git
git push -u origin main
```

### Express Method (No login prompts)
Replace `PASTE_YOUR_TOKEN_HERE` with your token.
```bash
git push https://mikomikE254254:PASTE_YOUR_TOKEN_HERE@github.com/mikomikE254254/finally111.git main
```

---

## 🛠️ Troubleshooting
If you see "Automatic initialization failed" on Vercel, it means your **Firebase Environment Variables** are missing in the Vercel dashboard. Double-check that all `NEXT_PUBLIC_` variables are set.
