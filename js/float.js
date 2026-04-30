document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".service-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // 1回だけ発動
        }
      });
    },
    {
      threshold: 0.05
    }
  );

  items.forEach(item => observer.observe(item));
});

