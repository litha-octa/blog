/*
 * TODO (Litha): replace all six placeholders with your own artwork.
 * Put images in public/art/ and set src, title, year, alt, width, height
 * (width/height = the image's real pixel size, used for its aspect ratio).
 * Also: the one line about your style in the Art page intro ([One line about your style]).
 */

export type Artwork = {
  src: string;
  title: string;
  year: string;
  alt: string;
  width: number;
  height: number;
};

export const artIntroStyle = '[One line about your style]';

export const art: Artwork[] = [
  { src: '/art/placeholder-1.svg', title: '[Title]', year: '[Year]', alt: 'Placeholder for artwork 1', width: 800, height: 1000 },
  { src: '/art/placeholder-2.svg', title: '[Title]', year: '[Year]', alt: 'Placeholder for artwork 2', width: 800, height: 600 },
  { src: '/art/placeholder-3.svg', title: '[Title]', year: '[Year]', alt: 'Placeholder for artwork 3', width: 800, height: 800 },
  { src: '/art/placeholder-4.svg', title: '[Title]', year: '[Year]', alt: 'Placeholder for artwork 4', width: 800, height: 1200 },
  { src: '/art/placeholder-5.svg', title: '[Title]', year: '[Year]', alt: 'Placeholder for artwork 5', width: 800, height: 533 },
  { src: '/art/placeholder-6.svg', title: '[Title]', year: '[Year]', alt: 'Placeholder for artwork 6', width: 800, height: 960 },
];
