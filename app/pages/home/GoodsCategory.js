import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	ScrollView,
	StyleSheet,
	Dimensions,
	TouchableOpacity,
} from 'react-native';

export default class GoodsCategory extends Component {
	constructor(props) {
		super(props);
		
	}
	
	render() {
		let { data, navigation } = this.props;
		let randerItem = data.goods.map((item, index) => {
			return (
				<TouchableOpacity  key={index} onPress={() => navigation.navigate('Login')}>
					<View style={sortStyles.sortGoodsItem}>
						<Image source={{uri: item.uri}} style={sortStyles.thumb}/>
						<View style={sortStyles.itemTextContainer}>
							<Text 
								numberOfLines={2}
								style={sortStyles.itemTitle}>{ item.title }</Text>
							<Text style={sortStyles.itemPrice}>￥{ item.price }/<Text style={{fontSize: 10}}>{ item.unit }</Text></Text>
						</View>
					</View>
				</TouchableOpacity>
			);
		});
		return (
			<View style={sortStyles.container}>
				<Text style={sortStyles.sortTitle}>{data.title}</Text>
				<Text style={sortStyles.sortDer}>{data.subTitle}</Text>
				<ScrollView
					horizontal={true}
					pagingEnabled={false}
					showsHorizontalScrollIndicator={false}
					contentContainerStyle={{paddingHorizontal: 5,marginVertical: 10}}
				>
					{ randerItem }
				</ScrollView>
			</View>
		);
	}
}

const sortGoodsItemWidth = Dimensions.get('window').width/3 - 16;

const sortStyles = StyleSheet.create({
	container: {
		marginTop: 10,
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
	},
	itemTextContainer: {
		width: sortGoodsItemWidth
	},
	itemTitle: {
		marginTop: 3,
		height: 40,
		fontSize: 12,
		lineHeight: 16,
		color: '#333'
	},
	itemPrice: {
		color: 'red',
		fontSize: 14,
		//textAlign: 'center'
	},
})
