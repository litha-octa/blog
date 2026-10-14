/*
 * TODO (Litha): fill in or confirm
 * - LinkedIn: the brief says /in/litha-octa-delistia, the old site used /in/lithaoctadelistia. Confirm which is right.
 * - instagram: [URL] for the Art page button (leave empty to hide the button)
 * - public/cv.pdf: add your CV file (the "Download CV" button links to it)
 */

export const site = {
  name: 'Litha Octa Delistia',
  title: 'Litha Octa Delistia — Frontend Developer',
  description:
    'Frontend developer in Jakarta building React, Next.js and React Native interfaces people use every day.',
  cv: '/cv.pdf',
};

export type ContactLink = { label: string; href: string };

export const contactLinks: ContactLink[] = [
  { label: 'Email', href: 'mailto:lithaoctadelistia@gmail.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/litha-octa-delistia' },
  { label: 'GitHub', href: 'https://github.com/litha-octa' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~011be56c4f1c7b23cf' },
];

// Empty string hides the "More on Instagram" button on /art.
export const instagramUrl = '';

export const navLinks = [
  { label: 'Work', href: '/#work', key: 'work' },
  { label: 'Projects', href: '/projects/', key: 'projects' },
  { label: 'Art', href: '/art/', key: 'art' },
  { label: 'Contact', href: '#contact', key: 'contact' },
] as const;

export type NavKey = (typeof navLinks)[number]['key'];
