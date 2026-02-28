

## Changes

### 1. Add uploaded images to project
- Copy logo (`Kakuma_Made_Logo-removebg-preview.png`) to `src/assets/logo.png`
- Copy children photo (`IMG_0515.JPG`) to `src/assets/hero.jpg`
- Copy crafted items photo (`footer.jpg`) to `src/assets/mission-bg.jpg`

### 2. Navbar — use real logo image
- Replace the "K" circle div with an `<img>` tag importing the logo from `src/assets/logo.png`
- The hamburger menu is already `lg:hidden` — need to verify the preview viewport. The code looks correct; the issue may be the preview is below `lg` (1024px). Will lower breakpoint to `md` (768px) so desktop nav shows on tablets too.

### 3. Navbar — dropdown color on hover/active
- Add a distinct color highlight to dropdown trigger buttons when active (e.g., text-primary with a warm underline or background tint matching the sunset palette)

### 4. Hero section — use children photo as background
- Import `hero.jpg` and set it as a background image on the hero section with a dark overlay for text readability
- Keep the gradient overlay but blend it with the photo

### 5. "Support Our Mission" section — use crafted items photo as background
- Import `mission-bg.jpg` and set it as the background of the donate CTA section near the footer
- Add a dark overlay for text contrast

