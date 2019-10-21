import axios from "axios";
import {mountainWeatherAPIKey} from "./apiKeys";

export const getMountainWeather = async() => {
	try {
		const res = await axios.get("https://proxyserver.run.goorm.io/mountainWeather", {
			params: {
				keyValue: mountainWeatherAPIKey
			}
		});
		console.log(res.data);
		const XMLParser = require('react-xml-parser');
		const xml = new XMLParser().parseFromString(res.data); 
		console.log(xml.children[2].children[0].children);
		return xml.children[2].children[0].children;
	}catch(e) {
		console.log(e);
	}
}