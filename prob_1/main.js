const getReportAPI = async () => {
  let data;
  const url = "https://gist.githubusercontent.com/carmandomx/b27e23332eda1d061feb3cdada26afc0/raw/438d33407442d2abbf605e87336f48a83ccff3f5/data.json";
  data = await fetch(url);
  data = await data.json();
  return data;
};

const getReportDaily = async () => {
  const res = await getReportAPI();
  //Daily Current Hours
  document.getElementById("work-curr").innerHTML = `${res[0].timeframes.daily.current}hrs`;
  document.getElementById("play-curr").innerHTML = `${res[1].timeframes.daily.current}hrs`;
  document.getElementById("study-curr").innerHTML = `${res[2].timeframes.daily.current}hrs`;
  document.getElementById("excercise-curr").innerHTML = `${res[3].timeframes.daily.current}hrs`;
  document.getElementById("social-curr").innerHTML = `${res[4].timeframes.daily.current}hrs`;
  document.getElementById("self-care-curr").innerHTML = `${res[5].timeframes.daily.current}hrs`;

  //Daily Previous Hours
  document.getElementById("work-prev").innerHTML = `Yesterday - ${res[0].timeframes.daily.previous}hrs`;
  document.getElementById("play-prev").innerHTML = `Yesterday - ${res[1].timeframes.daily.previous}hrs`;
  document.getElementById("study-prev").innerHTML = `Yesterday - ${res[2].timeframes.daily.previous}hrs`;
  document.getElementById("excercise-prev").innerHTML = `Yesterday - ${res[3].timeframes.daily.previous}hrs`;
  document.getElementById("social-prev").innerHTML = `Yesterday - ${res[4].timeframes.daily.previous}hrs`;
  document.getElementById("self-care-prev").innerHTML = `Yesterday - ${res[5].timeframes.daily.previous}hrs`;
}
const getReportWeekly= async () => {
  const res = await getReportAPI();
    //Titles
    document.getElementById("work-title").innerHTML = `${res[0].title}`;
    document.getElementById("play-title").innerHTML = `${res[1].title}`;
    document.getElementById("study-title").innerHTML = `${res[2].title}`;
    document.getElementById("excercise-title").innerHTML = `${res[3].title}`;
    document.getElementById("social-title").innerHTML = `${res[4].title}`;
    document.getElementById("self-care-title").innerHTML = `${res[5].title}`;
    
  //Weekly Current Hours
  document.getElementById("work-curr").innerHTML = `${res[0].timeframes.weekly.current}hrs`;
  document.getElementById("play-curr").innerHTML = `${res[1].timeframes.weekly.current}hrs`;
  document.getElementById("study-curr").innerHTML = `${res[2].timeframes.weekly.current}hrs`;
  document.getElementById("excercise-curr").innerHTML = `${res[3].timeframes.weekly.current}hrs`;
  document.getElementById("social-curr").innerHTML = `${res[4].timeframes.weekly.current}hrs`;
  document.getElementById("self-care-curr").innerHTML = `${res[5].timeframes.weekly.current}hrs`;

  //Weekly Previous Hours
  document.getElementById("work-prev").innerHTML = `Last Week - ${res[0].timeframes.weekly.previous}hrs`;
  document.getElementById("play-prev").innerHTML = `Last Week - ${res[1].timeframes.weekly.previous}hrs`;
  document.getElementById("study-prev").innerHTML = `Last Week - ${res[2].timeframes.weekly.previous}hrs`;
  document.getElementById("excercise-prev").innerHTML = `Last Week - ${res[3].timeframes.weekly.previous}hrs`;
  document.getElementById("social-prev").innerHTML = `Last Week - ${res[4].timeframes.weekly.previous}hrs`;
  document.getElementById("self-care-prev").innerHTML = `Last Week - ${res[5].timeframes.weekly.previous}hrs`;
}

const getReportMonthly = async () => {
  const res = await getReportAPI();

  //Weekly Current Hours
  document.getElementById("work-curr").innerHTML = `${res[0].timeframes.monthly.current}hrs`;
  document.getElementById("play-curr").innerHTML = `${res[1].timeframes.monthly.current}hrs`;
  document.getElementById("study-curr").innerHTML = `${res[2].timeframes.monthly.current}hrs`;
  document.getElementById("excercise-curr").innerHTML = `${res[3].timeframes.monthly.current}hrs`;
  document.getElementById("social-curr").innerHTML = `${res[4].timeframes.monthly.current}hrs`;
  document.getElementById("self-care-curr").innerHTML = `${res[5].timeframes.monthly.current}hrs`;

  //Weekly Previous Hours
  document.getElementById("work-prev").innerHTML = `Last Month - ${res[0].timeframes.monthly.previous}hrs`;
  document.getElementById("play-prev").innerHTML = `Last Month - ${res[1].timeframes.monthly.previous}hrs`;
  document.getElementById("study-prev").innerHTML = `Last Month - ${res[2].timeframes.monthly.previous}hrs`;
  document.getElementById("excercise-prev").innerHTML = `Last Month - ${res[3].timeframes.monthly.previous}hrs`;
  document.getElementById("social-prev").innerHTML = `Last Month - ${res[4].timeframes.monthly.previous}hrs`;
  document.getElementById("self-care-prev").innerHTML = `Last Month - ${res[5].timeframes.monthly.previous}hrs`;
}

getReportWeekly();
