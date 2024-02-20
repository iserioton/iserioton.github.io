(function () {
  var is_light_mode = false;
  document.querySelector(".theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    is_light_mode = !is_light_mode;
  });
  new kursor({
    type: 1,
    removeDefaultCursor: true,
    color: "#B3F1D0",
  });
})();
