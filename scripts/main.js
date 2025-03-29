const input = document.getElementById('queryInput');
const form = document.getElementById('searchForm');
const checkbox = document.getElementById('newTabCheckbox');

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        if (document.activeElement !== input) {
            event.preventDefault();
            input.focus(); 
        }
    }
});

form.addEventListener('submit', function(event) {
    if (input.value.trim() === ""){
        event.preventDefault();
        return false
    }
    if (checkbox.checked) {
        form.target = '_blank'; 
    } else {
        form.target = '_self';  
    }
    input.focus(); 
});

checkbox.addEventListener('change', function() {
    input.focus();
});

// input.addEventListener('input', function() {
//     const query = input.value;
//     if (query) {
//         fetch(`https://duckduckgo.com/ac/?q=${encodeURIComponent(query)}`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data);
//             })
//             .catch(error => {
//                 console.error('Ошибка:', error);
//             });
//     }
// });
input.addEventListener('input', function() {
    const query = input.value;
    if (query) {
        fetch(`https://api.github.com/search/repositories?q=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => console.log(data.items))
    .catch(error => console.error('Ошибка:', error));

    }
});