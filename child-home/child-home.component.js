function childHomeController(){
    var self = this;

    self.$onChanges = function (changes) {
        self.name = angular.copy(changes.name.currentValue);
    };

    self.updateData = function () {
        self.onUpdate({
            $event: {
                name: self.name
            }
        });
    };
}
app.component('childHome', {
    bindings: {
        name: '<',
        onUpdate: '&'
    },
    controller: childHomeController,
    templateUrl: 'child-home/child-home.html'
});