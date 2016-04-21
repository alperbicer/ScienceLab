angular.module('scienceLab.services', [])

.factory('QuizService', function () {
    
    var questions = [
                     {
                         id: 0, title: '0', text: 'Belirli bir hacmi olan bir madde için aşağıdakilerden hangisi söylenemez?', correct: false,
                         options: [
                                   { id: 0, text: 'Sıkıştırılabilir', answer: true },
                                   { id: 1, text: 'Belirli bir şekli yoktur', answer: false },
                                   { id: 2, text: 'Belirli bir şekli vardır', answer: false },
                                   { id: 3, text: 'Öteleme hareketi yapabilir', answer: false }
                         ] },
                     {
                         id: 1, title: '1', text: 'ıki bulut arasında elektron akışı sonucunda meydana gelen doğa olayı hangisidir?', correct: false,
                         options: [
                                   { id: 0, text: 'şimşek', answer: true },
                                   { id: 1, text: 'Yıldırım', answer: false },
                                   { id: 2, text: 'Gök kuşağı', answer: false },
                                   { id: 3, text: 'Topraklama', answer: false }
                         ]},

                     {
                         id: 2, title: '2', text: 'Aşağıdaki maddelerden hangisinde aynı cins atomlar yer almaz?', correct: false,
                         options: [
                                   { id: 0, text: 'Yağlar', answer: true },
                                   { id: 1, text: 'Oksijen', answer: false },
                                   { id: 2, text: 'Gümüş', answer: false },
                                   { id: 3, text: 'Hidrojen', answer: false }
                         ]},
                          
                     {
                         id: 3, title: '3', text: 'Katı, sıvı, gaz maddelerinin hepsinde bulunan ortak özellik aşağıdakilerden hangisidir?', correct: false,
                         options: [
                                   { id: 0, text: 'Sıkıştırabilmesi', answer: false },
                                   { id: 1, text: 'Atom yada moleküllerden oluşması', answer: true },
                                   { id: 2, text: 'Bulundukları ortama yayılmaları', answer: false },
                                   { id: 3, text: 'Akışkan olmaları', answer: false }
                         ]
                     },
                     {
                         id: 4, title: '4', text: 'Maddenin bölünemeyen en küçük yapı taşı hangisidir?', correct: false,
                         options: [
                                   { id: 0, text: 'Bileşik', answer: false },
                                   { id: 1, text: 'Element', answer: false },
                                   { id: 2, text: 'Molekül', answer: false },
                                   { id: 3, text: 'Atom', answer: true }
                         ]
                     },
                     {
                         id: 5, title: '5', text: 'Aşağıdakilerden hangisinde su molekülleri diğerlerine göre düzensizdir?', correct: false,
                         options: [
                                   { id: 0, text: 'Tuzlu su', answer: false },
                                   { id: 1, text: 'Sıvı su', answer: false },
                                   { id: 2, text: 'Su buharı', answer: true },
                                   { id: 3, text: 'Buz', answer: false }
                         ]
                     },
                     {
                         id: 6, title: '6', text: 'Aşağıda verilen madde özelilklerinden hangileri sadece gaz hale aittir?', correct: false, 
                         options: [
                                   { id: 0, text: 'Bulunduğu kabın şeklini alır.', answer: false },
                                   { id: 1, text: 'Akışkandır', answer: false },
                                   { id: 2, text: 'Sıkıştırılabilir', answer: true },
                                   { id: 3, text: 'Tanecikli yapıdadır.', answer: false }
                         ]
                     },
                     {
                         id: 7, title: '7', text: 'Aşağıdakilerden hangisi diğerlerine göre en küçüktür?', correct: false,
                         options: [
                                   { id: 0, text: 'Atom', answer: true },
                                   { id: 1, text: 'Organel', answer: false },
                                   { id: 2, text: 'Hücre çekirdeği', answer: false },
                                   { id: 3, text: 'Hücre', answer: false }
                         ]
                     },
                     {
                         id: 8, title: '8', text: 'Aşağıdaki maddelerden hangisinin tanecikleri öteleme hareketi yapar?', correct: false,
                         options: [
                                   { id: 0, text: 'Demir', answer: false },
                                   { id: 1, text: 'Tahta', answer: false },
                                   { id: 2, text: 'Su', answer: true },
                                   { id: 3, text: 'Taş', answer: false }
                         ]
                     },
                     {
                         id: 9, title: '9', text: 'Aşağıdakilerden hangisinde moleküllerin hızı yavaşlar?', correct: false,
                         options: [
                                   { id: 0, text: 'Eriyen bir buz parçası', answer: false },
                                   { id: 1, text: 'Kaloriferin yanındaki hava', answer: false },
                                   { id: 2, text: 'Soğuk bir günde balkona konan su', answer: true },
                                   { id: 3, text: 'Ocağa koyulan çaydanlık', answer: false }
                         ]
                     },
    ];
         
    return {
        all: function () {
            return questions;
        },
        get: function (questionId) {
            return questions[ questionId ];
        },
        mark: function (questionId, isCorrect) {
            questions[ questionId ].correct = isCorrect;
        },
        getNumberOfCorrectAnswers: function () {
            var total = 0,
            question;
            for (var i = 0; i < questions.length; i++) {
                question = questions[i];
                if (question.correct) {
                    total++;
                }
            }
            return total;
        },
        reset: function ( ){
            for (var i = 0; i < questions.length; i++) {
                questions[i].correct = false;
            }
        }
    }
})
		 
		 .factory('Chats', function() {
  var chats = [{
    id: 1,
    name: 'John Doe',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  },
  {
    id: 2,
    name: 'John Doe',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'John Doe',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }
  ];
  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});

