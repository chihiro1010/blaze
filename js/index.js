document.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("animation-in-progress");

  setTimeout(function () {
    document.body.classList.remove("animation-in-progress");
  }, 10000); // アニメーションの時間（10秒）に合わせて調整
});
