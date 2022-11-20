<p align="center">
 <img width="100px" src="https://raw.githubusercontent.com/hebertcisco/cpp-npm-package-boilerplate/main/.github/images/favicon512x512-cpp-npm-package-boilerplate.svg" align="center" alt=":package: cpp-npm-package-boilerplate" />
 <h2 align="center">:package: cpp-npm-package-boilerplate</h2>
 <p align="center">A boilerplate for creating a C++ npm package</p>
  <p align="center">
    <a href="https://github.com/hebertcisco/cpp-npm-package-boilerplate/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/hebertcisco/cpp-npm-package-boilerplate?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/cpp-npm-package-boilerplate/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/hebertcisco/cpp-npm-package-boilerplate?style=flat&color=336791" />
    </a>
     <a href="https://github.com/hebertcisco/cpp-npm-package-boilerplate">
      <img alt="GitHub Downloads" src="https://img.shields.io/npm/dw/cpp-npm-package-boilerplate?style=flat&color=336791" />
    </a>
    <a href="https://github.com/hebertcisco/cpp-npm-package-boilerplate">
      <img alt="GitHub Total Downloads" src="https://img.shields.io/npm/dt/cpp-npm-package-boilerplate?color=336791&label=Total%20downloads" />
    </a>
 <a href="https://github.com/hebertcisco/cpp-npm-package-boilerplate">
      <img alt="GitHub release" src="https://img.shields.io/github/release/hebertcisco/cpp-npm-package-boilerplate.svg?style=flat&color=336791" />
    </a>
    <br />
    <br />
  <a href="https://github.com/hebertcisco/cpp-npm-package-boilerplate/issues/new/choose">Report Bug</a>
  <a href="https://github.com/hebertcisco/cpp-npm-package-boilerplate/issues/new/choose">Request Feature</a>
  </p>
 <h3 align="center">Systems on which it has been tested:</h3>
 <p align="center">
    <a href="https://ubuntu.com/download">
      <img alt="Ubuntu" src="https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white&style=flat" />
    </a>
  </p>

<p align="center">Did you like the project? Please, considerate <a href="https://www.buymeacoffee.com/hebertcisco">a donation</a> to help improve!</p>

<p align="center"><strong>A boilerplate for creating a C++ npm package</strong>✨</p>

## Getting started

### Installation(Example purposes)

> Install with yarn or npm: `yarn` or `npm`:

```bash
# yarn
yarn add cpp-npm-package-boilerplate
```

```bash
# npm
npm i cpp-npm-package-boilerplate --save
```

### Usage example

```js
import { helloNative } from 'cpp-npm-package-boilerplate';

helloNative('World'); // Hello World
```

> **Note:** This is example is a binding of the C++ function `helloNative` to the JavaScript function `helloNative`.

#### C++ function

```cpp
#include <napi.h>

Napi::String hello(const Napi::CallbackInfo& info) {
    Napi::Env env = info.Env();
    Napi::String name = info[0].As<Napi::String>();
    return Napi::String::New(env, "Hello " + name.Utf8Value());
}

Napi::Object Init(Napi::Env env, Napi::Object exports) {
    exports.Set(Napi::String::New(env, "hello"), Napi::Function::New(env, hello));
    return exports;
}

NODE_API_MODULE(hello, Init)

```

#### JavaScript function

```mjs
import bindings from 'bindings';
export const helloNative = bindings('hello.node').hello;
```

#### TypeScript implementation

```ts
import bindings from 'bindings';

type THelloNative = (string: string) => string;

export const helloNative: THelloNative = bindings('hello.node').hello;
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](issues).

## Show your support

Give a ⭐️ if this project helped you!

Or buy me a coffee 🙌🏾

<a href="https://www.buymeacoffee.com/hebertcisco">
    <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=hebertcisco&button_colour=FFDD00&font_colour=000000&font_family=Inter&outline_colour=000000&coffee_colour=ffffff" />
</a>

## 📝 License

Copyright © 2022 [Hebert F Barros](https://github.com/hebertcisco).<br />
This project is [MIT](LICENSE) licensed.
