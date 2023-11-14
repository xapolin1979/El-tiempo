
 let longitud;
 let latitud;
 let temperaturaValor=document.getElementById('temperatura-valor');
 let temperaturaDescripcion=document.getElementById('temperatura-descripcion');
 let ubicaccion =document.querySelector('.ubicaccion');
 let icono=document.getElementById('icono');
 let velocidad =document.getElementById('velocidad');
 let barra=document.getElementById('barra')
 let btn=document.getElementById('btn')
window.addEventListener('load',()=>{

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position =>{
            console.log(position.coords.longitude)
            longitud=position.coords.longitude;
            latitud=position.coords.latitude;
            const key='17b8bedbbacf47ba72d0682950eed9fc';
            
            const url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&lang=es&units=metric&appid=${key}`;
            fetch(url)
            .then(res=>res.json())
            .then(datos=>{
                console.log(datos)
                let temp= Math.round(datos.main.temp);
                temperaturaValor.textContent=`${temp}°C`
                let descripcion=datos.weather[0].description;
                temperaturaDescripcion.textContent=descripcion.toUpperCase();
                ubic=datos.name;
                ubicaccion.textContent=ubic;
                viento=datos.wind.speed;
                velocidad.textContent=`${viento}m/s`;
                let icon=datos.weather[0].icon;
                console.log(datos.weather[0].icon)
            
            
                switch(datos.weather[0].main){
                  
                    case'thunderstorm':
                    icono.src='animated/thunder.svg';
                    console.log('tormenta');
                    break;
                    case'Drizzle':
                    icono.src='animated/rainy-2.svg';
                    console.log('llovizna');
                    break;
                    case'Rain':
                    icono.src='animated/rainy-7.svg';
                    console.log('lluvia');
                    break;
                    case'Snow':
                    icono.src='animated/snowy-6.svg';
                    console.log('nieve');
                    break;
                    case'Clear':
                    icono.src='animated/day.svg';
                    console.log('limpio');
                    break;
                    case'Atmosphere':
                    icono.src='animated/weather.svg';
                    console.log('atmosfera');
                    break;
                    case'Clouds':
                    icono.src='animated/cloudy-day-1.svg';
                    console.log('nuves');
                    break;
                    default:
                        icono.src='animated/cloudy-day-1.svg';
                        console.log('por defecto')
            
            
            
            
                }})
                
            .catch((error)=>console.log(error))
            })
    
    
       }









})

  











btn.addEventListener('click', function() {
    const valorDelInput = barra.value ;
  
const key='17b8bedbbacf47ba72d0682950eed9fc'

const url=`https://api.openweathermap.org/data/2.5/weather?q=${valorDelInput}&lang=es&units=metric&appid=${key}`

fetch(url)
.then(res=>res.json())
.then(datos=>{
    console.log(datos)
    let temp= Math.round(datos.main.temp);
    temperaturaValor.textContent=`${temp}°C`
    let descripcion=datos.weather[0].description;
    temperaturaDescripcion.textContent=descripcion.toUpperCase();
    ubic=datos.name;
    ubicaccion.textContent=ubic;
    viento=datos.wind.speed;
    velocidad.textContent=`${viento}m/s`;
    let icon=datos.weather[0].icon;
    console.log(datos.weather[0].icon)


    switch(datos.weather[0].main){
      
        case'thunderstorm':
        icono.src='animated/thunder.svg';
        console.log('tormenta');
        break;
        case'Drizzle':
        icono.src='animated/rainy-2.svg';
        console.log('llovizna');
        break;
        case'Rain':
        icono.src='animated/rainy-7.svg';
        console.log('lluvia');
        break;
        case'Snow':
        icono.src='animated/snowy-6.svg';
        console.log('nieve');
        break;
        case'Clear':
        icono.src='animated/day.svg';
        console.log('limpio');
        break;
        case'Atmosphere':
        icono.src='animated/weather.svg';
        console.log('atmosfera');
        break;
        case'Clouds':
        icono.src='animated/cloudy-day-1.svg';
        console.log('nuves');
        break;
        default:
            icono.src='animated/cloudy-day-1.svg';
            console.log('por defecto')




    }})

.catch((error)=>console.log(error))

});



