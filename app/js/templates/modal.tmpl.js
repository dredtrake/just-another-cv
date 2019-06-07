(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['modal.tmpl'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"overlay\"></div>\n<div class=\"modal-content\">\n	<div class=\"close\" aria-label=\"Close this modal box\"></div>\n	<div class=\"modal-body\">\n		<h2>Send me a message</h2>\n		<form id=\"sendmail\" action=\""
    + alias4(((helper = (helper = helpers.send_url || (depth0 != null ? depth0.send_url : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"send_url","hash":{},"data":data}) : helper)))
    + "\" method=\"post\">\n			<p class=\"text-center\">\n				<input class=\"init-focus\" type=\"text\" name=\"from-name\" placeholder=\"Your name\"></p>\n				<p class=\"text-center\">\n					<input type=\"text\" name=\"from-mail\" placeholder=\"Your email\">\n				</p>\n				<p class=\"text-center\">\n					<textarea name=\"message\" placeholder=\"Your message\"></textarea>\n				</p>\n			<div id=\"g-recaptcha\" class=\"g-recaptcha\" data-sitekey=\""
    + alias4(((helper = (helper = helpers.recaptcha_key || (depth0 != null ? depth0.recaptcha_key : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"recaptcha_key","hash":{},"data":data}) : helper)))
    + "\"></div>\n			<p class=\"text-right\">\n				<input class=\"btn default\" type=\"submit\" name=\"s\" value=\"Send\">\n			</p>\n		</form>\n	</div>\n</div>";
},"useData":true});
})();