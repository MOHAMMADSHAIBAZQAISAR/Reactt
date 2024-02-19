export function filterData(searchText, restaurantsList) {
  return restaurantsList.filter((restaurant) => {
    return restaurant.info.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
}
