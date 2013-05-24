require.config({
  shim: {
  },

  paths: {
    jquery: '../lib/jquery/jquery.min'
  }
});

require(['algorithm', 'jquery'], function (Algorithm) {
  $('#run').on('click', function () {
    Algorithm.init('selectees');
  });
});
