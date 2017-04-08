import React, { Component } from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';

import TabNavigator from "react-native-tab-navigator";

import ClassIfyPage from './classIfy/ClassIfyPage'
import CartPage from './cart/CartPage';

export default class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedTab: '1'
		}
	}
	static navigationOptions = {
		title: ({state}) => {
			if (state.params) {
				return state.params.title;
			}
			return '碎片科技';
		},
//		header: ({state, otherProps}) => {
//			if (state.params) {
//				return {
//					visible: state.params.show
//				}
//			}
//			
//		}
	}
	render() {
		return (
			<View style={{flex: 1}}>
				<TabNavigator hidesTabTouch={true} >
					<TabNavigator.Item
						title="首页"
						selected={this.state.selectedTab === '1'}
						titleStyle={styles.titleStyle}
						selectedTitleStyle={styles.selectedTitleStyle}
						onPress={() => this.tabItemClick('1')}
						renderIcon={() => <Image source={require('../images/icon-home.png')} style={styles.icon}/>}
						renderSelectedIcon={() => <Image source={require('../images/icon-home-active.png')} style={styles.icon}/>}
					>
						<Text>hi enjing</Text>
					</TabNavigator.Item>
					
					<TabNavigator.Item
						title="分类"
						selected={this.state.selectedTab === '2'}
						titleStyle={styles.titleStyle}
						selectedTitleStyle={styles.selectedTitleStyle}
						onPress={() => this.tabItemClick('2')}
						renderIcon={() => <Image source={require('../images/icon-fenlei.png')} style={styles.icon}/>}
						renderSelectedIcon={() => <Image source={require('../images/icon-fenlei-active.png')} style={styles.icon}/>}
					>
                        <ClassIfyPage></ClassIfyPage>
					</TabNavigator.Item>
					
					<TabNavigator.Item
						title="购物车"
						selected={this.state.selectedTab === '3'}
						titleStyle={styles.titleStyle}
						selectedTitleStyle={styles.selectedTitleStyle}
						onPress={() => this.tabItemClick('3')}
						renderIcon={() => <Image source={require('../images/icon-cart.png')} style={styles.icon}/>}
						renderSelectedIcon={() => <Image source={require('../images/icon-cart-active.png')} style={styles.icon}/>}
					>
						<CartPage {...this.props} />
					</TabNavigator.Item>
					
					<TabNavigator.Item
						title="我"
						selected={this.state.selectedTab === '4'}
						titleStyle={styles.titleStyle}
						selectedTitleStyle={styles.selectedTitleStyle}
						onPress={() => this.tabItemClick('4')}
						renderIcon={() => <Image source={require('../images/icon-my.png')} style={styles.icon}/>}
						renderSelectedIcon={() => <Image source={require('../images/icon-my-active.png')} style={styles.icon}/>}
					>
						<Text>hi enjing</Text>
					</TabNavigator.Item>
				</TabNavigator>
			</View>
		);
	}
	
	tabItemClick(index) {
		const { setParams } = this.props.navigation; 
		let title = '';
		let show;
		this.setState({ selectedTab: index })
		switch(index) {
			case '1':
				title = '碎片科技';
				break;
			case '2':
				title = '分类';
				break;
			case '3':
				title = '购物车';
				show = false;
				break;
			case '4':
				title = '个人中心';
				break;
			default:
				break;
		}
		setParams({
			title,
			show,
		});
	}
}

const styles = StyleSheet.create({
	icon: {
		width: 26,
		height: 26,
	},
	titleStyle: {
		color: '#333',
	},
	selectedTitleStyle: {
		color: '#23bb08'
	}
})