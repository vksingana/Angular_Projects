import { EmpInfoPage } from './app.po';

describe('emp-info App', () => {
  let page: EmpInfoPage;

  beforeEach(() => {
    page = new EmpInfoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
