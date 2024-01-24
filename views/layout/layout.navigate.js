const navLinks = document.querySelectorAll(".nav_list a");
const iframe = document.querySelector("iframe");

navLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");
    iframe.src = href;
  });
});
