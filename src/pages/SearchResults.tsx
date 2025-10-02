import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import SearchResultCard from '../components/SearchResultCard';

interface SearchResult {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    category: string;
}

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [results, setResults] = useState<SearchResult[]>([]);
    const [loading, setLoading] = useState(true);
    const query = searchParams.get('q') || '';

    useEffect(() => {
        // Simulated search results - replace with actual API call
        const fetchSearchResults = async () => {
            setLoading(true);
            try {
                // Simulate API call delay
                await new Promise(resolve => setTimeout(resolve, 1000));

                // Mock results - replace with actual API call
                const mockResults: SearchResult[] = [
                    {
                        id: 1,
                        title: "Example Article 1",
                        excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
                        date: "2025-09-30",
                        category: "Politics"
                    },
                    {
                        id: 2,
                        title: "Example Article 2",
                        excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore...",
                        date: "2025-09-29",
                        category: "Technology"
                    },
                    // Add more mock results as needed
                ];

                setResults(mockResults);
            } catch (error) {
                console.error('Error fetching search results:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
    }, [query]);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />

            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-serif font-bold mb-6">
                        Search Results for "{query}"
                    </h1>

                    {loading ? (
                        <div className="flex justify-center items-center py-12">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                        </div>
                    ) : (
                        <>
                            <p className="text-gray-600 mb-8">
                                Found {results.length} results for your search
                            </p>

                            <div className="space-y-8">
                                {results.map((result) => (
                                    <SearchResultCard
                                        key={result.id}
                                        title={result.title}
                                        excerpt={result.excerpt}
                                        date={result.date}
                                        category={result.category}
                                        onClick={() => navigate(`/article/${result.id}`)}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default SearchResults;