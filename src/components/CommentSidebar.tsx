import { useState, useEffect, useMemo } from 'react';

interface CommentSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  commentsCount: number;
}

interface Comment {
  id: number;
  author: string;
  time: string;
  content: string;
  likes: number;
  replies?: Comment[];
}

const CommentSidebar: React.FC<CommentSidebarProps> = ({
  isOpen,
  onClose,
  commentsCount
}) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);

  // Mock comments data
  const mockComments: Comment[] = useMemo(() => [
    {
      id: 1,
      author: "Dr. Michael Green",
      time: "2 hours ago",
      content: "This is a groundbreaking agreement! Finally, we're seeing real commitment from major economies. The enforcement mechanisms are particularly encouraging.",
      likes: 24,
      replies: [
        {
          id: 11,
          author: "Sarah Wilson",
          time: "1 hour ago",
          content: "I agree, but I'm still skeptical about whether countries will actually follow through on their commitments.",
          likes: 8
        }
      ]
    },
    {
      id: 2,
      author: "Climate Activist",
      time: "4 hours ago",
      content: "While this is progress, we need to remember that even these targets might not be enough to prevent the worst effects of climate change. We need more aggressive action.",
      likes: 18
    },
    {
      id: 3,
      author: "Economic Analyst",
      time: "6 hours ago",
      content: "The $500 billion fund is impressive, but the real challenge will be in the implementation. How do we ensure this money reaches the right projects?",
      likes: 15
    },
    {
      id: 4,
      author: "Policy Expert",
      time: "8 hours ago",
      content: "The quarterly reporting requirement is a game-changer. Previous agreements failed because there was no accountability mechanism.",
      likes: 31
    },
    {
      id: 5,
      author: "Student Researcher",
      time: "10 hours ago",
      content: "This gives me hope for the future. It's about time we saw this level of international cooperation on climate issues.",
      likes: 12
    }
  ], []);

  useEffect(() => {
    if (isOpen) {
      setComments(mockComments);
      // Prevent body scroll when sidebar is open
      document.body.style.overflow = 'hidden';
    } else {
      // Restore body scroll when sidebar is closed
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to restore scroll on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, mockComments]);

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const comment: Comment = {
        id: Date.now(),
        author: "You",
        time: "Just now",
        content: newComment,
        likes: 0
      };
      
      setComments([comment, ...comments]);
      setNewComment('');
      setLoading(false);
    }, 500);
  };

  const handleLike = (commentId: number) => {
    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, likes: comment.likes + 1 }
        : comment
    ));
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black opacity-50 z-1 transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
            <div>
              <h2 className="font-serif text-xl font-bold">Comments</h2>
              <p className="text-sm text-gray-600">{commentsCount} responses</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Comment Form */}
          <div className="p-6 border-b border-gray-200 bg-gray-50">
            <form onSubmit={handleSubmitComment}>
              <textarea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-black text-sm"
                rows={3}
                placeholder="Share your thoughts..."
              />
              <div className="flex justify-end mt-3">
                <button
                  type="submit"
                  disabled={loading || !newComment.trim()}
                  className="bg-black text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Posting...' : 'Post Comment'}
                </button>
              </div>
            </form>
          </div>

          {/* Comments List */}
          <div className="flex-1 overflow-y-auto">
            {comments.length === 0 ? (
              <div className="flex items-center justify-center h-40 text-gray-500">
                No comments yet. Be the first to share your thoughts!
              </div>
            ) : (
              <div className="p-6 space-y-6">
                {comments.map((comment) => (
                  <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                    {/* Main Comment */}
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-medium flex-shrink-0">
                        {comment.author.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-medium text-sm text-gray-900">{comment.author}</span>
                          <span className="text-xs text-gray-500">{comment.time}</span>
                        </div>
                        <p className="text-sm text-gray-800 leading-relaxed mb-3">
                          {comment.content}
                        </p>
                        <div className="flex items-center space-x-4">
                          <button 
                            onClick={() => handleLike(comment.id)}
                            className="flex items-center space-x-1 text-xs text-gray-500 hover:text-red-500 transition-colors"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>{comment.likes}</span>
                          </button>
                          <button className="text-xs text-gray-500 hover:text-black transition-colors">
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Replies */}
                    {comment.replies && comment.replies.length > 0 && (
                      <div className="ml-11 mt-4 space-y-4">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0">
                              {reply.author.charAt(0)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-2 mb-1">
                                <span className="font-medium text-xs text-gray-900">{reply.author}</span>
                                <span className="text-xs text-gray-500">{reply.time}</span>
                              </div>
                              <p className="text-xs text-gray-700 leading-relaxed mb-2">
                                {reply.content}
                              </p>
                              <div className="flex items-center space-x-3">
                                <button className="flex items-center space-x-1 text-xs text-gray-500 hover:text-red-500 transition-colors">
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                  </svg>
                                  <span>{reply.likes}</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentSidebar;