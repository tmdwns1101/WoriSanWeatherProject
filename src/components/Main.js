import React , {Fragment} from 'react';
import styled , {css, keyframes} from "styled-components";
import backGroundImg from "../img/landscape-1844227_1280.png";
import boyScout from "../img/boy-scout-311682_1280.png";

const MainSection = styled.div`
	position: relative;
	width: 100vw;
	height: 100vh;
	background-image: url(${backGroundImg});
	background-size: 100% 100%;
	background-repeat: no-repeat;
	
`

const PeopleContainer = styled.div`
	position: absolute;
	left: 6rem;
	bottom: 2rem;
	width: 20vw;
	height: 26vw;
	background-image: url(${boyScout});
	background-size: 100% 100%;
	background-repeat: no-repeat;
	background-size: contain;
`

//width: 1200px height: 500px
const TitleContainer = styled.div`
	position: absolute;
	left: 15rem;
	top: 3rem;
	width: 63vw;  
	height: 25vw;
	
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	grid-template-columns: repeat(6,1fr);
`

const normalAni = keyframes`
	
	to {
		transform: translate(0,0);
	}
`
const specialAni = keyframes`
	40% {
		transform: translate(0,0);
	}
	70% {
		transform: scaleY(2.5);
	}
	100% {
		transform: scaleY(1);
	}
`
const uniqueAni = keyframes`
	50% {
		transform: translate(-25%,0);
	}
	
	100% {
		transform: rotate(45deg);
		color: #f03e3e;
	}
	
`

// transform: translate(0,80%);
const TitleContent = styled.div`

	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-family: 'Jua', sans-serif;
	font-size: 100px;
	font-weight: 200;
	transform: translate(0,80%);
	
	
`

const TitleBox = styled.div`

	
	overflow: hidden;
	color: black;
	&:nth-child(1){
		
		${TitleContent} {
			
			
			animation: ${normalAni} 0.5s linear forwards;
		}
	}
	&:nth-child(2){
		
		${TitleContent} {
			
			
			animation: ${normalAni} 0.5s linear forwards;
			animation-delay: 0.5s;
		}
	}

	&:nth-child(4){
		
		${TitleContent} {
			color: #37b24d;
			
			animation: ${specialAni} 1s linear forwards;
			animation-delay: 1s;
		}
	}
	&:nth-child(5){
	
		${TitleContent} {
			color: #37b24d;
			animation: ${specialAni} 1s linear forwards;
			animation-delay: 2s;
		}
	}
	&:nth-child(6){

		${TitleContent} {
			color: #37b24d;
			animation: ${specialAni} 1s linear forwards;
			animation-delay: 3s;
		}
	}
	&:nth-child(9){
		
		${TitleContent} {
			
			
			animation: ${normalAni} 0.5s linear forwards;
			animation-delay: 4s;
		}
	}
	&:nth-child(11){
		
		${TitleContent} {
			
			
			animation: ${normalAni} 0.5s linear forwards;
			animation-delay: 4.5s;
		}
	}
	&:nth-child(12){
		
		${TitleContent} {
			
			transform: translate(-25%,80%);
			animation: ${uniqueAni} 1s linear forwards;
			animation-delay: 5s;
		}
	}
`





function Main ({onScroll}) {
	return (
		<MainSection >
			<PeopleContainer />
			<TitleContainer >
				<TitleBox><TitleContent>오</TitleContent></TitleBox>
				<TitleBox><TitleContent>늘</TitleContent></TitleBox>
				<TitleBox></TitleBox>
				<TitleBox><TitleContent>관</TitleContent></TitleBox>
				<TitleBox><TitleContent>악</TitleContent></TitleBox>
				<TitleBox><TitleContent>산</TitleContent></TitleBox>
				<TitleBox></TitleBox>
				<TitleBox></TitleBox>
				<TitleBox><TitleContent>어</TitleContent></TitleBox>
				<TitleBox></TitleBox>
				<TitleBox><TitleContent>때</TitleContent></TitleBox>
				<TitleBox><TitleContent>?</TitleContent></TitleBox>
				
				
			</TitleContainer>
		</MainSection>
	)
}

export default Main;