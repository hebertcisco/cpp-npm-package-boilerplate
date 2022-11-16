import { HelloNative } from '../index';

describe('helloNative', () => {
  let helloNative: typeof HelloNative;

  beforeEach(() => {
    helloNative = new HelloNative();
  });

  it('should return void', () => {
    expect(helloNative.hello('world')).toBeUndefined();
  });
});
