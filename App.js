import React, {Component} from 'react';

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

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {showMenu,TestView} from './src/actions/Actions.js';
import {BottomMenu} from './src/actions/BottomMenu.js';
// import {HwMenu} from './src/actions/HwMenu.js';
import {MenuContaint} from './src/actions/MenuContaint.js';
import {testme,conntest, sendMsg} from './src/transport/Socket.js';
var msgCnt = 1;
let menuVisible = false;
class App extends Component{

  constructor(props){
      super(props)
  }
  state = {  
    isVisible: true, //state of modal default false  
  } 
  render(){
    
    return(
      <BottomMenu/>
      // <View style={styles.containerMain}>
      //   <View style={styles.headerContainer}>
      //     <Text style={styles.headerTitle}><Icon name='wifi' size={20} color='white'></Icon>   App Blocks  </Text>
      //     <View style={styles.headerItems}><Text> <Icon name='eraser' size={20} color='white'></Icon>       <Icon name='times' size={20} color='white'></Icon>         <Icon name='play' size={20} color='white'></Icon></Text></View>
      //   </View>
      //   <View style={styles.bodyContainer}>
      //     <TextInput ref={component=> this._MyCenter=component}>Centre</TextInput>
      //     <View style={{marginTop: 22}}>
      //       {/* <MenuContaint ref={component=> this._MyMenu=component}></MenuContaint> */}
      //       <TestView></TestView>
      //     </View>
      //     </View>
      //   <View style={styles.bottomMenu}><ScrollView horizontal={true} contentContainerStyle={{ justifyContent : 'center', alignItems:'center'}}>
      //     <TouchableOpacity onPress={()=>showMenu('hwAction',this)}><Text style={styles.bottomText}>Hardware Actions | </Text></TouchableOpacity>
      //     <TouchableOpacity onPress={()=>showMenu('apAction',this)}><Text style={styles.bottomText}>App Actions | </Text></TouchableOpacity>
      //     <TouchableOpacity onPress={()=>showMenu('rcAction')}><Text style={styles.bottomText}>Remote Control | </Text></TouchableOpacity>
      //     <TouchableOpacity onPress={()=>showMenu('cAction')}><Text style={styles.bottomText}>Cloud Actions | </Text></TouchableOpacity>
      //     <TouchableOpacity onPress={()=>showMenu('delay')}><Text style={styles.bottomText}>Delay | </Text></TouchableOpacity>
      //     <TouchableOpacity onPress={()=>showMenu('loop')}><Text style={styles.bottomText}>Loop  </Text></TouchableOpacity>
      //   </ScrollView>
      //   </View>
      // </View>

    )

     
  }
}
const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer:{
    backgroundColor:'#FF3386',
    height: 35,
    width: '100%',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems:'center',
    position: 'absolute',
  top: 0
  },
  headerTitle:{
    color:'white',
    textAlign:"left",
    marginLeft:10,
    textShadowRadius:20,
    fontSize: 18,
    fontWeight: 'bold'
  },
  headerItems:{
    
  },
  bodyContainer:{
        flexDirection: 'column'
  },
  bottomText:{
    color:'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:10
  },
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
  },
  bottomMenu:{
    backgroundColor:'#FF3386',
    width: '100%',
  height: 40,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0
  }
});
export default App;
