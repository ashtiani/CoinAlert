import React, { Component } from 'react';
import { Button, StyleSheet, Text, View , Image, ActivityIndicator } from 'react-native';
import {  SearchBar, Header, Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper';
export default class Coin extends Component {



	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
		}
	}

	componentDidMount(){
		this.timer = setInterval( ( )=> this.getPrice(), 1000)
	}


	async getPrice(){

		return fetch('https://poloniex.com/public?command=returnTicker')
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				isLoading: false,
				dataSource: responseJson,
			}, function() {
			});
		})
		.catch((error) => {
			console.error(error);
		});

	}


	render(){
		if (this.state.isLoading) {
			return (
				<View style={{ paddingTop: 20}}>
					<ActivityIndicator  size="large"
            color="#ccc" />
				</View>
			);
		}


		return(

			<View style={styles.container}>
				<Swiper style={styles.wrapper} ref={'swiper'}>

	        <View style={styles.slide1}>
						<Text style={styles.textCoin}>BTC</Text>
	          <Text style={styles.text}>{Number(this.state.dataSource.USDT_BTC.last).toFixed(2)}$</Text>
						<Text style={styles.textSub}>Lowest Ask: {Number(this.state.dataSource.USDT_BTC.lowestAsk).toFixed(2)}$</Text>
						<Text style={styles.textSub}>Highest Bid: {Number(this.state.dataSource.USDT_BTC.highestBid).toFixed(2)}$</Text>

	        </View>
	        <View style={styles.slide2}>
						<Text style={styles.textCoin}>ETH</Text>
	          <Text style={styles.text}>{Number(this.state.dataSource.USDT_ETH.last).toFixed(2)}$</Text>
						<Text style={styles.textSub}>Lowest Ask: {Number(this.state.dataSource.USDT_ETH.lowestAsk).toFixed(2)}$</Text>
						<Text style={styles.textSub}>Highest Bid: {Number(this.state.dataSource.USDT_ETH.highestBid).toFixed(2)}$</Text>

	        </View>
	        <View style={styles.slide3}>
						<Text style={styles.textCoin}>LTC</Text>
	          <Text style={styles.text}>{Number(this.state.dataSource.USDT_LTC.last).toFixed(2)}$</Text>
						<Text style={styles.textSub}>Lowest Ask: {Number(this.state.dataSource.USDT_LTC.lowestAsk).toFixed(2)}$</Text>
						<Text style={styles.textSub}>Highest Bid: {Number(this.state.dataSource.USDT_LTC.highestBid).toFixed(2)}$</Text>

				  </View>
	      </Swiper>

			</View>
		);


	}

}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
		height:300

  },
	slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
		color: '#ccc',
    fontSize: 70,
  },
	textCoin:{
		color: '#000',
    fontSize: 25,
	},
	textSub:{
		color: '#ccc',
		fontSize: 15,
	}
});
