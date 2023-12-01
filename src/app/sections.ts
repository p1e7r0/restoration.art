const SECTIONS = 7;
const SECTIONS_RATE = 1 / SECTIONS;

const getPageHeight = () => {
  return window.innerHeight;
};

export const scrollSectionRange = (scroll: number, start: number, end: number = start + 1) => scroll >= SECTIONS_RATE * start && scroll < SECTIONS_RATE * end;
export const relativeScroll = (scroll: number, start: number) => (scroll - SECTIONS_RATE * start) * (1 / SECTIONS_RATE);
export const sectionTop = (scroll: number, start: number) => -(scroll - SECTIONS_RATE * start) * (1 / SECTIONS_RATE) * getPageHeight();
