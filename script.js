const scriptURL = 'https://script.google.com/macros/s/AKfycbzqvCyclkAJ9Dhr0RoeLQXyK7kvp7ml3X3MyrjqRUJPFFeiRHnd8RFXx1EU9cpXo6G8/exec'

const form = document.forms['submit-to-google-sheet']
const msg=document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Thank You For Subscribing";
        setTimeout(function(){
            msg.innerHTML="";
        },5000);
        form.reset()

    })
    .catch(error => console.error('Error!', error.message))
});

