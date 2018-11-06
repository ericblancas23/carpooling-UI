import React, { Component } from 'react'
import { View, StyleSheet, Text, ImageBackground,
TextInput, TouchableOpacity, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';

class LoginScreen extends Component {
    static navigationOptions = { header: null};

render() {
    return(
        <View style={{ flex: 1 }}>
          <ImageBackground
                source={require('../../assets/Screen-Shot-2015-06-11-at-16.36.34.png')}
                style={{ flex: 1 }}
            >
            <View style={{ flex: 1, justifyContent: 'center',
            alignItems: 'center'}}>
                <Animatable.View
                        animation="zoomIn" iterationCount={1} 
                        style={{ backgroundColor: 'white',
                        height: 100,
                        width: 100,
                        alignItems: 'center',
                        justifyContent: 'center'
                }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 26 }}>UBER</Text>
                    </Animatable.View>
                </View>

            {/**--BOTTOM HALF--**/}
                <Animatable.View
                    animation="slideInUp" iterationCount={1}
                >
                    <View
                        style={{ 
                            height: 150,
                            backgroundColor: 'white'
                        }}
                    >
                        <View 
                            style={{
                                opacity:1, //animate
                                alignItems: 'flex-start',
                                paddingHorizontal: 25,
                                marginTop: 25 //animate
                            }}
                        >
                            <Text
                                style={{ fontSize: 24 }}
                            >Get moving with UBER</Text>
                        </View>

                        <TouchableOpacity>
                            <View 
                                style={{
                                    marginTop: 25,
                                    paddingHorizontal: 25,
                                    flexDirection: 'row'
                                }}
                            >
                                <Image
                                    source={require('../../assets/smart-drawing-tiny-car-4.png')}
                                    style={{ height: 24, width: 24, resizeMode: 'contain'}}
                                />
                                <View
                                    style={{ flexDirection: 'row', flex: 1}}
                                >
                                    <Text
                                        style={{ fontSize: 20, paddingHorizontal: 10}}
                                    >+1</Text>
                                    <TextInput
                                        style={{
                                            flex: 1, fontSize: 20
                                        }}
                                        placeholder="Enter Mobile Number"
                                        underlineColorAndroid="tranparent"
                                    />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View
                    style={{
                        height: 70,
                        backgroundColor: 'white',
                        alignItems:'center',
                        justifyContent: 'center',
                        borderTopColor: 'gray',
                        borderWidth: 1,
                        paddingHorizontal: 25
                    }}
                    >
                        <Text
                            style={{ color: 'blue', fontWeight: 'bold'}}
                        >Or Connect Using A Social Account</Text>
                    </View>
                </Animatable.View>
            </ImageBackground>

        </View>
        );
    }
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
            
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
    }
})