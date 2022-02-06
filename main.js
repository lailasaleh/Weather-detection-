let test = document.getElementById("test");
let city = prompt("Please enter a city name","Ramallah");
let url = `https://api.weatherapi.com/v1/current.json?key=7d54e9d3b9154b8d9d811157213112&q=${city}&aqi=no`;

let res=``;
let myHttp = new XMLHttpRequest();
myHttp.onreadystatechange=function(){
if(myHttp.readyState==4 && myHttp.status==200){
  
    let data = JSON.parse(myHttp.responseText);
    console.log(data);
        res+=`
        <div id="cityName">
        <h2>City name: ${data.location.name}</h2>
        <img class="image" src="${data.current.condition.icon}" />
        </div>
        <hr/>
        <div class="content">
        <h3>Clouds: ${data.current.cloud}</h3>
        <h3>Temp_c: ${data.current.temp_c}</h3>
        <h3>Temp_f: ${data.current.temp_f}</h3>
        <h3>Last updated: ${data.current.last_updated}</h3>      
        </div>`;  
  test.innerHTML=res;
}
}
myHttp.open("GET",url);
myHttp.send();
console.log(myHttp);
