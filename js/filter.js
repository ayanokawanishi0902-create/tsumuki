// 実績一覧のカテゴリー絞り込みJS

document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll('.term');
  const items = document.querySelectorAll('.work-item');

  targets.forEach(target => {
    target.addEventListener('click', () => {
      // 1. ボタンのactiveクラス付け替え
      targets.forEach(btn => btn.classList.remove('active'));
      target.classList.add('active');

      // 2. 絞り込みロジック
      const filter = target.dataset.term;

      items.forEach(item => {
        if (filter === 'all') {
          item.classList.remove('is-hide');
        } else {
          if (item.dataset.category === filter) {
            item.classList.remove('is-hide');
          } else {
            item.classList.add('is-hide');
          }
        }
      });
    });
  });
});