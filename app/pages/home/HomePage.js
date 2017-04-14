// 首页
import React, { Component } from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	TouchableOpacity,
	Dimensions
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
					goodsId: 2,
					goodsUri: 'https://img.yzcdn.cn/upload_files/2016/12/30/FueHbnSJTErGZ5izk0ucfdX4xOVz.jpg'
				},
				{
					goodsId: 3,
					goodsUri: 'https://img.yzcdn.cn/upload_files/2016/12/31/FkT0byiWr7E82GZJAkC7tYazd7Sf.jpg'
				},
				{
					goodsId: 4,
					goodsUri: 'https://img.yzcdn.cn/upload_files/2016/12/31/FrF6i57VEX9f3BB63GGGxBkozly8.jpg'
				},
			],
			
			sortData: [
				{
					title: '粮油系列',
					subTitle: '生态/健康/美味',
					goods: [
						{
							goodId: 1,
							title: '珍珠黄玉米头玉米粒  杂粮粥长寿粥珍珠黄玉米头玉米粒',
							uri: 'https://img.yzcdn.cn/upload_files/2016/12/30/Fpfthm6gKtnHgrEuHvYNVt0qlaXm.jpg',
							price: '5.00',
							unit: '斤',
						},
						{
							goodId: 2,
							title: '珍珠黄玉米头玉米粒  杂粮粥长寿粥珍珠黄玉米头玉米粒',
							uri: 'https://img.yzcdn.cn/upload_files/2016/12/30/FufzM760_r2j8iiSHC9irUlvQIN5.jpg',
							price: '5.00',
							unit: '斤',
						},
						{
							goodId: 3,
							title: '农家自产土糯米，6块一斤',
							uri: 'https://img.yzcdn.cn/upload_files/2016/12/31/Fr-_lyQemNUO51P5nWn6Eh4wm4Bf.jpg',
							price: '5.00',
							unit: '斤',
						},
						{
							goodId: 4,
							title: '黑米，10块一斤',
							uri: 'https://img.yzcdn.cn/upload_files/2016/12/31/FjrPeB6eV_QOx3XXUOOjJQtviRO3.jpg',
							price: '5.00',
							unit: '斤',
						},
						{
							goodId: 5,
							title: '农家自产香米，3.5块一斤',
							uri: 'https://img.yzcdn.cn/upload_files/2016/12/31/FrF6i57VEX9f3BB63GGGxBkozly8.jpg',
							price: '3.50',
							unit: '斤',
						},
					]
				},
				{
					title: '生鲜系列',
					subTitle: '生态/健康/美味',
					goods: [
						{
							goodId: 6,
							title: '珍珠黄玉米头玉米粒  杂粮粥长寿粥珍珠黄玉米头玉米粒',
							uri: 'https://img.yzcdn.cn/upload_files/2016/12/30/FueHbnSJTErGZ5izk0ucfdX4xOVz.jpg',
							price: '5.00',
							unit: '斤',
						},
						{
							goodId: 7,
							title: '土鸭蛋，',
							uri: 'https://img.yzcdn.cn/upload_files/2016/12/31/FgTe69wfTC6x4dC_8rNcbUzcp-FB.jpg',
							price: '5.00',
							unit: '斤',
						},
					]
				},
			]
		}
	}
	render() {
		let bannerItem = this.state.bannerData.map((item,index) => {
			return <Image source={{uri: item.goodsUri}} style={{height: 120}} key={index}/>
		});
		
		let goodsCategorys = this.state.sortData.map((item, index) => {
			return <GoodsCategory data={item} key={index}/>
		})
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
			    
			    <Swiper
			    		style={homeStyles.recommendBanner}
					height={100}
					loop={false}
					showsPagination={false}
					renderPagination={() => {
						
					}}
				>
					<Image source={{uri: 'https://img.yzcdn.cn/upload_files/2016/12/31/Fjit7HpTz6w3mzCGel-pd0skatuX.jpg'}} style={homeStyles.goodsRecommend} />
					<Image source={{uri: 'https://img.yzcdn.cn/upload_files/2016/12/31/Fjit7HpTz6w3mzCGel-pd0skatuX.jpg'}} style={homeStyles.goodsRecommend} />
			    </Swiper>
			    
			    {goodsCategorys}
			</View>
			</ScrollView>
		)
	}
}

const recommendWidth = Dimensions.get('window').width;
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
	},
	goodsRecommend: {
		height: 100,
		width: recommendWidth,
	},
	recommendBanner: {
		marginTop: 0,
	}
});