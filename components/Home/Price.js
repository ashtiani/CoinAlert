import React, { Component } from 'react';
import { StyleSheet, Text, View , Image, ActivityIndicator, ListView, ListItem, List, FlatList} from 'react-native';

export default class Price extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoading: true,
			tableHeader:[]
		}
	}

	componentDidMount(){
	  this.timer = setInterval( ( )=> this.getPrice(), 1000)
	 }

	async getPrice(){

		return fetch('https://bittrex.com/api/v1.1/public/getmarketsummaries')
		.then((response) => response.json())
		.then((responseJson) => {
			this.setState({
				isLoading: false,
				dataSource: responseJson.result,
			}, function() {
			});
		})
		.catch((error) => {
			console.error(error);
		});

	}

	renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };


	render(){
		if (this.state.isLoading) {
			return (
				<View style={{ paddingTop: 20}}>
					<ActivityIndicator  size="large"
            color="#fff" />
				</View>
			);
		}

		return(
			<View style={{ paddingTop: 20, flex: 1}}>
				<FlatList
					data={this.state.dataSource}
					renderItem={({item}) => <Text style={styles.name} > {(item.MarketName).replace(/BTC-|ETH-|USDT-/,"")}: {Number(item.Last).toFixed(8)} BTC </Text>}
					ItemSeparatorComponent={this.renderSeparator}
				>
				</FlatList>
			</View>

		);


	}

}


const styles = StyleSheet.create({
	price:{
		alignItems: 'center',
		marginTop: 20
	},
	priceValue:{
		color: '#27ae60',
		fontSize: 10,
		alignItems: 'center',
		alignItems: 'center',

	},
	name:{
		color: '#27ae60',
		marginTop: 10,
		marginBottom: 10,
		fontSize: 15,
		fontWeight: 'bold'
	},
	separator: {
    flex: 1,
    height: 5,
		marginTop: 5,
    backgroundColor: '#fff',
  },

});
