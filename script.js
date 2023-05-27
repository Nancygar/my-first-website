const items = document.querySelectorAll(".item");

items.forEach((item) => {
  item.addEventListener("click", (e) => {
    const itemClicked = e.currentTarget;
    const itemOpen = document.querySelector(".active");

    if (itemClicked === itemOpen) {
      itemClicked.classList.remove("active");
    } else {
      if (itemOpen) {
        itemOpen.classList.remove("active");
      }
      itemClicked.classList.add("active");
    }
  });
});
