import React , {Fragment} from 'react';
import styled , {css} from "styled-components";
import {FaLaughSquint, FaGrin ,FaGrinTongueSquint} from "react-icons/fa";
import { WiThermometer, WiStrongWind, WiHumidity, WiHail} from "react-icons/wi";
import backGroundImg from "../img/hiking-4011043_1920.jpg"
const MountainWeatherSection = styled.div`
	width: 100vw;
	height: 100vh;	
	display: flex;
	align-items: center;
	justify-content: center;
	background-image: url(${backGroundImg});
	

`

const MountainWeatherContainer = styled.div`
	
	width: 80vw;
	height: 40vw;
	background: rgba(255,255,204,0.8);
	border-radius: 5px;
	display: flex;
	justify-content: space-around;
    align-items: center;
	flex-direction: column;
	
`

const ShowState = styled.div`
	width: 100px;
	height: 100px;
	font-size: 100px;
	
	${props => props.good && css`
		color: #2f9e44;
	`}
	${props => props.soso && css`
		color: #fab005;
	`}
	${props => props.bad && css`
		color: #c92a2a;
	`}

`
const StateText = styled.span`
	font-size: 3rem;
	font-weight: 300;
	color: black;
	text-align: center;
	${props => props.good && css`
		color: #2f9e44;
	`}
	${props => props.soso && css`
		color: #fab005;
	`}
	${props => props.bad && css`
		color: #c92a2a;
	`}

`
const ShowWeatherStateBlock = styled.div`
	display: flex;
	justify-content: space-around;
    align-items: center;
	width: 100%;
`
const WeatherItem = styled.div`
	display: flex;
	justify-content: center;
    align-items: center;
	flex-direction: column;
`


const WeatherInfo = styled.div`
	display: flex;
	justify-content: center;
    align-items: center;
	border-radius: 100%;
	width: 80px;
	height: 80px;
	font-size: 80px;
	color: white;
	${props => props.hum && css`
		background-color: #22b8cf;
	`}
	${props => props.precipitation && css`
		background-color: #1864ab;
	`}
	${props => props.windy && css`
		background-color: #66a80f;
	`}
	${props => props.temp && css`
		background-color: #f03e3e;
	`}
`
const Title = styled.span`
	font-size: 2rem;
	font-weight: 200;
	${props => props.hum && css`
		color: #22b8cf;
	`}
	${props => props.precipitation && css`
		color: #1864ab;
	`}
	${props => props.windy && css`
		color: #66a80f;
	`}
	${props => props.temp && css`
		color: #f03e3e;
	`}
`
const Text = styled.span`
	font-size: 3rem;
	font-weight: 300;
	color: black;
`

function windyCheck(windy) {
	if(windy >= 0 && windy <= 3.3){
		return 1;
	}
	else if(windy > 3.3 &&  windy <= 10){
		return 2;
	}
	else{
		return 3;
	}
	
}
function precipitaionCheck(precipitation) {
	
	if(precipitation >= 0 && precipitation < 1){
		return 1;
	}
	else if(precipitation >= 1 &&  precipitation < 10){
		return 2;
	}
	else{
		return 3;
	}
}

function WeatherState({flag}) {
	if(flag === 1)  {return (
		<Fragment>
			<ShowState good>< FaLaughSquint/></ShowState>
			<StateText good>등산하기 좋은 날</StateText>
		</Fragment>
	)}
	if(flag === 2)  {return (
		<Fragment>
			<ShowState soso>< FaGrin/></ShowState>
			<StateText soso>등산하기 괜찮은 날</StateText>
		</Fragment>
	)}
	if(flag === 3)  {return (
		<Fragment>
			<ShowState bad>< FaGrinTongueSquint/></ShowState>
			<StateText bad>등산하기 안 좋은 날</StateText>
		</Fragment>
	)}
}

function MountainWeather({data}) {
	
	const temperature = data[11].value;
	const hum = data[12].value;
	const windy = data[15].value;
	const precipitation = data[7].value;
	const flag1 = precipitaionCheck(precipitation);
	const flag2 = windyCheck(windy);
	const result = flag1 > flag2 ? flag1 : flag2;
	
	
	return (
		<MountainWeatherSection>
			
			<MountainWeatherContainer>
				
				<WeatherState flag={result} />
				
				<ShowWeatherStateBlock>
					<WeatherItem>
						<WeatherInfo temp><WiThermometer /></WeatherInfo>
						<Title temp>체감온도</Title>
						<Text>{temperature}°C</Text>
					</WeatherItem>
					<WeatherItem>
						<WeatherInfo hum><WiHumidity /></WeatherInfo>
						<Title hum>습도</Title>
						<Text>{hum}%</Text>
					</WeatherItem>
					<WeatherItem>
						<WeatherInfo precipitation><WiHail /></WeatherInfo>
						<Title precipitation>강수량</Title>
						<Text>{precipitation}mm</Text>
					</WeatherItem>
					<WeatherItem>
						<WeatherInfo windy><WiStrongWind /></WeatherInfo>
						<Title windy>풍속</Title>
						<Text>{windy}m/s</Text>
					</WeatherItem>
				</ShowWeatherStateBlock>
			</MountainWeatherContainer>
		</MountainWeatherSection>
	)
}
export default MountainWeather;
