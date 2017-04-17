import React, { Component } from 'react';
import {
	View, 
	Text, 
	TextInput,
	Image,
	Keyboard,
	TouchableOpacity,
	ScrollView,
} from 'react-native';

import { Button } from 'react-native-elements';
import {appTheme, themeColor}  from '../../baseStyles/appTheme';
import themeBorder from '../../baseStyles/border';
import loginStyles from '../../style/loginStyles';

export default class Login extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			checkyes: false,
		}
	}
	
	static navigationOptions = {
		title: '重置密码',
	}
	
	nextStep() {
		this.setState({
			checkyes: true
		})
	}
	
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{flex: 1,backgroundColor: '#fff'}}>
				<ScrollView>
					{this.state.checkyes === false ? this.renderCheck() : this.renderReset()}
				</ScrollView>
			</View>
		);
	}
	
	renderCheck() {
		return (
			<View style={loginStyles.formWrap}>
				<View style={[loginStyles.formItem,themeBorder.borderBottom()]}>
					<Text style={loginStyles.itemLabel}>手机号</Text>
					<TextInput
						style={[loginStyles.itemInput,, {marginRight: 85}]}
						underlineColorAndroid="transparent"
						keyboardType="numeric"
						placeholder='请输入手机号'
						placeholderTextColor="rgb(202,202,207)"
						clearButtonMode="while-editing"
					/>
					<Button
						buttonStyle={loginStyles.getCodeBtn}
						title="获取验证码"
						fontSize={10}
						backgroundColor={themeColor()}
					/>
				</View>
				<View style={[loginStyles.formItem,themeBorder.borderBottom()]}>
					<Text style={loginStyles.itemLabel}>验证码</Text>
					<TextInput
						style={loginStyles.itemInput}
						underlineColorAndroid="transparent"
						placeholder='请输入验证码'
						placeholderTextColor="rgb(202,202,207)"
						clearButtonMode="while-editing"
					/>
					
				</View>
				
				<View style={{marginTop: 10,marginHorizontal: -15,}}>
					<Button
						title="下一步"
						backgroundColor={themeColor()}
						onPress={() => this.nextStep()}
					/>
				</View>
			</View>
		);
	}
	
	renderReset() {
		return (
			<View style={loginStyles.formWrap}>
				<View style={[loginStyles.formItem,themeBorder.borderBottom()]}>
					<Text style={loginStyles.itemLabel}>新密码</Text>
					<TextInput
						style={loginStyles.itemInput}
						underlineColorAndroid="transparent"
						placeholder='请设置新登陆密码'
						placeholderTextColor="rgb(202,202,207)"
						secureTextEntry={true}
					/>
				</View>
				<View style={[loginStyles.formItem,themeBorder.borderBottom()]}>
					<Text style={loginStyles.itemLabel}>确认密码</Text>
					<TextInput
						style={loginStyles.itemInput}
						underlineColorAndroid="transparent"
						placeholder='请确认新登陆密码'
						placeholderTextColor="rgb(202,202,207)"
						secureTextEntry={true}
					/>
				</View>
				
				<View style={{marginTop: 10,marginHorizontal: -15,}}>
					<Button
						title="确定"
						backgroundColor={themeColor()}
					/>
				</View>
			</View>
		);
	}
}
