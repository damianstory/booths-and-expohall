import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-brand-navy mb-4">
            myBlueprint Career Launch Virtual Expo
          </h1>
          <p className="text-lg text-neutral-5">
            Explore sponsor booths and discover career opportunities
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-6">Featured Deluxe Booth</h2>
          
          <div className="border border-gray-200 rounded-lg p-6 hover:border-primary-blue hover:shadow-md transition-all duration-200">
            <div className="flex items-start gap-4">
              <img 
                src="https://via.placeholder.com/100x100/0092FF/FFFFFF?text=TC" 
                alt="TechCorp logo"
                className="w-20 h-20 rounded-lg object-cover"
              />
              <div className="flex-grow">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-brand-navy mb-1">
                      TechCorp Innovations
                    </h3>
                    <p className="text-neutral-5 mb-3">
                      Building Tomorrow&apos;s Technology Today
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-block px-3 py-1 bg-primary-blue/10 text-primary-blue text-xs font-medium rounded-full">
                        Technology
                      </span>
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                        Hiring Interns
                      </span>
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                        5,000+ Employees
                      </span>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-primary-blue to-indigo-600 text-white">
                    Deluxe
                  </span>
                </div>
                
                <Link
                  href="/techcorp-innovations"
                  className="inline-flex items-center gap-2 mt-4 px-6 py-2 bg-primary-blue text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Visit Booth →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-brand-navy mb-4">About This Demo</h2>
          <p className="text-neutral-5 mb-4">
            This is a demonstration of the Deluxe Booth template for the myBlueprint Career Launch Virtual Expo. 
            The booth features a colorful bento grid layout with multiple interactive sections including:
          </p>
          <ul className="list-disc list-inside text-neutral-5 space-y-2">
            <li>Company header with branding and CTAs</li>
            <li>Company story with quick facts</li>
            <li>5-minute promotional video</li>
            <li>Interactive engagement activity</li>
            <li>Session slides presentation</li>
            <li>Downloadable resources</li>
            <li>Contact information and social links</li>
            <li>Footer call-to-action section</li>
          </ul>
        </div>
      </div>
    </main>
  )
}