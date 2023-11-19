//key endress Api open active Weather_map
 var key = '36fdbc9b4ea2803bffe5d9b29cde986b'
 

//Execution the forecast weather with name the city on the API
async function findCity(nameCity){
    var key = '36fdbc9b4ea2803bffe5d9b29cde986b'
    var dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=${key}&lang=pt_br&units=metric`).then(dados => dados.json())

 putDatasOnScreen(dados)
   }
  
 //Call function after write name the city.
function writeCity(){
  var nameCity = document.getElementById('write_city').value
  findCity(nameCity)
   
 }



