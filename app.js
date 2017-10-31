var app = angular.module('angularDemo', ['ui.router']);
app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home',{
            url: '/',
            template: '<home></home>',
            controllerAs: 'hc'
        })
        .state('posts', {
            url: '/posts',
            template: '<ui-view></ui-view>'
        })
        .state('posts.incomplete', {
            url: '/incomplete',
            template: '<posts-list posts="vm.incompletePosts"></posts-list>',
            controllerAs: 'vm'
        })
        .state('posts.complete', {
            url: '/complete',
            template: '<posts-list posts="vm.completePosts"></posts-list>',
            controllerAs: 'vm'
        })
})
app.controller('mainCtrl', function (postsSvc) {
    postsSvc.getPosts().then(response =>{
        this.incompletePosts = response.data.splice(0, 50);
        this.completePosts = response.data;
    })
})

app.service('postsSvc', function ($http) {
    this.getPosts = function(){
        return $http.get('https://jsonplaceholder.typicode.com/posts');
    }
})