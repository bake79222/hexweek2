
// 1. 取得所有有 .sizecard class 的按鈕
const sizeCards = document.querySelectorAll('.sizecard');


// 2. 對每一個按鈕做監聽
sizeCards.forEach(function (card) {
    
    card.addEventListener('click', function () {
        // 3. 如果這個按鈕有 .lack，就不處理（缺貨不能點）
        if (card.classList.contains('lack')) {
        return; // 提前離開這次點擊處理
        }

        // 4. 先移除所有按鈕上的 active class
        sizeCards.forEach(function (c) {
        c.classList.remove('active'); // 移除所有 .active 樣式
        });

        // 5. 幫當前被點擊的這個按鈕加上 .active class
        card.classList.add('active'); // 顯示選中效果
    });
});


const favBtn = document.querySelector('.fav');

// 監聽點擊事件
favBtn.addEventListener('click', function (e) {
  e.preventDefault(); // 阻止跳轉

  // 切換 active 狀態
  favBtn.classList.toggle('active');

  // 取得裡面的 icon 和文字
  const icon = favBtn.querySelector('i');

  if (favBtn.classList.contains('active')) {
    //  加入收藏 → 換成實心愛心 + 改文字
    icon.classList.remove('fa-regular');
    icon.classList.add('fa-solid');
    favBtn.innerHTML = '<i class="fa-solid fa-heart"></i>已收藏';
  } else {
    // 取消收藏 → 換回空心愛心 + 改文字
    icon.classList.remove('fa-solid');
    icon.classList.add('fa-regular');
    favBtn.innerHTML = '<i class="fa-regular fa-heart"></i>加入最愛';
  }
});