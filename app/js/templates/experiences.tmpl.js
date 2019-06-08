(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['experiences.tmpl'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=helpers.helperMissing, alias5="function";

  return "<h3>\n	"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "<br>\n	<a href=\""
    + alias2(((helper = (helper = helpers.url || (depth0 != null ? depth0.url : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"url","hash":{},"data":data}) : helper)))
    + "\">@"
    + alias2(alias1((depth0 != null ? depth0.name : depth0), depth0))
    + "</a><small>"
    + alias2(alias1((depth0 != null ? depth0.place : depth0), depth0))
    + ", "
    + alias2(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"date","hash":{},"data":data}) : helper)))
    + "</small>\n</h3>\n<p>"
    + ((stack1 = alias1((depth0 != null ? depth0.description : depth0), depth0)) != null ? stack1 : "")
    + "</p>\n"
    + ((stack1 = helpers["if"].call(alias3,(depth0 != null ? depth0.list : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"white\">\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.list : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "	<li>"
    + ((stack1 = container.lambda(depth0, depth0)) != null ? stack1 : "")
    + "</li>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h2>Experiences</h2>\n"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();