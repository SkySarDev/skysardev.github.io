const getRandomNumber = (min, max) => {
  return Math.floor(min + Math.random() * (max + 1 - min));
};

const showGameOver = (isShow = true) => {
  if (isShow) {
    gameOverTitle.classList.remove("hidden");
  } else {
    gameOverTitle.classList.add("hidden");
  }
};
