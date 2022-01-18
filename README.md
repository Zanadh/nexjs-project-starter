This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app typescript`](https://nextjs.org/docs/basic-features/typescript).

## Getting Started

First, run the development server:

```bash 
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


 
### Pre-Commit (Husky)

We're using a pre-commit script to check linter and unit testing with `yarn checker`, if you got stuck on linter please kindly run `yarn formatter` to automatically fixing format your code.

```
your commit message should be contain type must be one of [build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test]

feat: feature
perf: performance

example `fix: base layout`
```