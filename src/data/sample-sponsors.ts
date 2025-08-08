import { DeluxeBoothData } from '@/types/booth'

export const sampleSponsor: DeluxeBoothData = {
  id: 'techcorp-innovations',
  name: 'TechCorp Innovations',
  slug: 'techcorp-innovations',
  tier: 'deluxe',
  logo: '/logos/industry-immersion-series.svg',
  tagline: 'Building Tomorrow\'s Technology Today',
  description: 'TechCorp Innovations is a leading technology company specializing in AI, cloud computing, and sustainable tech solutions. For over 20 years, we\'ve been at the forefront of digital transformation, helping businesses and communities thrive in the digital age. Our mission is to create innovative solutions that make a positive impact on society while fostering the next generation of tech leaders through comprehensive internship programs and mentorship opportunities.',
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

export const sponsors = [sampleSponsor]