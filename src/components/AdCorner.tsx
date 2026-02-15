import { useState, useEffect, useCallback } from 'react';
import { Megaphone, ChevronLeft, ChevronRight } from 'lucide-react';

const ads = [
  
  {
    name: 'Speedy Motors — Kandy',
    tagline: 'Trusted for engine repairs since 2005. Book today.',
    offer: 'FREE CHECK',
    color: 'bg-green-500',
    image: '/images/ads/ad 2.PNG',
  },
  {
    name: 'CleanDrive Garage — Galle',
    tagline: 'Premium car wash & maintenance packages available.',
    offer: 'SPECIAL PRICE',
    color: 'bg-purple-500',
    image: '/images/ads/ad 3.PNG',
  },
  
];

export default function AdCorner() {
  const [currentAd, setCurrentAd] = useState(0);

  const nextAd = useCallback(() => {
    setCurrentAd((prev) => (prev + 1) % ads.length);
  }, []);

  const prevAd = useCallback(() => {
    setCurrentAd((prev) => (prev - 1 + ads.length) % ads.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextAd, 4000);
    return () => clearInterval(timer);
  }, [nextAd]);

  return (
    <section className="bg-gray-light section-padding">
      <div className="container-main">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-gray-200 shadow-sm mb-4">
            <Megaphone size={18} className="text-primary" />
            <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
              Featured Partners
            </span>
          </div>
          <h2 className="text-3xl font-bold text-dark mb-4">
            Exclusive Offers from Trusted Service Centers
          </h2>
          <p className="text-gray-medium max-w-2xl mx-auto">
            Discover special deals from our verified partner service centers
          </p>
        </div>

        {/* Slider */}
        <div className="relative max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="relative min-h-[350px]">
              {ads.map((ad, i) => (
                <div
                  key={i}
                  className={`transition-opacity duration-500 ${
                    currentAd === i ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Left - Ad Flyer Image */}
                    <div className="relative h-[280px] md:h-auto bg-gray-50">
                      <img
                        src={ad.image}
                        alt={`${ad.name} advertisement`}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute top-6 right-6 ${ad.color} rounded-xl px-5 py-3 shadow-xl border-2 border-white`}>
                        <div className="text-white font-bold text-xl">
                          {ad.offer}
                        </div>
                      </div>
                      {/* Sponsored Badge */}
                      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-1.5 shadow-md">
                        <span className="text-xs font-semibold text-gray-600">SPONSORED</span>
                      </div>
                    </div>

                    {/* Right - Content */}
                    <div className="flex flex-col justify-center p-8 md:p-10">
                      <div className="mb-6">
                        <h3 className="font-bold text-2xl md:text-3xl text-dark mb-3">
                          {ad.name}
                        </h3>
                        <p className="text-gray-medium text-lg leading-relaxed mb-6">
                          {ad.tagline}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-3">
                        <button className="btn-primary">
                          Book Now
                        </button>
                        <button className="btn-outline">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevAd}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            aria-label="Previous ad"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextAd}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            aria-label="Next ad"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {ads.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentAd(i)}
                className={`rounded-full transition-all duration-300 ${
                  currentAd === i
                    ? 'w-10 h-2.5 bg-primary'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to ad ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-10 text-center">
          Want to advertise your service center here?{' '}
          <a href="/service-centers" className="text-primary font-semibold hover:underline">
            Become a Partner
          </a>
        </p>
      </div>
    </section>
  );
}
