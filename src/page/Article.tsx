import { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CommentSidebar from '../components/CommentSidebar';  

const Article = () => {
  const [showCommentsSidebar, setShowCommentsSidebar] = useState(false);

  // Mock article data - you can replace with props/API data
  const article = {
    id: 1,
    title: "Global Climate Summit Reaches Historic Agreement on Carbon Emissions",
    subtitle: "World leaders pledge to reduce greenhouse gas emissions by 50% within the next decade",
    author: "Sarah Mitchell",
    publishDate: "September 25, 2025",
    category: "Environment",
    image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=1200&h=600&fit=crop",
    content: `
      In a landmark decision that could reshape global environmental policy, delegates from 195 countries have agreed to the most ambitious climate targets in history at the Global Climate Summit held in Geneva this week.

      The agreement, formally known as the Geneva Climate Accord, establishes binding commitments for nations to reduce their greenhouse gas emissions by 50% within the next decade, with an ultimate goal of achieving net-zero emissions by 2040.

      "This is not just another promise," said Dr. Elena Rodriguez, lead climate negotiator for the European Union. "This agreement includes enforceable mechanisms and financial penalties for countries that fail to meet their targets."

      The summit, which ran for two weeks, saw intense negotiations between developed and developing nations over financial responsibility and implementation timelines. The final agreement includes a $500 billion climate fund to help developing nations transition to renewable energy sources.

      Key provisions of the accord include:

      • Mandatory 50% reduction in greenhouse gas emissions by 2035
      • $500 billion global climate adaptation fund
      • Technology transfer programs for renewable energy
      • Quarterly progress reporting requirements
      • Financial penalties for non-compliance

      The United States, China, and India – the world's largest carbon emitters – have all signed onto the agreement, marking a significant shift in global climate cooperation.

      "For the first time in history, we have unanimous agreement from all major economies," said Summit President Maria Santos. "This gives us real hope that we can limit global temperature rise to 1.5 degrees Celsius."

      Environmental groups have cautiously welcomed the agreement, though some critics argue the targets may still be insufficient to prevent catastrophic climate change.

      The Greenpeace International executive director, James Chen, stated: "While this agreement is a step in the right direction, we must ensure that governments follow through on these commitments with concrete action."

      Implementation of the accord will begin immediately, with the first progress reports due in early 2026. Countries will be required to submit detailed plans outlining how they intend to meet their emission reduction targets within 90 days.

      The economic implications of the agreement are expected to be significant, with analysts predicting massive investments in renewable energy infrastructure and green technology development over the coming years.
    `,
    tags: ["Climate Change", "Environment", "Global Politics", "Sustainability"],
    commentsCount: 142
  };

  const suggestedArticles = [
    {
      id: 2,
      title: "Renewable Energy Investment Reaches Record High",
      category: "Technology",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Electric Vehicle Sales Surge Globally",
      category: "Business",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=400&h=250&fit=crop"
    },
    {
      id: 4,
      title: "Ocean Temperatures Rise to Record Levels",
      category: "Science",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop"
    }
  ];

  const handleShowComments = () => {
    setShowCommentsSidebar(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <nav>
        <Navbar />
      </nav>
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6">
          <Link to="/" className="text-gray-500 hover:text-black text-sm">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-black text-sm font-medium">{article.category}</span>
        </nav>

        {/* Article Meta */}
        <div className="mb-6">
          <span className="bg-black text-white px-3 py-1 text-xs font-medium uppercase tracking-wider">
            {article.category}
          </span>
        </div>

        {/* Article Title */}
        <header className="mb-8">
          <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-4 text-gray-900">
            {article.title}
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed mb-6">
            {article.subtitle}
          </h2>
          
          {/* Author and Meta Info */}
          <div className="flex flex-wrap items-center text-sm text-gray-600 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
              <span className="font-medium">By {article.author}</span>
            </div>
            <span>•</span>
            <span>{article.publishDate}</span>
          </div>
        </header>

        {/* Article Image */}
        <div className="mb-8">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg border border-gray-200"
          />
          <p className="text-xs text-gray-500 mt-2 text-center">
            Climate summit delegates during the final negotiation session in Geneva
          </p>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 leading-relaxed text-gray-800 text-lg">
              {paragraph.trim()}
            </p>
          ))}
        </div>

        {/* Article Tags */}
        <div className="mb-8">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Tags:</h3>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Social Share & Comments Button */}
        <div className="border-t border-b border-gray-200 py-6 mb-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Share this article:</span>
              <div className="flex space-x-3">
                <button className="text-gray-600 hover:text-black transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-black transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button className="text-gray-600 hover:text-black transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <button 
              onClick={handleShowComments}
              className="bg-black text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span>Read Comments ({article.commentsCount})</span>
            </button>
          </div>
        </div>
      </article>

      {/* CommentSidebar Component */}
      <CommentSidebar
        isOpen={showCommentsSidebar}
        onClose={() => setShowCommentsSidebar(false)}
        commentsCount={article.commentsCount}
      />

      {/* Suggested Articles Section - NY Times Style */}
      <section className="border-t border-gray-200 py-16 mt-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-b border-black pb-3 mb-12">
            <h2 className="font-serif text-2xl font-bold tracking-tight">
              More in Environment
            </h2>
          </div>
          
          {/* Featured Related Article */}
          <div className="mb-12 pb-8 border-b border-gray-200">
            <Link 
              to={`/article/${suggestedArticles[0].id}`}
              className="group block"
            >
              <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2">
                  <img 
                    src={suggestedArticles[0].image} 
                    alt={suggestedArticles[0].title}
                    className="w-full h-48 md:h-40 object-cover"
                  />
                </div>
                <div className="md:col-span-3">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {suggestedArticles[0].category}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold leading-tight mb-3 group-hover:text-gray-700 transition-colors">
                    {suggestedArticles[0].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    A comprehensive look at how investment in renewable energy infrastructure has reached unprecedented levels, signaling a major shift in global energy policy.
                  </p>
                  <div className="text-xs text-gray-500">
                    <span>{suggestedArticles[0].readTime}</span>
                    <span className="mx-2">•</span>
                    <span>3 hours ago</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Other Related Articles */}
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {suggestedArticles.slice(1).map((suggestion) => (
              <Link 
                key={suggestion.id} 
                to={`/article/${suggestion.id}`}
                className="group block pb-6 border-b border-gray-100 last:border-b-0"
              >
                <div className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <img 
                      src={suggestion.image} 
                      alt={suggestion.title}
                      className="w-20 h-20 object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="mb-1">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {suggestion.category}
                      </span>
                    </div>
                    <h4 className="font-serif text-base font-semibold leading-tight mb-2 group-hover:text-gray-700 transition-colors">
                      {suggestion.title}
                    </h4>
                    <div className="text-xs text-gray-500">
                      <span>{suggestion.readTime}</span>
                      <span className="mx-2">•</span>
                      <span>5 hours ago</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Additional Recommendations */}
          <div className="border-t border-gray-200 pt-8 mt-12">
            <h3 className="font-serif text-lg font-bold mb-6 border-b border-gray-200 pb-2">
              Recommended for You
            </h3>
            <div className="space-y-4">
              {[
                "Scientists Develop New Carbon Capture Technology",
                "Global Renewable Energy Capacity Doubles",
                "Climate Policy Changes Across Major Economies",
                "Ocean Conservation Efforts Show Progress"
              ].map((title, index) => (
                <Link 
                  key={index}
                  to={`/article/${index + 5}`}
                  className="block py-2 border-b border-gray-100 last:border-b-0 group"
                >
                  <h4 className="font-serif text-sm font-medium leading-tight group-hover:text-gray-700 transition-colors">
                    {title}
                  </h4>
                  <div className="text-xs text-gray-500 mt-1">
                    <span>4 min read</span>
                    <span className="mx-2">•</span>
                    <span>Environment</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Article;
