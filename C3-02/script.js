/* クリックで変化 */
const btn = document.querySelector('#fade-button-js');
btn.addEventListener('click', () => {
  btn.style.backgroundColor = '#05b'; // クリック時の背景色
  setTimeout(() => {
    btn.style.backgroundColor = '#07f'; // 元の色に戻す
  }, 500); // 0.5秒後に色を戻す
});

/* ランダムに変化 */
const btnRandom = document.querySelector('#fade-button-random');
btnRandom.addEventListener('click', () => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  btnRandom.style.backgroundColor = randomColor;
});