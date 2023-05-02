const arrow = document.querySelectorAll(".arrow");
const movielists = document.querySelectorAll(".movie-list");

arrow.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movielists[i].querySelectorAll("img").length;
  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter)>= 0) {
      movielists[i].style.transform = `translateX(${
        movielists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movielists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.profile-text-container span,.movie-list-filter select:hover,.profile-text-container span:hover,.profile-text-container i,.navbar,.sidebar,.sidebar i,.sidebar i:hover,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});
