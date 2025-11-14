/* カーソルの位置で色が変化 */
const btn = document.querySelector('#flow-button-js');
btn.addEventListener('mousemove', (e) => {
  const rect = btn.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100; // カーソル位置を計算
  btn.style.backgroundPosition = `${x}% 0`; // 背景の位置を動的に変更
});
btn.addEventListener('mouseleave', () => {
  btn.style.backgroundPosition = '0% 0'; // 元の位置に戻す
});

