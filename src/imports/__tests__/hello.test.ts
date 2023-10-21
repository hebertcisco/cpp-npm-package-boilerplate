import { helloNative } from '../../index';

describe('native', () => {
  it('should return void', () => {
    expect(helloNative('Hello world')).toBe('Hello world');
  });
});
