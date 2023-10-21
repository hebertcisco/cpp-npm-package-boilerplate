import { helloNative } from '../../index';

describe('native', () => {
  it('should return void', () => {
    expect(helloNative('Hello')).toBe('Hello world');
  });
});
