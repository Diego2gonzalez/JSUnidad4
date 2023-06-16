
function getImage(data) {
    const url = 'https://epic.gsfc.nasa.gov/api/natural'
    const date = data.date 
   
    .substr(0,10)//obtenie los primeros 10 caracteristicas
    .split('-')// separa los caracteres por el guion
    return'${url}/${date[0]}/${date[1]}/${date[2]}/png/${date.image}.png'
}
 // fuction para obtener la url  de cada imagen
 data.forEach(function(data)  {
    const img= document.createElement('img')
    img.src = getImage(data)
    img.alt = data.caption
});

 const app = document.getElementById('app');
 getImagesFromNasa()
 .then(function(data)){
console.log(data)
 data.forEach(function(data)  {
    const img= document.createElement('img')
    img.src = getImage(data)
    img.alt = data.caption
    app.appendChild(Image)
});
 

function getImagesFromNasa() {
    
    fetch('https://epic.gsfc.nasa.gov/api/natural')
  .then(function(response) {
    return response.json()  
  })
  .then(function(data) {
    console.log(data)
  })
  .catch(function(error) {
    console.log(error)
  }) 
}