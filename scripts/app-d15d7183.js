var TSPI;!function(t){var e;!function(t){"use strict";var e=function(){function t(t){t.date=new Date}return t.$inject=["$scope"],t}();t.NavbarCtrl=e}(e=t.Controllers||(t.Controllers={}))}(TSPI||(TSPI={}));var TSPI;!function(t){var e;!function(e){"use strict";var i=function(){function e(e){e.nickname="Joe Bob",e.interviewMap=new t.Map;for(var i=function(t,e){return Math.random()*(e-t)+1+t},n=0;8>n;n++){var r=new t.City(n,"My City","Its Description","purple",i(128,384),i(128,384));e.interviewMap.cities.push(r)}console.log(e.interviewMap),e.aceOptions={useWrapMode:!0,showGutter:!1,theme:"twilight",mode:"javascript",firstLineNumber:5,onLoad:function(t){t.setReadOnly(!1)},onChange:function(){e.interviewMap&&(e.interviewSim=new t.Sim(e.interviewMap),console.log("hook me",e.interviewSim))}},e.aceModel="\n\n// This function rates a node between 0 (not attractive) and 1 (very attractive)\nvar h = function (distance: number, edgeValue: number, passNumber : number) {\n\n};\n\n"}return e.$inject=["$scope"],e}();e.InterviewController=i}(e=t.Controllers||(t.Controllers={}))}(TSPI||(TSPI={}));var TSPI;!function(t){"use strict";var e=function(){function t(){this.path=[],this.distance=0}return t.prototype.travelToCity=function(t){if(0==this.path.length)this.path.push(t),this.distance=0;else{var e=this.getDistanceToCity(t);this.distance+=e,this.path.push(t)}},t.prototype.getDistanceToCity=function(t){var e=this.path[this.path.length-1],i=t.x_axis-e.x_axis,n=t.y_axis-e.y_axis,r=Math.sqrt(Math.pow(i,2)+Math.pow(n,2));return r},t.prototype.hasVisitedAllCities=function(t){return this.path.length==t.cities.length+1},t.prototype.naiveChooseNextCity=function(t){for(var e in t.cities){var i=t.cities[e];if(-1==this.path.indexOf(i))return i}return this.path[0]},t}(),i=function(){function t(t){this.map=t,this.shortestCircuit=0,this.iteration=0;for(var i=new e;!i.hasVisitedAllCities(this.map);){var n=i.naiveChooseNextCity(this.map);console.log("Ant chose next city ",n),i.travelToCity(n)}console.log("Ant ",i),this.map.drawPath(i.path)}return t}();t.Sim=i}(TSPI||(TSPI={}));var TSPI;!function(t){"use strict";var e=function(){function t(t){void 0===t&&(t=[]),this.cities=t}return t.prototype.drawPath=function(){console.log("drawing path!!!!",this.svgContainer),d3.select("#d3-container").append("svg").append("line").style("stroke","black").attr("x1",5).attr("y1",5).attr("x2",50).attr("y2",50)},t}();t.Map=e}(TSPI||(TSPI={}));var TSPI;!function(t){var e;!function(t){"use strict";var e=function(){function t(t){t.map.svgContainer=d3.select("#d3-container").append("svg"),t.map.svgContainer.attr("width",512).attr("height",512).style("border","1px solid black");{var e=t.map.svgContainer.selectAll("circle").data(t.map.cities).enter().append("circle");e.attr("cx",function(t){return t.x_axis}).attr("cy",function(t){return t.y_axis}).attr("r",function(){return 10}).style("fill",function(t){return t.color})}console.log(t.map.svgContainer)}return t.$inject=["$scope"],t}();t.MapController=e}(e=t.Controllers||(t.Controllers={}))}(TSPI||(TSPI={}));var TSPI;!function(t){var e;!function(e){"use strict";function i(){return{restrict:"E",scope:{map:"="},controller:t.Controllers.MapController,controllerAs:"vm",templateUrl:"app/interview/map/map.partial.html",replace:!0}}e.tspMap=i}(e=t.Directives||(t.Directives={}))}(TSPI||(TSPI={}));var TSPI;!function(t){"use strict";var e=function(){function t(t,e,i,n,r,a){void 0===t&&(t=0),void 0===e&&(e="default city"),void 0===i&&(i="description"),void 0===n&&(n="purple"),void 0===r&&(r=50),void 0===a&&(a=50),this.cityId=t,this.name=e,this.description=i,this.color=n,this.x_axis=r,this.y_axis=a}return t}();t.City=e}(TSPI||(TSPI={}));var TSPI;!function(t){"use strict";angular.module("TSPI",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router","ui.bootstrap","ui.sortable","ui.ace","firebase"]).controller(t.Controllers).directive(t.Directives).config(["$locationProvider","$stateProvider","$urlRouterProvider",function(t,e,i){t.html5Mode(!0),e.state("interview",{url:"/interview",templateUrl:"app/interview/interview.html",controller:"InterviewController"}),i.otherwise("/interview")}])}(TSPI||(TSPI={})),angular.module("TSPI").run(["$templateCache",function(t){t.put("app/interview/interview.html",'<div class="container"><div class="row"><h1 style="margin-bottom: 64px; margin-top: 64px;">TSP Interview</h1></div><div class="row"><div class="col-sm-6 col-md-6 col-lg-6" ui-ace="aceOptions" ng-model="aceModel"></div><div class="col-sm-6 col-md-6 col-lg-6"><tsp-map map="interviewMap"></tsp-map></div></div></div>'),t.put("app/components/footer/footer.html",'<div class="footer"><ul class="nav nav-pills"><li ui-sref-active="active" role="presentation"><a ui-sref="typescript"><i class="fa fa-windows"></i> TypeScript</a></li><li ui-sref-active="active" role="presentation"><a ui-sref="coffeescript"><i class="fa fa-coffee"></i> CoffeeScript</a></li><li ui-sref-active="active" role="presentation"><a ui-sref="developer-features"><i class="fa fa-code"></i> Dev Features</a></li><li role="presentation"><a href="https://github.com/OR13/TSPI" target="_blank"><i class="fa fa-github"></i> View Source</a></li></ul></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-default" ng-controller="NavbarCtrl"><div class="container"><div class="navbar-header"><a class="navbar-brand" href="/"><span class="fa fa-life-bouy"></span> TypeScript + CoffeeScript</a></div></div></nav>'),t.put("app/interview/map/map.partial.html",'<div id="d3-container"></div>')}]);