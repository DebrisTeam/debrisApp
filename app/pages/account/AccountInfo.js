import React, { Component } from 'react';
import {
	View,
	ScrollView,
	Text,
	StyleSheet,
    Image
} from 'react-native';
import { List, ListItem, Icon, Button} from 'react-native-elements';
import  ImagePicker from 'react-native-image-picker'; //第三方相机
var photoOptions = {
    //底部弹出框选项
    title:'请选择',
    cancelButtonTitle:'取消',
    takePhotoButtonTitle:'拍照',
    chooseFromLibraryButtonTitle:'选择相册',
    quality:0.75,
    allowsEditing:true,
    noData:false,
    storageOptions: {
        skipBackup: true,
        path:'images'
    },
}

export default class AccountInfo extends Component {
	static navigationOptions = {
		title: '账号信息',
		header: {
			
		}
	}
    constructor(props) {
        super(props);
        this.state = {avatarSource: 'https://a-ssl.duitang.com/uploads/item/201611/23/20161123180252_i2MzZ.jpeg'};
    }
	cameraAction = () =>{
         ImagePicker.showImagePicker(photoOptions,(response) =>{
             if (response.uri != null){
                 this.setState({ avatarSource: response.uri });
             }
             if (response.didCancel){
                 return
             }
         })
    }
	render() {
		const { navigate, goBack } = this.props.navigation;
		return (
			<ScrollView overScrollMode='always' contentContainerStyle={{flex: 1,}}>
				<View style={{marginBottom: 55}}>
					<List containerStyle={accountStyles.list}>
					    <ListItem
					    		roundAvatar
					       
					        rightTitle="头像"
					        underlayColor="#eeeeef"
					        onPress={() => this.cameraAction()}
					        avatar={{uri: this.state.avatarSource}}
					    />
					    <ListItem
					        title="昵称"
					        rightTitle="就是这么帅"
					        underlayColor="#eeeeef"
                            onPress={() => navigate('UserName')}
					    />
					</List>
					<List containerStyle={accountStyles.list}>
					    <ListItem
					        title="手机绑定"
					        rightTitle="15878193546"
					        underlayColor="#eeeeef"
					        onPress={() => goBack()}
					    />
					    <ListItem
					        title="收货地址"
					        rightTitle="添加收货地址"
					        underlayColor="#eeeeef"
					        onPress={() => navigate('AddressList')}
					    />
					</List>
					<List containerStyle={accountStyles.list}>
					    <ListItem
					        title="微信绑定"
					        rightTitle="henjing"
					    />
					    <ListItem
					        title="清楚缓存"
					        rightTitle="12.45M"
					    />
					</List>
					
				</View>
				<Button
					buttonStyle={accountStyles.signOutBtn}
					title='退出登录'
					color="rgb(204,1,1)"
					backgroundColor="rgb(243, 243, 243)" />
			</ScrollView>
		)
	}
}

const accountStyles = StyleSheet.create({
	list: {
		marginTop: 15,
		borderTopWidth: 0,
		borderBottomWidth: 0,
	},
	signOutBtn: {
		position: 'absolute',bottom: 15,left: 0,right: 0,borderWidth: 0.5,borderColor: 'rgb(204,1,1)',borderRadius: 5
	}
});
