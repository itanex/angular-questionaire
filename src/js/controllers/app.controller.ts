namespace application.controllers{
    export class appController{
        public questions: string[] = [
            "During which experiences in your life have you felt most alive",
            "Do you ever have clairvoyant or out of body experiences",
            "Do you believe in the existence of extraterrestrial beings?"
        ];
        public title: string = "A metaphysical query";
        public scores: number[] = [0,0,0]
        public comments: string[] = ["","",""];
        public storageService: services.storageService;

        static $inject = ["storageService"]

        constructor(storageService: services.storageService){
            this.storageService = storageService;
        }
        
        public saveData(){
            this.storageService.saveToLocal(this.scores, this.comments);
        }

        public getScore(score: number, questionId: number){
            if(this.scores[questionId] == score){
                return true;
            }
            else{ 
                return false;
            }
        }    

        public setScore(score: number, questionId: number){
            this.scores[questionId] = score;
            console.log(`set question ${questionId} to ${score}`)
        }
    }
}       
