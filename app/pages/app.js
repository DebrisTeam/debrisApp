import MainPage from './MainPage';

import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
	MainPage: { screen: MainPage },
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