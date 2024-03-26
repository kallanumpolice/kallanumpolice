
function sendOTP() {
    const email=document.getElementById('email');
    const otpverify=document.getElementsByClassName('otpverify')[0];

let otp_val=Math.floor(Math.random() * 10000);
let emailbody=`<h2>Your OTP is</h2> ${otp_val}`;        
Email.send({
SecureToken : "c2865b05-915c-49be-9caa-08ccbee70216",
To : email.value,
From : "kallanpoliceotp9@gmail.com",
Subject : "OTP for email verification",
Body : emailbody,
}).then(
    message => {
    if(message === "OK"){
    alert("OTP sent to your email" + email.value);

    otpverify.style.display="flex";
    const otp_inp= document.getElementById('otp-inp');
    const otp_btn= document.getElementById('otp-btn');

    otp_btn.addEventListener('click', ()=>{
        if (otp_inp.value == otp_val){
            alert("Email address verified...");
            if (message === "OK"){
                otpverify.style.display="none";
            }
        }
        else{
            alert("Invalid OTP");
        }
    })
}
}
);
}