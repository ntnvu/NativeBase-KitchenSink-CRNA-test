/* @flow */

import React from "react";
import {DrawerNavigator} from "react-navigation";


import BasicFooter from "./components/footer/basicFooter";

const DrawerExample = DrawerNavigator(
    {},
    {
        initialRouteName: "Drawer",
        headerMode: "none",
    }
);

export default DrawerExample;
