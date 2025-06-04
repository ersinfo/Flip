const mainSlider = document.getElementById('slider');
const mainSlides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dots');

let currentIndex = 0;
let totalSlides = mainSlides.length;

// Create dots dynamically
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

function updateSlider() {
  mainSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
  document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.classList.remove('active');
    void dot.offsetwidth;
    if (index === currentIndex) {
      dot.classList.add('active');
    }
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateSlider();
}

document.querySelector('.right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
});

document.querySelector('.left').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

// Auto slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSlider();
}, 5000); // 5 seconds

// main3 js code
function setupSlider(sliderId, leftBtnId, rightBtnId) {
        const productSlider = document.getElementById(sliderId);
        const productSlides = productSlider.querySelectorAll('.product-card2');
        const leftBtn = document.getElementById(leftBtnId);
        const rightBtn = document.getElementById(rightBtnId);

        let productCurrentIndex = 0;
        let cardWidth = productSlides[0].offsetWidth + 25;

        function getVisibleCards() {
          return Math.floor(productSlider.offsetWidth / cardWidth);
        }

        function updateButtons() {
          const visibleCards = getVisibleCards();
          const totalCards = productSlides.length;
          const maxIndex = totalCards - visibleCards;

          leftBtn.style.display = productCurrentIndex === 0 ? 'none' : 'block';
          rightBtn.style.display = productCurrentIndex >= maxIndex ? 'none' : 'block';
        }

        function scrollSlider() {
          productSlider.scrollTo({
            left: productCurrentIndex * cardWidth,
            behavior: 'smooth'
          });
          updateButtons();
        }

        rightBtn.addEventListener('click', () => {
          const visibleCards = getVisibleCards();
          const totalCards = productSlides.length;
          const maxIndex = totalCards - visibleCards;

          if (productCurrentIndex < maxIndex) {
            productCurrentIndex++;
            scrollSlider();
          }
        });

        leftBtn.addEventListener('click', () => {
          if (productCurrentIndex > 0) {
            productCurrentIndex--;
            scrollSlider();
          }
        });

        window.addEventListener('resize', () => {
          cardWidth = productSlides[0].offsetWidth + 25;
          updateButtons();
        });

        updateButtons();
      }

      window.addEventListener('load', () => {
        setupSlider('slider1', 'leftBtn', 'rightBtn');
        setupSlider('slider1b', 'leftBtn2', 'rightBtn2');
      });
//  season content start here

      document.querySelector('.arrow-icon').addEventListener('click', () => {
    alert("You clicked the next arrow. Add slider or navigation logic here.");
  });

  //  season content start here

  