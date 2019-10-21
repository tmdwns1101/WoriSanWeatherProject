const axios = require('axios')
var express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())

app.get('/', (req, res) => {
	res.send("hello index");
})

app.get('/townWeather', function (req, res, next) {
	const url =
    "http://newsky2.kma.go.kr/service/SecndSrtpdFrcstInfoService2/ForecastSpaceData";
	
	
	const {ServiceKey, base_date,base_time,nx,ny,numOfRows,pageNo,_type} = req.query;
	console.log(req);
	axios.get(`${url}?ServiceKey=${ServiceKey}&base_date=${base_date}&base_time=${base_time}&nx=${nx}&ny=${ny}&numOfRows=264&pageNo=1&_type=json`)
	.then(response => {
		res.send(response.data)
	})
	.catch(e => {
		res.send(e)
	})
})
 
app.get('/mountainWeather', function (req, res, next) {
	console.log("mountainWeather Router!")
	const url = "http://know.nifos.go.kr/openapi/mtweather/mountListSearch.do";
	
	const { keyValue } = req.query
	axios.get(`${url}?keyValue=${keyValue}&version=1.0&localArea=1&obsid=1917`)
	.then(response => {
		res.send(response.data)
	})
	.catch(e => {
		res.send(e)
	})
})

app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080')
	
})

