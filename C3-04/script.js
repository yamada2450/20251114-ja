const likeButton = document.querySelector('.like-button-js');

likeButton.addEventListener('click', () => {
  if (likeButton.classList.contains('liked')) {
    // すでに押している場合は元に戻す
    likeButton.classList.remove('liked');
    likeButton.textContent = '👍 いいね！';
  } else {
    // 押していない場合は押し込み状態にする
    likeButton.classList.add('liked');
    likeButton.textContent = '👍 いいね済み';
  }
});