

## Changes

### 1. Navbar dropdowns — trigger on hover instead of click
- Change the dropdown `<div>` wrapper to use `onMouseEnter` / `onMouseLeave` instead of `onClick` for desktop
- On mouse enter: open that dropdown. On mouse leave: close it
- Keep click behavior for mobile

### 2. "Support Our Mission" section — make background photo more visible
- Reduce the overlay opacity from `from-primary/80 to-sunset-deep/80` to something like `from-primary/50 to-sunset-deep/50`
- Increase section padding from `py-20` to `py-28 md:py-36` so the photo has more room to show

