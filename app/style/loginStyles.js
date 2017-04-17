import {
	Dimensions
} from 'react-native';

const loginFormWrapWidth = Dimensions.get('window').width;

export default loginStyles = {
	formWrap: {
		marginTop: 20,
		width: loginFormWrapWidth - 100,
		alignSelf: 'center',
	},
	formItem: {
		marginBottom: 15,
	},
	itemLabel: {
		fontSize: 16,
		color: '#777'
	},
	itemInput: {
		height: 30,
		padding: 0,
		fontSize: 14,
	},
	bottomInfoNav: {
		flexDirection: 'row',
		width: loginFormWrapWidth - 100,
		alignSelf: 'center',
		justifyContent: 'space-between',
		marginTop: 20,
	},
	getCodeBtn: {
		position: 'absolute',
		right: 0,
		bottom: 5,
		width: 80,
		height: 26,
		borderRadius: 13,
	},
	otherLogin: {
		paddingHorizontal: 50,
		alignItems: 'center',
		marginTop: 30,
	},
	line: {
		flex: 1,
		height: 1,
		backgroundColor: '#aaa'
	}
}
