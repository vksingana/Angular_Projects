import { EmpFormDetailsPage } from './app.po';

describe('emp-form-details App', () => {
  let page: EmpFormDetailsPage;

  beforeEach(() => {
    page = new EmpFormDetailsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
