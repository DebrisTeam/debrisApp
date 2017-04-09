// 首页
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import Swiper from 'react-native-swiper';

import HomeInfoNav from './HomeInfoNav';
import GoodsCategory from './GoodsCategory';

export default class HomePage extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			bannerData: [
				{
					goodsId: 1,
					goodsUri: 'https://img.yzcdn.cn/upload_files/2016/12/30/FueHbnSJTErGZ5izk0ucfdX4xOVz.jpg?imageView2/2/w/980/h/980/q/75/format/webp'
				},
				{
					goodsId: 1,
					goodsUri: 'https://img.yzcdn.cn/upload_files/2016/12/31/FkT0byiWr7E82GZJAkC7tYazd7Sf.jpg?imageView2/2/w/980/h/980/q/75/format/webp'
				},
				{
					goodsId: 1,
					goodsUri: 'https://img.yzcdn.cn/upload_files/2016/12/31/FrF6i57VEX9f3BB63GGGxBkozly8.jpg?imageView2/2/w/980/h/980/q/75/format/webp'
				},
			]
		}
	}
	render() {
		let bannerItem = this.state.bannerData.map((item,index) => {
			return <Image source={{uri: item.goodsUri}} style={{height: 130}} key={index}/>
		});
		return (
			<ScrollView>
			<View style={{flex: 1}}>
				<Swiper
					height={120}
					paginationStyle={{bottom: 5}}
					dotColor='rgba(0,0,0,.3)'
					activeDotColor='rgba(71,157,103,.6)'
				>
					{bannerItem}
			    </Swiper>
			    <HomeInfoNav />
			    <GoodsCategory />
			</View>
			</ScrollView>
		)
	}
}

const homeStyles = StyleSheet.create({
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