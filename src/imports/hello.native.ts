import bindings from 'bindings';

type HelloMethod = (name: string) => void;

export interface IHelloNative {
    prototype: {
        hello: HelloMethod;
        $hello: HelloMethod;
    };
    new(): IHelloNative;
    hello: HelloMethod;
}

export const HelloNative: IHelloNative = bindings('addon.node').HelloNative;

const helloNative = new HelloNative();

helloNative.prototype.hello = function (name: string): void {
    this.$hello(name);
}

helloNative.hello.prototype = helloNative.prototype;

export default helloNative;