(function($) { 'use strict';

  var Layout = function (SidebarWidth) {
    this.jcaSideBarWidth = SidebarWidth;
    return this;
  };

  Layout.prototype.init = function () {
    console.log('Layout.js is running');
    this.carousel();
    this.date_picker();

    return this;
  };

  Layout.prototype.carousel = function() {
    if ($('[data-toggle="switch"]').length) {
      $('[data-toggle="switch"]').bootstrapSwitch();
    }
  };

  Layout.prototype.date_picker = function() {
  
  };
  window.jcaLayout = new Layout();

}($));
