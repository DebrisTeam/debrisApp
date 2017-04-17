/**
 * 公共button，
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Text,
    View,
    StyleSheet,
    Platform,
    TouchableOpacity,
    TouchableNativeFeedback
} from 'react-native';
import px2dp from './../utils/px2dp';
import theme from '../style/theme';

export default class Button extends Component{
    // 验证数据类型
    static propTypes = {
        text: PropTypes.string.isRequired,
        onPress: PropTypes.func,
        Style:React.PropTypes.object
    };

    render(){
        if(Platform.OS === 'android') {
            return (
                <TouchableNativeFeedback
                    onPress={this.props.onPress}>
                    {this._renderContent()}
                </TouchableNativeFeedback>
            );
        }else if(Platform.OS === 'ios'){
            return(
                <TouchableOpacity
                    onPress={this.props.onPress}
                    activeOpacity={theme.btnActiveOpacity}>
                    {this._renderContent()}
                </TouchableOpacity>
            );
        }
    }

    _renderContent(){
        return(
            <View style={this.props.Style}>
                <Text style={styles.text}>{this.props.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   text:{
       color: 'white',
       fontSize: px2dp(14)
   }
});