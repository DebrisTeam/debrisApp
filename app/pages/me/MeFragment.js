/**
 * Created by wangdi on 16/11/16.
 */
import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableNativeFeedback,
    TouchableOpacity,
    Platform,
    PixelRatio,
    Image
} from 'react-native';
import px2dp from '../../utils/px2dp';
import theme from '../../style/theme';
import Avatar from '../../components/Avatar';

export default class SettingPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            tabNames: [
                {
                    name:'待付款',
                    icon:'1'
                },
                {
                    name:'待收货',
                    icon:'2'
                },
                {
                    name:'待评价',
                    icon:'3'
                },
                {
                    name:'退款/售后',
                    icon:'4'
                }]
        };
    }
    _alert(){

    }
    // 跳转
     _onPressCallback(position){
       switch(position){
           case 0:  //title
               this.props.navigate('AccountInfo');
               break;

           case 1:  // add occupation
               this.props.navigate('Order');
               break;

           case 2:  //collection
               this._alert();
               break;

           case 3:  //read articles
               this._alert();
               break;
       }
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: theme.pageBackgroundColor}}>
                <ScrollView>
                    <TouchableOpacity activeOpacity={0.8} onPress={this._onPressCallback.bind(this, 0)}>
                        <View style={styles.header}>
                            <Image
							style={styles.avatarImg}
							source={{uri: 'http://a-ssl.duitang.com/uploads/item/201611/23/20161123180252_i2MzZ.jpeg'}}
						/>
                            <Text style={styles.userName}>认识我吗?</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.list}>
                        <Item text="我的订单" subText="0" onPress={this._onPressCallback.bind(this, 1)}/>
                        <View style={styles.orderClass}>
                        {this.state.tabNames.map((item, i) => {
                            return(
                                <OrderClass text={item.name} Icon={item.icon} key={i} />
                            );})
                        }
                        </View>
                    </View>
                    {/*--------------------------------------------------------------------------*/}
                    <View style={styles.list}>
                        <Item text="我的红包" subText="0"/>
                    </View>
                     {/*--------------------------------------------------------------------------*/}
                    <View style={styles.list}>
                        <Item text="关于" />
                        <Item text="联系客服" />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

class Item extends Component{
    constructor(props){
        super(props);
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
        textColor: PropTypes.string,
        subText: PropTypes.string,
        onPress: PropTypes.func,
        isHasSwitcher: PropTypes.bool,
        switcherValue: PropTypes.bool
    }

    static defaultProps = {
        textColor: '#000',
        switcherValue: false
    }

    render(){
        const {text, textColor, subText, onPress, isHasSwitcher, switcherValue} = this.props;

        if(Platform.OS === 'android'){
            return(
                <TouchableNativeFeedback onPress={onPress}>
                    <View style={styles.listItem}>
                        <Text style={{color: textColor, fontSize: px2dp(15)}}>{text}</Text>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems:'center'}}>
                            <Text style={{color: "#ccc"}}>{subText}</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            );
        }else if(Platform.OS === 'ios'){
            return(
                <TouchableOpacity onPress={onPress} activeOpacity={theme.btnActiveOpacity}>
                    <View style={styles.listItem}>
                        <Text>@</Text>
                        <Text style={{color: textColor, fontSize: px2dp(15), marginLeft: px2dp(20)}}>{text}</Text>
                        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems:'center'}}>
                            <Text style={{color: "#ccc"}}>{subText}</Text>
                        </View>
                        <Text style={{color: "#cccccc"}}> ></Text>
                    </View>
                </TouchableOpacity>
            );
        }
    }
}

class OrderClass extends Component{
    render(){
        const {text, Icon} = this.props;
        return(
            <View style={{alignItems:'center',marginTop:10}}>
                <Text style={{paddingBottom:10}}>
                    {Icon}
                </Text>
                <Text>
                    {text}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
		alignItems: 'center',
		justifyContent: 'center',
		height: 160,
		backgroundColor: '#fff',
	},
    avatarImg:{
        width: 60,
		height: 60,
		borderRadius: 30,
    },
    userName: {
		marginTop: 10,
		color: '#333',
		fontSize: 14,
	},
    list:{
        borderTopWidth: 1/PixelRatio.get(),
        borderTopColor: '#e4e4e4',
        marginTop: px2dp(12)
    },
    listItem: {
        flex: 1,
        height: px2dp(47),
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: px2dp(25),
        paddingRight: px2dp(25),
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1/PixelRatio.get()
    },
    orderClass:{
        justifyContent:'space-around',
        flexDirection:'row',
    }
});