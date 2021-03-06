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
	static navigationOptions = {
		title: '登陆',
	}
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={{flex: 1,backgroundColor: '#fff'}}>
				<ScrollView>
					<View style={{alignItems: 'center',marginTop: 30,}}>
						<Image source={require('../../images/logo.png')} style={{width: 60,height: 60,}}/>
					</View>
					<View style={loginStyles.formWrap}>
						<View style={[loginStyles.formItem,themeBorder.borderBottom()]}>
							<Text style={loginStyles.itemLabel}>手机号</Text>
							<TextInput
								style={loginStyles.itemInput}
								underlineColorAndroid="transparent"
								keyboardType="numeric"
								onBlur={Keyboard.dismiss}
								placeholder='请输入手机号'
								placeholderTextColor="rgb(202,202,207)"
								clearButtonMode="while-editing"
								
							/>
						</View>
						<View style={[loginStyles.formItem,themeBorder.borderBottom()]}>
							<Text style={loginStyles.itemLabel}>密码</Text>
							<TextInput
								style={loginStyles.itemInput}
								underlineColorAndroid="transparent"
								placeholder='请输入登陆密码'
								placeholderTextColor="rgb(202,202,207)"
								secureTextEntry={true}
							/>
						</View>
					</View>
					<View style={{marginTop: 20,marginHorizontal: 35,}}>
						<Button
							title="登陆"
							backgroundColor={themeColor()}
						/>
					</View>
					<View style={loginStyles.bottomInfoNav}>
						<TouchableOpacity onPress={() => navigate('Reset')}>
							<Text>忘记密码</Text>
						</TouchableOpacity>
						<TouchableOpacity onPress={() => navigate('Register')}>
							<Text>注册</Text>
						</TouchableOpacity>
					</View>
					<View style={loginStyles.otherLogin}>
						<View style={{flexDirection: 'row',alignItems: 'center',marginBottom: 15,}}>
							<Text style={loginStyles.line}/>
							<Text style={{marginHorizontal: 10}}>第三方登陆</Text>
							<Text style={loginStyles.line}/>
						</View>
						<Image source={require('../../images/weixin.png')} style={{width: 40,height: 40}} />
						<Text style={{marginTop: 5, fontSize: 12}}>微信</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
	someFunction() {
		
	}
}
