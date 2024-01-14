const searchBar = document.getElementById("search-bar");

const handleSearch = () => {
  const searchValue = searchBar.value;
  openModal(searchValue);
  searchBar.value = "";
};
