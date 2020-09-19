export function GroupRestaurants(price, results) {
  return results.filter((rest) => {
    return rest.price === price;
  });
}
