// TOPに戻るボタンの表示制御
window.addEventListener('scroll', function() {
  const topBtn = document.querySelector('.top-btn');
  const scroll = window.scrollY; // 現在のスクロール量を取得

  if (scroll > 300) { // 300px以上スクロールしたら
    topBtn.classList.add('is-show');
  } else {
    topBtn.classList.remove('is-show');
  }
});

// ボタンをクリックした時にスムーズに上に戻る（念のため）
document.querySelector('.top-btn').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});