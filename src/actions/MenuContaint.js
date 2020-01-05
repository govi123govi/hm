import React, { Component } from 'react';
import {
    Modal,
    View, 
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {showMenu} from './Actions.js';
export class MenuContaint extends Component {
    state = {  
        isVisible: false, //state of modal default false  
      }
    render() { 
        return (
            <Modal ref={component=> this._MyComponent=component} 
          animationType="slide"
          transparent={true} 
          visible = {this.state.isVisible} 
          >
            <View style={styles.menuContainer}>
          <View><TouchableOpacity onPress={()=>{showMenu('closeMenu',this)}}><Text style={styles.menuCloseIcon}><Icon name='times' size={15}></Icon></Text></TouchableOpacity></View>
            <ScrollView>
            <Text style={styles.menuText}>Hello World!</Text>
            <Text style={styles.menuText}>Hello World!</Text>
            <Text style={styles.menuText}>Hello World!</Text>
            <Text style={styles.menuText}>Hello World!</Text>
            <Text style={styles.menuText}>Hello World!</Text>
            <Text style={styles.menuText}>Hello World!</Text>
            <Text style={styles.menuText}>Hello World!</Text>
            <Text style={styles.menuText}>Hello World!</Text>
            </ScrollView>
          </View>
          </Modal>
        );
    }
}
const styles = StyleSheet.create({
    menuCloseIcon:{
        alignSelf:'flex-end',
        marginRight:6,
        marginTop:6
      },
      menuContainer:{
        backgroundColor:'#FFD2E4',
        height:120,
        width:250,
        position: 'absolute',
        bottom: 40
      },
      menuText:{
        color:'black',
        fontSize: 14,
        marginLeft:10,
        marginBottom:5,
        marginTop:5,
        borderBottomWidth:1,
        borderBottomColor:'#CFCFCF'
      }
});