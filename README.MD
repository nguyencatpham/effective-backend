# Express & mysql REST API Boilerplate in ES6 

## Overview

This is a boilerplate application for building REST APIs in Node.js using ES6 and Express with Code Coverage and JWT Authentication. Helps you stay productive by following best practices. Follows [Airbnb's Javascript style guide](https://github.com/airbnb/javascript).

Heavily inspired from [Egghead.io - How to Write an Open Source JavaScript Library](https://egghead.io/courses/how-to-write-an-open-source-javascript-library).

### Features

| ES6 support using [Babel](https://babeljs.io/)
| Authentication via JsonWebToken                  	 	 | Supports authentication using [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken).
| Code Linting               			 | JavaScript code linting is done using [ESLint](http://eslint.org)
| Auto server restart                  	 | Restart the server using [nodemon](https://github.com/remy/nodemon) in real-time anytime an edit is made, with babel compilation and eslint.          
| Debugging via [debug](https://www.npmjs.com/package/debug)           | Instead of inserting and deleting console.log you can replace it with the debug function and just leave it there. You can then selectively debug portions of your code by setting DEBUG env variable. If DEBUG env variable is not set, nothing is displayed to the console. 
| Secure app via [helmet](https://github.com/helmetjs/helmet)           | Helmet helps secure Express apps by setting various HTTP headers. |
| Uses [yarn](https://yarnpkg.com) over npm            | Uses new released yarn package manager by facebook. You can read more about it [here](https://code.facebook.com/posts/1840075619545360) |

- CORS support via [cors](https://github.com/expressjs/cors)                      |
- Uses [http-status](https://www.npmjs.com/package/http-status) to set http status code. It is recommended to use `httpStatus.INTERNAL_SERVER_ERROR` instead of directly using `500` when setting status code.
- Has `.editorconfig` which helps developers define and maintain consistent coding styles between different editors and IDEs.

## Getting Started

Clone the repo:
Install yarn:
```js
npm install -g yarn
```

Install dependencies:
```sh
yarn
```
Set environment (vars):
```sh
cp .env.example .env
```

Start server:
```sh
# Start server
yarn start
```
##### Deployment

```sh
# compile to ES5
1. yarn build

# upload dist/ to your server
2. scp -rp dist/ user@dest:/path

# install production dependencies only
3. yarn --production

# Use any process manager to start your services
4. pm2 start dist/index.js
```
## Logging

Universal logging library [winston](https://www.npmjs.com/package/winston)
## Meta

Oscar( https://github.com/nguyencatpham)