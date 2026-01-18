export function normalizeAndFilterByRating(products, ratingFilter) {
  const ratingNum = Number(ratingFilter);
  if (!Number.isFinite(ratingNum) || ratingNum <= 0) return products;

  return products.filter(product => {
    const productRating = Math.round(Number(product.rating?.rate || 0));
    return productRating === ratingNum;
  });
}
