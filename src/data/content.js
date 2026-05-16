// ─────────────────────────────────────────────
// SITE CONTENT  —  edit this file to update everything
// ─────────────────────────────────────────────

export const meta = {
  name: 'Stephan Kwapis',
  title: 'Digital Strategist & Developer',
  location: 'Okemos, MI',
  email: 'stephan@stephankwapis.com',
  linkedin: 'https://www.linkedin.com/in/stephankwapis/',
  github: 'https://github.com/sdkwapis',
  resume: '/resume.pdf',
  // EmailJS credentials (from your existing Contact.jsx)
  emailjs: {
    serviceId:  'service_i9hg6wf',
    templateId: 'template_i7np458',
    userId:     'oklUgDNwMzPigDiDc',
  },
}

// ── HERO TAGS ──
export const heroTags = [
  'React', 'Node.js', 'SEO / AEO', 'Adobe CC',
  'Full-Stack', 'Digital Marketing', 'Graphic Design',
]

// ── ABOUT ──
export const about = {
  body: [
    `I'm a <strong>Communications Specialist</strong> at American 1 Credit Union, where I lead digital marketing, SEO strategy, web development, and multi-channel campaign execution. My work lives at the rare crossroads where code, design, and brand storytelling converge.`,
    `Before A1CU, I ran <strong>Gumseat Productions</strong> — a graphic design and screen-printing studio I founded and operated for seven years. That experience sharpened everything from client management and production workflows to brand identity and print-to-digital translation.`,
    `Outside of work I build full-stack side projects — a React + PostgreSQL credit union web app, an AI Twitter persona on AWS, a B-movie discovery platform, and more — because building for fun is how I stay sharp.`,
  ],
  stats: [
    { num: '15+', label: 'Years in Design & Dev' },
    { num: '7',   label: 'Years Running Own Studio' },
    { num: '∞',   label: 'Side Projects at Any Given Time' },
  ],
}

// ── SKILLS ──
// image paths are relative to /public/assets/ — drop your PNGs there
export const skills = [
  { id: 1,  name: 'HTML',         years: '5 Years',  image: '/assets/html.png' },
  { id: 2,  name: 'CSS',          years: '5 Years',  image: '/assets/css.png' },
  { id: 3,  name: 'JavaScript',   years: '2 Years',  image: '/assets/js.png' },
  { id: 4,  name: 'React',        years: '2 Years',  image: '/assets/react.png' },
  { id: 5,  name: 'Node.js',      years: '2 Years',  image: '/assets/node.png' },
  { id: 6,  name: 'Express.js',   years: '2 Years',  image: '/assets/express.png' },
  { id: 7,  name: 'MongoDB',      years: '2 Years',  image: '/assets/mongoDB.png' },
  { id: 8,  name: 'Git',          years: '3 Years',  image: '/assets/github.png' },
  { id: 9,  name: 'Illustrator',  years: '14 Years', image: '/assets/ai.png' },
  { id: 10, name: 'Photoshop',    years: '14 Years', image: '/assets/ps.png' },
  { id: 11, name: 'InDesign',     years: '6 Years',  image: '/assets/id.png' },
  { id: 12, name: 'Premiere',     years: '10 Years', image: '/assets/premiere.png' },
]

// ── PROJECTS ──
// gallery: array of image paths → opens lightbox
// link: string → opens external URL
// Both can be omitted for display-only cards
export const projects = [
  {
    id: 1,
    name: 'Courage For Connor',
    description: 'Service dog donation site built to fund Connor\'s service dog journey.',
    image: '/assets/courageforconnor.png',
    type: 'Web App',
    stack: ['React', 'Express', 'PostgreSQL'],
    link: 'https://courageforconnor.com',
  },
  {
    id: 2,
    name: 'Weather Tracker',
    description: '5-day forecast app with live weather data and location search.',
    image: '/assets/weather.png',
    type: 'Web App',
    stack: ['JavaScript', 'REST API', 'CSS'],
    link: 'https://sdkwapis.github.io/Danger-Zone-Weather-Tracker/',
  },
  {
    id: 3,
    name: 'Squatch Daisy',
    description: 'Paranormal/cryptid webcomic set in the Pacific Northwest. Full reader, archive, SEO/JSON-LD.',
    image: '/assets/squatchdaisy.jpg',
    type: 'Creative / Web',
    stack: ['React', 'Node.js', 'CSS'],
    link: 'https://squatchdaisydotcom.onrender.com/',
  },
  {
    id: 4,
    name: 'Gumseat Productions',
    description: 'Seven-year screen printing & embroidery studio. Brand, web presence, and production workflow.',
    image: '/assets/gumseat.jpg',
    type: 'Brand / Studio',
    stack: ['Illustrator', 'Photoshop', 'Web'],
    link: 'https://www.instagram.com/gumseatproductions/',
  },
  {
    id: 5,
    name: 'CBT — Graphic Design',
    description: 'Posters, merchandise, and brand collateral for Children\'s Ballet Theatre.',
    image: '/assets/cbt.png',
    type: 'Graphic Design',
    stack: ['Illustrator', 'InDesign', 'Photoshop'],
    gallery: [
      '/assets/Nutcracker-2022-Poster-Master.jpg',
      '/assets/Nutcracker-2023-Poster-Master.jpg',
      '/assets/2023-nutcracker.jpg',
      '/assets/Robin-Hood-2024-Poster-Final.jpg',
      '/assets/robinhoodhoodie.jpg',
      '/assets/Nutcracker-2024-Poster-Master.jpg',
    ],
  },
  {
    id: 6,
    name: 'Rave Dance',
    description: 'Brand identity and print/digital collateral for a dance studio.',
    image: '/assets/rave.png',
    type: 'Graphic Design',
    stack: ['Illustrator', 'Photoshop'],
    gallery: [
      '/assets/rave1.jpg',
      '/assets/rave2.jpg',
      '/assets/rave3.jpg',
      '/assets/rave4.jpg',
    ],
  },
  {
    id: 7,
    name: 'Nor-East\'r Festival',
    description: 'Full brand system for a regional music festival — logo, posters, merch.',
    image: '/assets/noreastr2024logosingle.jpg',
    type: 'Brand / Print',
    stack: ['Illustrator', 'InDesign'],
    gallery: [
      '/assets/noreastr2024logo.jpg',
      '/assets/noreastrPoster.jpg',
      '/assets/noreastrTee.jpg',
    ],
  },
  {
    id: 8,
    name: 'Miscellaneous Design',
    description: 'A collection of freelance and personal graphic design work.',
    image: '/assets/misc.png',
    type: 'Graphic Design',
    stack: ['Illustrator', 'Photoshop', 'InDesign'],
    gallery: [
      '/assets/misc2.jpg',
      '/assets/misc1.jpg',
      '/assets/misc3.jpg',
      '/assets/misc4.jpg',
      '/assets/misc5.jpg',
    ],
  },
]

// ── MARKETING CASE STUDIES ──
export const caseStudies = [
  {
    id: 'cbt',
    label: 'Brand & Campaign',
    title: "Children's Ballet Theatre",
    subtitle: 'Logo Redesign & Nutcracker Campaign',
    goals: [
      'Refresh and modernize CBT\'s visual identity with a versatile new logo',
      'Raise community awareness and drive ticket sales for annual Nutcracker performances',
      'Amplify engagement across social and email with cohesive, story-driven content',
      'Strengthen partnerships with local schools, sponsors, and family audiences',
      'Ensure consistent branding across print, signage, digital ads, and web',
    ],
    images: [
      { src: '/assets/cbt.png',                          alt: 'CBT logo redesign' },
      { src: '/assets/Nutcracker-2024-Poster-Master.jpg', alt: 'Nutcracker 2024 poster' },
      { src: '/assets/5-ways-instagram.jpeg',             alt: 'CBT Instagram post' },
      { src: '/assets/dancer-reels.jpeg',                 alt: 'CBT dancer reels' },
    ],
    body: [
      `I led a comprehensive rebrand for Children's Ballet Theatre, crafting a new logo that balances elegance and accessibility — perfectly suited for young dancers and their families. That fresh identity became the foundation for the Nutcracker show's marketing campaign: from striking posters and program covers to animated social-media teasers and targeted email newsletters.`,
      `By weaving the magic of the Nutcracker story through every touchpoint, the campaign not only sold out performances but also deepened CBT's connection with the community, bolstered partnerships, and set a new benchmark for seasonal promotions.`,
    ],
  },
  {
    id: 'repat',
    label: 'Cross-Marketing',
    title: 'Project Repat × Gumseat Productions',
    subtitle: 'Cross-Marketing Campaign',
    goals: [
      'Drive sales for Project Repat\'s t-shirt blankets via QR-code stickers on outbound orders',
      'Generate new whole-apparel orders for Gumseat Productions through reciprocal marketing',
      'Boost awareness of Project Repat\'s offering among apparel customers',
      'Leverage Instagram content to amplify reach and engagement for both brands',
    ],
    images: [
      { src: '/assets/pr1.jpg', alt: 'Social media example' },
      { src: '/assets/pr2.jpg', alt: 'Social media example' },
      { src: '/assets/pr3.jpg', alt: 'Social media example' },
      { src: '/assets/pr4.jpg', alt: 'Social media example' },
    ],
    body: [
      `In collaboration with Gumseat Productions, I orchestrated a cross-marketing initiative with Project Repat. We affixed QR-code stickers to every full-apparel order, directing customers straight to Project Repat's t-shirt blanket website to drive incremental sales.`,
      `To complement the physical touchpoints, I strategized and managed an Instagram campaign featuring behind-the-scenes content and clear calls to action. This multi-channel approach heightened brand awareness, engagement, and order volume for both partners.`,
    ],
  },
  {
    id: 'a1cu',
    label: 'Communications Lead',
    title: 'American 1 Credit Union',
    subtitle: 'Communications Specialist & Team Lead',
    goals: [
      'Establish a cohesive brand voice across all member communications',
      'Drive member engagement and new account growth through targeted campaigns',
      'Lead, mentor, and streamline the marketing team\'s project workflow',
      'Optimize digital and email content performance with analytics-driven insights',
      'Maintain regulatory compliance and brand consistency across all channels',
    ],
    images: [
      { src: '/assets/Carousel-Mockup.jpg',          alt: 'Meta Carousel ad examples' },
      { src: '/assets/A1CU car sale.png',             alt: 'A1CU car sale campaign' },
      { src: '/assets/A1CU instagram reel.png',       alt: 'A1CU Instagram reel' },
      { src: '/assets/a1cu6.png',                     alt: 'A1CU campaign asset' },
    ],
    body: [
      `As Communications Specialist and Team Lead at American 1 Credit Union, I drive integrated marketing initiatives that embody core values — Boldly Generous, Convenient, Uncomplicated Banking. I develop clear, empathetic messaging for email newsletters, social media, website content, and branch communications, ensuring every touchpoint resonates with members and prospects.`,
      `By implementing a structured content calendar, standardized templates, and regular analytics reviews, I increased email open rates by over 20% and boosted social engagement by 35%. I also mentor junior staff, foster cross-department collaboration, and ensure all materials comply with financial regulations and brand guidelines.`,
    ],
    metrics: [
      { num: '20%+', label: 'Email Open Rate Increase' },
      { num: '35%',  label: 'Social Engagement Lift' },
    ],
  },
]
