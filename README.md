# Base Login Template

## A Backend Login Template for future use

## Owners

- [Aravinth Raj](https://github.com/aravinthraj98)
- [Mugilan](https://github.com/Mugilan-Codes)

### How to Colaborate

- Change to Master Branch

```shell
git checkout master
```

- Fetch the latest commits

```shell
git fetch origin
```

- Reset Local copy to match that of the origin

```shell
git reset --hard origin/master
```

- Create and Checkout a new feature branch

```shell
git checkout -b new-feature
```

- Make Changes and Commit those changes

```shell
git status
git add <some-file>
git commit
```

- Push the new feature branch to origin and set the remote after which we can use just `git push`

```shell
git push -u origin new-feature
```

- Delete Local Branches Safely 

```shell
git branch -d localBranchName
```

- Sync with the remote branches by pruning deleted remote branches

```shell
git fetch -p
```
  
### Packages Used

> DevDependencies

- [nodemon](https://www.npmjs.com/package/nodemon)
- [@babel/cli](https://www.npmjs.com/package/@babel/cli)
- [@babel/core](https://www.npmjs.com/package/@babel/core)
- [@babel/node](https://www.npmjs.com/package/@babel/node)
- [@babel/preset-env](https://www.npmjs.com/package/@babel/preset-env)

> Dependencies

- [express](https://www.npmjs.com/package/express)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [cors](https://www.npmjs.com/package/cors)
  