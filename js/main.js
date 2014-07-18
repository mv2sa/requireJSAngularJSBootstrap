"use strict";

requirejs.config({
    paths : {
        "angular" : "angular.min",
        "uiBootstrap" : "ui-bootstrap-tpls-0.11.0.min"
    },
    shim : {
        "angular" : {"exports" : "angular"},
    	"uiBootstrap" : {"deps" : "angular"},
        "bootstrap/affix":      { "exports": "$.fn.affix" }, 
        "bootstrap/alert":      { "exports": "$.fn.alert" },
        "bootstrap/button":     { "exports": "$.fn.button" },
        "bootstrap/carousel":   { "exports": "$.fn.carousel" },
        "bootstrap/collapse":   { "exports": "$.fn.collapse" },
        "bootstrap/dropdown":   { "exports": "$.fn.dropdown" },
        "bootstrap/modal":      { "exports": "$.fn.modal" },
        "bootstrap/popover":    { "exports": "$.fn.popover" },
        "bootstrap/scrollspy":  { "exports": "$.fn.scrollspy" },
        "bootstrap/tab":        { "exports": "$.fn.tab"        },
        "bootstrap/tooltip":    { "exports": "$.fn.tooltip" },
        "bootstrap/transition": { "exports": "$.fn.transition" }
    },
	priority: [
		"angular"
	]
});

window.name = "NG_DEFER_BOOTSTRAP!";

require(["angular", "app", "bootstrap/carousel", "bootstrap/dropdown", "bootstrap/transition"], function (angular, app) {

    var $angularBoot = angular.element(document.getElementsByTagName('body')[0]);

    angular.element().ready(function() {
        angular.resumeBootstrap([app['name']]);
    });

});