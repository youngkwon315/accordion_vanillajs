const container = document.querySelector(".container");
const accordion = document.querySelectorAll(".accordion");

//click event
container.addEventListener("click", (e) => {
  const id = e.target.dataset.id;

  if (id) {
    const element = document.getElementById(id);
    element.classList.toggle("active");
  }
});
