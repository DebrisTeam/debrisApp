
import { StackNavigator } from 'react-navigation';
import MainPage from './MainPage';
// 用户资料部分
import AccountInfo from './account/AccountInfo';

import UserName from  './account/UserName';
// 收货地址
import AddressList from './me/address/AddressList';
import PickerTest from './me/address/PickerTest';

import OrderListPage from './me/OrderListPage';
import Login from './login/Login';
import Register from './login/Register';
import ResetPassword from './login/ResetPassword';


const App = StackNavigator({
	MainPage: { screen: MainPage },
	Login: { screen: Login },
	Register: { screen: Register },
	Reset: { screen: ResetPassword },
	
	AccountInfo: { screen: AccountInfo },
    UserName: {
	    screen: UserName,
        navigationOptions:{
	        title:'修改昵称',
        }
	},
	Order: {
	    // 订单
        screen: OrderListPage,
        navigationOptions:{
            title: '我的订单',
        },
    },
    AddressList:{
        screen:AddressList,
        navigationOptions:{
            title: '收货地址管理',
        }
    },
    PickerTest:{
	    screen:PickerTest
    }
},{
	navigationOptions: {
		header: {
			style: {
				height: 52,
				borderWidth: 0,
			},
			titleStyle: {
				fontWeight: 'normal',
				//fontSize: 16,
			},
			tintColor: '#333',
			cardStack: {},
			backTitle: null,

		},
	},
});

module.exports = App;