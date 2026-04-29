 // 各サービスページの見出し帯アニメーション

document.addEventListener("DOMContentLoaded", function() {
  const target = document.querySelector('#js-animation-start');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 画面内に入ったらクラスを付与してアニメーション開始
        entry.target.classList.add('is-active');
      }
    });
  }, { threshold: 0.2 }); // 20%見えたら発火

  if(target) observer.observe(target);
});