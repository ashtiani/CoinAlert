import React, { Component } from 'react';
import Price from './Price';
import Coin from './Coin';

import { StyleSheet, Text, View , Image, ScrollView } from 'react-native';
import {  SearchBar, Header } from 'react-native-elements';

export default class Home extends Component {

	render(){

		return(

			<View style={styles.container}>
				<Header  style={styles.header}
				outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
					statusBarProps={{ barStyle: 'light-content' }}
	  			centerComponent={{ text: 'Coin Alert', style: { color: '#fff', fontSize: 20, marginTop:100 } }}
			/>
				<View style={styles.price}>
					<ScrollView>
					<SearchBar style={styles.searchBar}
						lightTheme
						placeholder='Search' />
						<Coin/>
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
