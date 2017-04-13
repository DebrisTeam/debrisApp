/**
 * Created by wangdi on 6/11/16.
 */
'use strict';

import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, RefreshControl} from 'react-native';
import ClassIfyListView from '../Tab/ClassIfyListView';
import computeTime from './../../../utils/computeTime';
import theme from '../../../style/theme';

export default class HomeTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: true,
            loadedData: false,
            dataBlob: [],
            tabLabel:this.props.tabLabel,
            tabNames:this.props.tabTag
        };
    }

    componentDidMount() {
        this._fetchData();
    }

    render() {
        return (
            <ScrollView
                style={{}}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        colors={['red','#ffd500','#0080ff','#99e600']}
                        tintColor={theme.themeColor}
                        title="Loading..."
                        titleColor={theme.themeColor}
                    />
                }>
                 { this._renderContents() }
            </ScrollView>
        );
    }
    // 选项卡视图
    _renderContents() {
        let caeNane = this.state.tabNames;
        if (!this.state.refreshing || this.state.loadedData) {
            switch(this.state.tabLabel){
                case caeNane[0]:
                    return (
                        <View>
                            <ClassIfyListView contents={this.state.dataBlob}/>
                        </View>
                    );
                    break;

                case caeNane[1]:
                    return (
                        <View>
                            <Text>海鲜</Text>
                        </View>
                    );
                    break;

                case caeNane[2]:
                   return (
                        <View>
                            <Text>家禽</Text>
                        </View>
                    );
                    break;

                case caeNane[3]:
                    return (
                        <View>
                            <Text>笋</Text>
                        </View>
                    );
                    break;
            }
        }
    }

    _onRefresh() {
        this.setState({refreshing: true});
        this._fetchData();
    }

    _getCurrentTime() {
        function convertTime(time) {
            if (time <= 9)
                return '0' + time;
            return time;
        }

        var date = new Date();
        return date.getFullYear() + '-' + convertTime(date.getMonth() + 1) + '-' + convertTime(date.getDate()) + 'T' + convertTime(date.getHours()) + ':' + convertTime(date.getMinutes()) + ':' + convertTime(date.getSeconds() + '.' + date.getMilliseconds() + 'Z');
    }

    _fetchData() {
        var url = 'http://gold.xitu.io/api/v1/timeline/57fa525a0e3dd90057c1e04d/' + this._getCurrentTime();
        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                let data = responseData.data;
                var dataBlob = [];

                for (let i in data) {
                    let info = {
                        tags: data[i].tagsTitleArray,
                        category: data[i].category,
                        content: data[i].content,
                        collectionCount: data[i].collectionCount,
                        title: data[i].title,
                        user: data[i].user,
                        url: data[i].url,
                        time: computeTime(data[i].createdAtString),
                        commentsCount: data[i].commentsCount,
                        viewsCount: data[i].viewsCount,
                        screenshot: data[i].screenshot ? data[i].screenshot : null
                    }
                    dataBlob.push(info);
                }
                console.log(dataBlob)
                if(dataBlob.length !== 0) {
                    this.setState({
                        dataBlob: dataBlob,
                        loadedData: true,
                        refreshing: false
                    });
                }
            }).done();
    }
}
