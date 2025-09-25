import { useState, useEffect } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Logo from '../assets/veritas_logo_light.png';

const Home = () => {
  // Carousel state
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carousel data
  const carouselSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&h=492&fit=crop&crop=center",
      title: "Breaking: Global Economic Summit Concludes",
      subtitle: "World leaders reach historic trade agreements",
      category: "Economics"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=492&fit=crop&crop=center",
      title: "Space Technology Breakthrough",
      subtitle: "Revolutionary satellite launch changes communication",
      category: "Technology"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=1200&h=492&fit=crop&crop=center",
      title: "Climate Action Initiatives",
      subtitle: "New environmental policies show promising results",
      category: "Environment"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1200&h=492&fit=crop&crop=center",
      title: "Cultural Heritage Preservation",
      subtitle: "Ancient sites receive international protection status",
      category: "Culture"
    }
  ];

  // Carousel functions
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [carouselSlides.length]);

  const featuredArticle = {
    title: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
    subtitle: "World leaders pledge to reduce greenhouse gas emissions by 50% within the next decade",
    author: "Sarah Mitchell",
    time: "2 hours ago",
    image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=800&h=400&fit=crop",
    category: "Environment",
    excerpt: "In a landmark decision that could reshape global environmental policy, delegates from 195 countries have agreed to the most ambitious climate targets in history..."
  };

  const topStories = [
    {
      title: "Tech Giants Face New Antitrust Legislation",
      author: "Michael Chen",
      time: "4 hours ago",
      category: "Technology",
      excerpt: "Congress introduces bipartisan bill targeting monopolistic practices in the tech industry."
    },
    {
      title: "Economic Recovery Shows Promising Signs",
      author: "Jennifer Adams",
      time: "6 hours ago",
      category: "Business",
      excerpt: "Latest quarterly reports indicate stronger than expected growth across multiple sectors."
    },
    {
      title: "Breakthrough in Quantum Computing Research",
      author: "Dr. Robert Liu",
      time: "8 hours ago",
      category: "Science",
      excerpt: "Scientists achieve 99.9% fidelity in quantum error correction, marking a major milestone."
    },
    {
      title: "International Trade Talks Resume",
      author: "Maria Rodriguez",
      time: "10 hours ago",
      category: "Politics",
      excerpt: "Diplomatic efforts intensify as nations seek to resolve ongoing trade disputes."
    }
  ];

  const sidebarNews = [
    {
      title: "Market Analysis: What the Fed's Decision Means",
      time: "1 hour ago",
      category: "Business"
    },
    {
      title: "Cultural Festival Celebrates Diversity",
      time: "3 hours ago",
      category: "Culture"
    },
    {
      title: "Medical Breakthrough in Cancer Treatment",
      time: "5 hours ago",
      category: "Health"
    },
    {
      title: "Championship Finals Draw Record Viewership",
      time: "7 hours ago",
      category: "Sports"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Import and use Navbar component */}
      <Navbar />
        
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Column - Featured Article */}
          <div className="lg:col-span-3">
            {/* Featured Story */}
            <article className="mb-12 border-b border-gray-200 pb-8">
              <div className="mb-4">
                <span className="bg-black text-white px-2 py-1 text-xs font-medium uppercase tracking-wider">
                  Featured
                </span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <a href="/Article">
                    <h1 className="font-serif text-3xl font-bold leading-tight mb-4">
                      {featuredArticle.title}
                    </h1>
                  </a>
                  <h2 className="text-lg text-gray-700 font-light mb-4 leading-relaxed">
                    {featuredArticle.subtitle}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">By {featuredArticle.author}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredArticle.time}</span>
                    <span className="mx-2">•</span>
                    <span className="text-black font-medium">{featuredArticle.category}</span>
                  </div>
                </div>
                <div>
                  <img 
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 object-cover border border-gray-200"
                  />
                </div>
              </div>
            </article>
            <article className="mb-12 border-b border-gray-200 pb-8">
              <div className="mb-4">
                <span className="bg-black text-white px-2 py-1 text-xs font-medium uppercase tracking-wider">
                  Featured
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h1 className="font-serif text-3xl font-bold leading-tight mb-4">
                    {featuredArticle.title}
                  </h1>
                  <h2 className="text-lg text-gray-700 font-light mb-4 leading-relaxed">
                    {featuredArticle.subtitle}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium">By {featuredArticle.author}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredArticle.time}</span>
                    <span className="mx-2">•</span>
                    <span className="text-black font-medium">{featuredArticle.category}</span>
                  </div>
                </div>
                <div>
                  <img 
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 object-cover border border-gray-200"
                  />
                </div>
              </div>
            </article>
          </div>
          
          {/* Top Stories */}<div className="lg:col-span-1 lg:px-4 border-l">
            {/* Breaking News */}
            <section className="mb-8">
              <h3 className="font-serif text-xl font-bold mb-4 border-b border-black pb-2">
                Latest Updates
              </h3>
              <div className="space-y-4">
                {sidebarNews.map((item, index) => (
                  <article key={index} className="border-b border-gray-100 pb-4">
                    <h4 className="font-medium text-sm leading-tight mb-2 hover:text-gray-700 cursor-pointer">
                      {item.title}
                    </h4>
                    <div className="flex items-center text-xs text-gray-500">
                      <span className="text-black font-medium">{item.category}</span>
                      <span className="mx-2">•</span>
                      <span>{item.time}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Newsletter Signup */}
            <section className="bg-gray-50 border border-gray-200 p-6 mb-8">
              <h3 className="font-serif text-lg font-bold mb-3">
                Stay Informed
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Get our daily newsletter with the most important stories delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 text-sm focus:outline-none focus:border-black"
                />
                <button className="w-full bg-black text-white py-2 text-sm font-medium hover:bg-gray-800 transition-colors">
                  SUBSCRIBE
                </button>
              </div>
            </section>
            </div>
        </div>
      </main>

      {/* Full Width Banner Section */}
      <section className="w-full bg-gradient-to-r pb-4 mb-4">
        <div className='border-t border-b border-gray-600'>
        <div className="max-w-7xl mx-auto px-6 md:px-0 text-center border-gray-600">
          <div className="flex justify-center items-center m-auto">
            <img src={Logo} alt="Veritas Daily Logo" onClick={() => window.scrollTo ({ top: 0, behavior: 'smooth' })} className='h-44 cursor-pointer'/>
            <p className="text-xl md:text-2xl font-serif max-w-3xl leading-relaxed opacity-90 ">
              Don’t forget to <span className='text-blue-500 hover:text-blue-700'><a href="/signup">make an account</a></span> <br /> to get hot news every day! 
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Full Width Carousel Section */}
      <section className="w-full h-[492px] relative overflow-hidden bg-black mb-12">
        <div className="relative w-full h-full">
          {/* Carousel Images */}
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselSlides.map((slide) => (
              <div key={slide.id} className="w-full h-full flex-shrink-0 relative">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white max-w-4xl px-6">
                    <span className="bg-white text-black px-3 py-1 text-sm font-medium uppercase tracking-wider mb-4 inline-block">
                      {slide.category}
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl font-bold mb-4 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-xl md:text-2xl font-light opacity-90">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-200 backdrop-blur-sm"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dot Indicators */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide 
                    ? 'bg-white' 
                    : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="absolute top-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {currentSlide + 1} / {carouselSlides.length}
          </div>
        </div>
      </section>

      {/* Second Section - Continuing News Content */}
      <main className="max-w-7xl mx-auto px-6 pb-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Column - Top Stories */}
          <div className="lg:col-span-3">
            {/* Top Stories Grid */}
            <section>
              <h2 className="font-serif text-xl font-bold mb-6 border-b border-black pb-2">
                Top Stories
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {topStories.map((story, index) => (
                  <article key={index} className="border-b border-gray-100 pb-6 mb-6">
                    <div className="mb-2">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {story.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-3 leading-tight hover:text-gray-700 cursor-pointer">
                      {story.title}
                    </h3>
                    <p className="text-gray-600 mb-3 leading-relaxed">
                      {story.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                      <span>By {story.author}</span>
                      <span className="mx-2">•</span>
                      <span>{story.time}</span>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            {/* Popular Articles */}
            <section>
              <h3 className="font-serif text-xl font-bold mb-4 border-b border-black pb-2">
                Most Read
              </h3>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex items-start space-x-3">
                    <span className="font-bold text-lg text-gray-400 mt-1">
                      {num}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium leading-tight hover:text-gray-700 cursor-pointer">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                      </h4>
                      <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
