

## Problem

The navbar uses `rounded-full` when closed and `rounded-3xl` when opened, with `transition-all duration-300`. When the hamburger is tapped, the border-radius animates from fully round to `rounded-3xl` while the mobile menu content appears instantly via conditional rendering (`{mobileOpen && ...}`). This creates a visual glitch where you briefly see the pill shape expanding.

## Fix

Remove the border-radius transition by not using `transition-all` on the nav. Instead, apply transitions only to specific properties that should animate, or simply remove the transition and let the shape change instantly. The cleanest fix: always use `rounded-3xl` on mobile (no shape change), and keep `rounded-full` only for desktop.

### Changes to `src/components/Navbar.tsx` (line 74-76)

Replace the conditional rounded class with a responsive approach:
- Use `rounded-3xl md:rounded-full` so on mobile it is always `rounded-3xl` (no jarring shape transition)
- On desktop it stays `rounded-full` (the mobile menu never shows on desktop anyway)
- Remove the `transition-all duration-300` since there is no longer a need for shape animation

