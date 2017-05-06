namespace application{
    angular
        .module('app',[
            "LocalStorageModule"
        ])
        .controller('appController', controllers.appController)
        .service('storageService', services.storageService)
}
