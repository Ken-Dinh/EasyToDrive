import { ReplaceCharPipe } from './replacechar.pipe';

describe('StringFormattingPipe', () => {
  it('create an instance', () => {
    const pipe = new ReplaceCharPipe();
    expect(pipe).toBeTruthy();
  });
});
