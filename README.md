Based on the excellent guide:
https://semaphoreci.com/community/tutorials/setting-up-angular-2-with-webpack

----

## Create a new project

Create a new project
in the terminal, run `npm init -f`


## install dependencies

#### angular
> npm i -S angular@1.5.7
> npm i -D angular-mocks@1.5.7

#### typescript
> npm i -D typescript tslint typings

#### webpack
> npm i -D webpack webpack-dev-server html-webpack-plugin raw-loader ts-loader tslint-loader

#### testing
> npm i -D karma karma-jasmine jasmine-core karma-chrome-launcher karma-phantomjs-launcher phantomjs-prebuilt karma-sourcemap-loader karma-webpack es6-shim


## set up configurations

open `package.json` and add a new script
> "typings": "./node_modules/.bin/typings"

(this script is required on my windows machine, where ``./node_modules/.bin/typings init` throws an error)

install typings
> npm run-script typings -- install dt~jasmine env~node --save --global

install es6 shim
> npm run-script typings -- install dt~es6-shim --save

also note, test script only works with following versions:
    "webpack": "^1.13.1",
    "webpack-dev-server": "^1.14.1"