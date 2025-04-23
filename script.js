document.querySelectorAll(".collapsible").forEach(button => {
  button.addEventListener("click", function () {
    this.classList.toggle("active");
    const content = this.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  });
});

const modal = document.getElementById("modal");
const links = document.querySelectorAll(".modal-link");
const span = document.getElementsByClassName("close")[0];

links.forEach(link => {
  link.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "block";
  };
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const notifications = document.getElementById("notifications");
setTimeout(() => {
  const li = document.createElement("li");
  li.textContent = "New event: Astrophysics Guest Lecture on 30th April!";
  notifications.appendChild(li);
}, 3000);

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("form-response").innerText = "Thank you for contacting us! We'll get back to you shortly.";
  this.reset();
});
