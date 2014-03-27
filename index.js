/*jshint node:true, eqnull:true, laxcomma:true, undef:true, indent:2, camelcase:false */
'use strict';


module.exports = function _renderWithContextMiddleware(app) {
  app.template = app.template || {};
  
  app.context.renderWithContext = function* (tpl, data) {
    data = Object.merge(this.template, data);
    return yield this.render(tpl, data);
  };
};
