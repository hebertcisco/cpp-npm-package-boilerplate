import helloNative from './imports/hello.native';

export { HelloNative } from './imports/hello.native';
export type { IHelloNative } from './imports/hello.native';

helloNative.hello('world')