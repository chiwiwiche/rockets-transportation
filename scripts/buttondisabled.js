function disableSubmit() {
    document.getElementById("submit").disabled = true;
    document.getElementById("submit").style.background="#a6a6a6";
    document.getElementById("submit").style.color="#262626";
   }
  
    function activateButton(element) {
  
        if(element.checked) {
          document.getElementById("submit").disabled = false;
          document.getElementById("submit").style.background="#2c95ff";
          document.getElementById("submit").style.color="#ffffff";
         }
         else  {
          document.getElementById("submit").disabled = true;
          document.getElementById("submit").style.background="#a6a6a6";
          document.getElementById("submit").style.color="#262626";
        }
  
    }