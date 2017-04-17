/**
 * Bootstrap of PickerTest
 */

import React, {Component, PropTypes} from 'react';
import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Platform,
    PixelRatio,
    ScrollView,
    TextInput,
    Switch,
} from 'react-native';

import Button from './../../../components/Button';
import Picker from 'react-native-picker';
import area from './../../../../area.json';

export default class PickerTest extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            userName:'',
            userMobile:'',
            userProvince:'',
            userAddress:'',
            userSwitch:false
        }
        this.buttonStyle ={
            flex: 1,
            height: 45,
            backgroundColor: '#479d67',
            alignItems:'center',
            justifyContent:'center',
            borderRadius: 3,
            margin:15
        }
    }

    // static navigationOptions = {
    //     header: ({ state, setParams ,goBack}) => {
    //         let right = (
    //             <Button
    //                 title="保存"
    //                 onPress={() => goBack()}
    //             />
    //         );
    //         return {right};
    //     },
    //
    // }


    _createAreaData() {
        let data = [];
        let len = area.length;
        for(let i=0;i<len;i++){
            let city = [];
            for(let j=0,cityLen=area[i]['city'].length;j<cityLen;j++){
                let _city = {};
                _city[area[i]['city'][j]['name']] = area[i]['city'][j]['area'];
                city.push(_city);
            }

            let _data = {};
            _data[area[i]['name']] = city;
            data.push(_data);
        }
        return data;
    }

    _showAreaPicker() {
        Picker.init({
            pickerData: this._createAreaData(),
            selectedValue: ['河北', '唐山', '古冶区'],
            onPickerConfirm: pickedValue => {
                const other = pickedValue[2] == '其他' ? " " : pickedValue[2];
                const other2 = pickedValue[1] == '其他' ? " " : pickedValue[1];
                this.setState({ userProvince:pickedValue[0] + other2 + other });
            },
            onPickerCancel: pickedValue => {

            },
            onPickerSelect: pickedValue => {
                //Picker.select(['山东', '青岛', '黄岛区'])

            }
        });
        Picker.show();
    }
    componentWillUnmount(){
        Picker.hide(status => {

        });
    }
    render() {
        return (
            <View style={{flex: 1}}>
                <ScrollView>
                    <InputItem
                        text="收货人"
                        Placeholder="填写收货人姓名"
                        onChange={(text) => {this.setState({userName: text})}}
                    />
                    <InputItem
                        text="联系电话"
                        Placeholder="填写收货人姓名"
                        onChange={(text) => {this.setState({userMobile: text})}}
                    />
                    <InputItem
                        text="所在地区"
                        onPress={this._showAreaPicker.bind(this)}
                        Disabled={false}
                        Placeholder={this.state.userProvince}
                        onChange={(text) => {this.setState({userProvince: text})}}
                    />
                    <InputItem
                        text="详细地址"
                        Placeholder="请填写详细地址，不少于5个字"
                        onChange={(text) => {this.setState({userAddress: text})}}
                    />
                    <View style={{marginTop:10}}>
                        <InputItem
                            text="设为默认地址"
                            Type="Switch"
                            onSwitch={(value) => {this.setState({userSwitch: value})}}
                            Value={this.state.userSwitch}
                        />
                    </View>

                    <View style={{flex:1,marginTop:20}}>
                         <Button text="保存" Style={this.buttonStyle} onPress={this._onSubmit.bind(this)}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
    _onSubmit = () => {
        let addressForm = this.state;
       console.log(addressForm)
    };
};


class InputItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {text,Placeholder, onPress,onSwitch, Type, Disabled, Value, onChange} = this.props;
        if(Platform.OS === 'android'){
            return(
                <TouchableOpacity onPress={onPress}>
                    <View style={PickerStyles.listItem}>
                        <Text style={PickerStyles.inputNameItem}>{text}</Text>
                        <View style={PickerStyles.inputItem}>
                            <TextInput
                                style={{fontSize:14}}
                                editable={Disabled}
                                placeholder={Placeholder}
                                onChangeText={(text) => {
                                this.userName = text;}}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            );
        }else if(Platform.OS === 'ios'){
            return(
                <TouchableOpacity onPress={onPress}>
                    <View style={PickerStyles.listItem}>
                        <Text style={PickerStyles.inputNameItem}>{text}</Text>
                        {
                            Type !== "Switch" ?
                                <View style={PickerStyles.inputItem}>
                                    <TextInput
                                        style={{flex:1,fontSize:14,}}
                                        onChangeText={onChange}
                                        editable={Disabled}
                                        placeholder={Placeholder}
                                    />
                                </View> :
                                <View style={PickerStyles.switchItem}>
                                    <Switch
                                        onValueChange={onSwitch}
                                        value={Value}
                                    />
                                </View>
                        }
                    </View>
                </TouchableOpacity>
            );
        }
    }
}
const PickerStyles = StyleSheet.create({
    listItem: {
        flex: 1,
        height: 47,
        padding:10,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#c4c4c4',
        borderBottomWidth: 1/PixelRatio.get(),
        backgroundColor:'#fff'
    },
    inputNameItem:{
        minWidth:60,
        fontSize: 14
    },
    inputItem:{
        flex:1,
        marginLeft:10,
    },
    switchItem:{
        flex:1,
        justifyContent:'flex-end',
        flexDirection:'row'
    }
});

