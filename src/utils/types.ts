export type Item = {
  name: string;
  img: string;
  description: string;
  bgclr: string;
  bgclrOutsidDiv: string;
};

export const getImageUrl = (image: string): string => {
  return new URL(`../assets/${image}`, import.meta.url).href;
};
