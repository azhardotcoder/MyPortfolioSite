function sendMail(e){
    e.preventDefault()
let name = document.querySelector('#name-inp').value
let email = document.querySelector('#email-inp').value;
let message = document.querySelector('#message-inp').value;
let sendbtn = document.querySelector('#btn-inp');


   if((name && email && message) == "") {
        console.log("Sab khali hai");
        return
   }

    console.log({name, email, message});
    console.log(e);
    
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "nervouspike@justzeus.com",
        Password : "C8AE84B95AB2D27F4B626BBC497383B11873",
        To : 'azar123khan456@gmail.com',
        From : "azhar.khan358113@gmail.com",
        Subject : "This is the subject",
        Body : `username=${name} email=${email} ${message}`
    }).then(message=> console.log(message)).catch(err=> console.log(err));
}