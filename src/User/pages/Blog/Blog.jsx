import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ModernBlogPage = () => {
  const [articles, setArticles] = useState([]);
  const [latestPosts, setLatestPosts] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchArticles = async (page) => {
    try {
      setLoading(true);
      const response = await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=5&page=${page}&_embed`);
      setArticles((prevArticles) => [...prevArticles, ...response.data]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const fetchLatestPosts = async () => {
    try {
      const response = await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=5&page=1&_embed`);
      setLatestPosts(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchArticles(page);
  }, [page]);

  useEffect(() => {
    fetchLatestPosts();
  }, []);

  const handleArticleClick = async (article) => {
    try {
      const response = await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts/${article.id}?_embed`);
      setSelectedArticle(response.data);
    } catch (error) {
      console.error("Error fetching article data:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-white shadow-md py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between mt-[10vh]">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
              Vigy Blog
            </h1>
            <div className="mt-4 sm:mt-0">
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
                Subscribe
              </button>
              <button className="ml-4 py-2 px-4 rounded-md border border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row">
        <div className="w-full sm:w-2/3">
          {selectedArticle ? (
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">{selectedArticle.title.rendered}</h2>
              {selectedArticle._embedded && selectedArticle._embedded['wp:featuredmedia'] && (
                <img src={selectedArticle._embedded['wp:featuredmedia'][0].source_url} alt={selectedArticle.title.rendered} className="w-full h-auto rounded-md mb-4" />
              )}
              <div dangerouslySetInnerHTML={{ __html: selectedArticle.content.rendered }} />
              <button onClick={() => setSelectedArticle(null)} className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md">
                Back to Articles
              </button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Latest Headlines</h2>
              <div className="space-y-6">
                {articles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    className="bg-white p-4 sm:p-6 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 flex"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                    {article._embedded && article._embedded['wp:featuredmedia'] && (
                      <img src={article._embedded['wp:featuredmedia'][0].source_url} alt={article.title.rendered} className="w-24 h-24 sm:w-32 sm:h-32 rounded-md mr-4" />
                    )}
                    <div>
                      <a onClick={() => handleArticleClick(article)} className="text-lg sm:text-xl font-bold text-blue-600 hover:underline cursor-pointer">
                        {article.title.rendered}
                      </a>
                      <p className="text-gray-500 text-sm mt-2">{new Date(article.date).toLocaleTimeString()}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
              <div className="flex justify-center mt-8">
                <button
                  onClick={() => setPage((prevPage) => prevPage + 1)}
                  className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                  disabled={loading}
                >
                  {loading ? 'Loading...' : 'Load More'}
                </button>
              </div>
            </>
          )}
        </div>
        <div className="w-full sm:w-1/3 sm:pl-6 mt-8 sm:mt-0">
          <h3 className="text-2xl font-bold mb-6">Latest Posts</h3>
          <div className="space-y-6">
            {latestPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="bg-white p-4 sm:p-6 rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 flex"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {post._embedded && post._embedded['wp:featuredmedia'] && (
                  <img src={post._embedded['wp:featuredmedia'][0].source_url} alt={post.title.rendered} className="w-16 h-16 sm:w-24 sm:h-24 rounded-md mr-4" />
                )}
                <div>
                  <a onClick={() => handleArticleClick(post)} className="text-lg sm:text-xl font-bold text-blue-600 hover:underline cursor-pointer">
                    {post.title.rendered}
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ModernBlogPage;
