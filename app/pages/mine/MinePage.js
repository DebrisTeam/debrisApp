import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from 'react-native';

import { List, ListItem, Icon} from 'react-native-elements';

export default class MinePage extends Component {
	
	render() {
		const { navigate } = this.props.navigation;
		return (
			<ScrollView 
			overScrollMode='always'
			stickyHeaderIndices={[2]}>
			<View style={{flex: 1,paddingBottom: 15}}>
			
				<TouchableOpacity activeOpacity={0.8} onPress={() => navigate('AccountInfo')}>
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
				        	}}
				    />
				</List>
				<View style={mineStyles.orderStutus}>
					<TouchableOpacity
						activeOpacity={0.8}
						style={mineStyles.orderStutusItem}
					>
						<Image source={require('../../images/icon-home.png')} style={mineStyles.orderStutusIcon}/>
						<Text style={mineStyles.orderStatusText}>待付款</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.8}
						style={mineStyles.orderStutusItem}
					>
						<Image source={require('../../images/icon-fenlei.png')} style={mineStyles.orderStutusIcon}/>
						<Text style={mineStyles.orderStatusText}>待发货</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.8}
						style={mineStyles.orderStutusItem}
					>
						<Image source={require('../../images/icon-cart.png')} style={mineStyles.orderStutusIcon}/>
						<Text style={mineStyles.orderStatusText}>待收货</Text>
					</TouchableOpacity>
					<TouchableOpacity
						activeOpacity={0.8}
						style={mineStyles.orderStutusItem}
					>
						<Image source={require('../../images/icon-my.png')} style={mineStyles.orderStutusIcon}/>
						<Text style={mineStyles.orderStatusText}>售后</Text>
					</TouchableOpacity>
				</View>
				
				<List containerStyle={mineStyles.list}>
				    <ListItem
				        title="关于碎片科技"
				        leftIcon={{
				        		name: 'reorder',
				        	}}
				    />
				    <ListItem
				        title="联系客服"
				        leftIcon={{
				        		name: 'reorder',
				        	}}
				    />
				</List>
				
			</View>
			</ScrollView>
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
		borderBottomWidth: 0,
		//borderBottomColor: '#cbd2d9'
	},
	orderStutus: {
		flexDirection: 'row',
		height:80,
		alignItems: 'center',
		justifyContent: 'space-around',
		backgroundColor: '#fff',
	},
	orderStutusItem: {
		alignItems: 'center'	
	},
	orderStutusIcon: {
		width: 30,
		height: 30,
	},
	orderStatusText: {
		fontSize: 12,
	}
	
})