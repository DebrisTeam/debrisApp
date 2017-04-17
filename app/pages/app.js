
import { StackNavigator } from 'react-navigation';
import MainPage from './MainPage';
import AccountInfo from './account/AccountInfo';
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
	Chat: {
        screen: OrderListPage,
        navigationOptions:{
            title: '我的订单',
        },
    },
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