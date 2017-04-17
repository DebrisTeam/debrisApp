/**
 * Created by qhl on 2017/4/13.
 */
import React, { Component } from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import  Button from './../../components/Button';
import InputView from '../../components/InputView';

export default class LoginActivity extends Component {
    constructor(props) {
        super(props);
        this.userName = "";
        this.TextInput={
            backgroundColor: '#fff',
            height:45,
            margin:15,
            borderRadius:4,
            paddingLeft:5
        };
        this.buttonStyle = {
            height: 45,
            backgroundColor: '#479d67',
            alignItems:'center',
            justifyContent:'center',
            borderRadius: 3,
            margin:15,
        }
    }
  render() {
      return (
          <View style={{flex:1}}>
              <InputView  name='请输入昵称' Style={this.TextInput} onChange={(text) => {
            this.userName = text;
        }}/>
              <View style={{flex:1,marginTop:20}}>
                  <Button
                      text="保存"
                      Style={this.buttonStyle}
                     />
              </View>
          </View>
      )
  }
}
const UserStyles = StyleSheet.create({

});

