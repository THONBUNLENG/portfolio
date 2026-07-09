# Fix UI in App.js and Related Components

The goal is to improve the UI/UX in `App.js` and its related components, specifically focusing on page transitions, preloader behavior, and code cleanliness by moving inline styles to CSS.

## Proposed Changes

### [App.js](file:///C:/developer/portfolio_cv/portfolio/src/App.js)

- Move the inline `fadeIn` animation to the `page-transition-container` CSS class as suggested by the code comment.
- Update `AnimatedRoutes` to use the CSS class instead of inline styles.
- Clean up the `App` component's structure for better maintainability.

### [Pre.js](file:///C:/developer/portfolio_cv/portfolio/src/components/Pre.js)

- Update the `Pre` component to use a consistent ID and toggle a class for fading out, rather than changing the ID itself. This allows for a smoother transition.

### [style.css](file:///C:/developer/portfolio_cv/portfolio/src/style.css)

- Update `#preloader` and `#preloader-none` to support a smooth fade-out transition.
- Ensure the preloader doesn't block user interaction after fading out by using `pointer-events: none` and `visibility: hidden`.

## Verification Plan

### Automated Tests
- Run `npm test` to ensure no regressions in existing tests.

### Manual Verification
- Verify that the page transition animation works correctly when navigating between different routes.
- Verify that the preloader fades out smoothly when the app loads.
- Verify that the app is interactive immediately after the preloader fades out.
- Check the console for any React warnings or errors.
