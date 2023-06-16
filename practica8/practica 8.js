const searchInput = document.getElementById('search');
const resultados = document.getElementById('resultados');
const searchButton = document.getElementById('button');

searchButton.addEventListener('click',searchGIFs);

function search() {
    const search = searchInput.value;
    
    
    return getGiph.Results(url)
    .the(function (gifs) {
        console.log(gifs)
        gifs.forEach(function (gif) {
            const img = document.createElement('img')
            img.src = gif.fixed_height.url;
            img.alt = gif.title
            Results.appendChild(img)

            function buildUrl(search) {
                const API_KEY = '';
                const  baseUrl= 'api.giphy.com/v1/gifs/search'
                return `${baseUrl}?q=${search}&api_key=${API_KEY}&limit=9`;
                
            }
        });
        
    })
}
function getGiphResults(url) {
    
}