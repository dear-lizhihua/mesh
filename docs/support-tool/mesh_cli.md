---
sidebar_position: 200
---

# @mesh/cli

## 整体目标
一个命令行工具，辅助开发

## 参考
https://cloud.google.com/sdk/gcloud/reference

## mesh env

### 创建 .gitignore 文件

```shell
$ mesh env create gitignore
```

默认配置

```text
# editor
.idea

# misc
.DS_Store

# node
node_modules

# build
dist
build

# npm
npm-lock.json
npm-debug.log*
# yarn
yarn.lock
yarn-debug.log*
yarn-error.log*
```

### .gitignore 文件添加目录或文件

```shell
$ mesh env add gitignore \
  .env.local \
  .env.development.local \
  .env.test.local \
  .env.production.local
```

在 .gitignore 文件中添加如下四行

```text
...

# ignore directory or file
.env.local
.env.development.local
.env.test.local
.env.production.local
```

### 创建 jsconfig.json 文件

```shell
$ mesh env create jsconfig
$ mesh env create jsconfig --vite # 如果是 Vite 项目
```

默认配置

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    }
  },
  "exclude": [
    "dist",
    "node_modules"
  ],
  "include": [
    "src/**/*"
  ]
}
```

### 创建 LICENSE 文件

```shell
$ mesh env create license # 默认 MIT
$ mesh env create license --cc4 # CC 4.0
```

- [MIT License](https://opensource.org/licenses/MIT)
- [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/)

### 创建 .prettierrc 文件和 .prettierignore 文件

```shell
$ mesh env create prettierrc
```

.prettierrc 文件

```json
{
  "singleQuote": true,
  "semi": false,
  "printWidth": 120,
  "trailingComma": "none",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "avoid",
  "tabWidth": 2,
  "useTabs": false
}
```

.prettierignore 文件

```text
.idea
.dist
node_modules
**/node_modules
```

### 创建 .editorconfig 文件

```shell
$ mesh env create editorconfig
```

默认配置

```text
# EditorConfig is awesome: http://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true

# Matches multiple files with brace expansion notation
# Set default charset
[*.{js,py}]
charset = utf-8

# 4 space indentation
[*.py]
indent_style = space
indent_size = 4

# Tab indentation (no size specified)
[*.js]
indent_style = space

# Indentation override for all JS under lib directory
[lib/**.js]
indent_style = space
indent_size = 2

# Matches the exact files either package.json or .travis.yml
[{package.json,.travis.yml}]
indent_style = space
indent_size = 2
```

### 创建 .npmrc

默认配置

```text
chromedriver_cdnurl=https://npm.taobao.org/mirrors/chromedriver
disturl=https://npm.taobao.org/dist
electron_mirror=https://npm.taobao.org/mirrors/electron/
fse_binary_host_mirror=https://npm.taobao.org/mirrors/fsevents
nodejs_org_mirror=https://npm.taobao.org/mirrors/node
node_inspector_cdnurl=https://npm.taobao.org/mirrors/node-inspector
nvm_nodejs_org_mirror=https://npm.taobao.org/mirrors/node
operadriver_cdnurl=https://npm.taobao.org/mirrors/operadriver
phantomjs_cdnurl=https://npm.taobao.org/mirrors/phantomjs/
profiler_binary_host_mirror=https://npm.taobao.org/mirrors/node-inspector/
puppeteer_download_host=https://npm.taobao.org/mirrors
sass_binary_site=https://npm.taobao.org/mirrors/node-sass/
selenium_cdnurl=https://npm.taobao.org/mirrors/selenium
SQLITE3_BINARY_SITE=https://npm.taobao.org/mirrors/sqlite3

registry=http://hub.spoton.cn/repository/npm-group/
```

### mesh env init 初始化项目

```shell
$ mesh env init
```

等同于

```shell
$ mesh env create gitignore
$ mesh env create jsconfig
$ mesh env create prettierrc
$ mesh env create editorconfig
```
