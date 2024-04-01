const Name=window.prompt('Enter your name please?',"your name");
let gender =window.prompt("please enter your gender","male");
let age=parseInt(window.prompt("please enter your age"));;
do {

    if(age<=0 || isNaN(age)){
        age=window.prompt("please enter your  currect age more than zero ");
    }
      

}while(age<=0||isNaN(age))
let confirm=window.confirm('do you want to skip the welcoming message ? ');


if(!confirm){
    if(gender.startsWith('male')){
        window.alert(`welcom Mr ${Name} in  your Todo list !!`)
    }
    else if(gender.startsWith('female')){
         window.alert(`welcom Ms ${Name} in  your Todo list !!`)
    }
    else{
        window.alert(`welcom  ${Name} in  your Todo list !!`)
    }
}
// lab-6
function ListOfQuestion(){
    let KeyWordQuestion=['do you have a job?','are you a student?','are you married?']
    let AnswerOfQuestion=new Array();
    for (let i=0;i<3;i++){
        let Answer=window.prompt('please answer Yes or No to the flowing question \n '+KeyWordQuestion[i]);
        if (Answer.toLowerCase()=='yes' ||Answer.toLowerCase()=='no'){
        AnswerOfQuestion.push(Answer);
        }
        else{
            AnswerOfQuestion.push('invalid');
        }
        

    }
    return AnswerOfQuestion

}
let answer= ListOfQuestion();

function printAnswers(){

 for(let i=0;i<answer.length;i++){
    console.log(`answer ${i}: ${answer[i]}`);
 }
}

printAnswers();