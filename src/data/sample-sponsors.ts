import { DeluxeBoothData, StandardBoothData, Pathway } from '@/types/booth'

// Platinum Tier Sponsors (Deluxe Booths)
export const techCorpSponsor: DeluxeBoothData = {
  id: 'deluxe-booth-template',
  name: 'Deluxe Booth\nTemplate',
  slug: 'deluxe-booth-template',
  tier: 'platinum',
  industry: 'Technology',
  isPostSecondary: false,
  pathway: 'direct-to-workplace' as Pathway,
  isPrize: true,
  logo: '/logos/industry-immersion-series.svg',
  tagline: 'Premium Sponsor Experience',
  description: 'Deluxe Booth Template is a leading technology company specializing in AI, cloud computing, and sustainable tech solutions. For over 20 years, we\'ve been at the forefront of digital transformation, helping businesses and communities thrive in the digital age. Our mission is to create innovative solutions that make a positive impact on society while fostering the next generation of tech leaders through comprehensive internship programs and mentorship opportunities.',
  website: 'https://example.com/techcorp',
  quickFacts: [
    {
      icon: 'building',
      label: 'Founded',
      value: '2003'
    },
    {
      icon: 'users',
      label: 'Employees',
      value: '5,000+'
    },
    {
      icon: 'globe',
      label: 'Offices',
      value: '12 Countries'
    },
    {
      icon: 'award',
      label: 'Industry',
      value: 'Technology & AI'
    }
  ],
  video: {
    url: 'https://www.youtube.com/watch?v=87uU-eFE4_E',
    type: 'youtube',
    title: 'Why Micro Grants??',
    description: 'Discover what makes TechCorp a great place to start your career',
    thumbnail: 'https://via.placeholder.com/1280x720/667eea/FFFFFF?text=Watch+Our+Story'
  },
  resources: [
    {
      title: 'Career Pathways Guide',
      description: 'Explore different career paths in technology and find your perfect fit',
      url: 'https://example.com/career-guide.pdf',
      type: 'pdf',
      fileSize: '2.4 MB'
    },
    {
      title: 'Summer Internship Program',
      description: 'Learn about our 12-week immersive internship experience',
      url: 'https://example.com/internship-info',
      type: 'link'
    },
    {
      title: 'Tech Skills Workshop Series',
      description: 'Free online workshops covering AI, web development, and cybersecurity',
      url: 'https://example.com/workshops',
      type: 'video'
    },
    {
      title: 'Company Culture Handbook',
      description: 'Discover our values, benefits, and what makes us unique',
      url: 'https://example.com/culture.pdf',
      type: 'pdf',
      fileSize: '1.8 MB'
    },
    {
      title: 'Student Success Stories',
      description: 'Read about students who launched their careers with TechCorp',
      url: 'https://example.com/success-stories',
      type: 'document'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed?start=false&loop=false&delayms=3000',
    title: 'Your Session Deck Here',
    description: 'An interactive presentation on emerging tech careers and how to prepare for them'
  },
  engagementActivity: {
    embedUrl: 'about:blank',
    embedType: 'skills-gap-quiz',
    title: 'Tech Trivia Challenge',
    description: 'Test your knowledge about technology and innovation. Top scorers win exclusive TechCorp swag!',
    prize: {
      title: 'TechCorp Innovation Kit',
      description: 'Includes a laptop bag, wireless headphones, and coding resources worth $200'
    },
    duration: '10 minutes'
  },
  primaryCTA: {
    text: 'Explore Careers',
    url: 'https://example.com/careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Book a 1-on-1 Chat',
    url: 'https://example.com/schedule',
    type: 'contact'
  },
  contact: {
    email: 'students@techcorp.example.com',
    phone: '1-800-TECH-CORP',
    headquarters: {
      address: '123 Innovation Drive',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5V 3A8'
    },
    internshipInfo: {
      available: true,
      period: 'Summer 2024 (May - August)',
      applicationUrl: 'https://example.com/apply-internship'
    },
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/company/techcorp'
      },
      {
        platform: 'twitter',
        url: 'https://twitter.com/techcorp'
      },
      {
        platform: 'instagram',
        url: 'https://instagram.com/techcorp'
      },
      {
        platform: 'tiktok',
        url: 'https://tiktok.com/@techcorp'
      }
    ]
  },
  brandColors: {
    primary: '#0092FF',
    secondary: '#667eea',
    accent: '#22224C'
  }
}

export const healthPlusSponsor: DeluxeBoothData = {
  id: 'healthplus-medical',
  name: 'HealthPlus\nMedical',
  slug: 'healthplus-medical',
  tier: 'platinum',
  industry: 'Healthcare',
  isPostSecondary: false,
  pathway: 'university' as Pathway,
  isPrize: false,
  logo: '/logos/industry-immersion-series.svg',
  tagline: 'Advancing Healthcare Through Innovation',
  description: 'HealthPlus Medical is a premier healthcare network operating 50+ hospitals and clinics across Canada. We combine cutting-edge medical technology with compassionate care to improve patient outcomes. Join our team of 15,000 healthcare professionals and make a difference in communities nationwide.',
  website: 'https://example.com/healthplus',
  quickFacts: [
    {
      icon: 'building',
      label: 'Founded',
      value: '1995'
    },
    {
      icon: 'users',
      label: 'Employees',
      value: '15,000+'
    },
    {
      icon: 'globe',
      label: 'Locations',
      value: '50+ Facilities'
    },
    {
      icon: 'award',
      label: 'Speciality',
      value: 'Healthcare Innovation'
    }
  ],
  video: {
    url: 'https://www.youtube.com/watch?v=87uU-eFE4_E',
    type: 'youtube',
    title: 'Life at HealthPlus',
    description: 'See how our team is transforming healthcare delivery',
    thumbnail: 'https://via.placeholder.com/1280x720/10b981/FFFFFF?text=HealthPlus'
  },
  resources: [
    {
      title: 'Healthcare Career Guide',
      description: 'Explore diverse career paths in modern healthcare',
      url: 'https://example.com/health-careers.pdf',
      type: 'pdf',
      fileSize: '3.2 MB'
    },
    {
      title: 'Residency Programs',
      description: 'Learn about our medical residency and fellowship opportunities',
      url: 'https://example.com/residency',
      type: 'link'
    },
    {
      title: 'Nursing Excellence Program',
      description: 'Discover our award-winning nursing development program',
      url: 'https://example.com/nursing',
      type: 'document'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed',
    title: 'Future of Healthcare',
    description: 'Exploring emerging roles in digital health and telemedicine'
  },
  engagementActivity: {
    embedUrl: 'about:blank',
    embedType: 'iframe',
    title: 'Medical Terminology Quiz',
    description: 'Test your knowledge of medical terms and win prizes!',
    prize: {
      title: 'HealthPlus Care Package',
      description: 'Stethoscope, medical reference books, and wellness items'
    },
    duration: '15 minutes'
  },
  primaryCTA: {
    text: 'View Open Positions',
    url: 'https://example.com/healthplus-careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Schedule Virtual Tour',
    url: 'https://example.com/tour',
    type: 'contact'
  },
  contact: {
    email: 'careers@healthplus.com',
    phone: '1-888-HEALTH-1',
    headquarters: {
      address: '789 Medical Plaza',
      city: 'Calgary',
      province: 'AB',
      postalCode: 'T2P 3G3'
    },
    internshipInfo: {
      available: true,
      period: 'Multiple rotations available',
      applicationUrl: 'https://example.com/health-apply'
    },
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/company/healthplus'
      },
      {
        platform: 'twitter',
        url: 'https://twitter.com/healthplus'
      }
    ]
  },
  brandColors: {
    primary: '#10b981',
    secondary: '#06b6d4',
    accent: '#0891b2'
  }
}

export const globalFinanceSponsor: DeluxeBoothData = {
  id: 'global-finance-group',
  name: 'Global Finance\nGroup',
  slug: 'global-finance-group',
  tier: 'platinum',
  industry: 'Finance',
  isPostSecondary: false,
  pathway: 'university' as Pathway,
  isPrize: false,
  logo: '/logos/industry-immersion-series.svg',
  tagline: 'Empowering Financial Futures',
  description: 'Global Finance Group is one of Canada\'s Big Five banks, managing over $800 billion in assets. We offer comprehensive financial services including retail banking, wealth management, and capital markets. Our commitment to innovation and client success has made us a leader in digital banking transformation.',
  website: 'https://example.com/globalfinance',
  quickFacts: [
    {
      icon: 'building',
      label: 'Founded',
      value: '1869'
    },
    {
      icon: 'users',
      label: 'Employees',
      value: '45,000+'
    },
    {
      icon: 'globe',
      label: 'Branches',
      value: '1,200+'
    },
    {
      icon: 'award',
      label: 'Assets',
      value: '$800B+'
    }
  ],
  video: {
    url: 'https://www.youtube.com/watch?v=87uU-eFE4_E',
    type: 'youtube',
    title: 'Your Career in Finance',
    description: 'Discover opportunities in modern banking and finance',
    thumbnail: 'https://via.placeholder.com/1280x720/6366f1/FFFFFF?text=Global+Finance'
  },
  resources: [
    {
      title: 'Finance Career Roadmap',
      description: 'Navigate your path in banking, investments, and fintech',
      url: 'https://example.com/finance-roadmap.pdf',
      type: 'pdf',
      fileSize: '2.8 MB'
    },
    {
      title: 'Analyst Development Program',
      description: 'Two-year rotational program for new graduates',
      url: 'https://example.com/analyst-program',
      type: 'link'
    },
    {
      title: 'FinTech Innovation Lab',
      description: 'Explore our initiatives in blockchain and digital payments',
      url: 'https://example.com/fintech',
      type: 'video'
    }
  ],
  sessionSlides: {
    embedUrl: 'https://docs.google.com/presentation/d/18O-hzJezWclyodc2-miroqEuJeErPGBi90b5mhNhTKQ/embed',
    title: 'Digital Banking Revolution',
    description: 'How technology is reshaping financial services'
  },
  engagementActivity: {
    embedUrl: 'about:blank',
    embedType: 'iframe',
    title: 'Investment Strategy Challenge',
    description: 'Build a mock portfolio and compete for top returns!',
    prize: {
      title: 'Finance Pro Bundle',
      description: 'Bloomberg terminal access, finance books, and calculator'
    },
    duration: '20 minutes'
  },
  primaryCTA: {
    text: 'Apply Now',
    url: 'https://example.com/gfg-careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Meet Our Team',
    url: 'https://example.com/meet-team',
    type: 'contact'
  },
  contact: {
    email: 'university@globalfinance.com',
    phone: '1-800-GFG-BANK',
    headquarters: {
      address: '100 King Street West',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5X 1A9'
    },
    internshipInfo: {
      available: true,
      period: 'Summer & Fall 2024',
      applicationUrl: 'https://example.com/gfg-internship'
    },
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/company/globalfinance'
      },
      {
        platform: 'twitter',
        url: 'https://twitter.com/globalfinance'
      },
      {
        platform: 'instagram',
        url: 'https://instagram.com/globalfinance'
      }
    ]
  },
  brandColors: {
    primary: '#6366f1',
    secondary: '#4f46e5',
    accent: '#4338ca'
  }
}

// Gold Tier Sponsors (Standard Booths)
export const greenEnergySponsor: StandardBoothData = {
  id: 'gold-booth-template',
  name: 'Gold Booth\nTemplate',
  slug: 'gold-booth-template',
  tier: 'gold',
  industry: 'Energy',
  isPostSecondary: false,
  pathway: 'college' as Pathway,
  isPrize: true,
  logo: '/logos/industry-immersion-series.svg',
  tagline: 'Enhanced Sponsor Experience',
  description: 'Gold Booth Template is a pioneering renewable energy company dedicated to developing innovative solar, wind, and energy storage solutions. We are passionate about creating a sustainable future while offering exciting career opportunities in clean technology.',
  website: 'https://example.com/greenenergy',
  video: {
    url: 'https://www.youtube.com/watch?v=87uU-eFE4_E',
    type: 'youtube',
    title: 'Our Mission for a Greener Tomorrow',
    description: 'Learn about our commitment to renewable energy and sustainability',
    thumbnail: 'https://via.placeholder.com/1280x720/10b981/FFFFFF?text=Green+Energy'
  },
  resources: [
    {
      title: 'Sustainability Careers Guide',
      description: 'Explore career opportunities in renewable energy',
      url: 'https://example.com/sustainability-careers.pdf',
      type: 'pdf',
      fileSize: '3.1 MB'
    },
    {
      title: 'Engineering Co-op Program',
      description: '8-month hands-on experience in renewable energy projects',
      url: 'https://example.com/coop-program',
      type: 'link'
    },
    {
      title: 'Virtual Facility Tour',
      description: 'Tour our solar panel manufacturing facility',
      url: 'https://example.com/virtual-tour',
      type: 'video'
    }
  ],
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScEAquY5WRgyx8Ih3-Q23q5aItGiVH6IvkvA6OftbUbfmp4ag/viewform?embedded=true',
  primaryCTA: {
    text: 'View Open Positions',
    url: 'https://example.com/careers/green-energy',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Schedule Info Session',
    url: 'https://example.com/info-session',
    type: 'contact'
  },
  contact: {
    email: 'careers@greenenergy.com',
    phone: '1-888-GREEN-01',
    headquarters: {
      address: '456 Solar Avenue',
      city: 'Vancouver',
      province: 'BC',
      postalCode: 'V6B 1A1'
    },
    internshipInfo: {
      available: true,
      period: 'Year-round opportunities',
      applicationUrl: 'https://example.com/apply-green'
    },
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/company/greenenergy'
      },
      {
        platform: 'twitter',
        url: 'https://twitter.com/greenenergy'
      }
    ]
  },
  brandColors: {
    primary: '#10b981',
    secondary: '#059669',
    accent: '#064e3b'
  }
}

export const nexusEngineeringSponsor: StandardBoothData = {
  id: 'nexus-engineering',
  name: 'Nexus\nEngineering',
  slug: 'nexus-engineering',
  tier: 'gold',
  industry: 'Engineering',
  isPostSecondary: false,
  pathway: 'university' as Pathway,
  isPrize: false,
  logo: '/logos/industry-immersion-series.svg',
  tagline: 'Engineering Excellence, Innovation Delivered',
  description: 'Nexus Engineering is a global leader in infrastructure and civil engineering projects. From bridges to smart cities, we design and build the foundations of modern society. Join our team of 8,000+ engineers working on transformative projects worldwide.',
  website: 'https://example.com/nexuseng',
  video: {
    url: 'https://www.youtube.com/watch?v=87uU-eFE4_E',
    type: 'youtube',
    title: 'Building the Future',
    description: 'See our mega-projects that shape communities',
    thumbnail: 'https://via.placeholder.com/1280x720/f59e0b/FFFFFF?text=Nexus+Engineering'
  },
  resources: [
    {
      title: 'Engineering Career Paths',
      description: 'Explore civil, mechanical, and electrical engineering roles',
      url: 'https://example.com/eng-careers.pdf',
      type: 'pdf',
      fileSize: '2.9 MB'
    },
    {
      title: 'EIT Program Guide',
      description: 'Engineer-in-Training program details and requirements',
      url: 'https://example.com/eit-program',
      type: 'document'
    },
    {
      title: 'Project Showcase',
      description: 'Virtual tour of our landmark projects',
      url: 'https://example.com/projects',
      type: 'video'
    }
  ],
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScEAquY5WRgyx8Ih3-Q23q5aItGiVH6IvkvA6OftbUbfmp4ag/viewform?embedded=true',
  primaryCTA: {
    text: 'Engineering Careers',
    url: 'https://example.com/nexus-careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Campus Ambassador',
    url: 'https://example.com/ambassador',
    type: 'application'
  },
  contact: {
    email: 'recruit@nexuseng.com',
    phone: '1-877-NEXUS-ENG',
    headquarters: {
      address: '200 Engineering Plaza',
      city: 'Ottawa',
      province: 'ON',
      postalCode: 'K1P 5J2'
    },
    internshipInfo: {
      available: true,
      period: '16-month internships',
      applicationUrl: 'https://example.com/nexus-intern'
    },
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/company/nexuseng'
      },
      {
        platform: 'instagram',
        url: 'https://instagram.com/nexuseng'
      }
    ]
  },
  brandColors: {
    primary: '#f59e0b',
    secondary: '#d97706',
    accent: '#92400e'
  }
}

export const strategyPlusSponsor: StandardBoothData = {
  id: 'strategy-plus-consulting',
  name: 'Strategy Plus\nConsulting',
  slug: 'strategy-plus-consulting',
  tier: 'gold',
  industry: 'Consulting',
  isPostSecondary: false,
  pathway: 'university' as Pathway,
  isPrize: false,
  logo: '/logos/industry-immersion-series.svg',
  tagline: 'Strategic Insights, Measurable Impact',
  description: 'Strategy Plus is a top-tier management consulting firm helping Fortune 500 companies navigate complex business challenges. Our consultants work on high-impact projects across industries, from digital transformation to market expansion strategies.',
  website: 'https://example.com/strategyplus',
  video: {
    url: 'https://www.youtube.com/watch?v=87uU-eFE4_E',
    type: 'youtube',
    title: 'Consulting at Strategy Plus',
    description: 'A day in the life of our consultants',
    thumbnail: 'https://via.placeholder.com/1280x720/ec4899/FFFFFF?text=Strategy+Plus'
  },
  resources: [
    {
      title: 'Case Interview Prep Guide',
      description: 'Master the consulting interview process',
      url: 'https://example.com/case-prep.pdf',
      type: 'pdf',
      fileSize: '4.2 MB'
    },
    {
      title: 'Analyst Bootcamp',
      description: '6-week training program for new analysts',
      url: 'https://example.com/bootcamp',
      type: 'link'
    },
    {
      title: 'Client Success Stories',
      description: 'Real projects, real impact',
      url: 'https://example.com/success',
      type: 'document'
    }
  ],
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScEAquY5WRgyx8Ih3-Q23q5aItGiVH6IvkvA6OftbUbfmp4ag/viewform?embedded=true',
  primaryCTA: {
    text: 'Join Our Team',
    url: 'https://example.com/sp-careers',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Coffee Chat',
    url: 'https://example.com/coffee-chat',
    type: 'contact'
  },
  contact: {
    email: 'recruiting@strategyplus.com',
    phone: '1-800-CONSULT',
    headquarters: {
      address: '500 Bay Street',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5G 1E2'
    },
    internshipInfo: {
      available: true,
      period: 'Summer Associate Program',
      applicationUrl: 'https://example.com/sp-summer'
    },
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/company/strategyplus'
      },
      {
        platform: 'twitter',
        url: 'https://twitter.com/strategyplus'
      }
    ]
  },
  brandColors: {
    primary: '#ec4899',
    secondary: '#db2777',
    accent: '#be185d'
  }
}

// Silver Tier Sponsors
export const digitalMarketingHubSponsor: StandardBoothData = {
  id: 'silver-booth-template',
  name: 'Silver Booth\nTemplate',
  slug: 'silver-booth-template',
  tier: 'silver',
  industry: 'Marketing',
  isPostSecondary: false,
  pathway: 'direct-to-workplace' as Pathway,
  isPrize: true,
  logo: '/logos/industry-immersion-series.svg',
  tagline: 'Standard Sponsor Experience',
  description: 'Silver Booth Template is a full-service digital marketing agency specializing in social media strategy, content creation, and data-driven marketing campaigns. Our team of creative professionals is always looking for fresh talent.',
  website: 'https://example.com/digitalmarketinghub',
  video: {
    url: 'https://www.youtube.com/watch?v=87uU-eFE4_E',
    type: 'youtube',
    title: 'Creative Careers in Digital Marketing',
    description: 'Discover opportunities in digital marketing and content creation',
    thumbnail: 'https://via.placeholder.com/1280x720/8b5cf6/FFFFFF?text=Digital+Marketing'
  },
  resources: [
    {
      title: 'Digital Marketing Basics',
      description: 'Essential guide to starting your marketing career',
      url: 'https://example.com/marketing-basics.pdf',
      type: 'pdf',
      fileSize: '2.2 MB'
    },
    {
      title: 'Portfolio Tips',
      description: 'Build a standout portfolio',
      url: 'https://example.com/portfolio-guide',
      type: 'link'
    },
    {
      title: 'Day in the Life',
      description: 'Follow our marketers through a typical day',
      url: 'https://example.com/day-in-life',
      type: 'video'
    }
  ],
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScEAquY5WRgyx8Ih3-Q23q5aItGiVH6IvkvA6OftbUbfmp4ag/viewform?embedded=true',
  primaryCTA: {
    text: 'Join Our Team',
    url: 'https://example.com/careers/dmh',
    type: 'careers'
  },
  secondaryCTA: {
    text: 'Submit a Question',
    url: 'https://example.com/contact',
    type: 'contact'
  },
  contact: {
    email: 'talent@digitalmarketinghub.com',
    phone: '1-800-DMH-JOBS',
    headquarters: {
      address: '789 Creative Street',
      city: 'Montreal',
      province: 'QC',
      postalCode: 'H2Y 1H9'
    },
    internshipInfo: {
      available: true,
      period: 'Summer 2024',
      applicationUrl: 'https://example.com/dmh-internships'
    },
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/company/dmhub'
      },
      {
        platform: 'instagram',
        url: 'https://instagram.com/dmhub'
      },
      {
        platform: 'tiktok',
        url: 'https://tiktok.com/@dmhub'
      }
    ]
  },
  brandColors: {
    primary: '#8b5cf6',
    secondary: '#7c3aed',
    accent: '#5b21b6'
  }
}

export const eduTechInnovateSponsor: StandardBoothData = {
  id: 'edutech-innovate',
  name: 'EduTech\nInnovate',
  slug: 'edutech-innovate',
  tier: 'silver',
  industry: 'Education',
  isPostSecondary: true,
  pathway: 'college' as Pathway,
  isPrize: false,
  logo: '/logos/industry-immersion-series.svg',
  tagline: 'Transforming Education Through Technology',
  description: 'EduTech Innovate develops cutting-edge educational software and learning platforms used by millions of students worldwide. Join us in revolutionizing how people learn and grow.',
  website: 'https://example.com/edutech',
  video: {
    url: 'https://www.youtube.com/watch?v=87uU-eFE4_E',
    type: 'youtube',
    title: 'The Future of Learning',
    description: 'How we\'re making education accessible to all',
    thumbnail: 'https://via.placeholder.com/1280x720/3b82f6/FFFFFF?text=EduTech'
  },
  resources: [
    {
      title: 'EdTech Career Guide',
      description: 'Opportunities in educational technology',
      url: 'https://example.com/edtech-careers.pdf',
      type: 'pdf',
      fileSize: '1.9 MB'
    },
    {
      title: 'Product Design Workshop',
      description: 'Learn about UX/UI in education',
      url: 'https://example.com/workshop',
      type: 'link'
    }
  ],
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScEAquY5WRgyx8Ih3-Q23q5aItGiVH6IvkvA6OftbUbfmp4ag/viewform?embedded=true',
  primaryCTA: {
    text: 'View Openings',
    url: 'https://example.com/edutech-jobs',
    type: 'careers'
  },
  contact: {
    email: 'careers@edutech.com',
    phone: '1-855-EDU-TECH',
    headquarters: {
      address: '321 Learning Lane',
      city: 'Waterloo',
      province: 'ON',
      postalCode: 'N2L 3G1'
    },
    internshipInfo: {
      available: true,
      period: '4-month terms',
      applicationUrl: 'https://example.com/edutech-intern'
    },
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/company/edutech'
      },
      {
        platform: 'twitter',
        url: 'https://twitter.com/edutech'
      }
    ]
  },
  brandColors: {
    primary: '#3b82f6',
    secondary: '#2563eb',
    accent: '#1d4ed8'
  }
}

export const retailPlusSponsor: StandardBoothData = {
  id: 'retail-plus',
  name: 'Retail\nPlus',
  slug: 'retail-plus',
  tier: 'silver',
  industry: 'Retail',
  isPostSecondary: false,
  pathway: 'direct-to-workplace' as Pathway,
  isPrize: false,
  logo: '/logos/industry-immersion-series.svg',
  tagline: 'Redefining the Shopping Experience',
  description: 'Retail Plus operates 200+ stores across Canada, combining e-commerce innovation with exceptional in-store experiences. We\'re looking for talented individuals to help shape the future of retail.',
  website: 'https://example.com/retailplus',
  video: {
    url: 'https://www.youtube.com/watch?v=87uU-eFE4_E',
    type: 'youtube',
    title: 'Retail Reimagined',
    description: 'Innovation in customer experience',
    thumbnail: 'https://via.placeholder.com/1280x720/ef4444/FFFFFF?text=Retail+Plus'
  },
  resources: [
    {
      title: 'Retail Management Program',
      description: 'Fast-track to store leadership',
      url: 'https://example.com/management.pdf',
      type: 'pdf',
      fileSize: '2.5 MB'
    },
    {
      title: 'E-commerce Opportunities',
      description: 'Digital retail careers',
      url: 'https://example.com/ecommerce',
      type: 'link'
    }
  ],
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScEAquY5WRgyx8Ih3-Q23q5aItGiVH6IvkvA6OftbUbfmp4ag/viewform?embedded=true',
  primaryCTA: {
    text: 'Store Careers',
    url: 'https://example.com/retail-careers',
    type: 'careers'
  },
  contact: {
    email: 'jobs@retailplus.com',
    phone: '1-888-RETAIL-1',
    headquarters: {
      address: '999 Commerce Court',
      city: 'Mississauga',
      province: 'ON',
      postalCode: 'L5B 1B4'
    },
    internshipInfo: {
      available: true,
      period: 'Flexible schedules',
      applicationUrl: 'https://example.com/retail-intern'
    },
    socialLinks: [
      {
        platform: 'instagram',
        url: 'https://instagram.com/retailplus'
      },
      {
        platform: 'tiktok',
        url: 'https://tiktok.com/@retailplus'
      }
    ]
  },
  brandColors: {
    primary: '#ef4444',
    secondary: '#dc2626',
    accent: '#b91c1c'
  }
}

export const smartManufacturingSponsor: StandardBoothData = {
  id: 'smart-manufacturing-co',
  name: 'Smart Manufacturing\nCo',
  slug: 'smart-manufacturing-co',
  tier: 'silver',
  industry: 'Manufacturing',
  isPostSecondary: false,
  pathway: 'apprenticeship' as Pathway,
  isPrize: false,
  logo: '/logos/industry-immersion-series.svg',
  tagline: 'Industry 4.0 Leaders',
  description: 'Smart Manufacturing Co specializes in advanced robotics and automation systems. We\'re at the forefront of the Industry 4.0 revolution, creating smart factories that define the future of production.',
  website: 'https://example.com/smartmfg',
  video: {
    url: 'https://www.youtube.com/watch?v=87uU-eFE4_E',
    type: 'youtube',
    title: 'The Smart Factory',
    description: 'See our automated production lines in action',
    thumbnail: 'https://via.placeholder.com/1280x720/78716c/FFFFFF?text=Smart+Mfg'
  },
  resources: [
    {
      title: 'Manufacturing Careers',
      description: 'From robotics to supply chain',
      url: 'https://example.com/mfg-careers.pdf',
      type: 'pdf',
      fileSize: '3.3 MB'
    },
    {
      title: 'Apprenticeship Programs',
      description: 'Skilled trades training',
      url: 'https://example.com/apprentice',
      type: 'document'
    }
  ],
  googleFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScEAquY5WRgyx8Ih3-Q23q5aItGiVH6IvkvA6OftbUbfmp4ag/viewform?embedded=true',
  primaryCTA: {
    text: 'Factory Jobs',
    url: 'https://example.com/mfg-jobs',
    type: 'careers'
  },
  contact: {
    email: 'hr@smartmfg.com',
    phone: '1-877-MFG-JOBS',
    headquarters: {
      address: '1500 Industrial Drive',
      city: 'Hamilton',
      province: 'ON',
      postalCode: 'L8N 3K5'
    },
    internshipInfo: {
      available: true,
      period: 'Co-op positions available',
      applicationUrl: 'https://example.com/mfg-coop'
    },
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/company/smartmfg'
      }
    ]
  },
  brandColors: {
    primary: '#78716c',
    secondary: '#57534e',
    accent: '#44403c'
  }
}

// Keep backward compatibility exports
export const sampleSponsor = techCorpSponsor
export const goldSponsor = greenEnergySponsor
export const silverSponsor = digitalMarketingHubSponsor

// Export all sponsors as an array
export const sponsors = [
  // Platinum Tier
  techCorpSponsor,
  healthPlusSponsor,
  globalFinanceSponsor,
  // Gold Tier
  greenEnergySponsor,
  nexusEngineeringSponsor,
  strategyPlusSponsor,
  // Silver Tier
  digitalMarketingHubSponsor,
  eduTechInnovateSponsor,
  retailPlusSponsor,
  smartManufacturingSponsor
]