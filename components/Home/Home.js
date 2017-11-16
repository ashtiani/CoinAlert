import React, { Component } from 'react';
import Price from './Price';

import { StyleSheet, Text, View , Image, ScrollView } from 'react-native';

export default class Home extends Component {
	render(){

		return(

			<View style={styles.container}>
				<View style={styles.logoContainer}>
					<Text style={styles.headerText}>
						<Image style={styles.logo} source = {require('../../elements/logo.png')} />
						Crypthocoin Price List
					</Text>
				</View>

					<View style={styles.price}>
						<ScrollView>
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
    backgroundColor: '#000',
		justifyContent: 'center',

  },
	headerText:{
		color: '#FFF',
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 40,
		fontSize: 20,

	},
	logoContainer:{
		flex:1,
		marginBottom:10,
	},
	logo:{
		marginTop: 15,
		height: 50,
    width: 50
	},
	price:{
		flex:3,

	},
});
