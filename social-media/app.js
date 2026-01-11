// LIVE TIME
function updateTime() {
  document.getElementById("liveTime").innerText =
    "Company Time: " + new Date().toLocaleString();
}
setInterval(updateTime, 1000);
updateTime();

/* ============================
   FALLBACK DATA (For Static Hosting)
   ============================ */
const FALLBACK_BLOGS = [
  { "title": "Western Digital and the Foundation of the AI Data Economy", "link": "https://blog.westerndigital.com/western-digital-and-the-foundation-of-the-ai-data-economy/", "image": "https://blog.westerndigital.com/wp-content/uploads/2025/11/ReinventingStorageBlog-BlogHero-1440x758-Final.png", "description": "November 20, 2025 • 9 min read" },
  { "title": "The Long-Term Case for HDD Storage", "link": "https://blog.westerndigital.com/long-term-case-for-hdd-storage/", "image": "https://blog.westerndigital.com/wp-content/uploads/2025/10/IIC-BlogHero-1440x758-1.png", "description": "October 20, 2025 • 4 min read" },
  { "title": "The Central Role of HDDs in AI Storage", "link": "https://blog.westerndigital.com/the-central-role-of-hdds-in-ai-storage/", "image": "https://blog.westerndigital.com/wp-content/uploads/2025/09/BlogHero-DataCenter-1440x758-1.jpg", "description": "September 24, 2025 • 4 min read" },
  { "title": "Giving HDD Rare Earth Elements New Life", "link": "https://blog.westerndigital.com/giving-hdd-rare-earth-elements-new-life/", "image": "https://blog.westerndigital.com/wp-content/uploads/2025/04/NewsroomTile-Rare-Earth-Recycling-Program.jpg", "description": "April 17, 2025 • 7 min read" },
  { "title": "Powering the Future of Cloud Storage", "link": "https://blog.westerndigital.com/hdd-energy-efficiency-cloud-storage/", "image": "https://blog.westerndigital.com/wp-content/uploads/2025/12/PFCS-BlogHero-1440x758-1.jpg", "description": "December 10, 2025 • 8 min read" },
  { "title": "The Smart Path to Scalable Storage", "link": "https://blog.westerndigital.com/smr-hdd-technology-ai-data-centers/", "image": "https://blog.westerndigital.com/wp-content/uploads/2025/12/SPSS-BlogHero-1440x758-Final.png", "description": "December 4, 2025 • 6 min read" }
];

const FALLBACK_LEADERSHIP = [
  { "name": "Irving Tan", "title": "Chief Executive Officer", "bio": "Irving Tan serves as the Chief Executive Officer, leading Western Digital's global strategy and operations.", "image": "https://www.westerndigital.com/content/dam/store/en-us/assets/company/irving-tan-western-digital.png.thumb.1280.1280.png" },
  { "name": "Kris Sennesael", "title": "Chief Financial Officer", "bio": "Kris Sennesael currently serves as the Chief Financial Officer of Western Digital. He is responsible for the global finance organization, including accounting, financial planning and analysis, tax, treasury, internal audit, investor relations, and corporate real estate.", "image": "https://www.westerndigital.com/content/dam/store/en-us/assets/company/kris-sennesael-western-digital.png.thumb.1280.1280.png" },
  { "name": "Ahmed Shihab", "title": "Chief Product Officer", "bio": "Ahmed Shihab is the Chief Product Officer at Western Digital. In this role, he is responsible for leading engineering and product strategy as well as innovation and the development of current and future Western Digital products and solutions.", "image": "https://www.westerndigital.com/content/dam/store/en-us/assets/company/ahmed-shihab-western-digital.png.thumb.1280.1280.png" },
  { "name": "Scott Davis", "title": "SVP, Global Channel & ROEM Sales", "bio": "Scott Davis as a veteran sales executive with over 37 years at the company, Scott has unmatched experience in fostering deep, lasting customer relationships and cultivating high-performing teams. He has held various executive leadership roles within the company.", "image": "https://www.westerndigital.com/content/dam/store/en-us/assets/company/scott-davis-western-digital.png.thumb.1280.1280.png" },
  { "name": "Cynthia Tregillis", "title": "Chief Legal Officer", "bio": "Cynthia Tregillis is the Chief Legal Officer and Secretary at Western Digital. She oversees the company's worldwide legal, risk management, compliance, and government relations functions.", "image": "https://www.westerndigital.com/content/dam/store/en-us/assets/company/cynthia-tregillis-western-digital.png.thumb.1280.1280.png" },
  { "name": "Vidya Gubbi", "title": "Chief of Global Operations", "bio": "Vidya Gubbi is the Chief of Global Operations at Western Digital. He is responsible for all global operations functions, including manufacturing operations, procurement, supply chain, quality and sustainability.", "image": "https://www.westerndigital.com/content/dam/store/en-us/assets/company/vidya-gubbi-western-digital.png.thumb.1280.1280.png" },
  { "name": "Katie Watson", "title": "Chief Human Resources Officer", "bio": "Katie Watson is the Chief Human Resources Officer at Western Digital. She oversees the company’s global human resources functions.", "image": "https://www.westerndigital.com/content/dam/store/en-us/assets/company/katie-watson-western-digital.png.thumb.1280.1280.png" },
  { "name": "Sesh Tirumala", "title": "Chief Information Officer", "bio": "Sesh Tirumala is the Chief Information Officer at Western Digital, driving the company's digital transformation and fostering a culture of innovation through technology. In this role, he oversees all of Information technology, Cybersecurity, and Enterprise data and analytics.", "image": "https://www.westerndigital.com/content/dam/store/en-us/assets/company/sesh-tirumala-western-digital.png.thumb.1280.1280.png" },
  { "name": "Jeremy Faulk", "title": "VP, Strategy & Corp Dev", "bio": "Jeremy Faulk is the Vice President of Strategy and Corporate Development at Western Digital. In this role, he is responsible for long-range planning, business and segment strategy, innovation investments, and navigating the tectonic shifts created by AI.", "image": "https://www.westerndigital.com/content/dam/store/en-us/assets/company/jeremy-faulk-western-digital.png.thumb.1280.1280.png" },
  { "name": "Ginita Taylor", "title": "Chief of Staff to CEO", "bio": "Ginita Taylor is the Chief of Staff to the CEO at Western Digital. She is responsible for planning and executing all aspects of the CEO office, as well as leading Strategic and Employee Communications.", "image": "https://www.westerndigital.com/content/dam/store/en-us/assets/company/ginita-taylor-western-digital.png.thumb.1280.1280.png" }
];

/* ============================
   BLOG FETCHING & SLIDER
   ============================ */

const track = document.querySelector(".slider-track");
let slides = [];
let index = 1;
let slideWidth;
let interval;

async function fetchBlogs() {
  try {
    const response = await fetch('/api/blogs');
    if (!response.ok) throw new Error('API not available');
    const blogs = await response.json();

    if (blogs.length > 0) {
      renderBlogs(blogs);
      initSlider();
    } else {
      throw new Error('No blogs found');
    }
  } catch (error) {
    console.log('Using fallback blog data');
    renderBlogs(FALLBACK_BLOGS);
    initSlider();
  }
}

function renderBlogs(blogs) {
  track.innerHTML = ''; // Clear existing static blogs

  blogs.forEach(blog => {
    const a = document.createElement('a');
    a.className = 'blog-item';
    a.href = blog.link;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    a.innerHTML = `
      <img class="blog-thumb-img" src="${blog.image}" alt="${blog.title}" loading="lazy" />
      <h3>${blog.title}</h3>
      <p>${blog.description}</p>
    `;

    track.appendChild(a);
  });
}

function initSlider() {
  slides = Array.from(document.querySelectorAll(".blog-item"));
  if (slides.length === 0) return;

  // Clone first & last slides
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);

  firstClone.classList.add("clone");
  lastClone.classList.add("clone");

  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  const allSlides = Array.from(track.children);

  function setSlideWidth() {
    // Check if element is visible/has width
    const rect = allSlides[0].getBoundingClientRect();
    if (rect.width === 0) return; // Prevent errors if hidden

    slideWidth = rect.width + 20; // 20 = margin
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }

  window.addEventListener("resize", setSlideWidth);
  // Initial set with a small delay to ensure rendering
  setTimeout(setSlideWidth, 100);

  // Move slider
  function moveToIndex() {
    track.style.transition = "transform 0.45s ease";
    track.style.transform = `translateX(-${slideWidth * index}px)`;
  }

  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  // Next / Prev buttons
  if (nextBtn) {
    nextBtn.onclick = () => {
      if (index >= allSlides.length - 1) return;
      index++;
      moveToIndex();
    };
  }

  if (prevBtn) {
    prevBtn.onclick = () => {
      if (index <= 0) return;
      index--;
      moveToIndex();
    };
  }

  // Seamless loop reset
  track.addEventListener("transitionend", () => {
    // Ensure index is within bounds of allSlides
    if (!allSlides[index]) return;

    if (allSlides[index].classList.contains("clone")) {
      track.style.transition = "none";

      if (index === allSlides.length - 1) {
        index = 1;
      } else if (index === 0) {
        index = allSlides.length - 2;
      }

      track.style.transform = `translateX(-${slideWidth * index}px)`;
    }
  });

  // Auto-rotate forever
  interval = setInterval(() => {
    index++;
    moveToIndex();
  }, 6000);
}

// Start
fetchBlogs();

/* ============================
   CHAT BUTTON HANDLER
   ============================ */

const chatButton = document.getElementById("chatButton");
const popupOverlay = document.getElementById("popupOverlay");
const popupClose = document.getElementById("popupClose");

// Show popup when chat button is clicked
chatButton.addEventListener("click", () => {
  popupOverlay.classList.add("active");
});

// Close popup when close button is clicked
popupClose.addEventListener("click", () => {
  popupOverlay.classList.remove("active");
});

// Close popup when clicking outside the popup content
popupOverlay.addEventListener("click", (e) => {
  if (e.target === popupOverlay) {
    popupOverlay.classList.remove("active");
  }
});

// Close popup with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && popupOverlay.classList.contains("active")) {
    popupOverlay.classList.remove("active");
  }
  if (e.key === "Escape" && leadershipModal.classList.contains("active")) {
    leadershipModal.classList.remove("active");
  }
});

/* ============================
   EXECUTIVE LEADERSHIP
   ============================ */

const leadershipGrid = document.getElementById('leadershipGrid');
const leadershipModal = document.getElementById('leadershipModal');
const leadershipClose = document.getElementById('leadershipClose');
const bioContent = document.getElementById('bioContent');

async function fetchLeadership() {
  try {
    const response = await fetch('/api/leadership');
    if (!response.ok) throw new Error('API not available');
    const leaders = await response.json();
    renderLeadership(leaders);
  } catch (error) {
    console.log('Using fallback leadership data');
    renderLeadership(FALLBACK_LEADERSHIP);
  }
}

function renderLeadership(leaders) {
  leadershipGrid.innerHTML = '';

  leaders.forEach(leader => {
    const card = document.createElement('div');
    card.className = 'leader-card';
    card.onclick = () => openBioModal(leader);

    // Fallback image if none found
    const imgSrc = leader.image || 'https://www.westerndigital.com/content/dam/store/en-us/assets/company/default-avatar.png'; // Use a placeholder or generic

    card.innerHTML = `
      <div class="leader-img-container">
        <img class="leader-img" src="${imgSrc}" alt="${leader.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/160?text=WD'"/>
      </div>
      <h3 class="leader-name">${leader.name}</h3>
      <p class="leader-title">${leader.title}</p>
    `;

    leadershipGrid.appendChild(card);
  });
}

function openBioModal(leader) {
  const imgSrc = leader.image || 'https://via.placeholder.com/100?text=WD';

  bioContent.innerHTML = `
    <div class="bio-header">
      <img class="bio-img" src="${imgSrc}" alt="${leader.name}" onerror="this.src='https://via.placeholder.com/100?text=WD'"/>
      <div class="bio-info">
        <h3>${leader.name}</h3>
        <p>${leader.title}</p>
      </div>
    </div>
    <div class="bio-text">
      ${leader.bio ? `<p>${leader.bio}</p>` : '<p>Bio not available.</p>'}
    </div>
  `;

  leadershipModal.classList.add('active');
}

// Close Leadership Modal
leadershipClose.addEventListener('click', () => {
  leadershipModal.classList.remove('active');
});

leadershipModal.addEventListener('click', (e) => {
  if (e.target === leadershipModal) {
    leadershipModal.classList.remove('active');
  }
});

// Init
fetchLeadership();

/* ============================
   ROADMAP INTERACTION
   ============================ */
function initRoadmap() {
  const capacityBoxes = document.querySelectorAll('.rm-capacity-box');
  const infoCards = document.querySelectorAll('.rm-info-card');
  const detailPanels = document.querySelectorAll('.rm-detail-panel');

  function showDetail(id) {
    detailPanels.forEach(panel => {
      panel.classList.remove('active');
    });

    const targetPanel = document.getElementById('detail-' + id);
    if (targetPanel) {
      targetPanel.classList.add('active');
      targetPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  capacityBoxes.forEach(box => {
    box.addEventListener('click', () => {
      capacityBoxes.forEach(b => b.classList.remove('active'));
      box.classList.add('active');

      const tech = box.getAttribute('data-tech');
      showDetail(tech);
    });
  });

  infoCards.forEach(card => {
    card.addEventListener('click', () => {
      const detail = card.getAttribute('data-detail');
      showDetail(detail);
    });
  });

  // Timeline interaction
  const timelinePoints = document.querySelectorAll('.rm-timeline-point');
  timelinePoints.forEach(point => {
    point.addEventListener('click', () => {
      // Could scroll to relevant section or just highlight
      // For now, just a visual feedback
      timelinePoints.forEach(p => p.querySelector('.rm-point-dot').style.background = '#7b5fc9');
      point.querySelector('.rm-point-dot').style.background = '#5ec4d4';
    });
  });
}

// Call initRoadmap when DOM is ready or after content injection
document.addEventListener('DOMContentLoaded', initRoadmap);
// Also call it immediately in case we are injecting script late
initRoadmap();