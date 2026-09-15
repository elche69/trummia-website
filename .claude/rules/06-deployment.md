# Deployment and Repository

- The deployable site root is the `Marketing/website` directory.
- Keep the site compatible with static hosting; no server runtime is required.
- Before publishing, confirm that all HTML, CSS, JavaScript, and referenced assets are inside the deployable directory.
- Keep the GitHub repository and branch used by the hosting provider documented and consistent.
- The current GitHub repository is `https://github.com/elche69/trummia-website` and the active branch is `main`.
- A GitHub push updates source control only. Public hosting updates only when VibeZ Host is configured to deploy from that repository or the files are uploaded to VibeZ Host.
- After meaningful website changes, check the diff, run the available validation, commit with a focused message, and push to `origin main` when publishing is requested.
- Do not claim that the public domain is updated until the hosting deployment and a live-site check have succeeded.
