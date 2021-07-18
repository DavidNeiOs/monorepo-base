# monorepo-base

[![Node.js CI (solution)](<https://github.com/mike-north/js-ts-monorepos/workflows/Node.js%20CI%20(solution)/badge.svg>)](https://github.com/mike-north/js-ts-monorepos/actions?query=workflow%3A%22Node.js+CI+%28solution%29%22)
[![TypeScript@Next tests (solution)](<https://github.com/mike-north/js-ts-monorepos/workflows/TypeScript@Next%20tests%20(solution)/badge.svg>)](https://github.com/mike-north/js-ts-monorepos/actions?query=workflow%3A%22TypeScript%40Next+tests+%28solution%29%22)

## Project setup

First, you should ensure you have [your ssh keys working with GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent). You can verify this by running

```sh
ssh git@github.com
```

and getting a response like

```sh
Hi user! You've successfully authenticated, but GitHub does not provide shell access.
Connection to github.com closed.
```

### Tools

Next, make sure you have installed [volta](http://volta.sh/) which ensures you have the right version of node and yarn for this project

Strongly recommended the use of [Visual Studio Code](https://code.visualstudio.com/) as an authoring tool. If you use something else, you're on your own.

### Clone

Next, checkout a working copy of this project

```sh
git clone git@github.com:DavidNeiOs/monorepo-base
```

enter the directory you just created

```sh
cd monorepo-base
```

### Install dependencies

[`yarn`](https://yarnpkg.com/) is the recommended package manager to use with this project. Please use it instead of npm.

Install dependencies with yarn by running

```sh
yarn
```
