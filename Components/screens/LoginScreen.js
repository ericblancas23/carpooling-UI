import React, { Component } from 'react'
import { View, StyleSheet, Text, ImageBackground,
TextInput, TouchableOpacity, Image, Animated, Dimensions, Keyboard,
Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'native-base';


const SCREEN_HEIGHT = Dimensions.get('window').height;

class LoginScreen extends Component {
    static navigationOptions = { header: null};

    constructor(props) {
        super(props);
        this.state = {
            placeHolderText: 'Enter Mobile Number'
        }
    }
    componentWillMount() {
        this.loginheight = new Animated.Value(150)

        this.keyboardWillShowListener = Keyboard.addListener('keyboardWillShow',this.keyboardWillShow);
        this.keyboardWillHideListener = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide);

        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow',this.keyboardWillShow);
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide);
       
        this.keyboardHeight = new Animated.Value(0);
        this.forwardArrowOpacity = new Animated.Value(0);
        this.borderBottomWidth = new Animated.Value(0);
    
    }

    keyboardWillHide = (event) => {

        if (Platform.OS == 'android') duration = 100;
        else duration = event.duration;

        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: duration + 100,
                toValue: 0
            }), 
            Animated.timing(this.forwardArrowOpacity, {
                duration: duration,
                toValue: 0
            }),
            Animated.timing(this.borderBottomWidth, {
                duration: duration,
                toValue: 0
            })
        ]).start();
    }

    keyboardWillShow = (event) => {

        if (Platform.OS == 'android') duration = 100;
        else duration = event.duration;

        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: duration + 100,
                toValue: event.endCoordinates.height + 10
            }), 
            Animated.timing(this.forwardArrowOpacity, {
                duration: duration,
                toValue: 1
            }),
            Animated.timing(this.borderBottomWidth, {
                duration: duration,
                toValue: 1
            })
        ]).start()


    }

    increaseHeightOfLogin = () => {
        Animated.timing(this.loginheight, {
            toValue: SCREEN_HEIGHT,
            duration:300
        }).start(() => {
            this.refs.textInputMobile.focus();
        })
    }

    decreaseHieghtOfLogin = () => {
        Keyboard.dismiss();
        Animated.timing(this.loginheight, {
            toValue: 150,
            duration:300
        }).start()
    }

render() {

    const headerBackArrowOpacity = this.loginheight.interpolate({
        inputRange: [150, SCREEN_HEIGHT],
        outputRange: [0, 1]
    })

    const headerTextOpacity = this.loginheight.interpolate({
        inputRange: [150, SCREEN_HEIGHT],
        outputRange: [1, 0]
    })

    const marginTop = this.loginheight.interpolate({
        inputRange: [150, SCREEN_HEIGHT],
        outputRange: [25, 100]
    })

    return(
        <View style={{ flex: 1 }}>

        <Animated.View
            style={{ position: 'absolute',
                     height: 60,
                     width: 60,
                     top: 60,
                     left: 25,
                     zIndex: 100,
                     opacity: headerBackArrowOpacity
        
        }}
        >
           <TouchableOpacity
                onPress={() => this.decreaseHieghtOfLogin()}
           >
               <Icon
                name="md-arrow-back"
                style={{ color: 'black' }}
               />
           </TouchableOpacity>
        </Animated.View>

        <Animated.View
            style={{
                position: 'absolute',
                height: 60, width: 60,
                right: 10,
                bottom: this.keyboardHeight, //animated
                opacity: this.forwardArrowOpacity,
                zIndex: 100,
                backgroundColor: 'black',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 30
            }}
        >
            <Icon name="md-arrow-forward" style={{ color: 'white'}}/>
        </Animated.View>

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
                        <Animated.View 
                            style={{
                                opacity:headerTextOpacity, //animate
                                alignItems: 'flex-start',
                                paddingHorizontal: 25,
                                marginTop: marginTop //animate
                            }}
                        >
                            <Text
                                style={{ fontSize: 24 }}
                            >Get moving with UBER</Text>
                        </Animated.View>

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
                                <Animated.View
                                    pointerEvents="none"
                                    style={{ flexDirection: 'row', flex: 1,
                                    borderBottomWidth: this.borderBottomWidth
                                }}
                                >
                                    <Text
                                        style={{ fontSize: 20, paddingHorizontal: 10}}
                                    >+1</Text>
                                    <TextInput
                                        ref="textInputMobile"
                                        placeholder={this.state.placeHolderText}
                                        keyboardType= "numeric"
                                        style={{
                                            flex: 1, fontSize: 20
                                        }}
                                        placeholder="Enter Mobile Number"
                                        underlineColorAndroid="tranparent"
                                    />
                                </Animated.View>
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