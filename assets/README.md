# Assets Directory

Place your premium assets here for the website to use.

## Required Assets:

### 1. Video File
- **File**: `premiumhomes-video.mp4`
- **Path**: `/assets/premiumhomes-video.mp4`
- **Purpose**: Homepage and About section video backgrounds
- **Specs**: MP4 (H.264), 1920x1080, under 10MB, 15-30 seconds loop

### 2. Who We Are Image
- **File**: `who-we-are.png`
- **Path**: `/assets/who-we-are.png`
- **Purpose**: Who We Are page hero background
- **Specs**: PNG, high resolution, professional architectural/real estate imagery

## Current Implementation:

- **Homepage**: Uses VideoHero component (will fallback to gradient if video missing)
- **About Mega Menu**: Uses VideoHero in visual panel (will fallback to gradient if video missing)
- **Who We Are Page**: Uses static image background (will fallback to gradient if image missing)

## File Locations:
```
public/
├── assets/
│   ├── premiumhomes-video.mp4
│   └── who-we-are.png
├── video-test.html (for video debugging)
└── ...
```

## Notes:
- All assets have graceful fallbacks
- Video will auto-play muted for better UX
- Image will have overlay gradients for text readability
- Missing assets will show elegant loading/error states