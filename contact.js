document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // I know bro rigt now you already pull code. You need change these service and template to your service aand template id  
  emailjs.send("service_8prsy26", "template_0end7w6", templateParams)
    .then(function(response) {
       alert("Message sent successfully!");
       document.getElementById("contactForm").reset();
    }, function(error) {
       alert("Failed to send message. Please try again.");
       console.error("Error:", error);
    });
});
