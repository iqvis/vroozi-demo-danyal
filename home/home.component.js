function HomeController(){
    this.name = 'Danyal Shahid';
    this.updateName = function (event) {
        this.name = event.name;
    };
}

app.component('home', {
    controller: HomeController,
    templateUrl: 'home/home.html'
});