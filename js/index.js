const form = document.getElementById('searchForm');
const queryInput = document.getElementById('searchQuery');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = queryInput.value.trim();
        if (query) {
            alert(`Suche nach "${query}" wird ausgef\u00fchrt.`);
        }
    });
}

