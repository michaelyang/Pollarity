import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Font, AppLoading } from 'expo';

import Router from './app/config/routes'
import store from './app/redux/store';

function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
}

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            isReady: false,
        }
    }

    async _loadAssetsAsync() {
        const fontAssets = cacheFonts([
            {UbuntuBold: require('./app/assets/fonts/Ubuntu-Bold.ttf')},
            {UbuntuMedium: require('./app/assets/fonts/Ubuntu-Medium.ttf')},
            {UbuntuRegular: require('./app/assets/fonts/Ubuntu-Regular.ttf')},
            {UbuntuLight: require('./app/assets/fonts/Ubuntu-Light.ttf')}
        ]);

        await Promise.all([...fontAssets]);
    }

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._loadAssetsAsync}
                    onFinish={() => this.setState({isReady: true})}
                    onError={console.warn}
                />
            );
        }

        return (
            <Provider store={store}>
                    <Router/>
            </Provider>
        );
    }
}