// Add to script.js
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});


document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  const imageContainer = document.querySelector(".image-scroll");
  const mainImage = document.getElementById("mainImage");

  let autoChange = true;

  // 🎞 Random background pool
  const imageFiles = [
    "./images/bg1.jpg", "./images/bg2.png", "./images/bg3.png", "./images/bumi big picture.png",
    "./images/bg4.png", "./images/bg5.png", "./images/bg6.png", "./images/DSC09971-1 copy.png",
    "./images/bg7.png", "./images/alacartzoom2.jpg", "./images/bg9.jpg", "./images/581A0054.JPG",
    "./images/DSC09738.jpg", "./images/inpraiseofshadowsss1.png"

  ];

  // 🔁 Randomly change background image
  function changeImage() {
    if (!autoChange || !mainImage) return;
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    mainImage.src = imageFiles[randomIndex];
  }

  // Run once at load + rotate every 1.5s
  changeImage();
  setInterval(changeImage, 1000);

  

  // 🧩 Grouped media per project
  const groupedImages = {
    1: [
      ["./images/bg1.jpg", "./images/DSC09738.jpg"],
      ["./images/bg9.jpg"],
      ["./images/DSC09742.jpg", "./images/DSC09773.jpg"],
      ["./images/DSC09777.jpg"],
      ["./images/DSC09756.jpg", "./images/DSC09779.jpg"],
      ["./images/DSC09768.jpg"]
    ],
    2: [
      ["./images/DSC09891-4 copy.png"],
      ["./images/DSC09899-1 copy.png", "./images/DSC09908-1 copy.png"],
      ["./images/DSC09917-1 copy.png"],
      ["./images/DSC09930-1 copy.png", "./images/DSC09944-1 copy.png"],
      ["./images/DSC09966-1 copy.png"],
      ["./images/DSC09971-1 copy.png"]
    ],
    3: [
      ["./images/bg2.png"],
      ["./images/alacart_walkthrough.gif"],
      ["./images/pyramidspread.png", "./images/alacartzoom2.jpg"],
      ["./images/alacartcovers.png"],
      ["./images/alacartzoom.png"]
    ],
    4: [
      ["./images/bg4.png"],
      ["./images/bumimask.png", "./images/bumiwordmark.png"],
      ["./images/introduction zoom.png"],
      ["./images/bumi walkthrough.gif"],
      ["./images/museum_signages.png"],
      ["./images/bumi big picture.png"]
    ],
    5: [
      ["./images/home.mp4"],
      ["./images/collection.mp4"],
      ["./images/shop.mp4"],
      ["./images/contact.mp4"]
    ],
    6: [
      ["./images/Aqura-Promo.mp4"],
      ["./images/Aquralogo.png"],
      ["./images/581A9968.jpg", "./images/sasha.mp4"],
      ["./images/jaq.mp4", "./images/581A0054.jpg"],
      ["./images/699A9945.jpg"],
      ["./images/Aquralogowordmark.png", "./images/bg5.png"]
    ],
    7: [
      ["./images/inpraise.mov"],
      ["./images/inpraiseofshadowsss1.png"],
      ["./images/in praised cropped vid.mp4"],
      ["./images/inpraiseofshadowsss2.png"],
      ["./images/bg6.png"]
    ]
  };

  // 🎨 Helper: create image or video element
  function createMediaElement(src) {
    const isVideo = src.match(/\.(mp4|mov|webm)$/i);
    const el = document.createElement(isVideo ? "video" : "img");

    if (isVideo) {
      Object.assign(el, {
        src,
        autoplay: true,
        loop: true,
        muted: true,
        playsInline: true
      });
    } else {
      el.src = src;
      el.alt = "portfolio media";
      el.loading = "lazy";
    }

    el.classList.add("media-item");
    return el;
  }

  // 🖱 Click handling for each item
  items.forEach(item => {
    item.addEventListener("click", () => {
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      autoChange = false;

      imageContainer.classList.add("scrollable");
      imageContainer.innerHTML = "";

      const index = Number(item.dataset.index);
      const imageGroups = groupedImages[index];

      if (imageGroups?.length) {
        imageGroups.forEach(group => {
          if (group.length === 1) {
            imageContainer.appendChild(createMediaElement(group[0]));
          } else {
            const wrapper = document.createElement("div");
            wrapper.classList.add("image-row");
            group.forEach(src => wrapper.appendChild(createMediaElement(src)));
            imageContainer.appendChild(wrapper);
          }
        });
      } else {
        imageContainer.innerHTML = '<p style="color:#999">No media available.</p>';
      }
    });
  });

  // 🖼 Clicking the main image stops auto-rotation
  mainImage.addEventListener("click", () => (autoChange = false));

  // 📱 Optional: redirect to mobile.html for small screens
  if (window.innerWidth <= 768) {
    window.location.href = "./mobile.html";
  }
  window.addEventListener("resize", () => {
    if (window.innerWidth <= 768 && !window.location.href.includes("mobile.html")) {
      window.location.href = "./mobile.html";
    }
  });
});


// // Refresh page when clicking the title
// document.getElementById('siteTitle').addEventListener('click', () => {
//   window.location.href = './home.html';
// });

// if (window.innerWidth <= 768) {
//   window.location.href = "./mobile.html";
// }

// // Also listen for window resizing (optional)
// window.addEventListener('resize', () => {
//   if (window.innerWidth <= 768 && !window.location.href.includes('./mobile.html')) {
//     window.location.href = "./mobile.html";
//   }
// });