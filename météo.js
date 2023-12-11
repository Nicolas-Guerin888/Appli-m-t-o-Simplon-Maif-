// Authentification de l'API
fetch('https://api.openweathermap.org/data/2.5/weather?q=niort&units=metric&appid=a852d92f6430f92c2f7634c79e33c73e', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})

//Réception données du réseau
   .then(response => response.json())

// Traitement des données Json. Le parse permet de fragmenter les données Json pour les exploiter.
   .then(data => {
    var myJson = JSON.stringify(data);
    var parsedJson = JSON.parse(myJson);

 // Mise à jour des contenus des éléments avec les classes créées dans l'html
 var titreMeteoElement = document.querySelector('.titreMeteo');
 var temperature = document.querySelector('.temperature');
 var temps = document.querySelector('.temps');
 var humidite = document.querySelector('.humidite');
 var dateHtml = document.querySelector('.date');
 var heureHtml = document.querySelector('.heure');
       
     titreMeteoElement.textContent = parsedJson.name;
     temperature.textContent = Math.round(parsedJson.main.temp) + "°C";
     temps.textContent = parsedJson.weather[0].main;
     humidite.textContent = parsedJson.main.humidity + "% d'humidité";


// Date et heure :
var dateDuJour = new Date();
var date = dateDuJour.getDate()+"/"+ (dateDuJour.getMonth()+1) + "/" + dateDuJour.getFullYear();
var heure = dateDuJour.getHours() + ":" + dateDuJour.getMinutes();

dateHtml.textContent = date;
heureHtml.textContent = heure;

})
