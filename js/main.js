"use strict";

requirejs.config({
    paths : {
        "angular" : "angular.min",
        "uiBootstrap" : "ui-bootstrap-tpls-0.11.0.min"
    },
    shim : {
        "angular" : {"exports" : "angular"},
    	"uiBootstrap" : {"deps" : "angular"}
    },
	priority: [
		"angular"
	]
});

window.name = "NG_DEFER_BOOTSTRAP!";

require(["angular", "app"], function (angular, app) {

    var $angularBoot = angular.element(document.getElementById('main'));

    angular.element().ready(function() {
        angular.resumeBootstrap([app['name']]);
    });

});