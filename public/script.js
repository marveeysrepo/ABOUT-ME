
const nav = document.querySelector('nav');
const setDate = document.querySelector("#date");
const closetoggle = document.querySelector("#closeBtn");
setDate.setAttribute("class", "setDate");
const toggleBtn = document.querySelector("#toggleBtn");

/* open nav toggle */
toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("show"); /* toggle add/remove class */ 
})

/* close nav toggle */
closetoggle.addEventListener("click", () => {
    nav.classList.remove("show")
});

/* date */
function newDate() {
    const now = new Date();
const time = now.toLocaleTimeString();
const date = now.toLocaleDateString();
    setDate.textContent = `${date} ${time}`;
}
setInterval(newDate, 1000);

/* Form Submission logic */
//select  form and response element
const form = document.querySelector("#contactForm"); const responseMessage = document.querySelector("#responseMessage");

//add event listener to form
form.addEventListener("submit", async (e) => {
    e.preventDefault();
    // prepare form data
    const formData = new FormData(form); /* new FormData(form) create  obj & collect input fields values */
    const data = Object.fromEntries(formData.entries());/* conver formdata to plain JS to send as json */
   try {
     //Make the fetch API call
    const response = await fetch(form.action, {
        // form action url is used as destination "/submitForm in HTML"
        // fetch() send request to server
        // await pause execution until server respond
        method: 'POST', /* specify that its a post request being made */
        headers: {
            'Content-type': 'application/json' /* tell server that data is sent in json format */
        },
        body: JSON.stringify(data)  /* convert JS data to string that can be used by json*/
    });
    // handling of server response! 
       const result = await response.json(); /* parse server json response into JS as object */
       responseMessage.classList.remove("error", "success") /* remove any existing classes */

       if (response.ok) { /* response.ok return true if the server went through */
           responseMessage.classList.add("success");
           responseMessage.textContent = "🥳🎉🎉Thank you! Message sent successfully.";
           form.reset();/* If the response is ok parse successs message and reset form */
       } else {
           responseMessage.classList.add("error")
           responseMessage.textContent = result.message || "Something went wrong! Please try again soon 😥"; /* if code is wrong notify user of the error*/
}
   } catch (error) {
       console.error('Submission Error:', error); /* catch the error message and send it to the console */         responseMessage.classList.remove("success", "error");
       responseMessage.classList.add("error")
       responseMessage.textContent = 'Something went wrong, Please check your network connection'; /* send user a response of failure */
    }
    responseMessage.style.display = "block";
})
