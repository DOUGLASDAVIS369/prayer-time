const btn = document.getElementById("btn");
const inputCity = document.getElementById("city");

btn.addEventListener("click", () => {
  const cityVal = inputCity.value;
  if (cityVal !== "") {
    getData(cityVal);
    inputCity.value = "";
  } else {
    alert("أكتب أسم المدينة");
  }

  // console.log(cityVal);
});

function getData(city) {
  let url = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=SaudiArabia&method=4`;

  axios.get(url).then((response) => {
    let pTimes = `
    
    <li><span class="ar"> التاريخ الهجري </span> hijri : <span class="time">${response.data.data.date.hijri.date}</span></li>
    
    <li><span class="ar"> التاريخ الميلادي </span>date : <span class="time">${response.data.data.date.readable}</span></li>
    
    <li><span class="ar"> الفجر </span>Fajr - <span class="time">${response.data.data.timings.Fajr}</span></li>
    
    <li><span class="ar"> الشروق </span>Sunrise - <span class="time">${response.data.data.timings.Sunrise}</span></li>
    
    <li><span class="ar"> الظهر </span>Dhuhr - <span class="time">${response.data.data.timings.Dhuhr}</span></li>
    
    <li><span class="ar"> العصر </span>Asr - <span class="time">${response.data.data.timings.Asr}</span></li>
    
    <li><span class="ar"> المغرب </span>Maghrib - <span class="time">${response.data.data.timings.Maghrib}</span></li>
    
    <li><span class="ar"> العشاء </span>Isha - <span class="time">${response.data.data.timings.Isha}</span></li>
    
    <li><span class="ar"> الثلث الأول </span>Firstthird - <span class="time">${response.data.data.timings.Firstthird}</span></li>
    
    <li><span class="ar"> الثلث الأخير </span>Lastthird - <span class="time">${response.data.data.timings.Lastthird}</span></li>
`;

    document.getElementById("pray-times").innerHTML = pTimes;
  });
}
