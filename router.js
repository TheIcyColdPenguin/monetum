import React, { Component } from "react";
import { Scene, Router, Actions } from "react-native-router-flux";
import { StyleSheet, Text, View, Image } from "react-native";

import Home from "./routes/Home.js";

export default function RouterComponent() {
    return (
        <Router>
            <Scene key="home" title="Home" component={Home} />
            <Scene key="analytics" title="Analytics" />
            <Scene key="dashboard" title="Dashboard" />
        </Router>
    );
}
