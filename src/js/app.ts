namespace application{
    export class appController{
        public questions: models.question[] = [];
        public title: string = "";

        static $inject = []

        constructor(){}

    }


    angular
        .module('app',[])
            .controller('appController', appController)
}
