import React, { Component } from 'react';
import Price from './Price';
import {  SearchBar, Header } from 'react-native-elements';

import { StyleSheet, Text, View , Image, ScrollView } from 'react-native';

export default class Home extends Component {
	render(){

		return(

			<View style={styles.container}>
				<Header  style={styles.header}
					statusBarProps={{ barStyle: 'light-content' }}
	  			centerComponent={{ text: 'Crypthocoin Price List', style: { color: '#fff', fontSize: 20, marginTop:100 } }}

				/>
				<View style={styles.price}>
					<ScrollView>
					<SearchBar style={styles.searchBar}
						lightTheme
						containerStyle={{flex:1, height:undefined}}
						onChangeText={(text) => this.SearchFilterFunction(text)}
						placeholder='Search' />
						<Price />
					</ScrollView>
				</View>

			</View>



		);


	}
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
		justifyContent: 'center',

  },
	searchBar:{
		color: '#000',
	},
	header:{
		flex:1,

		fontSize: 20,

	},
	logoContainer:{
		flex:1,
		justifyContent: 'center',
		backgroundColor: '#fff',
	},
	logo:{
		marginTop: 30,
		height: 50,
    width: 50
	},
	price:{
		flex:6
	},
});
