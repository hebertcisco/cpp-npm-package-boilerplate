import { helloNative } from '../../index';

describe('native', () => {
  it('should return void', () => {
    expect(helloNative('world')).toBe('world');
  });
});
