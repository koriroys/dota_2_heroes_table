import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['fixed-headers'],
  tagName: 'table',
  setup: function() {

    var ths = this.$('th div');
    var tds = this.$('td div');
    for ( var i = 0; i < ths.length; i++) {
      var header = $(ths[i]);
      var element = $(tds[i]);
      var element_width = element.width();
      var header_width = header.width();
      // TODO: find widest element in column

      if (element_width > header_width) {
        header.width(element_width);
        element.width(element_width);
      } else {
        header.width(header_width);
        element.width(header_width);
      }

    }
  }.on('didInsertElement')
});
