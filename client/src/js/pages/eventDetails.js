const Page = require('watch_framework').Page;

const template = require('../../templates/pages/eventDetails.hbs');
const $ = require('jquery');
const storage = require('../../storage');


const eventDetails = Page.extend({

  id: 'event-details',

  data: storage.skillsList,

  jobsCollection: storage.dummyData.jobs,

  template,

  buttonEvents: {
    top: 'scrollUp',
    bottom: 'scrollDown',
    left: 'back',
  },

  scrollUp() {
    $('#watch-face').animate({ scrollTop: '-=70px' });
  },

  scrollDown() {
    $('#watch-face').animate({ scrollTop: '+=70px' });
  },

  getEventData() {
    return this.data.get(this.options.cid);
  },

  filterBySkill(skill) {
    return this.jobsCollection.filter(job => (job.Skill === skill));
  },

  render() {
    // TODO if showPage was creataing a new instance of this view the model could be passed in
    const details = this.getEventData().toJSON();
    this.$el.html(this.template({ jobs: this.filterBySkill(details.Skill) }));
    return this;
  },

});

module.exports = eventDetails;
