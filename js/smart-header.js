// フッター要素を取得（footerタグ、または特定のIDを指定）
const footer = document.querySelector('footer');
const header = document.querySelector('header');

// 監視の設定
const options = {
  root: null,
  rootMargin: '100px 0px 0px 0px', // ★ここで「手前」の距離を調整（100px手前で反応）
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // フッターが見えた（近づいた）ら隠す
      header.classList.add('header-hidden');
    } else {
      // フッターが離れたら表示する
      header.classList.remove('header-hidden');
    }
  });
}, options);

// 監視開始
if (footer) {
  observer.observe(footer);
}