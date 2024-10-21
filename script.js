function callStack () {
    document.getElementById("clickOk").addEventListener(
        "click",
        () => {
          document.getElementById("mainPage").hidden = false;
        },
        true,
      );
}

function contactClick () {
  alert("Here is the contact 99949399 and nameme@mail.com")
}

window.onload = callStack;
var isActive = true;

function redirectPage (){ 
    // Redirect this to another page 

    alert("Hello this is the website of: ");
    /*if (!isActive) {
        window.redirectPage('index.html')
    }*/
}