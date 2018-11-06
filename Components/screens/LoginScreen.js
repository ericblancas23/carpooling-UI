import React, { Component } from 'react'
import { View, StyleSheet, Text, ImageBackground,
TextInput, TouchableOpacity, Image, Animated, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';


const SCREEN_HEIGHT = Dimensions.get('window').height;

class LoginScreen extends Component {
    static navigationOptions = { header: null};

    componentWillMount() {
        this.loginheight = new Animated.Value(150)
    }

    increaseHeightOfLogin = () => {
        Animated.timing(this.loginheight, {
            toValue: SCREEN_HEIGHT,
            duration:300
        }).start()
    }

render() {

    const headerTextOpacity = this.loginheight.interpolate({
        inputRange: [150, SCREEN_HEIGHT],
        outputRange: [1, 0]
    })

    const marginTop = this.loginheight.interpolate({
        inputRange: [150, SCREEN_HEIGHT],
        outputRange: [1, 0]
    })

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
                    <Animated.View
                        style={{ 
                            height: this.loginheight,
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

                        <TouchableOpacity
                            accessible={true}
                            onPress={() => this.increaseHeightOfLogin()}
                        >
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
                                    pointerEvents="none"
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
                    </Animated.View>


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