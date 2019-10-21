import axios from "axios";
import moment from "moment";
import {townWeatherAPIKey} from "./apiKeys"; 

const getBaseParams = () => {
  const today = moment();
  const hour = today.format("HH");
  let base_date;
  let base_time;

  console.log(`hour is ${hour}`);
  if (hour < 2) {
    base_date = today.add(-1, "day").format("YYYYMMDD");
    base_time = "2300";
  } else {
    console.log("else");
    base_date = today.format("YYYYMMDD");
	
    base_time = `${hour - ((hour + 1) % 3)}00`;
	if(base_time.length < 4) base_time = "0" + base_time;
	console.log(base_time)
  }
  return [base_date, base_time];
};

export const getWeather = async () => {
	console.log("loading data");
  
  const [base_date, base_time] = getBaseParams();
  const nx = 59;
  const ny = 125;
  try {
		
	  /*const response = await axios.get(
	  `https://proxyserver.run.goorm.io/townWeather?ServiceKey=${townWeatherAPIKey}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}&numOfRows=264&pageNo=1&_type=json`
	  );*/
	  const response = await axios.get("https://proxyserver.run.goorm.io/townWeather", 
									   { params: {
									   		ServiceKey: townWeatherAPIKey,
									   		base_date: base_date,
									   		base_time: base_time,
									   		nx: nx,
									   		ny: ny,
									   		numOfRows: 264,
									   		pageNo: 1,
									   		_type: "json"
									   
									   	}})
	 
	  console.log("Success get data");
	  console.log(response.data);
	  
	  return response.data;
  }catch(e) {
	console.log(e)
  }
};
