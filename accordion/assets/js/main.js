const accordionItems = document.querySelectorAll(".accordion_item");

accordionItems.forEach((accordionItem) => {
  const accordionButton = accordionItem.querySelector(".accordion-btn");
  const accordionContent = accordionItem.querySelector(".accordion-body");
  const plusIcon = accordionButton.querySelector(".fa-plus");
  const minusIcon = accordionButton.querySelector(".fa-minus");

  accordionContent.style.maxHeight = 0;

  accordionButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent the click event from reaching nested accordions

    const isActive = accordionItem.classList.contains("bg-data-white-smoke-color");

    closeAllAccordions(event); // Close all accordions before opening/closing

    if (!isActive) {
      accordionContent.classList.add("selected");
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 100 + "px";
      accordionItem.classList.add("bg-data-white-smoke-color");
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    } else {
      accordionContent.classList.remove("selected");
      accordionContent.style.maxHeight = "0px";
      accordionItem.classList.remove("bg-data-white-smoke-color");
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    }
  });
});

function closeAllAccordions(event) {
  accordionItems.forEach((item) => {
    const itemButton = item.querySelector(".accordion-btn");
    const itemContent = item.querySelector(".accordion-body");
    const itemPlusIcon = itemButton.querySelector(".fa-plus");
    const itemMinusIcon = itemButton.querySelector(".fa-minus");
    if (event.target.closest(".accordion_item").id != item.id && !checkIsParentNode(event, item)) {
      itemContent.classList.remove("selected");
      itemContent.style.maxHeight = "0px";
      item.classList.remove("bg-data-white-smoke-color");
      itemPlusIcon.style.display = "block";
      itemMinusIcon.style.display = "none";
    }
  });
}

function checkIsParentNode(event, item) {
  try {
    let parentNode = event.target.closest(".accordion_item").parentElement.closest(".accordion_item");
    if (parentNode && parentNode.id == item.id) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}