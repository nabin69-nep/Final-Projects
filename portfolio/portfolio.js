const btn=document.querySelector("#button");
if(!btn==""){
btn.addEventListener("click",()=>{
    window.location.href="about.html";
});
}
const btn1=document.querySelector("#btn");
if(!btn1==""){
btn1.addEventListener("click",()=>{
    window.location.href="contact.html";
});
}
// form validation
const form = document.querySelector("#form");
const name = document.querySelector("#name");
const email = document.querySelector("#e_mail");
const subject = document.querySelector("#subject");
const msg = document.querySelector("#msg");
form.addEventListener("submit",(e)=>{
    if(name.value==""|| name.value ==null){
        e.preventDefault();
        document.querySelector("#name_error").innerText="Empty Name";
    }
    else{
        document.querySelector("#name_error").innerText="";
    }
    if(subject.value==""|| msg.value== null){
        e.preventDefault();
        document.querySelector("#sub_error").innerText="Empty Subject";
    }
    else{
        document.querySelector("#sub_error").innerText="";
    }
    if(msg.value==""|| msg.value== null){
        e.preventDefault();
        document.querySelector("#msg_error").innerText="Empty Message";
    }
    else{
        document.querySelector("#msg_error").innerText="";
    }
        let email_check=/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    if(!email.value.match(email_check)){
        e.preventDefault();
        document.querySelector("#email_error").innerText="Valid email requried";
    }
    else{
        document.querySelector("#email_error").innerText="";
    }
});
