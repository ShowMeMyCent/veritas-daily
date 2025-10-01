interface CategoriesProps {
  categories: Array<{
    id: number;
    name: string;
    articleCount: number;
    color: string;
  }>;
  openModal: (type: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({ categories, openModal }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-2xl font-bold text-gray-900">Categories Management</h2>
        <button
          onClick={() => openModal('create-category')}
          className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
        >
          New Category
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-3"
                  style={{ backgroundColor: category.color }}
                ></div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </div>
              <div className="flex space-x-2">
                <button className="text-blue-600 hover:text-blue-800 text-sm">Edit</button>
                <button className="text-red-600 hover:text-red-800 text-sm">Delete</button>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              {category.articleCount} articles
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
