function PostsListController(postsSvc){

}

app.component('postsList', {
    templateUrl: 'posts-list/posts-list.html',
    controller: PostsListController,
    controllerAs: 'vm',
    bindings: {
        posts: '<'
    }
})