
document.getElementById("no-match-notify").style.display = "none"; 
document.getElementById("match-notify").style.display = "none"; 

let randomNumber = 0;


const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", function(){

    document.getElementById("submitDisplay").value = "";
    submitDisplayInput ="";
    randomNumber = Math.floor(1000 + (Math.random() * 9000));
    document.getElementById("randomNumberDisplay").value = randomNumber;
 
});


let submitDisplayInput ="";

function numberClicked(buttonNumber){
    const button = document.getElementById(buttonNumber);
    button.addEventListener("click",function(){
        submitDisplayInput = submitDisplayInput.concat(buttonNumber);
        document.getElementById("submitDisplay").value = submitDisplayInput;
           
    });

}

numberClicked(7);
numberClicked(8);
numberClicked(9);
numberClicked(4);
numberClicked(5);
numberClicked(6);
numberClicked(1);
numberClicked(2);
numberClicked(3);
numberClicked(0);

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function(){

    if(randomNumber == parseInt(submitDisplayInput)){

        document.getElementById("match-notify").style.display = "block"; 
    }else{

        document.getElementById("match-notify").style.display = "none"; 
        document.getElementById("no-match-notify").style.display = "block"; 
        // 3 try left option
    }
    

});

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener("click",function(){

    document.getElementById("submitDisplay").value = "";
    submitDisplayInput ="";

});

