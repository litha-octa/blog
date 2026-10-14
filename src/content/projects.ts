/*
 * TODO (Litha): fill in
 * - Year for every project: [Year]
 * - CashClock stack: [Stack]
 * - Code and Live URLs for every project (leave '' to hide a link)
 */

export type SideProject = {
  name: string;
  type: 'Web' | 'Mobile';
  description: string;
  stack: string;
  year: string;
  code: string;
  live: string;
};

export const projects: SideProject[] = [
  {
    name: 'CatchCat',
    type: 'Mobile',
    description:
      'Snap photos of cats, remove the background automatically and keep them in an in-app gallery.',
    stack: 'React Native',
    year: '[Year]',
    code: '',
    live: '',
  },
  {
    name: 'CashClock',
    type: 'Web',
    description:
      'A tracker for freelance earnings: log work, see what you made, plan what comes next.',
    stack: '[Stack]',
    year: '[Year]',
    code: '',
    live: '',
  },
  {
    name: 'Luxeva Therapy',
    type: 'Web',
    description:
      'Home-service massage booking with separate portals for customers, therapists and admins.',
    stack: 'MongoDB · Express · React · Node.js',
    year: '[Year]',
    code: '',
    live: '',
  },
  {
    name: 'Dessert Recipes',
    type: 'Web',
    description:
      'International dessert recipes with search, filters, PDF download and sharing to WhatsApp or email.',
    stack: 'Next.js · TypeScript',
    year: '[Year]',
    code: '',
    live: '',
  },
];
