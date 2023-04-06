import Page from './page.js';

class JavaAlertsPage extends Page {
  get btnAlert () {
      return $('jsAlert');
  }
// trying to find out how to select a java script function the above is not finished
  open() {
      return super.open('key_presses');
  }
}
  export default new KeyPressesPage();