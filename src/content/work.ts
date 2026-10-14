/*
 * TODO (Litha): fill in
 * - Screenshots: add images to public/work/<slug>/ and list them in `screenshots` below.
 *   Until then a framed placeholder is shown.
 * - QMS "What I learned": [Litha will write this herself]
 * - Feedback Kiosk, Crealty.id, RetailSpace: "What I learned" for each.
 * - Role for each project: [Role]
 * - Crealty.id "The problem": [The problem]
 */

export type Screenshot = { src: string; alt: string; width: number; height: number };

export type InterestingPart = { title: string; body: string };

export type WorkItem = {
  slug: string;
  name: string;
  context: string;
  role: string;
  description: string;
  stack: string[];
  problem: string;
  built: string[];
  builtIntro?: string;
  interesting: InterestingPart[];
  learned: string;
  screenshots: Screenshot[];
};

export const work: WorkItem[] = [
  {
    slug: 'qms',
    name: 'Queue Management System',
    context: 'Freelance, healthcare (clinic/hospital)',
    role: '[Role]',
    description:
      'Three React apps for a clinic: a ticket kiosk, a staff portal and a waiting-room TV, all updating live.',
    stack: ['React', 'Tailwind CSS', 'Zustand', 'Pusher'],
    problem:
      'A clinic needed to move its queue off paper and shouting. Patients needed a way to take a number, staff needed to call and manage queues, and the waiting room needed a screen everyone could follow.',
    builtIntro: 'Three React apps that share the same live data:',
    built: [
      'a ticket kiosk where patients take a queue number,',
      'a staff portal for calling patients, managing appointments, and checking doctor schedules,',
      "a TV display for the waiting room that shows who's being served right now.",
    ],
    interesting: [
      {
        title: 'Keeping three screens in sync.',
        body: 'When staff call a number, the kiosk, the portal, and the TV all have to update instantly. I used Pusher for real-time events and Zustand for shared client state, so every app reacts to the same event without needing a refresh.',
      },
      {
        title: 'Permissions without spaghetti.',
        body: 'Different staff can do different things. Together with the backend developer, I designed a permission system where the login response returns a flat list of permissions, and the UI shows or hides each action based on that list, down to individual buttons.',
      },
      {
        title: 'Making delays obvious.',
        body: 'I built a waiting-time view with color-coded thresholds, so staff can spot patients who have waited too long at a glance, without reading numbers one by one.',
      },
    ],
    learned: '[Litha will write this herself]',
    screenshots: [],
  },
  {
    slug: 'feedback-kiosk',
    name: 'Feedback Rating Kiosk',
    context: 'Freelance, hospital',
    role: '[Role]',
    description:
      'A locked-down tablet app where hospital patients rate their visit, replacing paper surveys.',
    stack: ['React Native', 'Android Device Owner / Lock Task Mode', 'Axios'],
    problem: 'The hospital collected patient feedback on paper surveys.',
    built: [
      'A star rating and written feedback flow for patients on a tablet.',
      'Kiosk lockdown with Android Device Owner / Lock Task Mode, so the tablet stays in the app.',
      'APK builds for QA, and bug fixing from QA and stakeholder feedback.',
    ],
    interesting: [],
    learned: '[What I learned]',
    screenshots: [],
  },
  {
    slug: 'crealty',
    name: 'Crealty.id',
    context: 'PT Salt Indonesia, real estate platform',
    role: '[Role]',
    description: 'Property search with instant multi-parameter filters for a real estate platform.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Axios'],
    problem: '[The problem]',
    built: [
      'Filters by property type, land/building area and location.',
      'Results that update without a page reload.',
      'Lazy-loaded listings.',
    ],
    interesting: [],
    learned: '[What I learned]',
    screenshots: [],
  },
  {
    slug: 'retailspace',
    name: 'RetailSpace',
    context: 'Freelance, e-commerce',
    role: '[Role]',
    description: 'E-commerce frontend migrated from Vue to React, with catalog, cart and checkout rebuilt.',
    stack: ['React', 'Zustand', 'Axios'],
    problem: 'The e-commerce frontend was built in Vue and needed to move to React.',
    built: ['Migration of the frontend from Vue to React.', 'Catalog, cart and checkout rebuilt.'],
    interesting: [],
    learned: '[What I learned]',
    screenshots: [],
  },
];

export const getWork = (slug: string) => work.find((w) => w.slug === slug);
