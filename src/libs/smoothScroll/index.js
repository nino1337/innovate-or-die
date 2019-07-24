import './smoothScroll';

export const scroll = new SmoothScroll('a[href*="#"]', {
  header: '.header',
  speed: 1000,
  offset: 0,
  updateURL: false,
  popstate: false,
});
