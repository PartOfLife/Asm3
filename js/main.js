document.addEventListener("DOMContentLoaded", function () {
  console.log("Document is fully loaded");
  /* Handle click event on submit button */
  document.querySelector(".btn-primary").addEventListener("click", function () {
    const emailInput = document.querySelector('input[type="email"]');
    const email = emailInput.value;
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(email)) {
      alert("Email không hợp lệ");
    } else {
      document.querySelector(".submit-container").classList.add("d-none");
      document
        .querySelector(".section-header-item-bg .info-container")
        .classList.remove("d-none");
    }
  });

  /* Handle click event on view more button */
  const skillCards = document.querySelectorAll(".shared-card");

  skillCards.forEach((card) => {
    const title = card.querySelector("h3");
    const sharedBox = card.querySelector(".shared-box");
    const viewMoreBtn = card.querySelector(".btn.btn-link");

    viewMoreBtn.addEventListener("click", function () {
      if (viewMoreBtn.textContent === "View more") {
        sharedBox.style.display = "block";
        viewMoreBtn.textContent = "View less";
      } else {
        sharedBox.style.display = "none";
        viewMoreBtn.textContent = "View more";
      }
    });

    sharedBox.style.display = "none";
  });
});
