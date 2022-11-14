const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer')

const getInfo = async(event)=>{
    event.preventDefault()
    let cityVal = cityName.value
  
    if(cityVal === ""){
        city_name.innerText=(`Plz Write The Name Before Search`)
        datahide.classList.add('data_hide')
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=3867c4463fa51edbe225f612fa804fdb&units=metric`
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];
            city_name.innerText = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
            temp_real_val.innerText = arrdata[0].main.temp;
            // temp_status.innerText = arrdata[0].weather[0].main;
            const tempmood = arrdata[0].weather[0].main;

            // condition to chech sunny or cloudy

            if(tempmood == "Clear"){
                temp_status.innerHTML = "<i class='fa-solid fa-sun' style='color: #eccc68'></i>"
            }else if(tempmood == "Rain"){
                temp_status.innerHTML = `<i class='fa-solid fa-cloud-rain' style='color: #f1f2f6'></i>`
            }else if(tempmood == "Thunderstorm"){
                temp_status.innerHTML = `<i class="fa-solid fa-cloud-bolt" style='color: #a4b0be'></i>`
            }else if(tempmood == "Snow"){
                temp_status.innerHTML = `<i class="fa-solid fa-snowflake"></i>`
            }

            datahide.classList.remove('data_hide')
        }catch{
            city_name.innerText=(`Plz Enter Youre City Name Properly`)
            datahide.classList.add('data_hide')
        }
    }
};

submitBtn.addEventListener('click', getInfo);

    
const getCurrentDay = () =>{
        
    let weekday = new Array(7);
 weekday[0] = "Sunday";
 weekday[1] = "Monday";
 weekday[2] = "Tuesday";
 weekday[3] = "Wednesday";
 weekday[4] = "Thursday";
 weekday[5] = "Friday";
 weekday[6] = "Saturday";

 let currentTime = new Date();
 days = weekday[currentTime.getDay()];
 let day = document.getElementById('day');
 

 day.innerText = days;
};
getCurrentDay();

const getCurrentTime = ()=>{

    let months = [
      "Jan",
      "Fab",
      "Mar",
      "Apr",
      "May",
      "June",
      "jul",
      "Aug",
      "Sup",
      "Oct",
      "Nov",
      "Dec",
    ];

    let now = new Date();
     month = months[now.getMonth()];
     date= now.getDate();
    let today_date = document.getElementById('today_date');

    today_date.innerText = `${date} / ${month}`;
}
getCurrentTime();