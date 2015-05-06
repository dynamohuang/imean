pplicationModuleName = 'imean';
var mainApplicationModule = angular.module(mainApplicationModuleName,
['example']);
angular.element(document).ready(function() {
 angular.bootstrap(document, [mainApplicationModuleName]);
});
