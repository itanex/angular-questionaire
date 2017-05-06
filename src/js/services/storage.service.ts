namespace application.services{
    export class storageService{
        public localStorageService;

        static $inject = [
            'localStorageService'
        ]
        
        constructor(localStorageService){
            this.localStorageService = localStorageService;
        }
        
        public saveToLocal(scores: number[], comments: string[]){
            let that = this;
            for(var i=0; i<scores.length; i++){
                that.localStorageService.set(`question${i}score`, scores[i])
                that.localStorageService.set(`question${i}comment`, comments[i])
            }
        }
    }
}
