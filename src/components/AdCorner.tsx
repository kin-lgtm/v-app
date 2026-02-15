import { useState, useEffect, useCallback } from 'react';
import { Megaphone, ChevronLeft, ChevronRight } from 'lucide-react';

const ads = [
  {
    name: 'AutoCare Pro — Colombo 7',
    tagline: 'Full service & detailing specialists. 20% off first visit!',
    offer: '20% OFF',
    color: 'bg-blue-500',
    image: '/images/ads/ad 1.PNG',
  },
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
  {
    name: 'Elite Auto Service — Negombo',
    tagline: 'Luxury car specialists. Expert technicians at your service.',
    offer: '15% OFF',
    color: 'bg-orange-500',
    image: '/images/ads/ad 4.PNG',
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
    <section className="bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-main section-padding !py-12">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Megaphone size={20} className="text-primary" />
          <h3 className="text-lg font-bold text-dark uppercase tracking-wider">
            Ads Corner
          </h3>
        </div>

        {/* Slider */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="relative min-h-[320px]">
              {ads.map((ad, i) => (
                <div
                  key={i}
                  className={`transition-opacity duration-500 ${
                    currentAd === i ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Left - Ad Flyer Image */}
                    <div className="relative h-[250px] md:h-auto bg-gray-100">
                      <img
                        src={ad.image}
                        alt={`${ad.name} advertisement`}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute top-4 right-4 ${ad.color} rounded-lg px-4 py-2 shadow-lg`}>
                        <div className="text-white font-bold text-lg">
                          {ad.offer}
                        </div>
                      </div>
                    </div>

                    {/* Right - Content */}
                    <div className="flex flex-col justify-center p-8">
                      <div className="mb-6">
                        <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1.5 mb-4">
                          <Megaphone size={14} className="text-primary" />
                          <span className="text-xs text-lg font-semibold text-gray-600 uppercase tracking-wide">
                            Featured Partner
                          </span>
                        </div>
                        <h4 className="font-bold text-2xl text-dark mb-3">
                          {ad.name}
                        </h4>
                        <p className="text-gray-medium leading-relaxed mb-6">
                          {ad.tagline}
                        </p>
                      </div>
                      <div className="flex gap-3">
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous ad"
          >
            <ChevronLeft size={20} className="text-dark" />
          </button>
          <button
            onClick={nextAd}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next ad"
          >
            <ChevronRight size={20} className="text-dark" />
          </button>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {ads.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentAd(i)}
                className={`rounded-full transition-all duration-300 ${
                  currentAd === i
                    ? 'w-8 h-2 bg-primary'
                    : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to ad ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-8 text-center">
          Want to advertise your service center here?{' '}
          <a href="/service-centers" className="text-primary font-medium hover:underline">
            Become a Partner
          </a>
        </p>
      </div>
    </section>
  );
}
