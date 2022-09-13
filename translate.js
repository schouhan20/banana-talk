var btnTranslate = document.querySelector("#btn-translate")
var txtInput = document.querySelector("#txt-input")
var outputDiv = document.querySelector("#output")
 
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text ){
    return serverURL + "?" + "text" + text
}

function errorHandler(){
    console.log("error occured "+ error);
    alert("Something is wrong with the server. Please try again later")
}

function clickHandler() {
   outputDiv.innerText = txtInput.value;
   var inputText = txtInput.value;
    // calling the sv for processing
    fetch(getTrabsationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler) {
}
