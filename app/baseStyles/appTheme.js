// 定义主题背景颜色，所有主题颜色都应该在这个文件下定义，然后在相应的地方import，方便更换主题。
// 根据是否传入不透明度返回两种情况

export let themeColor = (opacity) => opacity ? `rgba(71,157,103,${opacity})` : '#479D67';// 只引用颜色用这种

// 引用颜色类名用这种
export let appTheme = {	
	textColor: (opacity) => {
		color: themeColor(opacity)
	},
	bgColor: (opacity) => {
		backgroundColor: themeColor(opacity)
	},	
}

// 用于通用边框的颜色
export const borderColor = 'rgb(224,224,224)';
