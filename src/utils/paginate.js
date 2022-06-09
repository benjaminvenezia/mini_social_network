const paginate = (articles) => {
  const itemsPerPage = 3;
  const pages = Math.ceil(articles.length / itemsPerPage);
  const newArticles = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return articles.slice(start, start + itemsPerPage);
  });

  return newArticles;
};

export default paginate;
