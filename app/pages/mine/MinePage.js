import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity
} from 'react-native';

import { List, ListItem } from 'react-native-elements';

export default class MinePage extends Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<TouchableOpacity activeOpacity={0.8}>
					<View style={mineStyles.header}>
						<Image
							style={mineStyles.avatar}
							source={{uri: 'https://a-ssl.duitang.com/uploads/item/201611/23/20161123180252_i2MzZ.jpeg'}}
						/>
						<Text style={mineStyles.userName}>认识我吗?</Text>
					</View>
				</TouchableOpacity>
				<List containerStyle={mineStyles.list}>
				    <ListItem
				        title="我的订单"
				        leftIcon={{
				        		name: 'reorder',
				        		style: {
				        			color: 'rgba(71,157,103,1)'
				        		}
				        	}}
				    />
				</List>
				<View style={mineStyles.orderStutus}>
					<TouchableOpacity activeOpacity={0.8}>
						<Image source={require('../../images/icon-home.png')}/>
						<Text>待付款</Text>
					</TouchableOpacity>
					<TouchableOpacity activeOpacity={0.8}>
						<Image source={require('../../images/icon-home.png')}/>
						<Text>待付款</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const mineStyles = StyleSheet.create({
	header: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 160,	
		backgroundColor: '#fff',
	},
	avatar: {
		width: 60,
		height: 60,
		borderRadius: 30,
	},
	userName: {
		marginTop: 10,
		color: '#333',
		fontSize: 14,
	},
	list: {
		//height: 44,
		marginTop: 15,
		borderTopWidth: 0,
		borderBottomWidth: 0.5,
		borderBottomColor: '#cbd2d9'
	},
	orderStutus: {
		flexDirection: 'row',
		height:80,
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#fff',
	}
})