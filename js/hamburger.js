const hamburger = document.getElementById('js-hamburger');
const nav = document.getElementById('js-nav');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active'); // ボタンの形を変える
    nav.classList.toggle('active');       // メニュを表示させる
});

// メニュー内のリンクをクリックしたらメニューを閉じる（ページ内リンク対策）
const navLinks = document.querySelectorAll('.grobal-nav a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    });
});