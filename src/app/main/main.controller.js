'use strict';

angular.module('turtle')
  .controller('MainCtrl', function ($scope, $rootScope, $state) {
    $rootScope.kitchen = [
      {
        'title': 'Bare Essentials Kit',
        'url': 'https://angularjs.org/',
        'description': 'High quality essentials.',
        'logo': 'lynx.jpg',
        'stars': [1,2,3,4],
        'items':[
          'Fairy Liquid',
          'Sponges',
          'Bovril',
          'Finish',
          'PG Tips'
        ],
        'brief': 'The Bare Essentials kit contains all the essentials for a healthy kitchen. I\'ve lived as a student for three years and I believe I\'ve optimised my products to create the perfect balance between cost and effectivenes. It\'s the perfect frugal kitchen kit.'

      },
      {
        'title': 'The Student Pack',
        'url': 'http://browsersync.io/',
        'description': 'This kit brings you essentials on a budget. No frills.',
        'logo': 'lynx.jpg',
        'stars': [1,2,3,4,5],
        'items':[
          'Fairy Liquid',
          'Sponges',
          'Bovril',
          'Finish',
          'PG Tips'
        ],
        'brief': 'The Student pack contains all the essentials for a healthy kitchen. I\'ve lived as a student for three years and I believe I\'ve optimised my products to create the perfect balance between cost and effectivenes. It\'s the perfect frugal kitchen kit.'

      },
      {
        'title': 'Steve\'s Kit',
        'url': 'http://gulpjs.com/',
        'description': 'This is the kit i use at home. works well for me.',
        'logo': 'lynx.jpg',
        'stars': [1,2,3],
        'items':[
          'Fairy Liquid',
          'Sponges',
          'Bovril',
          'Finish',
          'PG Tips'
        ],
        'brief': 'Steve\s kit contains all the essentials for a healthy kitchen. I\'ve lived as a student for three years and I believe I\'ve optimised my products to create the perfect balance between cost and effectivenes. It\'s the perfect frugal kitchen kit.'

      }
    ];

    $rootScope.bathroom = [
      {
        'title': 'Porecelin Throne Kit',
        'url': 'http://jasmine.github.io/',
        'description': 'The most luxurious.',
        'logo': 'radox.jpg',
        'stars': [1,2,3,4,5]
      },
      {
        'title': 'Ultimate Bathroom Kit',
        'url': 'http://karma-runner.github.io/',
        'description': 'Spectacular Test Runner for JavaScript.',
        'logo': 'radox.jpg',
        'stars': [1,2,3,4]
      },
      {
        'title': 'The Student Pack',
        'url': 'https://github.com/angular/protractor',
        'description': 'End to end test framework for AngularJS applications built on top of WebDriverJS.',
        'logo': 'radox.jpg',
        'stars': [1,2,3,4,5]
      }
    ];

    $rootScope.home = [
      {
        'title': 'Royal Suite Kit',
        'url': 'http://getbootstrap.com/',
        'description': 'Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.',
        'logo': 'lynx.jpg',
        'stars': [1,2,3]
      },
      {
        'title': 'Fresh and Clean',
        'url': 'http://angular-ui.github.io/bootstrap/',
        'description': 'Bootstrap components written in pure AngularJS by the AngularUI Team.',
        'logo': 'lynx.jpg',
        'stars': [1,2,3,4]
      },
      {
        'title': 'The Bachelor Pack',
        'url': 'https://github.com/sass/node-sass',
        'description': 'Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.',
        'logo': 'lynx.jpg',
        'stars': [1,2]
      }
    ];


    $scope.goToList = function(listTitle){
      $state.go('list', {listName: encodeURIComponent(angular.toJson(listTitle))});
    };

    angular.forEach($scope.awesomeThings, function(awesomeThing) {
      awesomeThing.rank = Math.random();
    });
  });
