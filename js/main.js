const fadeOut = () => {
  // Landing page
  TweenMax.to('.myBtn', 0.5, {
    y: -100,
    opacity: 0,
  });

  TweenMax.to('.bio', 1, {
    y: -400,
    opacity: 0,
    ease: Power2.easeInOut,
    delay: 1,
  });

  TweenMax.from('.overlay', 1, {
    ease: Power2.easeInOut,
  });

  TweenMax.to('.overlay', 1, {
    delay: 1,
    top: '-110%',
    ease: Expo.easeInOut,
  });

  // Flashing bio
  TweenMax.to('.overlay-2', 0.3, {
    delay: 1.5,
    top: '-110%',
    ease: Expo.easeInOut,
  });

  // Main gallery
  TweenMax.from('.content', 1, {
    delay: 1.8,
    opacity: 0,
    y: '100%',
    ease: Power2.easeInOut,
  });

  TweenMax.to('.content', 1, {
    opacity: 1,
    y: 0,
    delay: 2,
    ease: Power2.easeInOut,
  });
};

const fadeIn = () => {
  // Main gallery
  TweenMax.to('.content', 0.5, {
    opacity: 0,
    ease: Power2.easeInOut,
  });
  TweenMax.to('.content', 0.5, {
    y: '0%',
    delay: 0.5,
  });
  TweenMax.to('.overlay-2', 0.2, {
    delay: 0.7,
    top: '0%',
    ease: Expo.easeInOut,
  });

  TweenMax.to('.overlay', 1, {
    delay: 0.5,
    top: '0%',
    opacity: 1,
    ease: Expo.easeInOut,
  });

  TweenMax.to('.bio', 0.5, {
    y: 0,
    opacity: 1,
    delay: 1,
    ease: Power2.easeInOut,
  });

  TweenMax.to('.myBtn', 0.5, {
    y: 0,
    // top: '50%',
    // left: '50%',
    opacity: 1,
  });
};

let menu = document.getElementById('burger');
let burgerMenu = document.getElementById('burgerMenu');
menu.onclick = () => {
  burgerMenu.classList.toggle('visible');
  menu.classList.toggle('close');
};

// Add 'playing' property to videos elements
Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
  get: function () {
    return !!(
      this.currentTime > 0 &&
      !this.paused &&
      !this.ended &&
      this.readyState > 2
    );
  },
});

document.getElementById('previewBtn').addEventListener('click', () => {
  const videos = document.querySelectorAll('video');
  videos.forEach((vid) => {
    let slideParent =
      vid.parentElement.parentElement.parentElement.parentElement;

    if (vid.playing) {
      // video is already playing so do nothing
      !slideParent.classList.contains('slide--current') && vid.pause();
    } else {
      // video is not playing
      // so play video now
      slideParent.classList.contains('slide--current') && vid.play();
    }
  });
});
