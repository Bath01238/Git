document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const Username = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value.trim();
  const phone = document.getElementById("phone").value.trim();

  const body = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0A%0AMessage:%0A${message};`
  const mailtoLink =`mailto:donasambath75@gmail.com?subject=${encodeURIComponent(subject)}&body=${body};`
  window.location.href = mailtoLink;
});
