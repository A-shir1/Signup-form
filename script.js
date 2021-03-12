var button = document.getElementById("butt2");
var textFields = document.getElementsByClassName("textfield");
var errorMessages = document.getElementsByClassName("errormessage");

button.addEventListener("click", function(){
      for(var i = 0; i < textFields.length; i++){
            var field = textFields[i];
            var eMsg = errorMessages[i];
            if (field.value === ""){
                  eMsg.classList.remove("invisible");
                  field.classList.add("err");
            }
      }
});