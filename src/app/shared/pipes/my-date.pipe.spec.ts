import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {
  let pipe = null;
  beforeEach(() => {
    pipe = new MyDatePipe();
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it ('schould works', () => {
    const input = 'Wed Oct 24 2018 02:01:22 GMT+0200 (czas środkowoeuropejski letni)';
    const output = pipe.transform(input);
    expect(output).toEqual('24 października 2018, 02:01');
  });

  it('should return empty string for falsy values', () =>  {
    const falsy = [null, '', undefined, false, NaN, 0];
    let output;

    falsy.forEach(falsyValue => {
      output = pipe.transform(falsyValue);
      expect(output).toEqual('');
    });

  });
  it('should return empty string for non date-strings', () => {
    const output = pipe.transform('ciasteczko');
    expect(output).toEqual('');
  });
});
