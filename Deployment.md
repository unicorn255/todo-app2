## Deployment

### Steps:
- install gh-pages
- add homepage property in package.json
 * "homepage":"."
- add 2 scripts in scripts object in packages.json
 * "predeploy":"npm run build"
 * "deploy":"gh-pages -d build"

`Note` Project should have remote origin

- Ready to deploy your project, run 
 * npm run deploy

