# Vercel SPA Routing Configuration

## Problem
React/Vite SPAs return 404 errors when:
- Navigating directly to a URL (e.g., `/programs/nigeria/bromley-court`)
- Refreshing the page on a non-root route

This happens because Vercel looks for a server-side file at that path, but the route is handled client-side by React Router.

## Solution
Create `vercel.json` in the project root with a catch-all rewrite:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This tells Vercel to serve `index.html` for all routes, allowing React Router to handle routing on the client side.

## Common Issues

### 1. public/ folder excluded in .vercelignore
If images/videos return 404, check `.vercelignore`:

```gitignore
# Wrong - excludes all public assets
.cache/
public

# Correct - only exclude build cache
.cache/
```

### 2. Wrong Vercel project linked
If deployments don't apply changes:
```bash
vercel rm --yes           # Unlink current project
vercel link               # Relink to correct project
```

### 3. Build cache issues
Force a fresh deployment:
```bash
vercel --prod --force
```

## Files Modified
- `vercel.json` - SPA routing configuration
- `.vercelignore` - Removed `public` to include static assets
