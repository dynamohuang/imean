var routerApp = angular.module('routerApp', ['ui.router', 'ngGrid', 'BookListModule', 'BookDetailModule']);
/**
 * 由于整个应用都会和路由打交道，所以这里把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
routerApp.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});

routerApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'cms/tpls/index.html'
                },
                'topbar@index': {
                    templateUrl: 'cms/tpls/topbar.html'
                },
                'main@index': {
                    templateUrl: 'cms/tpls/home.html'
                }
            }
        })
        .state('login', {
	        url: '/login',
	        views: {
	            '': {
	                templateUrl: 'cms/tpls/login.html'
	            },
	            'main@login': {
	                templateUrl: 'cms/tpls/loginForm.html'
	            }
	        }
	    })
        .state('index.usermng', {
            url: '/usermng',
            views: {
                'main@index': {
                    templateUrl: 'cms/tpls/usermng.html',
                    controller: function($scope, $state) {
                        $scope.addUserType = function() {
                            $state.go("index.usermng.addusertype");
                        }
                    }
                }
            }
        })
        .state('index.usermng.highendusers', {
            url: '/highendusers',
            templateUrl: 'cms/tpls/highendusers.html'
        })
        .state('index.usermng.normalusers', {
            url: '/normalusers',
            templateUrl: 'cms/tpls/normalusers.html'
        })
        .state('index.usermng.lowusers', {
            url: '/lowusers',
            templateUrl: 'cms/tpls/lowusers.html'
        })
        .state('index.usermng.addusertype', {
            url: '/addusertype',
            templateUrl: 'cms/tpls/addusertypeform.html',
            controller: function($scope, $state) {
                $scope.backToPrevious = function() {
                    window.history.back();
                }
            }
        })
        .state('index.permission', {
            url: '/permission',
            views: {
                'main@index': {
                    template: '这里是权限管理'
                }
            }
        })
        .state('index.report', {
            url: '/report',
            views: {
                'main@index': {
                    template: '这里是报表管理'
                }
            }
        })
        .state('index.settings', {
            url: '/settings',
            views: {
                'main@index': {
                    template: '这里是系统设置'
                }
            }
        })
        .state('index.books', {
            url: '/books',
            views: {
                'main@index': {
                    templateUrl: 'cms/tpls/books.html'
                }
            }
        })
        .state('index.books.booklist', {
            url: '/booklist/{bookType:[0-9]{0,4}}',
            templateUrl: 'cms/tpls/bookGrid.html'
        })
        .state('index.books.addbook', {
            url: '/addbook',
            templateUrl: 'cms/tpls/addBookForm.html'
        })
        .state('index.books.bookdetail', {
            url: '/bookdetail/:bookId', //注意这里在路由中传参数的方式
            templateUrl: 'cms/tpls/bookDetail.html'
        })
        
        
        
});
