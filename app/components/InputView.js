/**
 *公共input ,name、Styles
 */
import React, { Component, PropTypes} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';
export default class EditView extends Component {
    // 验证数据类型
    static propTypes = {
        name: PropTypes.string.isRequired,
        onChange: PropTypes.func,
        Style:React.PropTypes.object
    };
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }
    render() {
        return (
            <View>
                <TextInput
                    placeholder={this.props.name}
                    autoFocus={true}
                    onChangeText={this.props.onChange}
                    style={this.props.Style}
                />
            </View>
        );
    }
}

