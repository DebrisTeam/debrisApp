
import { StackNavigator } from 'react-navigation';
import MainPage from './MainPage';
// 用户资料部分
import AccountInfo from './account/AccountInfo';
import UserName from  './account/UserName';
// 收货地址
import AddressList from './me/address/AddressList';
import PickerTest from './me/address/PickerTest';

import OrderListPage from './me/OrderListPage'

const App = StackNavigator({
	MainPage: { screen: MainPage },
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
				backgroundColor: 'rgba(71,157,103,1)'
			},
			titleStyle: {fontWeight: 'normal',color: '#fff'},
			tintColor: '#fff',
			cardStack: {}
		},
	},
});


module.exports = App;