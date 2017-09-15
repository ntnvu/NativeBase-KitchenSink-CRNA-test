/* @flow */

import React from "react";

import { Platform } from "react-native";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import FloatingLabel from "./components/form/floatingLabel";
import NHListAvatar from "./components/list/list-avatar";
import BasicFooter from "./components/footer/basicFooter";

const AppNavigator = StackNavigator(
    {
        BasicFooter: { screen: BasicFooter },
        FloatingLabel: { screen: FloatingLabel },
        NHListAvatar: { screen: NHListAvatar },
    },
    {
        initialRouteName: "BasicFooter",
        headerMode: "none",
    }
);

export default () =>
    <Root>
        <AppNavigator />
    </Root>;
