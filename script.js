var button = document.getElementById("butt2");
var textFields = document.getElementsByClassName("textfield");
var errorMessages = document.getElementsByClassName("errormessage");
var errorSigns = document.getElementsByTagName("i");
var textBoxes = document.getElementsByClassName("textbox");
var emailBox = document.getElementById("emailbox");

button.addEventListener("click", function(){
      for(var i = 0; i < textFields.length; i++){
            var field = textFields[i];
            var eMsg = errorMessages[i];
            var box = textBoxes[i];
            var sign = errorSigns[i];
            if (field.value === ""){
                  sign.classList.remove("invisible");
                  eMsg.classList.remove("invisible");
                  box.classList.add("err");
                  emailBox.classList.add("custom-placeholder");
            }
            else{
                  sign.classList.add("invisible");
                  eMsg.classList.add("invisible");
                  box.classList.remove("err");
                  emailBox.classList.add("custom-placeholder");
            }
      }
});
