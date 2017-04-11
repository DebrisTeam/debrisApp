/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, View, StyleSheet, Platform, ToastAndroid} from 'react-native';
import theme from './../../config/theme';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ClassIfyTab from './Tab/ClassIfyTab';
import CustomTabBar from './Tab/CustomTabBar';
import RCTDeviceEventEmitter from 'RCTDeviceEventEmitter';

export default class HomeFragment extends Component{
    constructor(props){
        super(props);
        this.state = {
            tabNames: ['首页','Android','iOS']
        };
        this._handleTabNames = this._handleTabNames.bind(this);
    }

    render(){
        return(
            <View style={styles.container}>
                    <ScrollableTabView
                        renderTabBar={() => <CustomTabBar />}
                        tabBarBackgroundColor="rgb(22,131,251)"
                        tabBarActiveTextColor="#479d67"
                        tabBarInactiveTextColor="#000"
                        tabBarTextStyle={{fontSize: theme.scrollView.fontSize}}
                        tabBarUnderlineStyle={theme.scrollView.underlineStyle}>
                        {this.state.tabNames.map((item, i) => {
                            return(
                                <ClassIfyTab tabLabel={item} key={i} tabTag={item}/>
                            );})
                        }
                    </ScrollableTabView>
            </View>
        );
    }

    componentDidMount(){
        console.log(RCTDeviceEventEmitter.addListener('valueChange', this._handleTabNames))
        RCTDeviceEventEmitter.addListener('valueChange', this._handleTabNames);
    }

    componentWillUnmount(){
        RCTDeviceEventEmitter.removeListener('value', this._handleTabNames);
    }

    _handleTabNames(tabNames){
        this.setState({ tabNames: tabNames });
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.pageBackgroundColor
    },
    text: {
        color: theme.text.color,
        fontSize: theme.text.fontSize
    }
});