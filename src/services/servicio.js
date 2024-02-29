

//CONSUMIENDO APIS

//1. Declarar una variable
//para almacenar la URL del API
let url="https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?market=US"

//2. Almacenar en una variable
//o en varias variables datos de control
//que se necesiten en el api
let token="Bearer BQAGdFflYRgaVJ-1fslIQQBx-BeBATyUbGMnUdZpmYO0ZdbjXD2vMSvHM0p3IPxUH9Lmoc06iDrNJniwwHcS6q50VnmoADR3LoT_n1nMQf64IehSUHk"

//3. Construir la peticion que se va a enviar
let peticion={
    method:"GET",
    headers:{
        Authorization:token
    }
}

//4. Ejecutar el consumo del API
fetch(url,peticion)
.then(function(){})
.then(function(){})
.catch(function(){})