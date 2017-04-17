// 定义主题通用边框
import { borderColor } from './appTheme';

export default themeBorder = {
	border: (value = 1) => ({
		borderWidth: value,
		borderColor: borderColor,
	}),
	borderTop: (value = 1) => ({
		borderTopWidth: value,
		borderTopColor: borderColor,
	}),
	borderBottom: (value = 1) => ({
		borderBottomWidth: value,
		borderColor: borderColor,
	}),
	borderRight: (value = 1) => ({
		borderRightWidth: value,
		borderColor: borderColor,
	}),
	borderLeft: (value = 1) => ({
		borderLeftWidth: value,
		borderColor: borderColor,
	}),
}
