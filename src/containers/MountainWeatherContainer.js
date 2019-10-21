import React, { Component } from 'react';
import * as mountainWeatherActions from "../modules/mountainWeather/mountainWeather"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import styled from "styled-components";
import MountainWeather from "../components/MountainWeather";

const LoadingContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
    align-items: center;
	font-size: 3rem;
`

class MountainWeatherContainer extends Component {
	
	componentDidMount() {
    const {MountainWeatherActions} = this.props;
	MountainWeatherActions.getData();
  }

  render() {
	const {loading, data, error} = this.props;
	 
	if(loading) return (<LoadingContainer>Loading...</LoadingContainer>)
    if(error) return (<div>{error}</div>)
	if(!data) return null;
	return (<MountainWeather data={data}/>)
	
  }
}

const mapStateToProps = ({mountainWeather}) => ({
	loading: mountainWeather.loading,
	data: mountainWeather.data,
	error: mountainWeather.error
});

const mapDispatchToProps = dispatch => ({
	MountainWeatherActions: bindActionCreators(mountainWeatherActions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(MountainWeatherContainer)