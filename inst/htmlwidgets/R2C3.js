HTMLWidgets.widget({

  name: 'R2C3',

  type: 'output',

  initialize: function(el, width, height) {

      return {
      };

  },

  renderValue: function(el, x, instance) {

      var chart = c3.generate(x.message);
  },

  resize: function(el, width, height, instance) {

  }

});
