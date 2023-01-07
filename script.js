let index = 0;
let carouselItems = document.querySelectorAll("ul li");

function goNext() {
  if (index === carouselItems.length - 1) {
    index = 0;
  } else {
    index++;
  }

  carouselItems[index].scrollIntoView({ behavior: "auto" });
}

function goBack() {
  if (index === 0) {
    index = carouselItems.length - 1;
  } else {
    index--;
  }

  carouselItems[index].scrollIntoView({ behavior: "auto" });
} 