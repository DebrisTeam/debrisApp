/**
 * Created by wangdi on 18/11/16.
 */
'use strict';

import React, {Component, PropTypes} from 'react';
import {Text, View, StyleSheet, Platform, PixelRatio, Switch, BackAndroid, ToastAndroid} from 'react-native';


export default class TabItemSwitcherPage extends Component{
    constructor(props){
        super(props);
        this.handleBack = this._handleBack.bind(this);
        this.state = {
            dataArray: [{name:'Android', value:true},
                        {name:'iOS', value:true},
                        {name:'前端', value:true},
                        {name:'后端', value:true},
                        {name:'产品', value:true},
                        {name:'设计', value:true},
                        {name:'阅读', value:true},
                        {name:'工具资源', value:true}]
        };
    }

    render(){
        return(
            <View>
               <Text>222</Text>
            </View>
        );
    }


    componentWillMount(){
        var array = [{name:'Android', value:true},
                     {name:'iOS', value:true},
                     {name:'前端', value:true},
                     {name:'后端', value:true},
                     {name:'产品', value:true},
                     {name:'设计', value:true},
                     {name:'阅读', value:true},
                     {name:'工具资源', value:true}];

        for(let i in array){
            for(let j in this.props.tabNames){
                if(this.props.tabNames[j] === array[i].name) {
                    array[i].value = true;
                }
            }
        }

        this.setState({dataArray: array});
    }

    componentDidMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }

    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
    }
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        height: px2dp(49),
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingLeft: px2dp(20),
        paddingRight: px2dp(20),
        borderBottomColor: '#ccc',
        borderBottomWidth: 1/PixelRatio.get()
    }
});