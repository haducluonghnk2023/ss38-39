function toggleSearch() {
    var searchBar = document.querySelector('.search-bar');
    var searchInput = document.querySelector('.search-input');

    searchBar.classList.toggle('active');
    searchInput.classList.toggle('active');

    if (searchBar.classList.contains('active')) {
        searchInput.focus();
    }
}