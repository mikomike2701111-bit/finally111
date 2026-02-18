# Firebase Studio Project - Eddjos.ke

This is a Next.js project created in Firebase Studio.

## 🚀 Quick Links for Deployment

- **Create a GitHub Token (PAT):** [github.com/settings/tokens/new](https://github.com/settings/tokens/new)
  - *Select the **'repo'** scope when creating the token.*
- **Target Repository:** `https://github.com/mikomikE254254/finally111.git`

---

## ⚙️ Environment Variables Setup

For the application to work correctly, ensure your `.env` file contains:

```
NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY="YOUR_PAYSTACK_TEST_PUBLIC_KEY"
PAYSTACK_SECRET_KEY="YOUR_PAYSTACK_TEST_SECRET_KEY"
FIREBASE_SERVICE_ACCOUNT='{"type": "service_account", ...}'
NEXT_PUBLIC_ADMIN_EMAIL="admin@runway.com"
```

---

## How to Push Your Code to GitHub

**1. Initialize Git**
```sh
git init
```

**2. Add and Commit**
```sh
git add .
git commit -m "Update store UI and Admin features"
```

**3. Set Remote and Branch**
```sh
git remote set-url origin https://github.com/mikomikE254254/finally111.git
git branch -M main
```

**4. Push**
```sh
git push -u origin main
```

### Authentication
When asked for your **Password**, paste your **Personal Access Token (PAT)** from the link above. DO NOT use your GitHub account password.

---

## Troubleshooting

- **`Invalid username or token`**: Double-check that you copied the token correctly and that it has the `repo` scope.
- **`fatal: repository not found`**: Ensure the repository `finally111` exists on your GitHub account `mikomikE254254`.
