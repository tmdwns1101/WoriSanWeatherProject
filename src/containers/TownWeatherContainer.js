import React, { Component } from "react";
import * as townWeatherActions from "../modules/townWeather/townWeather"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TownWeather from "../components/TownWeather"

import styled from "styled-components";

const LoadingContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
    align-items: center;
	font-size: 3rem;
`

class TownWeatherContainer extends Component {
 
  componentDidMount() {
    const {TownWeatherActions} = this.props;
	TownWeatherActions.getData();
	
  }

  render() {
	const {loading, data, error} = this.props;
	 
	if(loading) return (<LoadingContainer>Loading...</LoadingContainer>)
    if(error) return (<div>{error}</div>)
	if(!data) return null;
	return (<TownWeather  data={data} />)
	
  }
}

const mapStateToProps = ({townWeather}) => ({
	loading: townWeather.loading,
	data: townWeather.data,
	error: townWeather.error
})

const mapDispatchToProps = dispatch => ({
	TownWeatherActions: bindActionCreators(townWeatherActions, dispatch)
})


export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TownWeatherContainer)
