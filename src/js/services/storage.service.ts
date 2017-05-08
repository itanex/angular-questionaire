namespace application.services{
    export class storageService{
        public localStorageService;

        
        static $inject = [
            'localStorageService'
        ]
        
        constructor(localStorageService){
            this.localStorageService = localStorageService;
        }
        
        public saveToLocal(answers: models.answer[]){
            let that = this;
            that.localStorageService.set(`answers`,JSON.stringify(answers));
        }

        public pullLocal(): models.answer[]{
            let c: models.answer[] = [];
            c = JSON.parse(this.localStorageService.get("answers"));
            console.log(c)
            return c;
        }
    }
}
