import { DeluxeBoothData, StandardBoothData } from '@/types/booth'

export const sampleSponsor: DeluxeBoothData = {
  id: 'deluxe-booth-template',
  name: 'Deluxe Booth Template',
  slug: 'deluxe-booth-template',
  tier: 'diamond',
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

export const goldSponsor: StandardBoothData = {
  id: 'gold-booth-template',
  name: 'Gold Booth Template',
  slug: 'gold-booth-template',
  tier: 'gold',
  logo: '/logos/industry-immersion-series.svg',
  tagline: 'Enhanced Sponsor Experience',
  description: 'Gold Booth Template is a pioneering renewable energy company dedicated to developing innovative solar, wind, and energy storage solutions. We are passionate about creating a sustainable future while offering exciting career opportunities in clean technology. Join our team of engineers, data scientists, and sustainability experts as we work to transform the energy landscape and combat climate change through cutting-edge technology and sustainable practices.',
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
      description: 'Explore career opportunities in renewable energy and sustainability',
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
      title: 'Virtual Office Tour',
      description: 'Take a virtual tour of our state-of-the-art facilities',
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
    email: 'careers@greenenergy.example.com',
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

export const silverSponsor: StandardBoothData = {
  id: 'silver-booth-template',
  name: 'Silver Booth Template',
  slug: 'silver-booth-template',
  tier: 'silver',
  logo: '/logos/industry-immersion-series.svg',
  tagline: 'Standard Sponsor Experience',
  description: 'Silver Booth Template is a full-service digital marketing agency specializing in social media strategy, content creation, and data-driven marketing campaigns. We help brands tell their stories and connect with audiences in meaningful ways. Our team of creative professionals and marketing strategists is always looking for fresh talent to join our dynamic, fast-paced environment where innovation and creativity thrive.',
  website: 'https://example.com/digitalmarketinghub',
  video: {
    url: 'https://www.youtube.com/watch?v=87uU-eFE4_E',
    type: 'youtube',
    title: 'Creative Careers in Digital Marketing',
    description: 'Discover exciting opportunities in digital marketing and content creation',
    thumbnail: 'https://via.placeholder.com/1280x720/8b5cf6/FFFFFF?text=Digital+Marketing'
  },
  resources: [
    {
      title: 'Digital Marketing Basics',
      description: 'Essential guide to starting your career in digital marketing',
      url: 'https://example.com/marketing-basics.pdf',
      type: 'pdf',
      fileSize: '2.2 MB'
    },
    {
      title: 'Portfolio Tips & Tricks',
      description: 'How to build a standout portfolio for marketing roles',
      url: 'https://example.com/portfolio-guide',
      type: 'link'
    },
    {
      title: 'Day in the Life Video',
      description: 'Follow our junior marketers through a typical workday',
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

export const sponsors = [sampleSponsor, goldSponsor, silverSponsor]