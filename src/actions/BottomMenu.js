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
import {HwMenu,hideMe} from './HwMenu.js';
export function BottomMenu(){
    function showMenu(){
        console.log('clicked');
        hideMe(true);
    }
    return (<View><HwMenu/><TouchableOpacity onPress={()=>showMenu('hwAction',this)}><Text>Hardware Actions</Text></TouchableOpacity></View>);
}