/**
 * Created by liww on 17/6/19.
 */
(function() {

  var docs = {
    sideBar: "contents/side-bar.md",
    baseUrl: "contents/"
  };

  var handle = {
    init: function() {
      $.get(docs.sideBar, function(rsp) {
        $("#j_side").html(marked(rsp));
      }, "text");

      this.router();
      this.initEvent();
    },

    initEvent: function() {
      $(window).on('hashchange', this.router);
    },

    router: function () {
      var name = location.hash ? location.hash.replace("#", "") : 'start';
      $.get(docs.baseUrl + name + ".md", function(rsp) {
        $("#j_main").html(marked(rsp));
      }, "text");
    }
  };

  $(function() {
    handle.init();
  });

}());