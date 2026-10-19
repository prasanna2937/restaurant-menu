// 1. FILTER BUTTONS (All / Veg / Non-Veg)
const filterButtons = document.querySelectorAll(".filter-btn");
const menuItems = document.querySelectorAll(".menu-item");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const filter = button.dataset.filter;

    filterButtons.forEach(function (b) {
      b.classList.remove("active");
    });
    button.classList.add("active");

    menuItems.forEach(function (item) {
      if (filter === "all" || item.dataset.type === filter) {
        item.classList.remove("d-none");
      } else {
        item.classList.add("d-none");
      }
    });
  });
});


// 2. MODAL: fill details from the clicked button
const modal = document.getElementById("itemModal");

modal.addEventListener("show.bs.modal", function (event) {
  const btn = event.relatedTarget;

  document.getElementById("modalTitle").textContent = btn.dataset.name;
  document.getElementById("modalDesc").textContent = btn.dataset.desc;
  document.getElementById("modalPrice").textContent = "₹" + btn.dataset.price;

  const typeBadge = document.getElementById("modalType");
  typeBadge.textContent = btn.dataset.type;
  typeBadge.className = "badge mb-2 " + (btn.dataset.type === "Veg" ? "bg-success" : "bg-danger");
});


// 3. CONTACT FORM: show thank you message
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("successMsg").classList.remove("d-none");
  event.target.reset();
});