import bindings from 'bindings';

type THelloNative = (string: string) => string;

export const helloNative: THelloNative = bindings('hello.node').hello;
