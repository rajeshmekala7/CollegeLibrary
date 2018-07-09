import React, { Component } from 'react';
import { Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default class Admin extends Component {
    render() {
        return (

            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={styles.headerView}>
                    <View style={{ paddingTop: 16, paddingLeft: 7 }}>
                        <TouchableOpacity
                            onPress={() => { this.props.navigation.openDrawer() }} >
                            <Image
                                style={{ height: 15, width: 19 }}
                                source={require('../../images/menu.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.headerStyle}>
                        <Text style={styles.textStyle}>KUCET-Library</Text>
                    </View>
                </View>
                <View >

                    <View style={{ paddingTop: 20, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 'normal', color: '#d85e38' }}>Welcome to</Text>
                    </View>
                    <View style={{ paddingTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 13, fontWeight: 'normal', color: 'black' }}>Kakatiya University College Of Engg. & Tech.</Text>
                        <Text style={{ fontSize: 13, fontWeight: 'normal', color: 'black' }}>Library</Text>
                    </View>
                </View>
           
                 <View>
                     kkk
                     </View>
            </ScrollView>
        );
    }
}
const styles = {
    headerView: {
        backgroundColor: '#d85e38',
        height: 44,
        elevation: 5,
        flexDirection: 'row'

    },
    textStyle: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '500'

    },
    headerStyle: {
        paddingTop: 14,
        //  justifyContent:'center', 
        //  alignItems:'center',
        paddingLeft: 100,
        paddingRight: 107
    },
    cardName: {
        marginLeft: 17,
        marginTop: 13,
        // alignItems:'center'
    },
    backgroundView: {
        backgroundColor: '#fcfcfc',
        // paddingBottom:600
    },
    nameStyle: {
        fontWeight: 'normal',
        color: 'black',
        fontSize: 17
    },
    search: {
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 17,
        marginRight: 200,
        marginBottom: 2,
    },
    search1: {
        fontSize: 14,
        // marginTop: 3,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 2,
        height: 40,
        borderColor: '#ddd',
        borderRadius: 20,
        backgroundColor: 'white',
    },
    button: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        marginLeft: 10,
        marginRight: 90,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 5,
        paddingBottom: 5
    },
    button1: {
        borderWidth: 1,
        borderRadius: 18,
        borderColor: 'white',
        marginTop: 27,
        marginLeft: 90,
        marginRight: 90,
        marginBottom: 40,
        backgroundColor: '#d85e38',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 9,
        paddingBottom: 9,
    },
    add: {
        borderWidth: 0,
        borderRadius: 3,
        borderColor: '#ddd',
        borderBottomWidth: 0.5,
        elevation: 2,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 7,
        paddingBottom: 10,
        backgroundColor: 'white'
    }

}