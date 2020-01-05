import React, { Component } from 'react';
import {
    Modal,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Button,
    Text,
    TextInput,
    StatusBar,
    TouchableOpacity,
  } from 'react-native';
  
export function showMenu(menuOption,props){
    console.log('show menu clicked:'+menuOption);
    //return (<Text>Hello World!</Text>);
    // if(menuOption=='closeMenu')
    //     props.setState({isVisible:!props.state.isVisible});
    // else{
    //     //console.log(props._MyMenu._MyComponent.props);
    //     props._MyMenu._MyComponent.props.setState({isVisible:!props.state.isVisible});
    // }
    // props.setState({isVisible:false});
    //props._MyCenter.setNativeProps({text:'my new text'});
    //return { isVisible: true};
}
export function TestView(){
    return(<View><Text>Hello from test View</Text></View>);
}