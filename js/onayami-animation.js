// お悩み切り替えアニメーション（修正版）
const troubleData = [
  { text: "SNSだけじゃ認知度が上がらない...自分のサイトを作りたいけど、いくらかかる？", pos: "pos-0" },
  { text: "作品の世界観に合ったオンラインショップを開いて、もっとファンを増やしたい！", pos: "pos-1" },
  { text: "そろそろホームページを変えないと「時代遅れの企業」に見えてしまう...", pos: "pos-2" },
  { text: "ノーコードは全然上手くいかなくて...結局インスタでお知らせを流してるだけ...", pos: "pos-3" }
];

let troubleIndex = 0; // 0からスタート

function updateTroubleSlide() {
  const troubleUsers = document.querySelectorAll('.p-trouble__user-item');
  const troubleBubble = document.getElementById('js-trouble-bubble');
  const troubleText = document.getElementById('js-trouble-text');

  if (!troubleBubble || !troubleText || troubleUsers.length === 0) return;

  // 1. 次のインデックスに進める（最初は0のまま、2回目以降で進むように制御）
  // 4秒経つごとにインデックスを 0 -> 1 -> 2 -> 3 -> 0 と回す
  troubleIndex = (troubleIndex + 1) % troubleData.length;

  // 2. 全員のactiveを一旦消す
  troubleUsers.forEach(item => item.classList.remove('active'));
  
  // 3. 該当するユーザーをactiveにする
  troubleUsers[troubleIndex].classList.add('active');
  
  // 4. テキストをフェードアウト
  troubleText.style.opacity = 0;
  
  // 5. 少し遅らせてテキストと突起の位置を更新
  setTimeout(() => {
    troubleText.textContent = troubleData[troubleIndex].text;
    
    // クラス名を「p-trouble__bubble pos-X」の形に完全上書きしてズレを防止
    troubleBubble.className = `p-trouble__bubble ${troubleData[troubleIndex].pos}`;
    
    troubleText.style.opacity = 1;
  }, 300);
}

// 4秒ごとに実行
setInterval(updateTroubleSlide, 4000);