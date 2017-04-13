/**
 * Created by wangdi on 4/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';
import theme from '../../style/theme';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import ClassIfyTab from './Tab/ClassIfyTab';
import CustomTabBar from './../../components/CustomTabBar';

export default class HomeFragment extends Component{
    constructor(props){
        super(props);
        this.state = {
            tabNames: ['全部','海鲜','家禽','笋']
        };
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
                                <ClassIfyTab tabLabel={item} key={i} tabTag={this.state.tabNames}/>
                            );})
                        }
                    </ScrollableTabView>
            </View>
        );
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