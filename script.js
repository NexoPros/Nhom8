document.addEventListener("DOMContentLoaded", function () {
  // Elements to animate
  const elements = [
    document.querySelector(".profile-info"),
    document.querySelector(".profile-sidebar"),
    document.querySelector(".profile-main"),
  ];

  // Add animation class with delay
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("animate-in");
    }, 200 * index);
  });

  // Portfolio hover effect enhancement
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  portfolioItems.forEach((item) => {
    item.addEventListener("click", function () {
      // This could be expanded to show a modal with project details
      alert("Project details would open here");
    });
  });

  // Follow button functionality
  const followBtn = document.querySelector(".secondary-btn");
  followBtn.addEventListener("click", function () {
    if (this.innerHTML.includes("Follow")) {
      this.innerHTML = "<i>✓</i> Following";
      this.style.backgroundColor = "#e6f0ff";
      this.style.color = "var(--primary-color)";
    } else {
      this.innerHTML = "<i>+</i> Follow";
      this.style.backgroundColor = "#fff";
      this.style.color = "var(--text-color)";
    }
  });

  // Stats counter animation
  const statsValues = document.querySelectorAll(".stat-value");

  statsValues.forEach((stat) => {
    const finalValue = stat.textContent;
    const isK = finalValue.includes("k");
    let value = parseInt(finalValue.replace("k", ""));

    // Start from zero
    stat.textContent = "0";

    let startValue = 0;
    let duration = 1000;
    let increment = value / (duration / 20);

    if (isK) {
      increment = value / (duration / 30);
    }

    const updateCounter = () => {
      startValue += increment;

      if (startValue < value) {
        stat.textContent = isK
          ? Math.floor(startValue) + "k"
          : Math.floor(startValue);
        setTimeout(updateCounter, 20);
      } else {
        stat.textContent = finalValue;
      }
    };

    setTimeout(() => {
      updateCounter();
    }, 500);
  });
});
