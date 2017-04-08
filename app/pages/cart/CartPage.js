import React, { Component } from 'react';
import { WebView, View } from 'react-native';

export default class CartPage extends Component {
	render() {
		return (
			<View style={{flex: 1}}>
				<WebView 
					source={{uri:'https://h5.youzan.com/v2/trade/cart?kdt_id=18464413'}}
				/>
			</View>
		)
	}
}