(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['head.tmpl'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<title>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</title>\n<meta name=\"description\" content=\""
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "\" />\n<link href=\"https://fonts.googleapis.com/css?family="
    + alias4(((helper = (helper = helpers.font || (depth0 != null ? depth0.font : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"font","hash":{},"data":data}) : helper)))
    + "\" rel=\"stylesheet\" />";
},"useData":true});
})();