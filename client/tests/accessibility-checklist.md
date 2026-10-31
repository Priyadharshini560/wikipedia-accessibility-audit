# Accessibility Testing Checklist

## Website Details

- Website: Wikipedia
- URL: https://www.wikipedia.org/
- Testing Tool: Google Lighthouse
- Testing Type: Automated and Manual Testing

## 1. Manual Test Results

| Test | Result | Remarks |
|---|---|---|
| Keyboard focus visibility | Pass | Focus indicator visible |
| Tab order | Pass | Logical navigation order |
| Search box accessible name | Pass | aria-label="Search Wikipedia" |
| Image alt attribute | Pass | Alt attribute present |
| 200% browser zoom | Pass | Tested manually |
| Escape key closes menu | Needs verification | Initial test did not close menu |
| Mobile responsive layout | Not tested | Verification pending |

## 2. Lighthouse Results

| Category | Score |
|---|---:|
| Performance | 100 |
| Accessibility | 100 |
| Best Practices | 77 |
| SEO | 92 |

## 3. Summary

The website achieved an Accessibility score of 100 in Lighthouse automated testing.

Manual testing was also performed for keyboard navigation, focus visibility, accessible names, image alternative text, and browser zoom.

Some manual checks, including Escape key behavior and mobile responsiveness, require further verification.

## 4. Recommendations

- Verify keyboard interaction for the navigation menu.
- Test the website on mobile screen sizes.
- Continue manual accessibility testing.
- Re-run Lighthouse after any changes.
