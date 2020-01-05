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
export function HwMenu(){
    return(<View><Text>Hello from test View</Text></View>);
}



export function hideMe(){
    console.log('hide me clicked');
    //localVar.
    //this.props.isVisible(false);
    //return(<View><Text>Hello from test Hide</Text></View>);
    //HwMenu();
}