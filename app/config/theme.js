/**
 * 定义公共样式
 */
'use strict';

import {PixelRatio, Dimensions, Platform} from 'react-native';
import px2dp from '../utils/px2dp';

const globalTextColor = '#000';

module.exports = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height,
    debrisBackgroundColor:'#fff',
    themeColor: 'rgb(22,131,251)',
    pageBackgroundColor: '#f4f4f4',
    grayColor: '#c4c4c4',
    btnActiveOpacity: 0.7,
    actionBar: {
        height: (Platform.OS === 'android') ? px2dp(45) : px2dp(45),
        backgroundColor: 'rgb(22,131,251)',
        fontSize: px2dp(16),
        fontColor: 'white'
    },
    text: {
        color: globalTextColor,
        fontSize: px2dp(15)
    },
    scrollView: {
        fontSize: px2dp(15),
        underlineStyle: {
            backgroundColor: '#479d67'
        }
    }
};