export function filterPerfumes(perfumes, filters) {
  const minimumPrice = filters.minimumPrice === "" ? null : Number(filters.minimumPrice);
  const maximumPrice = filters.maximumPrice === "" ? null : Number(filters.maximumPrice);

  return perfumes.filter((perfume) => {
    if (filters.brand && perfume.brand !== filters.brand) return false;
    if (minimumPrice !== null && perfume.price < minimumPrice) return false;
    if (maximumPrice !== null && perfume.price > maximumPrice) return false;
    return true;
  });
}
