import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

interface Article {
    id: number;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    imageUrl: string;
    readTime: string;
}

const Politics = () => {
    const navigate = useNavigate();
    const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null);
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulated API call - replace with actual API integration
        const fetchArticles = async () => {
            setLoading(true);
            try {
                // Simulate API delay
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Mock featured article
                setFeaturedArticle({
                    id: 1,
                    title: "Major Political Reform Bill Passes in Senate",
                    excerpt: "In a historic vote, the Senate approved sweeping political reforms that will reshape the landscape of campaign finance and electoral processes...",
                    author: "Jane Smith",
                    date: "2025-09-30",
                    imageUrl: "https://source.unsplash.com/1600x900/?politics,government",
                    readTime: "5 min read"
                });

                // Mock articles list
                setArticles([
                    {
                        id: 2,
                        title: "Global Summit Addresses Climate Policy",
                        excerpt: "World leaders gather to discuss ambitious climate action plans...",
                        author: "John Doe",
                        date: "2025-09-29",
                        imageUrl: "https://source.unsplash.com/800x600/?climate,conference",
                        readTime: "4 min read"
                    },
                    // Add more mock articles as needed
                ]);
            } catch (error) {
                console.error('Error fetching articles:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                    </div>
                ) : (
                    <>
                        {/* Featured Article Section */}
                        {featuredArticle && (
                            <div className="relative h-[500px] mb-12">
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${featuredArticle.imageUrl})` }}
                                >
                                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                                </div>
                                <div className="relative container mx-auto px-4 h-full flex items-end pb-12">
                                    <div className="text-white max-w-3xl">
                                        <div className="mb-4">
                                            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                                                Breaking News
                                            </span>
                                        </div>
                                        <h1 className="text-4xl font-serif font-bold mb-4">
                                            {featuredArticle.title}
                                        </h1>
                                        <p className="text-lg mb-4 text-gray-200">
                                            {featuredArticle.excerpt}
                                        </p>
                                        <div className="flex items-center gap-4 text-sm">
                                            <span>{featuredArticle.author}</span>
                                            <span>•</span>
                                            <span>{featuredArticle.date}</span>
                                            <span>•</span>
                                            <span>{featuredArticle.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Articles Grid */}
                        <div className="container mx-auto px-4 py-12">
                            <h2 className="text-3xl font-serif font-bold mb-8">Latest in Politics</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {articles.map((article) => (
                                    <article
                                        key={article.id}
                                        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition hover:-translate-y-1 hover:shadow-xl"
                                        onClick={() => navigate(`/article/${article.id}`)}
                                    >
                                        <img
                                            src={article.imageUrl}
                                            alt={article.title}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-6">
                                            <h3 className="text-xl font-serif font-bold mb-3">
                                                {article.title}
                                            </h3>
                                            <p className="text-gray-600 mb-4">
                                                {article.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between text-sm text-gray-500">
                                                <span>{article.author}</span>
                                                <div className="flex items-center gap-2">
                                                    <span>{article.readTime}</span>
                                                    <span>•</span>
                                                    <span>{article.date}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>

                            {/* Load More Button */}
                            <div className="text-center mt-12">
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                                    Load More Articles
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Politics;