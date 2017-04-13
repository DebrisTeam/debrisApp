
import { StackNavigator } from 'react-navigation';
import MainPage from './MainPage';
import AccountInfo from './account/AccountInfo';

const App = StackNavigator({
	MainPage: { screen: MainPage },
	AccountInfo: { screen: AccountInfo },
},{
	navigationOptions: {
		header: {
			style: {
				borderWidth: 0,
				//backgroundColor: 'rgba(71,157,103,1)'
			},
			titleStyle: {fontWeight: 'normal',color: '#fff'},
			//left: null,
			//pressColorAndroid: "red",
			tintColor: '#fff',
			cardStack: {}
		},
	},
});

module.exports = App;
//#479D67