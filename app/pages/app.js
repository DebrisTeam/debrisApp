import MainPage from './MainPage';
import OrderListPage from './me/OrderListPage'

import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    MainPage: { screen: MainPage },
    Order: {
        screen: OrderListPage,
        navigationOptions:{
            title: '我的订单',
            headerBackTitle:null
        },
    },
},{
	navigationOptions: {
//		header: {
//			style: {
//				backgroundColor: '#23bb08'
//			},
//			titleStyle: {fontWeight: 'normal',color: '#fff'}
//		},
	},
});

module.exports = App;