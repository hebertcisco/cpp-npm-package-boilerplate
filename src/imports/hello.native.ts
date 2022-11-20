import bindings from 'bindings';

type Base = (string: string) => string;

export const helloNative: Base = bindings('hello.node').hello;
