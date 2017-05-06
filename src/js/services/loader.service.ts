namespace application.services{
    export class loaderService{


        static $inject = [
            '$http'
        ];

        constructor(private $http: ng.IHttpService){
        }
    }
}
