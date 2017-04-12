import MainPage from './MainPage';
import OrderListPage from './me/OrderListPage'

import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
    MainPage: { screen: MainPage },
    Chat: {
        screen: OrderListPage,
        navigationOptions:{
            title: '我的订单'
        }
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