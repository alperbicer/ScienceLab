angular.module('scienceLab.controllers', [])

    .controller('QuizController', function ($scope, $log, QuizService) {
            // "QuizService" is a service returning mock data
            $scope.questions = QuizService.all();
            })

    .controller('QuestionController', function ($scope, $log, $stateParams, $ionicModal, QuizService) {
            
            $scope.test = "test";
            
            $scope.question = QuizService.get($stateParams.questionId);
            
            $scope.numberOfQuestions = QuizService.all().length;
            
            $scope.modal;
            // set to the default
            $scope.currentOption = -1;
           
            $scope.optionSelected = function (option) {
            
            $log.info("item: ", option.id);
            
            var correct = $scope.question.options[ option.id ].answer;
            
            $log.info("correct answer : " + correct);
           
            QuizService.mark($stateParams.questionId, correct);
            };
           
            $ionicModal.fromTemplateUrl('modal.html', function (modal) {
                                        
                $log.info('setting up the modal window!');
                                        
                $scope.modal = modal;
                                        
                }, {
                scope: $scope,
                animation: 'slide-in-up'
                });
            
            //Be sure to cleanup the modal
            $scope.$on('$destroy', function () {
                $scope.modal.remove();
                });
            })

    .controller('ResultsController', function ($scope, $log, $stateParams, $state, QuizService) {
            
            $scope.numberOfQuestions = QuizService.all().length;
            
            $scope.numberOfCorrectAnswers = QuizService.getNumberOfCorrectAnswers();
            
            $scope.reset = function () {
            
            QuizService.reset();
            
            $state.transitionTo('app.questions');
            };
            })

    .controller('AppController', function ($scope, $ionicModal, $ionicActionSheet, $timeout,$ionicPopup) {

		$ionicModal.fromTemplateUrl('templates/profile.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {
			$scope.profileModal = modal;
		});
            $scope.show = function() {
                
            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    { text: 'Log Out' }
                    ],
                titleText: 'Good Bye!',
                cancelText: 'Cancel',
                cancel: function() {
                },
                buttonClicked: function(index) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Log Out',
                    template: 'Your are now log out!'
                    });
                }
                });
                
            $timeout(function() {
                        hideSheet();
                        }, 8000);
            };
	})

	.controller('HomeController', function ($scope) {
	})

    .controller('LecturesController', function ($scope,$ionicPopup) {
        $scope.showAlert = function () {
            var alertPopup = $ionicPopup.alert({
                title: 'Not Ready!',
                template: 'Coming Soon!'
            });
        };
    })
    .controller('LectureController', function ($scope, $ionicPopup) {
        $scope.showAlert = function () {
            var alertPopup = $ionicPopup.alert({
                title: 'Not Ready!',
                template: 'Coming Soon!'
            });
        };
    })

	.controller('ListController', function ($scope) {
		var items = [];
		for (var i = 0; i <= 30; i++) {
			items[i] = i;
		}
		$scope.items = items;
	})

	.controller('FormController', function ($scope, $ionicPopup) {
        $scope.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
            title: 'Welcome',
            template: 'You are now sign in!'
        });
        confirmPopup.then(function(res) {
            if (res) {
            console.log('You are sure');
            } else {
            console.log('You are not sure');
            }
            });
        };
	})

	.controller('SlideBoxController', function ($scope) {
	})

    .controller('ChatController', function ($scope, Chats) {
        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
    })
    .controller('ExperimentController', function ($scope, $ionicSlideBoxDelegate) {
        $scope.nextSlide = function () {
            $ionicSlideBoxDelegate.next();
        };
        $scope.startSlide = function () {
            $ionicSlideBoxDelegate.currentIndex(1);
        };
        $scope.previousSlide = function () {
            $ionicSlideBoxDelegate.previous();
        };
        
    })


	

