<img src="/src/ts-banner.jpg" alt="kafka" id="kafka">

# Learning TypeScript

> This is a repository to save my learning progress in <img src="/src/typescript-original.svg" alt="ts-logo" height="20">

> Main advantages and features:
>
>* TypeScript is an open source programming language
>* Developed by Microsoft
>* It is a strict syntactic **superset of JS**
>* Has code completion and IntelliSense
>* Adds optional **static typing** to the language
>* enables developers to add type **safety** to their projects.

**Go to:**

> [First Steps](#p01)
>
>* [Installing nvm](#sh01)
>* [Installing node and npm](#sh02)
>* [Installing typescript](#sh03)
>
> [Using TypeScript](#p02)
>
>* [TS terminal commands](#sh04)

<h2 id="p01">First Steps</h2>

<p id="sh01"></p>

```bash
# installing nvm - nvm is node version manager
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

#test nvm
nvm -v
```

<p id="sh02"></p>

```bash
# installind node lts version and npm
nvm install node --lts

# using node lts
nvm use node --lts

#test node
node -v

# npm is node package manager and is installed with node

#test npm
npm -v
```

<p id="sh03"></p>

```bash
# installing typescript (will install latest)

# locally
npm install typescript 

# globally (might have to use sudo)
npm install -g typescript

# test TypeScript
tsc -v
```

<h2 id="p02">using TypeScript</h2>

<p id="sh04"></p>

```bash
# Using TypeScript commands (tsc)

# Create a js file based on ts file
tsc (file-name).ts

# Run the js result file
node (file-name).js

# There's a lot of interesting TS commands
tsc --help

# Run .ts file directly using node -- won't work in some cases
node (file-name).ts
```
