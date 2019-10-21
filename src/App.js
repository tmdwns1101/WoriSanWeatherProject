import React, {Component,Fragment, createRef} from "react";
import TownWeatherContainer from "./containers/TownWeatherContainer";
import MountainWeatherContainer from "./containers/MountainWeatherContainer";
import Main from "./components/Main";
import styled, {createGlobalStyle, css } from "styled-components";
import {MdBuild, MdHome, MdTerrain, MdTouchApp} from "react-icons/md"
const GlobalStyle = createGlobalStyle`
	body {
	width: 100vw;
	height: 300vh;
	}
`
const Section = styled.section`
	width: 100vw;
	height: 100vh
`

const ButtonContainer = styled.div`
	position: fixed;
	right: 0;
	top: 1rem;
	width: 100px;
	height: 100px;
	padding: 1%;
	

`

const DriveButton = styled.div`
	position: absolute;
	left: 50%;
	top: 0;
	transform: translate(-50%, 0);
	width: 80px;
	height: 80px;
	border-radius: 100%;
	transition: 0.5s ease-in;
	z-index: 10;
	border: 2px solid black;
	background: #ff922b;	
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
	color: white;
	${props => props.toggle && css`
		background: #868e96;
	`}
`
const HomeButton = styled.div`
	position: absolute;
	left: 50%;
	top: 0;
	transform: translate(-50%, 0);
	width: 80px;
	height: 80px;
	border-radius: 100%;
	transition: 0.5s ease-in;
	border: 2px solid black;
	opacity: 0;
	background: #ff922b;	
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 3rem;
	color: white;

	${props => props.toggle && css`
		transform: translate(-50%, 125%);
		opacity: 1;
	`}
`
const MWButton = styled.div`
	position: absolute;
	left: 50%;
	top: 0;
	transform: translate(-50%, 0);
	width: 80px;
	height: 80px;
	border-radius: 100%;
	transition: 0.5s ease-in;
	border: 2px solid black;
	opacity: 0;
	background: #40c057;	
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	font-size: 3rem;
	color: white;
	${props => props.toggle && css`
		transform: translate(-50%, 250%);
		opacity: 1;
	`}
	span {
		font-size: 9px;
	}
`
const TWButton = styled.div`
	position: absolute;
	left: 50%;
	top: 0;
	transform: translate(-50%, 0);
	width: 80px;
	height: 80px;
	border-radius: 100%;
	background: #15aabf;
	transition: 0.5s ease-in;
	border: 2px solid black;
	opacity: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	font-size: 3rem;
	color: white;
	${props => props.toggle && css`
		transform: translate(-50%, 375%);
		opacity: 1;
	`}
	span {
		font-size: 9px;
	}
`

class App extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			toggle: false
		}
		this.main = createRef();
		this.townWeather = createRef();
		this.mountainWeather = createRef();
		this.smooth = null;
		this.weight = 10;
	}
	
	
	
	handleSmooth = (target) => {
		let next;
		const curY = window.pageYOffset;
		if(curY < target) {
			next = curY + this.weight;
			if(next >= target) {
				clearInterval(this.smooth);
			}
		}
		else {
			next = curY - this.weight;
			if(next <= target) {
				console.log("clear!!")
				clearInterval(this.smooth);
			}
		}
		window.scrollTo(0,next);		
	}
	
	handleScroll = () => {
		console.log(window.pageYOffset)
	}
	handleOnToggle = () => {
		this.setState({
			toggle: !this.state.toggle
		})
	}
 	componentDidMount() {
		
		window.addEventListener("scroll",this.handleScroll);
		console.log(`this main component top: ${this.main.current.offsetTop}`);
		console.log(`this town component top: ${this.townWeather.current.offsetTop}`);
		console.log(this.mountainWeather.current.offsetTop);
	}

	componentWillUnmount(){
		window.removeEventListener("scroll", this.handleScroll);
	}
  	handleGoHome = () => {
		
		const mainPos = this.main.current.offsetTop;
		this.smooth = setInterval(() => {this.handleSmooth(mainPos)}, 1);
	}
	handleGoMW = () => {
		const mWPos = this.mountainWeather.current.offsetTop;
		this.smooth = setInterval(() => {this.handleSmooth(mWPos)},1);
	}
	handleGoTW = () => {
		const tWPos = this.townWeather.current.offsetTop;
		this.smooth = setInterval(() => {this.handleSmooth(tWPos)},1);
	}
	render() {
		const {toggle} = this.state;
		return (
			<Fragment>
				<GlobalStyle />
    			<Section ref={this.main}>
	  				<Main />
				</Section>
				<Section ref={this.mountainWeather}>
	  				<MountainWeatherContainer />
    			</Section>
				<Section ref={this.townWeather}>
      				<TownWeatherContainer />
				</Section>
			
				<ButtonContainer  >
					<DriveButton toggle={this.state.toggle} onClick={this.handleOnToggle}><MdBuild/></DriveButton>
					<HomeButton toggle={this.state.toggle} onClick={this.handleGoHome}><MdHome /></HomeButton>
					<MWButton toggle={this.state.toggle} onClick={this.handleGoMW} ><MdTerrain /><span>산악 기상</span></MWButton> 
					<TWButton toggle={this.state.toggle} onClick={this.handleGoTW}><MdTouchApp /><span>날씨 예보</span></TWButton>
				</ButtonContainer>
			</Fragment>
  		);
	}
}

export default App;