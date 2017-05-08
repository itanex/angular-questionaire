namespace application.controllers{
    export class appController{
        public questions: string[] = [
            "During which experiences in your life have you felt most alive",
            "Do you ever have clairvoyant or out of body experiences",
            "Do you believe in the existence of extraterrestrial beings?"
        ];
        public title: string = "A metaphysical query";
        public answers: models.answer[]= [];

        static $inject = ["storageService"]

        constructor(public storageService: services.storageService){
            this.storageService = storageService;
            this.answers = this.storageService.pullLocal();
            console.log(this.answers);
        }
        
        public saveData(){
            this.storageService.saveToLocal(this.answers);
        }

        public getScore(score: number, questionId: number){
            if(this.answers[questionId].score == score){
                return true;
            }
            else{ 
                return false;
            }
        }    

        public setScore(score: number, questionId: number){
            this.answers[questionId].score = score;
        }
    }
}       
