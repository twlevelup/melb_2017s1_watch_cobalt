const TeamPage = require('../../src/js/pages/teamPage');

let page;

describe('Check-in dance', () => {
  beforeEach(() => {
    page = new TeamPage();
    page.render();
  });

  describe('initial git commit', () => {
    it('should include the text "Made by:"', () => {
      expect(page.$el).toContainText('Made by:');
    });

    // TODO: Add a test to check for your name
    it('should include the text "Kylie"', () => {
      expect(page.$el).toContainText('Kylie');
    });

    it('should include the text "Ellen"', () => {
      expect(page.$el).toContainText('Ellen');
    });

    it('should include the text "Patrick"', () => {
      expect(page.$el).toContainText('Patrick');
    });
  });
});
