import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import CardSection from './common/CardSection';
import Header from './common/Header';

export default class student extends Component {

    
    state={
        date1:null,
        date2:null,
        date3:null
    }
    
    ShowCurrentDate1=()=>{
        var date = new Date().getDate();
       var month = new Date().getMonth() + 1;
       var year = new Date().getFullYear();
       var hour = new Date().getHours() ;
       var min = new Date().getMinutes();
    //    alert(date + '-' + month + '-' + year);
       currentDate = date + '-' + month + '-' + year  + '  ' + hour + ':'+ min ;
       this.setState({
         date1 : currentDate,
        
       });
  }
  ShowCurrentDate2=()=>{
    var date = new Date().getDate();
   var month = new Date().getMonth() + 1;
   var year = new Date().getFullYear();
   var hour = new Date().getHours() ;
   var min = new Date().getMinutes();
//    alert(date + '-' + month + '-' + year);
   currentDate = date + '-' + month + '-' + year  + '  ' + hour + ':'+ min ;
   this.setState({
     date2 : currentDate,
   });
}
ShowCurrentDate3=()=>{
    var date = new Date().getDate();
   var month = new Date().getMonth() + 1;
   var year = new Date().getFullYear();
   var hour = new Date().getHours() ;
   var min = new Date().getMinutes();
//    alert(date + '-' + month + '-' + year);
   currentDate = date + '-' + month + '-' + year  + '  ' + hour + ':'+ min ;
   this.setState({
     date3 : currentDate,
   });
}
    render(){
        return(
            
            <View style={{flex:1,backgroundColor:'#fcfcfc'}}>
            <Header  name="KUCET - Library"/>
         <View style={{marginTop:40}}>
         <Text></Text>
             <CardSection >
             <View style={styles.cardName}>
             <Text style={{fontWeight:'bold'}}>Book 1</Text>
             </View>
             <View style={{flexDirection: 'row'}}>
                 <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.props()}>
                  <View>
                  <Text>Click Here to scan</Text>
                  </View>
                  </TouchableOpacity>
                  <View style={{marginTop:13,}}>
                      <Text>{this.state.date1}  </Text>
                      </View>
              </View>
             </CardSection>

            

               <CardSection >
               <View style={styles.cardName}>
             <Text style={{fontWeight:'bold'}}>Book 2</Text>
             </View>
             <View style={{flexDirection: 'row'}}>
                 <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.ShowCurrentDate2()}>
                   
                  <View>
                  <Text>Click Here to scan</Text>
                  </View>
                  </TouchableOpacity>
                  <View style={{marginTop:13,}}>
                      <Text>{this.state.date2}  </Text>
                      </View>
              </View>
              </CardSection>
              <CardSection >
               <View style={styles.cardName}>
             <Text style={{fontWeight:'bold'}}>Book 3</Text>
             </View>
             <View style={{flexDirection: 'row'}}>
                 <TouchableOpacity
                  style={styles.button}
                  onPress={() => this.ShowCurrentDate3()}>
                   
                  <View>
                  <Text>Click Here to scan</Text>
                  </View>
                  </TouchableOpacity>
                  <View style={{marginTop:13}}>
                      <Text>{this.state.date3}  </Text>
                      </View>
              </View>
              </CardSection>
              </View>
      </View>
        );
    }
}
const styles={
    headerStyle:{
        fontSize:20
    },
    cardName:{
        marginLeft:5,
        marginTop:5,
        
        
        // alignItems:'center'
  
    },
    button:{
        flex: 1,
        borderWidth: 1,
        borderRadius:5,
        borderColor:'#ddd',
         marginLeft: 10,
         marginRight: 90,
         marginTop: 10,
         marginBottom:10,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:5,
        paddingBottom:5
       
    
    },
 
}