(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header.tmpl'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<img class=\"me\" src=\""
    + container.escapeExpression(((helper = (helper = helpers["avatar-img"] || (depth0 != null ? depth0["avatar-img"] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"avatar-img","hash":{},"data":data}) : helper)))
    + "\">\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0["avatar-img"] : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<h1>\n	"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "<br>\n	<small>\n		"
    + alias4(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"role","hash":{},"data":data}) : helper)))
    + "<br>\n		<a href=\"contact.html\" class=\"js_contact-form ib\">contact me</a> <a href=\""
    + alias4(((helper = (helper = helpers["linked-in-url"] || (depth0 != null ? depth0["linked-in-url"] : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"linked-in-url","hash":{},"data":data}) : helper)))
    + "\" class=\"ib\"><img src=\"img/logo-linkedin-48x48.png\" /></a>\n	</small>\n</h1>";
},"useData":true});
})();