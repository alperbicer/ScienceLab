angular.module('app', ['ngAnimate', 'ionic', 'scienceLab.services', 'scienceLab.controllers'])

	.run(function($ionicPlatform) {

		$ionicPlatform.ready(function() {
			if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if (window.StatusBar) {
				StatusBar.backgroundColorByHexString('#0C63EE');
			}
		});
	})

	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider
		.state('app', {
			url: '/app',
			abstract: true,
			templateUrl: 'templates/menu.html',
			controller: 'AppController'
		})
            .state('app.form', {
                url: '/form',
                views: {
                    'menuContent': {
                        templateUrl: 'templates/form.html',
                        controller: 'FormController'
                    }
                }
            })
		.state('app.home', {
			url: '/home',
			views: {
				'menuContent': {
					templateUrl: 'templates/home.html',
					controller: 'HomeController'
				}
			}
		})
        .state('app.chat', {
            url: '/chat',
            views: {
                'menuContent': {
                    templateUrl: 'templates/chat.html',
                    controller: 'ChatController'
                }
            }
        })
        .state('app.lectures', {
            url: '/lectures',
            views: {
                'menuContent': {
                    templateUrl: 'templates/lectures.html',
                    controller: 'LecturesController'
                }
            }
        })

        .state('app.lecture', {
            url: '/lecture',
            views: {
                'menuContent': {
                    templateUrl: 'templates/lecture.html',
                    controller: 'LectureController'
                }
            }
        })
        
        .state('app.questions', {
            url:'/questions',
            views: {
                'menuContent': {
                    templateUrl: 'templates/quiz.html',
                    controller: 'QuizController'
               }
            }
        })
            
        .state('app.question', {
            url:'/question/:questionId',
            views: {
                'menuContent': {
                    templateUrl: 'templates/question.html',
                    controller: 'QuestionController'
                }
            }
        })
        
        .state('app.results', {
            url:'/results',
            views: {
               'menuContent': {
                    templateUrl: 'templates/results.html',
                    controller: 'ResultsController'
                }
            }
        })
        .state('app.experiment', {
            url: '/experiment',
            views: {
                'menuContent': {
                    templateUrl: 'templates/experiment.html',
                    controller: 'ExperimentController'
                }
            }
        })

		.state('app.slidebox', {
			url: '/slidebox',
			views: {
				'menuContent': {
					templateUrl: 'templates/slidebox.html',
					controller: 'SlideBoxController'
				}
			}
		})

		$urlRouterProvider.otherwise('/app/home');
	}
  );
