import React from 'react';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import { Text, View, TouchableOpacity, Image, Alert } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { actions as auth } from "../../index"
const { login } = auth;

import styles from "./styles"

import Form from "../../components/Form"
import AuthContainer from "../../components/AuthContainer"

const fields = [
    {
        key: 'email',
        label: "Email Address",
        placeholder: "Email Address",
        autoFocus: false,
        secureTextEntry: false,
        value: "",
        type: "email"
    },
    {
        key: 'password',
        label: "Password",
        placeholder: "Password",
        autoFocus: false,
        secureTextEntry: true,
        value: "",
        type: "password"
    }
];

const error = {
    general: "",
    email: "",
    password: ""
}

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            error: error
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onSuccess = this.onSuccess.bind(this);
        this.onError = this.onError.bind(this);
    }

    onForgotPassword() {
        Actions.ForgotPassword()
    }

    onSubmit(data) {
        this.setState({error: error}); //clear out error messages

        this.props.login(data, this.onSuccess, this.onError)
    }

    onSuccess({ exists, user}) {
        if (exists) Actions.Main()
        else Actions.CompleteProfile({ user });
    }

    onError(error) {
        let errObj = this.state.error;

        if (error.hasOwnProperty("message")) {
            errObj['general'] = error.message;
        } else {
            let keys = Object.keys(error);
            keys.map((key, index) => {
                errObj[key] = error[key];
            })
        }
        this.setState({error: errObj});
    }
    render() {
        return (
            <AuthContainer>
                <View style={styles.container}>
                    <View style={styles.topContainer}>
                        <View style={styles.logoContainer}>
                          <Image style={styles.image} source = {require('../../../../assets/images/logo.png')}/>
                          <Text style={styles.title}>Pollarity</Text>
                        </View>
                        <Form fields={fields}
                              showLabel={false}
                              onSubmit={this.onSubmit}
                              buttonTitle={"LOG IN"}
                              error={this.state.error}/>
                        <Text style={styles.forgotText} onPress={this.onForgotPassword}>Forgot password?</Text>
                        <KeyboardSpacer/>
                    </View>
                    {/*
                        <View style={[styles.buttonContainer]}>
                            <SocialIcon
                                raised
                                button
                                type='facebook'
                                title='SIGN UP WITH FACEBOOK'
                                iconSize={19}
                                style={[styles.containerView, styles.socialButton]}
                                fontStyle={styles.buttonText}
                                onPress={this.onSignInWithFacebook}/>

                            <View style={styles.orContainer}>
                                <Divider style={styles.divider} />
                                <Text style={styles.orText}>
                                    Or
                                </Text>
                            </View>

                            <Button
                                raised
                                borderRadius={4}
                                title={'SIGN UP WITH E-MAIL'}
                                containerViewStyle={[styles.containerView]}
                                buttonStyle={[styles.button]}
                                textStyle={styles.buttonText}
                                onPress={Actions.Register}/>
                        </View>
*/}
                    <View style={styles.bottomContainer}>
                        <View style={styles.bottom}>
                            <Text style={styles.bottomText}>
                                Don't have an account yet?
                            </Text>
                            <TouchableOpacity onPress={Actions.Register}>
                                <Text style={styles.signInText}>
                                    Sign up
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </AuthContainer>
        );
    }
}

export default connect(null, { login })(Login);
