/**
 * Created by qhl on 2017/4/14.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    View,
    Text,
} from 'react-native';
import  { Button } from 'react-native-elements';

export default class AddressList extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={{flex:1}}>
                <View style={{position:'absolute',bottom:30,left:0,right:0}}>
                    <Button
                        title='新增地址'
                        color="#fff"
                        backgroundColor="#479d67"
                        buttonStyle={{
                            borderRadius:4,
                            height:45
                        }}
                        onPress={() => navigate('PickerTest')}
                    />
                </View>
            </View>
        );
    }
};

