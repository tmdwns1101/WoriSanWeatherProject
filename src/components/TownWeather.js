import React  from "react";
import styled from "styled-components";
import Chart from 'react-google-charts';
import moment from "moment"

const ChartSection = styled.div`

	width: 100vw;
	min-width: 70%;
	height: 100vh;
	background: #dee2e6;
	display: flex;
	justify-content: center;
    align-items: center;
	flex-direction: column;
	
	
`
const ChartContainer = styled.div`
	width: 90vw;
	height: 40vw;
	border-radius: 5px;
	transform: translate(0,-1%);
	box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.15);
`

const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
    font-size: 2.5vw;
    fill: #333333;
	width: 25vw;
	height: 14vw;
	border-radius: 16px;
	transform: translate(0,50%);
	z-index: 1;
	background-color:#fa5252;
	
`


function TownWeather({data}) {
	
	console.log("TownWeather");
	
	console.log(data);
	const test = data.filter(elem => elem.category === "REH" || elem.category === "T3H");
	console.log(test);
	const items = data.filter(elem => elem.category === "REH" || elem.category === "T3H").slice(0,30);
	console.log(items);
	let needData = [['fcstTime', '습도(%)', '기온(°C)']];
	for(let i =0; i < items.length-1; i += 2){
		let time = items[i].fcstTime === "0000" ?  moment(items[i].fcstDate,"YYYYMMDD").format("MM/DD") : `${String(items[i].fcstTime).substr(0,2)}시`;
		let REH = items[i].fcstValue;
		let T3H = items[i+1].fcstValue;
		needData.push([time, REH, T3H])
	
	}
	console.log(needData)
	
	
	return(
		<ChartSection>
			<Title>우리 동네 예보</Title>
			<ChartContainer>
				<Chart
  					width={'90vw'}
  					height={'40vw'}
  					chartType="ComboChart"
 
  					data={needData}
  					options={{
    				
    				vAxis: { title: '온도 및 습도' },
    				hAxis: { title: '시간' },
    				seriesType: 'bars',
    				series: { 1: { type: 'line' } },
  					}}
  					rootProps={{ 'data-testid': '1' }}
				/>
	</ChartContainer>
	
	</ChartSection>
	)
}

export default TownWeather;