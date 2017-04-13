
import { StackNavigator } from 'react-navigation';
import MainPage from './MainPage';
import AccountInfo from './account/AccountInfo';
import OrderListPage from './me/OrderListPage'

const App = StackNavigator({
	MainPage: { screen: MainPage },
	AccountInfo: { screen: AccountInfo },
	Chat: {
        screen: OrderListPage,
        navigationOptions:{
            title: '我的订单',
            headerBackTitle:null
        },
    },
},{
	navigationOptions: {
		header: {
			style: {
				borderWidth: 0,
				//backgroundColor: 'rgba(71,157,103,1)'
			},
			//titleStyle: {fontWeight: 'normal',color: '#fff'},
			//tintColor: '#fff',
			cardStack: {}
		},
	},
});

module.exports = App;
//#479D67