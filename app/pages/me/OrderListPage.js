/**
 * Created by wangdi on 14/11/16.
 */
import React, {PropTypes,Component} from 'react';
import ReactNative, {
    Text,
    View,
    StyleSheet,
    Platform,
} from 'react-native';
import theme from '../../style/theme';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import DefaultTabBar from './../../components/DefaultTabBar';
import OrderTab from './order/OrderTab';

export default class OrderListPage extends Component{
    // static navigationOptions = {
    //     title: 'Home',
    //     tabBarPosition:'bottom',
    //     TabNavigatorConfig:{
    //         tabBarPosition:'bottom'
    //     }
    // };

    constructor(props){
        super(props);
        this.state = {
            tabNames:['全部订单','待付款','待收货','待评价']
        }
    }
    render(){
        return(
            <View style={styles.container}>
                    <ScrollableTabView
                        renderTabBar={() => <DefaultTabBar />}
                        tabBarBackgroundColor="#fff"
                        tabBarActiveTextColor="#479d67"
                        tabBarInactiveTextColor="#000"
                        tabBarTextStyle={{fontSize: theme.scrollView.fontSize}}
                        tabBarUnderlineStyle={theme.scrollView.underlineStyle}>
                         {this.state.tabNames.map((item, i) => {
                            return(
                                <OrderTab tabLabel={item} key={i} tabTag={item}/>
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