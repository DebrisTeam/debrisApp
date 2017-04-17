import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
} from 'react-native';

export default class HomeInfoNav extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			infoData: [
				{
					title: '农户直采',
					uri: require('../../images/icon-home.png'),
					icon: ''
				},
				{
					title: '机构检测',
					uri: require('../../images/icon-fenlei.png'),
					icon: ''
				},
				{
					title: '冷冻配送',
					uri: require('../../images/icon-cart.png'),
					icon: ''
				},
				{
					title: '售后无忧',
					uri: require('../../images/icon-my.png'),
					icon: ''
				}
			]
		}
	}
	render() {
		const infoItems = this.state.infoData.map((item,index) => {
			return (
				<TouchableOpacity
					key={index}
					activeOpacity={0.8}
					style={homeInfoStyles.infoBarItem}
				>
					<Image source={item.uri} style={homeInfoStyles.infoBarIcon}/>
					<Text style={homeInfoStyles.orderStatusText}>{ item.title }</Text>
				</TouchableOpacity>
			)
		})
		return (
			<View style={homeInfoStyles.infoBar}>
				{infoItems}
			</View>
		);
	}
}


const homeInfoStyles = StyleSheet.create({
	infoBar: {
		flexDirection: 'row',
		height:60,
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#fff',
		borderTopWidth: 0.5,
		borderBottomWidth: 0.5,
		borderColor: '#ccc'
	},
	infoBarItem: {
		alignItems: 'center'	
	},
	infoBarIcon: {
		width: 20,
		height: 20,
	},
	orderStatusText: {
		marginTop: 5,
		fontSize: 10,
	}
});
