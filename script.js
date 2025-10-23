document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  const imageContainer = document.querySelector(".image-scroll");
  const mainImage = document.getElementById("mainImage");

  let autoChange = true;

  // 🎞 random background pool
  const imageFiles = [
    "./images/bg1.jpg", "./images/bg2.png", "./images/bg3.png",
    "./images/bg4.png", "./images/bg5.png", "./images/bg6.png",
    "./images/bg7.png", "./images/bg8.jpg", "./images/bg9.jpg"
  ];

  // 🔁 change random image
  function changeImage() {
    if (!autoChange || !mainImage) return;
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    mainImage.src = imageFiles[randomIndex];
  }

  document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  const imageContainer = document.querySelector(".image-scroll");
  const mainImage = document.getElementById("mainImage");

  let autoChange = true;

  // random rotation files
  const imageFiles = [
    "./images/bg1.jpg", "./images/bg2.png", "./images/bg3.png",
    "./images/bg4.png", "./images/bg5.png", "./images/bg6.png",
    "./images/bg7.png", "./images/bg8.jpg", "./images/bg9.jpg"
  ];

  // change image function
  function changeImage() {
    if (!autoChange) return;
    const randomIndex = Math.floor(Math.random() * imageFiles.length);
    mainImage.src = imageFiles[randomIndex];
  }

  // run once + every 1.5s
  changeImage();
  setInterval(changeImage, 1500);

  // define grouped media
  const groupedImages = {
    1: [
      ["./images/bg1.jpg"],
      ["./images/DSC09738.jpg", "./images/DSC09786.jpg"]
    ],
    2: [
      ["./images/bg2.png"],
      ["./images/DSC09742.jpg", "./images/DSC09773.jpg"]
    ]
  };

  function createMediaElement(src) {
    let el;
    if (src.match(/\.(mp4|mov|webm)$/i)) {
      el = document.createElement("video");
      Object.assign(el, {
        src,
        autoplay: true,
        loop: true,
        muted: true,
        playsInline: true
      });
    } else {
      el = document.createElement("img");
      el.src = src;
      el.alt = "portfolio media";
      el.loading = "lazy";
    }
    el.classList.add("media-item");
    return el;
  }

  // item click
  items.forEach(item => {
    item.addEventListener("click", () => {
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      autoChange = false;

      imageContainer.innerHTML = "";

      const index = Number(item.dataset.index);
      const imageGroups = groupedImages[index];

      if (imageGroups?.length) {
        imageGroups.forEach(group => {
          if (group.length === 1) {
            const media = createMediaElement(group[0]);
            imageContainer.appendChild(media);
          } else {
            const wrapper = document.createElement("div");
            wrapper.classList.add("image-row");
            group.forEach(src => {
              const media = createMediaElement(src);
              wrapper.appendChild(media);
            });
            imageContainer.appendChild(wrapper);
          }
        });
      } else {
        imageContainer.innerHTML = '<p style="color:#999">No media available.</p>';
      }
    });
  });
});


  // run once at load + then every 1.5s
  changeImage();
  setInterval(changeImage, 1500);

  // 👇 grouped media
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
      ["./images/A-La-Cart-Spread1.jpg", "./images/A-La-Cart-Spreads3.jpg"],
      ["./images/A-La-Cart-Spreads4.jpg"]
    ],
    4: [
      ["./images/bg4.png"],
      ["./images/introduction zoom.png"],
      ["./images/bumi big picture.png"],
      ["./images/bumi_walkthrough.gif"]

    ],
    5: [
      ["./images/Aqura-Promo.mp4"],
      ["./images/581A9968.jpg", "./images/sasha.mp4"],
      ["./images/jaq.mp4", "./images/581A0054.jpg"],
      ["./images/699A9945.jpg"]
    ],
    6: [
      ["./images/in praised cropped vid.mp4"],
      ["./images/inpraiseofshadowsss1.png"],
      ["./images/inpraiseofshadowsss2.png"],
      ["./images/bg6.png"]
    ]
  };

  // helper: image/video factory
  function createMediaElement(src) {
    let el;
    if (src.match(/\.(mp4|mov|webm)$/i)) {
      el = document.createElement("video");
      Object.assign(el, {
        src,
        autoplay: true,
        loop: true,
        muted: true,
        playsInline: true
      });
    } else {
      el = document.createElement("img");
      el.src = src;
      el.alt = "portfolio media";
      el.loading = "lazy";
    }
    el.classList.add("media-item");
    return el;
  }

  // item click
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
            const media = createMediaElement(group[0]);
            imageContainer.appendChild(media);
          } else {
            const wrapper = document.createElement("div");
            wrapper.classList.add("image-row");
            group.forEach(src => {
              const media = createMediaElement(src);
              wrapper.appendChild(media);
            });
            imageContainer.appendChild(wrapper);
          }
        });
      } else {
        imageContainer.innerHTML = '<p style="color:#999">No media available.</p>';
      }
    });
  });

  mainImage.addEventListener("click", () => {
    autoChange = false;
  });
});


// 👇 grouped media per project (images + videos)
const groupedImages = {
  1: [
    ['./images/bg1.jpg', './images/DSC09738.jpg'],
    ['./images/bg9.jpg'],
    ['./images/DSC09742.jpg', './images/DSC09773.jpg'],
    ['./images/DSC09777.jpg'],
    ['./images/DSC09756.jpg', './images/DSC09779.jpg'],
    ['./images/DSC09768.jpg']
  ],
  2: [
    ['./images/DSC09891-4 copy.png'],
    ['./images/DSC09899-1 copy.png', './images/DSC09908-1 copy.png'],
    ['./images/DSC09917-1 copy.png'],
    ['./images/DSC09930-1 copy.png', './images/DSC09944-1 copy.png'],
    ['./images/DSC09966-1 copy.png'],
    ['./images/DSC09971-1 copy.png']
  ],
  3: [
    ['./images/bg2.png'],
    ['./images/A-La-Cart-Spread1.jpg', './images/A-La-Cart-Spreads3.jpg'],
    ['./images/A-La-Cart-Spreads4jpg.jpg']
  ],
  4: [
    ['./images/bg4.png'],
    ['./images/introduction zoom.png'],
    ['./images/bumi big picture.png'],
    ['./images/bumi_walkthrough.gif'] // ✅ video
  ],
  5: [
    ['./images/Aqura-Promo.mp4'],
    ['./images/581A9968.jpg', './images/sasha.mp4'], // ✅ video side-by-side
    ['./images/jaq.mp4', './images/581A0054.jpg'],   // ✅ video side-by-side
    ['./images/699A9945.jpg'] // ✅ video
  ],
  6: [
    ['./images/in praised cropped vid.mp4'],
    ['./images/inpraiseofshadowsss1.png'],
    ['./images/inpraiseofshadowsss2.png'],
    ['./images/bg6.png'] // ✅ video
  ]
};

// 🧩 helper: make image or video element
function createMediaElement(src) {
  let el;
  if (src.match(/\.(mp4|mov|webm)$/i)) {
    el = document.createElement('video');
    el.src = src;
    el.autoplay = true;
    el.loop = true;
    el.muted = true;
    el.playsInline = true;
    el.controls = false;
    el.style.width = '100%';
    el.style.borderRadius = '5px';
    el.style.objectFit = 'cover';
  } else {
    el = document.createElement('img');
    el.src = src;
    el.alt = 'portfolio media';
    el.style.width = '100%';
    el.style.borderRadius = '5px';
    el.style.objectFit = 'cover';
    el.loading = 'lazy';
  }
  return el;
}

// 🖱 handle item click
items.forEach(item => {
  item.addEventListener('click', () => {
    items.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    autoChange = false; // stop auto rotation

    imageContainer.classList.add('scrollable');
    imageContainer.innerHTML = '';

    const index = Number(item.dataset.index);
    const imageGroups = groupedImages[index];

    if (imageGroups && imageGroups.length > 0) {
      imageGroups.forEach(group => {
        if (group.length === 1) {
          // full-width
          const media = createMediaElement(group[0]);
          imageContainer.appendChild(media);
        } else {
          // side-by-side
          const wrapper = document.createElement('div');
          wrapper.classList.add('image-row');
          group.forEach(src => {
            const media = createMediaElement(src);
            wrapper.appendChild(media);
          });
          imageContainer.appendChild(wrapper);
        }
      });
    } else {
      imageContainer.innerHTML = '<p style="color:#999">No media available.</p>';
    }
  });
});

// 👇 clicking the main image also stops auto rotation
mainImage.addEventListener('click', () => {
  autoChange = false;
});

document.addEventListener('DOMContentLoaded', () => {
  const mainImage = document.getElementById('mainImage');
  let autoChange = true;
  const imageFiles = [
    './images/bg1.jpg', './images/bg2.png', './images/bg3.png',
    './images/bg4.png', './images/bg5.png', './images/bg6.png',
    './images/bg7.png', './images/bg8.jpg', './images/bg9.jpg'
  ];

  function changeImage() {
    if (!autoChange || !mainImage) return;
    const idx = Math.floor(Math.random() * imageFiles.length);
    mainImage.src = imageFiles[idx];
  }

  // Immediately show one image, then rotate
  changeImage();
  setInterval(changeImage, 1500);

  // optional: if some code stops autoChange, you can set autoChange = true here to start
});

// Refresh page when clicking the title
document.getElementById('siteTitle').addEventListener('click', () => {
  window.location.href = './home.html';
});

if (window.innerWidth <= 768) {
  window.location.href = "./mobile.html";
}

// Also listen for window resizing (optional)
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768 && !window.location.href.includes('./mobile.html')) {
    window.location.href = "./mobile.html";
  }
});