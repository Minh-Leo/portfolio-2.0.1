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
  // TweenMax.to('.overlay-2', 1, {
  //   delay: 0.5,
  //   top: '110%',
  //   ease: Expo.easeInOut,
  // });
  TweenMax.to('.overlay-2', 0.2, {
    delay: 0.7,
    top: '0%',
    ease: Expo.easeInOut,
  });

  // TweenMax.from('.overlay', 1, {
  //     delay: 2,
  //     opacity: 0,
  //     ease: Power2.easeInOut,
  //   });

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

// let videos = document.querySelectorAll('video');
// videos.forEach((video) => {
//   let isPaused = false;
//   let observer = new IntersectionObserver(
//     (entries, observer) => {
//       entries.forEach((entry) => {
//         if (entry.intersectionRatio != 1 && !video.paused) {
//           video.pause();
//           isPaused = true;
//         } else if (isPaused) {
//           video.play();
//           isPaused = false;
//         }
//       });
//     },
//     { threshold: 1 }
//   );
//   observer.observe(video);
// });

// Video
// function playVisibleVideos() {
//   document
//     .querySelectorAll('video')
//     .forEach((video) =>
//       elementIsVisible(video) ? video.play() : video.pause()
//     );
// }

// function elementIsVisible(el) {
//   let rect = el.getBoundingClientRect();
//   return (
//     rect.bottom >= 0 &&
//     rect.right >= 0 &&
//     rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.left <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// let playVisibleVideosTimeout;
// window.addEventListener('scroll', () => {
//   clearTimeout(playVisibleVideosTimeout);
//   playVisibleVideosTimeout = setTimeout(playVisibleVideos, 100);
// });

// window.addEventListener('resize', playVisibleVideos);
// window.addEventListener('DOMContentLoaded', playVisibleVideos);

setTimeout(() => {
  const video1 = document.getElementById('myVideo1');

  video1.play();
  alert('play video 1');
}, 1000);
