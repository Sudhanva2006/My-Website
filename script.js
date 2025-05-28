// Interactive cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// Optional magnetic effect
document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(1.5)";
  });
  link.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
  });
});
