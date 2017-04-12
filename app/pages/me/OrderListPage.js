/**
 * Created by wangdi on 14/11/16.
 */
import React, {PropTypes,Component} from 'react';
import ReactNative, {Text, View, StyleSheet, Platform, TouchableOpacity, ListView, Image, PixelRatio, BackAndroid} from 'react-native';
import PageComponent from './BackPageComponent'

export default class OrderListPage extends PageComponent{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style={{flex: 1}}>
                <Text>555</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});