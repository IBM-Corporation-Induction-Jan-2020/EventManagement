import { Event } from './event';

describe('Event', () => {
  it('should create an instance', () => {
    expect(new Event(0,"","","","","",0,true,"")).toBeTruthy();
  });
});
