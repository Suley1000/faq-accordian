const accordian = document.getElementsByClassName("item");

console.log(accordian);

for (i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}
