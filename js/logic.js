
const searchForm = document.querySelector('form.d-flex');
const searchInput = document.getElementById('searchBar');
const allBoxes = document.querySelectorAll('.box');

const handleSubmit = (e) => {
e.preventDefault();
const searchTerm = searchInput.value.toLowerCase().trim();

if (searchTerm) {
    const matchingElements = Array.from(allBoxes).filter(box => 
    box.id.toLowerCase().includes(searchTerm)
    );

    if (matchingElements.length > 0) {
    // Scroll ke elemen pertama yang cocok
    matchingElements[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // Highlight semua elemen yang cocok
    matchingElements.forEach(highlightElement);

    // Tampilkan semua elemen yang cocok, sembunyikan yang lain
    allBoxes.forEach(box => {
        if (matchingElements.includes(box)) {
        box.style.display = 'block';
        } else {
        box.style.display = 'none';
        }
    });
    } else {
        Swal.fire({
        icon: "error",
        title: "Adoh",
        text: "Maaf le, Tidak Ada Gambar Yang Ngana Cari!",
        confirmButtonText:"Oke Bang"
        });
    // Tampilkan kembali semua gambar jika tidak ada yang cocok
    allBoxes.forEach(box => box.style.display = 'block');
    }
} else {
    // Jika search term kosong, tampilkan semua gambar
    allBoxes.forEach(box => box.style.display = 'block');
}
};

const highlightElement = (element) => {
element.style.transition = 'background-color 0.5s';
setTimeout(() => {
    element.style.backgroundColor = '';
}, 2000);
};

searchForm.addEventListener('submit', handleSubmit);