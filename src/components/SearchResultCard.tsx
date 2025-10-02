interface SearchResultCardProps {
    title: string;
    excerpt: string;
    date: string;
    category: string;
    onClick?: () => void;
}

const SearchResultCard = ({ title, excerpt, date, category, onClick }: SearchResultCardProps) => {
    return (
        <article
            className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={onClick}
        >
            <div className="flex items-center gap-4 mb-2">
                <span className="text-sm text-gray-500">{date}</span>
                <span className="text-sm px-2 py-1 bg-gray-100 rounded-full">
                    {category}
                </span>
            </div>

            <h2 className="text-xl font-serif font-semibold mb-2">
                <a href="#" className="hover:text-blue-600 transition-colors">
                    {title}
                </a>
            </h2>

            <p className="text-gray-600">
                {excerpt}
            </p>
        </article>
    );
};

export default SearchResultCard;