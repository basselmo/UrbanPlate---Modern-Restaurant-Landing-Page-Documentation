document.addEventListener("DOMContentLoaded", () => {
  // ---  Mobile Navigation ---
  const mobileToggle = document.querySelector(".mobile-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".nav-links a");

  if (mobileToggle && mainNav) {
    mobileToggle.addEventListener("click", () => {
      mainNav.classList.toggle("active");
      mobileToggle.classList.toggle("is-active");
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav?.classList.remove("active");
      mobileToggle?.classList.remove("is-active");
    });
  });

  // ---  Sticky Header ---
  const header = document.querySelector(".main-header");

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 80) {
        header.classList.add("header-scrolled");
      } else {
        header.classList.remove("header-scrolled");
      }
    },
    { passive: true },
  );

  // ---  Menu Filter ---
  const tabBtns = document.querySelectorAll(".tab-btn");
  const menuItems = document.querySelectorAll(".menu-item");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentActive = document.querySelector(".tab-btn.active");
      if (currentActive) currentActive.classList.remove("active");
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      menuItems.forEach((item) => {
        const category = item.getAttribute("data-category");

        if (filter === "all" || filter === category) {
          item.style.display = "block";

          requestAnimationFrame(() => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
          });
        } else {
          item.style.opacity = "0";
          item.style.transform = "translateY(20px)";
          setTimeout(() => {
            item.style.display = "none";
          }, 300);
        }
      });
    });
  });

  // ---  Form Validation ---
  const bookingForm = document.querySelector(".booking-form");

  if (bookingForm) {
    bookingForm.addEventListener("submit", async (e) => {
      e.preventDefault(); // منع الصفحة من إعادة التحميل

      const data = new FormData(bookingForm);
      const response = await fetch(bookingForm.action, {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Thank you! Your reservation has been sent to our team.");
        bookingForm.reset();
      } else {
        alert("Oops! There was a problem submitting your reservation.");
      }
    });
  }
  // ---  Add to Cart & Cart Counter Logic ---

  let cartCount = 0;
  const cartBadge = document.querySelector(".cart-badge");
  const addToCartBtns = document.querySelectorAll(".add-to-cart");

  addToCartBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      cartCount++;
      if (cartBadge) {
        cartBadge.textContent = cartCount;
        cartBadge.classList.add("bump");
        setTimeout(() => cartBadge.classList.remove("bump"), 300);
      }

      const originalContent = this.innerHTML;
      this.innerHTML = '<i class="fas fa-check"></i> Added';
      this.classList.add("btn-success");
      this.style.pointerEvents = "none";

      setTimeout(() => {
        this.innerHTML = originalContent;
        this.classList.remove("btn-success");
        this.style.pointerEvents = "auto";
      }, 1500);
    });
  });
});
