# Website backup before the scrolling redesign

The complete published website before the 31 October 2026 redesign is preserved
in the repository tag [`backup/pre-scroll-redesign-2026-10-31`](https://github.com/Prem-Tomar/portfolio/tree/backup/pre-scroll-redesign-2026-10-31).

Snapshot commit: `b536bfda473c55124a76c3ecb808e6c4a1e0dce0`.
The tag includes the original React source, styles, assets, resume and build setup.
It was pushed to GitHub before the redesign was implemented.

To inspect or run the complete original version in a separate checkout:

```text
git worktree add ../portfolio-classic backup/pre-scroll-redesign-2026-10-31
```

To restore its page and styles on a new branch, first preserve any current local
changes, then run:

```text
git switch -c codex/restore-classic-portfolio
git restore --source=backup/pre-scroll-redesign-2026-10-31 -- app/page.tsx app/globals.css
npm run build
npx tsc --noEmit --incremental false
```

Review, commit and publish the restored version only when requested. The backup
tag itself does not publish or replace the current website.
