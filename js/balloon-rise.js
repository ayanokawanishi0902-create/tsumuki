// 吹き出しのライズ兄kメーション
// タグにjs-riseのクラスを付ける
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.js-rise');

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2 // 要素が20%見えたら実行
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // 一度表示されたら監視を止める
        observer.unobserve(entry.target);
      }
    });
  }, options);

  targets.forEach(target => {
    observer.observe(target);
  });
});