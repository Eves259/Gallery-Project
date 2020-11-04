function dark() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

function password() {
    var code = document.getElementById("myInput");
    if (code.type === "password") {
        code.type="text";   
    }else{
    code.type = "password";
    }
}

function onSubmit() {
if (document.getElementById('myInput').value == 'Hollywoo') {window.location.href='index(2).html'; }else{ alert('Try again. Hint: What the Hollywood sign says now'); }
}
