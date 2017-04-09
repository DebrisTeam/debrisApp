import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
	Dimensions,
} from 'react-native';

export default class GoodsCategory extends Component {
	render() {
		return (
			<View style={sortStyles.container}>
				<Text style={sortStyles.sortTitle}>生鲜系列</Text>
				<Text style={sortStyles.sortDer}>生态/健康/美味</Text>
				<ScrollView
					horizontal={true}
					pagingEnabled={false}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{paddingHorizontal: 5,marginVertical: 10}}
				>
					<View style={sortStyles.sortGoodsItem}>
						<Image source={{uri: 'https://img.yzcdn.cn/upload_files/2016/12/30/Fpfthm6gKtnHgrEuHvYNVt0qlaXm.jpg?imageView2/2/w/280/h/280/q/75/format/webp'}} style={sortStyles.thumb}/>
					</View>
					<View style={sortStyles.sortGoodsItem}>
						<Image source={{uri: 'https://img.yzcdn.cn/upload_files/2016/12/30/FufzM760_r2j8iiSHC9irUlvQIN5.jpg?imageView2/2/w/280/h/280/q/75/format/webp'}} style={sortStyles.thumb}/>
					</View>
					<View style={sortStyles.sortGoodsItem}>
						<Image source={{uri: 'https://img.yzcdn.cn/upload_files/2016/12/31/Fr-_lyQemNUO51P5nWn6Eh4wm4Bf.jpg?imageView2/2/w/280/h/280/q/75/format/webp'}} style={sortStyles.thumb}/>
					</View>
					<View style={sortStyles.sortGoodsItem}>
						<Image source={{uri: 'https://img.yzcdn.cn/upload_files/2016/12/31/FjrPeB6eV_QOx3XXUOOjJQtviRO3.jpg?imageView2/2/w/280/h/280/q/75/format/webp'}} style={sortStyles.thumb}/>
					</View>
					<View style={sortStyles.sortGoodsItem}>
						<Image source={{uri: 'https://img.yzcdn.cn/upload_files/2016/12/30/FueHbnSJTErGZ5izk0ucfdX4xOVz.jpg?imageView2/2/w/280/h/280/q/75/format/webp'}} style={sortStyles.thumb}/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

const sortGoodsItemWidth = Dimensions.get('window').width/3 - 16;

const sortStyles = StyleSheet.create({
	container: {
		marginTop: 15,
		paddingVertical: 10,
		backgroundColor: '#fff',
	},
	sortTitle: {
		paddingHorizontal: 10,
		fontSize: 16,
		color: '#333',
		textAlign: 'center',
	},
	sortDer: {
		marginTop: 2,
		paddingHorizontal: 10,
		fontSize: 12,
		color: '#777',
		textAlign: 'center',
		lineHeight: 20
	},
	sortGoodsItem: {
		marginHorizontal: 5,
	},
	thumb: {
		width: sortGoodsItemWidth,
		height: sortGoodsItemWidth,
	}
})
