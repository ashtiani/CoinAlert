import React, { Component } from 'react';
import { StyleSheet, Text, View , Image, ActivityIndicator, FlatList, Animated, Easing} from 'react-native';
import {  ListItem, List , Badge} from 'react-native-elements';



export default class Price extends Component {
	setNativeProps = (nativeProps) => {
    this._root.setNativeProps(nativeProps);
  }

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
            color="#ccc" />
				</View>
			);
		}

		return(

			<List containerStyle = {{borderTopWidth:0 ,borderBottomWidth:0 }}>
				<FlatList
					data={this.state.dataSource.sort(function(a, b) {
					    return a.Last/a.PrevDay < b.Last/b.PrevDay;
					})}
					renderItem={({item}) => (
						<ListItem

							title = {(item.MarketName).replace(/BTC-|ETH-|USDT-/,"")}
							subtitle = {Number(item.Last).toFixed(8).toString() +
													((item.MarketName).indexOf("BTC-")?"":" BTC") +
													((item.MarketName).indexOf("ETH-")?"":" ETH") +
													((item.MarketName).indexOf("USDT-")?"":" $")
											   }
							rightTitle = { (( Number(item.Last)/Number(item.PrevDay) - 1 ).toFixed(4)<0?"":"+") +
							 							(( Number(item.Last)/Number(item.PrevDay) - 1 )*100).toFixed(2).toString() +"%" }
							rightTitleStyle={{ fontSize: 15, fontWeight:'bold', color: (( Number(item.Last)/Number(item.PrevDay) - 1 ).toFixed(4)<0?'red':'green') }}


						/>
					)}
					keyExtractor = {item => item.MarketName }
				/>
			</List>


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
