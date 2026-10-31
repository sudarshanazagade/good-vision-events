// Complete event data matching Good Vision Events (Pune)

export const COMPANY_INFO = {
  name: "Good Vision",
  tagline: "EVENTS · PUNE",
  motto: "Moments, masterfully staged.",
  description: "Full-service event management for weddings, corporate gatherings, celebrations and brand experiences across Pune and Maharashtra.",
  phone: "+91 98765 43210",
  phoneRaw: "919876543210",
  email: "hello@goodvisionevents.in",
  address: "Office 402, Koregaon Park, Pune, Maharashtra 411001",
  hours: "Monday – Saturday: 10:00 AM – 7:00 PM | Sunday: By Appointment",
  stats: [
    { value: "50+", label: "Events Planned" },
    { value: "40+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "100%", label: "Satisfaction" }
  ]
};

export const SERVICES = [
  {
    id: "corporate",
    number: "01",
    title: "Corporate Events",
    shortDesc: "Conferences, product launches, team-building, award ceremonies",
    fullDesc: "From intimate board meetings to large-scale conferences, we handle every detail so you can focus on your message.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    icon: "briefcase",
    features: [
      "Venue sourcing and booking",
      "Stage design and branding",
      "Audio-visual equipment and tech support",
      "Catering coordination",
      "Registration and guest management",
      "On-site event coordination"
    ],
    ctaText: "Get a Corporate Event Quote →"
  },
  {
    id: "weddings",
    number: "02",
    title: "Weddings",
    shortDesc: "Dream weddings with personalised planning and flawless execution",
    fullDesc: "Your dream wedding, flawlessly executed. We handle everything from venue selection to the final send-off.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    icon: "rings",
    features: [
      "Venue selection and decor",
      "Vendor management (caterers, photographers, florists, entertainment)",
      "Theme and colour palette design",
      "Timeline creation and day-of coordination",
      "Budget management",
      "Guest accommodation coordination"
    ],
    ctaText: "Plan Your Wedding →"
  },
  {
    id: "social",
    number: "03",
    title: "Social Celebrations",
    shortDesc: "Birthdays, anniversaries, engagements, reunions",
    fullDesc: "Birthdays, anniversaries, engagements, reunions – we make your special occasions truly special.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    icon: "party",
    features: [
      "Theme conceptualisation",
      "Venue decoration and styling",
      "Entertainment and activities planning",
      "Catering and cake coordination",
      "Invitations and guest management",
      "Photography and videography coordination"
    ],
    ctaText: "Plan Your Celebration →"
  },
  {
    id: "private",
    number: "04",
    title: "Private & Family Functions",
    shortDesc: "Intimate gatherings and milestone family rituals",
    fullDesc: "Intimate gatherings and milestone celebrations with personalised touches that reflect your family's unique story.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    icon: "heart",
    features: [
      "Customised event design",
      "Traditional ceremony coordination",
      "Family-style catering arrangements",
      "Cultural and religious ritual management",
      "Intimate venue styling",
      "Dedicated guest hospitality"
    ],
    ctaText: "Plan Your Family Event →"
  },
  {
    id: "brand",
    number: "05",
    title: "Brand Activations",
    shortDesc: "Pop-up experiences, roadshows, experiential marketing",
    fullDesc: "Experiential marketing that engages your audience and amplifies your brand message.",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    icon: "megaphone",
    features: [
      "Pop-up experience design",
      "Roadshow planning and execution",
      "Trade show booth design and management",
      "Product launch events",
      "Influencer and media coordination",
      "ROI tracking and reporting"
    ],
    ctaText: "Activate Your Brand →"
  }
];

export const TRUST_PILLARS = [
  {
    id: 1,
    title: "End-to-End Planning",
    desc: "One team from first idea to final cleanup.",
    icon: "clipboard-check"
  },
  {
    id: 2,
    title: "Creative & Custom Designs",
    desc: "Nothing off-the-shelf. Every event, its own story.",
    icon: "palette"
  },
  {
    id: 3,
    title: "On-Time, On-Budget",
    desc: "Transparent costing and run-sheets to the minute.",
    icon: "clock"
  },
  {
    id: 4,
    title: "Trusted Vendor Network",
    desc: "Hand-picked caterers, decorators and artists.",
    icon: "handshake"
  },
  {
    id: 5,
    title: "Stress-Free Experience",
    desc: "You enjoy the day. We handle the what-ifs.",
    icon: "shield-check"
  }
];

export const PORTFOLIO_ITEMS = [
  {
    id: "p1",
    title: "Corporate Tech Conference",
    category: "Corporate",
    guests: "500 guests",
    location: "Pune Convention Center",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=80",
    highlight: "Dual LED stage, live streaming for global offices, and synchronized breakout tracks."
  },
  {
    id: "p2",
    title: "Traditional Maharashtrian Wedding",
    category: "Weddings",
    guests: "800 guests",
    location: "Lavasa",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=900&q=80",
    highlight: "Custom marigold and brass floral mandap overlooking the lake, heritage shehnai ensemble."
  },
  {
    id: "p3",
    title: "50th Birthday Celebration",
    category: "Social",
    guests: "150 guests",
    location: "Private Farmhouse",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80",
    highlight: "Fairy-lit orchard canopy, retro live band, nostalgic photo gallery timeline."
  },
  {
    id: "p4",
    title: "Product Launch Event",
    category: "Activations",
    guests: "200 guests",
    location: "Hyatt, Pune",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=900&q=80",
    highlight: "Dramatic kabuki curtain drop, bespoke laser show, customized interactive demo pods."
  },
  {
    id: "p5",
    title: "Engagement Ceremony",
    category: "Weddings",
    guests: "300 guests",
    location: "Baner, Pune",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
    highlight: "Pastel hydrangeas and eucalyptus arch, ambient warm candle styling, acoustic jazz duo."
  },
  {
    id: "p6",
    title: "Annual Awards Night",
    category: "Corporate",
    guests: "400 guests",
    location: "JW Marriott, Pune",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=900&q=80",
    highlight: "Black-tie red carpet, crystal awards backdrop, coordinated light sequences and 5-course banquet."
  },
  {
    id: "p7",
    title: "Team Building Retreat",
    category: "Corporate",
    guests: "80 guests",
    location: "Lonavala",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80",
    highlight: "Outdoor obstacle courses, campfire musical evening, and team synergy workshops."
  },
  {
    id: "p8",
    title: "Baby Shower",
    category: "Social",
    guests: "50 guests",
    location: "Kalyani Nagar, Pune",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=900&q=80",
    highlight: "Whimsical hot air balloon installation, bespoke artisanal patisserie table, customized favors."
  },
  {
    id: "p9",
    title: "Brand Pop-Up Experience",
    category: "Activations",
    guests: "1000+ visitors",
    location: "Phoenix Mall, Pune",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80",
    highlight: "Immense footfall engagement, infinity mirror photo booth, social media viral sensation."
  },
  {
    id: "p10",
    title: "Anniversary Celebration",
    category: "Social",
    guests: "200 guests",
    location: "The O Hotel, Pune",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=80",
    highlight: "Silver jubilee champagne tower, vintage car entry, live saxophone performance."
  },
  {
    id: "p11",
    title: "College Reunion",
    category: "Social",
    guests: "250 guests",
    location: "Pune Club",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=80",
    highlight: "Nostalgic 90s theme party, college cafeteria food stations, retro DJ set."
  },
  {
    id: "p12",
    title: "Diwali Corporate Party",
    category: "Corporate",
    guests: "350 guests",
    location: "The Westin, Pune",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=900&q=80",
    highlight: "Traditional earthen diya avenues, fusion dance troupes, royal Rajasthani banquet."
  }
];

export const THEMES = [
  {
    id: "royal-marigold",
    title: "Royal Marigold",
    category: "Weddings",
    tagline: "A traditional celebration in marigold, crimson and brass.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    elements: ["Floral mandap", "Traditional entrance", "Brass accents"]
  },
  {
    id: "garden-romance",
    title: "Garden Romance",
    category: "Weddings",
    tagline: "An open-air wedding with pastel florals and intimate garden tables.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    elements: ["Floral aisle", "Pastel tablescapes", "Garden lighting"]
  },
  {
    id: "emerald-awards-gala",
    title: "Emerald Awards Gala",
    category: "Corporate",
    tagline: "A polished awards evening with emerald accents and a statement stage.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
    elements: ["Awards stage", "Formal dining", "Ambient lighting"]
  },
  {
    id: "modern-summit",
    title: "Modern Summit",
    category: "Corporate",
    tagline: "Clean geometry and a coordinated brand palette for conferences.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    elements: ["Branded stage", "Registration styling", "Breakout zones"]
  },
  {
    id: "pastel-party",
    title: "Pastel Party",
    category: "Birthdays",
    tagline: "Playful balloons, a sweet dessert table and fresh pastel colours.",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80",
    elements: ["Balloon installation", "Cake backdrop", "Party tables"]
  },
  {
    id: "milestone-elegance",
    title: "Milestone Elegance",
    category: "Birthdays",
    tagline: "A sophisticated dinner party for a landmark birthday.",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
    elements: ["Personalised backdrop", "Dinner styling", "Memory display"]
  },
  {
    id: "floral-engagement",
    title: "Floral Engagement",
    category: "Social Celebrations",
    tagline: "Warm florals and a ceremonial focal point for an engagement.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80",
    elements: ["Ring ceremony stage", "Floral entrance", "Photo corner"]
  },
  {
    id: "anniversary-garden",
    title: "Anniversary Garden",
    category: "Social Celebrations",
    tagline: "A relaxed garden gathering celebrating a shared story.",
    image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80",
    elements: ["Memory corner", "Garden tables", "Floral centrepieces"]
  },
  {
    id: "little-blossom",
    title: "Little Blossom",
    category: "Private Functions",
    tagline: "Soft pastels and delicate flowers for a baby shower or naming ceremony.",
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
    elements: ["Welcome backdrop", "Family seating", "Dessert styling"]
  },
  {
    id: "traditional-family-gathering",
    title: "Traditional Family Gathering",
    category: "Private Functions",
    tagline: "Marigold garlands and warm brass details for family rituals.",
    image: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&w=800&q=80",
    elements: ["Ceremony space", "Ritual coordination", "Traditional florals"]
  },
  {
    id: "signature-launch",
    title: "Signature Launch",
    category: "Brand Activations",
    tagline: "A bold reveal stage designed around your product and brand colours.",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
    elements: ["Product display", "Reveal lighting", "Media backdrop"]
  },
  {
    id: "garden-pop-up",
    title: "Garden Pop-Up",
    category: "Brand Activations",
    tagline: "An inviting outdoor experience for lifestyle and community brands.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    elements: ["Styled display", "Sampling station", "Photo moment"]
  }
];

export const PACKAGES = [
  {
    id: "wedding-essentials",
    title: "Wedding Essentials",
    category: "Weddings",
    tagline: "Focused planning for your main wedding ceremony.",
    price: "Custom quote",
    features: [
      "Ceremony timeline",
      "Mandap and venue styling",
      "Vendor coordination",
      "Wedding-day supervision"
    ]
  },
  {
    id: "complete-wedding-experience",
    title: "Complete Wedding Experience",
    category: "Weddings",
    tagline: "A coordinated celebration from the first ritual to the reception.",
    price: "Custom quote",
    popular: true,
    features: [
      "Multi-function planning",
      "Theme and decor design",
      "Vendor sourcing and budget planning",
      "Guest hospitality coordination",
      "Dedicated on-site planning team"
    ]
  },
  {
    id: "conference-essentials",
    title: "Conference Essentials",
    category: "Corporate",
    tagline: "A well-organised meeting, seminar or business conference.",
    price: "Custom quote",
    features: [
      "Agenda and run sheet",
      "Stage and AV coordination",
      "Registration management",
      "On-site event lead"
    ]
  },
  {
    id: "corporate-gala-awards",
    title: "Corporate Gala & Awards",
    category: "Corporate",
    tagline: "A complete evening of recognition, entertainment and hospitality.",
    price: "Custom quote",
    popular: true,
    features: [
      "Show flow and award cues",
      "Stage, lighting and branding",
      "Entertainment coordination",
      "Catering and guest hospitality",
      "Production team supervision"
    ]
  },
  {
    id: "birthday-essentials",
    title: "Birthday Essentials",
    category: "Birthdays",
    tagline: "A cheerful celebration with the key details taken care of.",
    price: "Custom quote",
    features: [
      "Theme and balloon styling",
      "Cake-table setup",
      "Games coordination",
      "Day-of setup management"
    ]
  },
  {
    id: "signature-birthday",
    title: "Signature Birthday Celebration",
    category: "Birthdays",
    tagline: "A personalised party for a milestone worth celebrating.",
    price: "Custom quote",
    popular: true,
    features: [
      "Custom concept and decor",
      "Venue and catering coordination",
      "Entertainment planning",
      "Photography coordination",
      "Dedicated party coordinator"
    ]
  },
  {
    id: "engagement-celebration",
    title: "Engagement Celebration",
    category: "Social",
    tagline: "Thoughtful styling and smooth coordination for your engagement.",
    price: "Custom quote",
    features: [
      "Ceremony schedule",
      "Stage and floral decor",
      "Catering coordination",
      "Guest and vendor management"
    ]
  },
  {
    id: "anniversary-reunion",
    title: "Anniversary & Reunion",
    category: "Social",
    tagline: "A gathering shaped around memories, music and togetherness.",
    price: "Custom quote",
    features: [
      "Personalised event concept",
      "Venue and dining coordination",
      "Memory wall styling",
      "Live entertainment coordination",
      "On-site management"
    ]
  },
  {
    id: "intimate-family-function",
    title: "Intimate Family Function",
    category: "Private",
    tagline: "A warm, carefully planned gathering for your family.",
    price: "Custom quote",
    features: [
      "Ceremony coordination",
      "Intimate decor setup",
      "Family-style catering coordination",
      "On-site support"
    ]
  },
  {
    id: "baby-shower-naming",
    title: "Baby Shower & Naming Ceremony",
    category: "Private",
    tagline: "A gentle, personal celebration of a new chapter.",
    price: "Custom quote",
    features: [
      "Custom theme and backdrop",
      "Ritual and family schedule",
      "Games and activity planning",
      "Catering and photography coordination",
      "Event-day management"
    ]
  },
  {
    id: "product-launch",
    title: "Product Launch",
    category: "Activations",
    tagline: "A launch built around a strong first impression.",
    price: "Custom quote",
    popular: true,
    features: [
      "Launch concept and show flow",
      "Reveal stage and AV",
      "Branding and product displays",
      "Media and guest coordination",
      "Production supervision"
    ]
  },
  {
    id: "popup-roadshow",
    title: "Pop-Up & Roadshow",
    category: "Activations",
    tagline: "An audience-focused brand experience on location.",
    price: "Custom quote",
    features: [
      "Activation concept",
      "Booth and experience design",
      "Staffing and logistics coordination",
      "Sampling and visitor flow",
      "Post-event reporting scope"
    ]
  }
];

export const STANDALONE_SERVICES = [
  {
    id: "decor",
    title: "Decor & Styling",
    desc: "For an occasion that already has a plan, but needs a distinctive look.",
    icon: "sparkles",
    items: ["Theme and colour concept", "Stage or backdrop styling", "Florals and table decor"]
  },
  {
    id: "av",
    title: "Audio-Visual & Technical",
    desc: "Sound, lights and screens that perform without a hitch.",
    icon: "volume-2",
    items: ["Sound engineering & microphones", "Ambient & theatrical lighting", "LED walls and projection"]
  },
  {
    id: "hospitality",
    title: "Hospitality & Guest Management",
    desc: "Warm welcomes and seamless logistics from arrival to departure.",
    icon: "users",
    items: ["RSVP tracking & follow-ups", "Airport/station guest transfers", "Hotel check-in & welcome kits"]
  },
  {
    id: "entertainment",
    title: "Entertainment & Artists",
    desc: "Music, emcees and performers matched to your event's vibe.",
    icon: "music",
    items: ["Live bands & acoustic acts", "Celebrity & professional emcees", "Choreographers & cultural troupes"]
  },
  {
    id: "photography",
    title: "Photography & Videography",
    desc: "Capturing every candid smile, grand reveal and quiet tear.",
    icon: "camera",
    items: ["Candid & traditional photography", "Cinematic highlight films", "Same-day edit teasers"]
  }
];

export const TESTIMONIALS = [
  {
    id: "t1",
    quote: "Working with this team was absolutely seamless. They took our vague ideas and turned them into a stunning corporate gala that impressed all our stakeholders. Professional, creative, and flawless on every detail.",
    name: "Priya Sharma",
    role: "Marketing Director, TechCorp",
    event: "Corporate Gala 2025",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t2",
    quote: "Our wedding was everything we dreamed of and more. The team understood our vision perfectly and executed it with such precision. Every guest commented on how beautiful and well-organised everything was.",
    name: "Anjali & Rohit Deshmukh",
    role: "Newlyweds",
    event: "Wedding, December 2024",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t3",
    quote: "The best event planners in Pune! They handled our 500-person conference with ease. From registration to the final keynote, everything ran on time. The stage design was breathtaking. Worth every rupee!",
    name: "Vikram Patel",
    role: "CEO, Innovate Solutions",
    event: "Annual Conference 2025",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t4",
    quote: "I was planning my parents' 50th anniversary from another city, and this team made it so easy. Regular updates, remote coordination, and the final event was perfect. My parents were thrilled!",
    name: "Sneha Kulkarni",
    role: "Daughter & host",
    event: "Anniversary Celebration, 2025",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t5",
    quote: "Professional, creative, and incredibly organised. They managed our brand activation across 3 cities, each executed perfectly. They went above and beyond to land our brand message.",
    name: "Arjun Mehta",
    role: "Brand Manager, FMCG Co.",
    event: "Pan-India Roadshow, 2025",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
  },
  {
    id: "t6",
    quote: "Our team offsite in Lonavala was the most talked-about event of the year. They balanced workshops and fun beautifully, and handled every travel hiccup before we even noticed.",
    name: "Rahul Joshi",
    role: "HR Head, FinEdge",
    event: "Team Retreat, 2025",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80"
  }
];

export const TEAM_MEMBERS = [
  {
    id: "tm1",
    name: "Abhi Zagade",
    role: "Founder & Lead Planner",
    bio: "5+ years in event management, specialises in corporate events and weddings.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  },
  {
    id: "tm2",
    name: "Meera Kulkarni",
    role: "Creative Director",
    bio: "Set designer turned event stylist; obsessed with florals and lighting.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  },
  {
    id: "tm3",
    name: "Aditya Pawar",
    role: "Operations Head",
    bio: "Logistics specialist who has run 1,000-guest productions to the minute.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  },
  {
    id: "tm4",
    name: "Riya Shah",
    role: "Client Experience Lead",
    bio: "Your first call and calm voice from enquiry to the final thank-you.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com"
  }
];

export const HOW_WE_WORK_PHASES = [
  {
    number: "Phase 1",
    title: "Discovery & Alignment",
    desc: "A relaxed 45-minute conversation — in person, on call or over chai — to understand who your guests are and how you want them to feel."
  },
  {
    number: "Phase 2",
    title: "Concept & Moodboards",
    desc: "We translate your thoughts into 3D sketches, color palettes, stage layouts, and custom decor renderings for your feedback."
  },
  {
    number: "Phase 3",
    title: "Vendor Matchmaking",
    desc: "We curate the finest caterers, florists, photographers, and artists suited to your budget and negotiate on your behalf."
  },
  {
    number: "Phase 4",
    title: "Master Run-Sheet",
    desc: "A minute-by-minute execution timeline distributed to all vendors so everyone is synchronized weeks in advance."
  },
  {
    number: "Phase 5",
    title: "Flawless Execution",
    desc: "Our on-ground production crew handles setup, coordination, soundchecks, and troubleshooting. You just show up and celebrate."
  }
];

export const FAQS = [
  {
    q: "How far in advance should we book your services?",
    a: "For weddings: 6-12 months. For corporate events: 2-6 months. For social celebrations: 1-3 months. However, if you are working with shorter timelines, reach out — we love a fast turnaround challenge!"
  },
  {
    q: "What budgets do you work with?",
    a: "We work with budgets starting from ₹50,000 for intimate events up to ₹50 lakhs+ for large-scale multi-day productions. Every quote is transparent and itemized."
  },
  {
    q: "Can we use our own vendors?",
    a: "Absolutely! We're happy to coordinate with your preferred vendors or recommend hand-picked professionals from our trusted partner network."
  },
  {
    q: "What does full-service event management include?",
    a: "Everything from initial concept to final cleanup: design, vendor management, logistics, coordination, day-of troubleshooting, and post-event wrap up."
  },
  {
    q: "Do you plan destination events outside Pune?",
    a: "While based in Pune, we plan events across Maharashtra (Lavasa, Lonavala, Alibaug, Mahabaleshwar, Mumbai) and can travel nationwide for destination celebrations."
  }
];

export const BLOG_POSTS = [
  {
    id: "b1",
    title: "10 Tips for Planning a Stress-Free Corporate Event",
    readTime: "5 min read",
    category: "Corporate",
    date: "Jan 2026",
    summary: "From agenda pacing to backup AV, the small decisions that keep corporate days calm and delegates engaged.",
    content: "Corporate events represent your brand's reputation. Begin by defining a singular core objective for the conference or gala. Build in 15-minute buffer periods between keynote speakers. Always verify the venue's backup power and dedicated Wi-Fi bandwidth for live demos. Ensure sound engineering is tested with the actual presenters before the ballroom opens."
  },
  {
    id: "b2",
    title: "How to Choose the Perfect Wedding Venue in Pune",
    readTime: "6 min read",
    category: "Weddings",
    date: "Feb 2026",
    summary: "Lawns, banquets or heritage wadas — how to match the venue to your guest list and mood in Maharashtra.",
    content: "Pune boasts a rich variety of event settings, from lush open lawns along the river to regal heritage wadas in the outskirts and 5-star hotel ballrooms in Koregaon Park and Senapati Bapat Road. When choosing, consider travel logistics during peak Pune traffic hours, valet parking availability, weather contingency plans for outdoor mandaps, and catering restrictions."
  },
  {
    id: "b3",
    title: "Budget Breakdown: What to Expect for a 100-Guest Event",
    readTime: "4 min read",
    category: "Planning",
    date: "Mar 2026",
    summary: "An honest, line-by-line look at where the money goes and where you can save without sacrificing quality.",
    content: "A standard celebration budget allocates approximately 40% to venue and food & beverage, 25% to styling, florals and decor, 15% to entertainment, audio/visual and lighting, 10% to photography and media, and 10% to coordination and contingency. The smartest way to save is selecting a venue that already possesses architectural character."
  },
  {
    id: "b4",
    title: "Trends in Event Design for 2026",
    readTime: "5 min read",
    category: "Design Trends",
    date: "Feb 2026",
    summary: "Sustainable florals, immersive lighting and the return of the long banquet table.",
    content: "2026 is the year of organic luxury. Couples and corporate hosts are stepping away from synthetic materials in favor of potted plants, locally harvested marigolds and tuberose, handloom table linens, and architectural uplighting. Long communal banquet tables encourage genuine connection."
  },
  {
    id: "b5",
    title: "Checklist: 3 Months Before Your Event",
    readTime: "4 min read",
    category: "Checklists",
    date: "Jan 2026",
    summary: "A printable countdown so nothing slips through the cracks.",
    content: "At the 90-day mark, lock in your primary vendor contracts: caterer tasting, photographer shot list, DJ playlist preferences, and floral color schemes. Send out formal save-the-dates or digital invitations with RSVP tracking. Schedule your hair and makeup trial or tech rehearsals."
  },
  {
    id: "b6",
    title: "How to Create a Memorable Brand Activation",
    readTime: "5 min read",
    category: "Marketing",
    date: "Mar 2026",
    summary: "Why the best activations feel like a gift, not an advert.",
    content: "Modern consumers avoid aggressive sales pitches. Successful activations provide an authentic experiential moment: a custom fragrance blending station, an interactive digital art wall, or an unexpected sensory surprise that naturally invites attendees to photograph and share on Instagram and LinkedIn."
  },
  {
    id: "b7",
    title: "Top 5 Wedding Venues in Pune for 2026",
    readTime: "7 min read",
    category: "Venues",
    date: "Jan 2026",
    summary: "Our planners' shortlist, with capacities, seasons and insider notes.",
    content: "1. The Westin Pune Koregaon Park (Magnificent pillarless ballroom & poolside lawns). 2. JW Marriott Pune (State-of-the-art grand ballroom). 3. Oxford Golf Resort (Breathtaking hillside green vistas). 4. Corinthians Resort (Egyptian architecture & expansive open amphitheatres). 5. Fort JadhavGADH (Authentic royal Maratha heritage setting)."
  },
  {
    id: "b8",
    title: "DIY vs. Professional Event Planning",
    readTime: "5 min read",
    category: "Advice",
    date: "Feb 2026",
    summary: "When doing it yourself works — and when it quietly costs more.",
    content: "While DIY planning seems economical on paper, hidden costs quickly accumulate: retail rental fees, lack of trade discounts, logistics panic on event morning, and inability for hosts to actually be present with their guests. A professional planner brings vendor buying power that often offsets the management fee."
  },
  {
    id: "b9",
    title: "How to Manage Event Vendors Effectively",
    readTime: "4 min read",
    category: "Logistics",
    date: "Feb 2026",
    summary: "Contracts, call sheets and the one WhatsApp group rule we swear by.",
    content: "Clear communication prevents misunderstandings. Maintain a single unified run-sheet specifying arrival, setup, soundcheck, and strike timings. Limit WhatsApp group chatter to essential broadcast updates, assigning an on-site stage manager as the sole point of contact during the event."
  }
];
