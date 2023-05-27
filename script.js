// Select all the items
const items = document.querySelectorAll('.item');

items.forEach((item) => {
  item.addEventListener('click', () => {
    // Toggle the hidden box
    items.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
    })

    item.classList.toggle('active');
  })
});