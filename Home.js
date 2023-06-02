import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";

const Home = () => {
    return (
        <View style={styles.home}>
            <View style={[styles.viewDashboardParent, styles.groupChildLayout]}>
                <Image
                    style={styles.viewDashboardIcon}
                    contentFit="cover"
                    source={require("./assets/viewdashboard.png")}
                />
                <LinearGradient
                    style={[styles.groupChild, styles.groupChildPosition]}
                    locations={[0, 1]}
                    colors={["rgba(255, 187, 187, 0.4)", "rgba(114, 49, 92, 0.4)"]}
                />
                <Text style={[styles.homepage, styles.todayTypo]}>Home Page</Text>
            </View>
            <Image style={styles.timelineIcon} contentFit="cover" source={require("./assets/timeline.png")} />
            <View style={[styles.day1, styles.dayLayout]}>
                <Image
                    style={[styles.day1Child, styles.childLayout]}
                    contentFit="cover"
                    source={require("./assets/ellipse-1.png")}
                />
                <Text style={[styles.today, styles.dayLayout]}>Today</Text>
            </View>
            <View style={[styles.day2, styles.dayLayout]}>
                <Image
                    style={[styles.day2Child, styles.childLayout]}
                    contentFit="cover"
                    source={require("./assets/ellipse-1.png")}
                />
                <Text style={[styles.today, styles.dayLayout]}>Yesterday</Text>
            </View>
            <View style={[styles.transaction1, styles.transactionLayout]}>
                <LinearGradient
                    style={[styles.transaction11, styles.transactionLayout]}
                    locations={[0, 1]}
                    colors={["rgba(255, 187, 187, 0.1)", "rgba(114, 49, 92, 0.1)"]}
                />
            </View>
            <View style={[styles.transaction2, styles.transactionLayout]}>
                <LinearGradient
                    style={[styles.transaction11, styles.transactionLayout]}
                    locations={[0, 1]}
                    colors={["rgba(255, 187, 187, 0.1)", "rgba(114, 49, 92, 0.1)"]}
                />
            </View>
            <View style={[styles.transaction3, styles.transactionLayout]}>
                <LinearGradient
                    style={[styles.transaction11, styles.transactionLayout]}
                    locations={[0, 1]}
                    colors={["rgba(255, 187, 187, 0.1)", "rgba(114, 49, 92, 0.1)"]}
                />
            </View>
            <View style={[styles.transaction4, styles.transactionLayout]}>
                <LinearGradient
                    style={[styles.transaction11, styles.transactionLayout]}
                    locations={[0, 1]}
                    colors={["rgba(255, 187, 187, 0.1)", "rgba(114, 49, 92, 0.1)"]}
                />
            </View>
            <View style={[styles.transaction5, styles.transactionLayout]}>
                <LinearGradient
                    style={[styles.transaction11, styles.transactionLayout]}
                    locations={[0, 1]}
                    colors={["rgba(255, 187, 187, 0.1)", "rgba(114, 49, 92, 0.1)"]}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    groupChildLayout: {
        height: 219,
        width: 430,
        position: "absolute",
    },
    groupChildPosition: {
        backgroundColor: "transparent",
        top: 0,
        left: 0,
    },
    todayTypo: {
        textAlign: "left",
        color: Color.white,
        fontFamily: FontFamily.robotoMonoBold,
        fontWeight: "700",
        fontSize: FontSize.size_21xl,
    },
    dayLayout: {
        height: 59,
        position: "absolute",
    },
    childLayout: {
        height: 19,
        width: 19,
        left: 0,
        position: "absolute",
    },
    transactionLayout: {
        height: 105,
        width: 325,
        position: "absolute",
    },
    viewDashboardIcon: {
        top: 0.14 * Dimensions.get("window").height,
        left: 28,
        width: 34,
        height: 32,
        position: "absolute",
        overflow: "hidden",
    },
    groupChild: {
        height: 0.24 * Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        position: "absolute",
    },
    homepage: {
        top: 0.125 * Dimensions.get("window").height,
        left: 78,
        width: 288,
        height: 62,
        position: "absolute",
    },
    viewDashboardParent: {
        top: -50,
        left: 0,
        width: 430,
    },
    timelineIcon: {
        top: 240,
        left: 37,
        width: 5,
        height: 691,
        position: "absolute",
    },
    day1Child: {
        top: 21,
    },
    today: {
        left: 39,
        width: 299,
        textAlign: "left",
        color: Color.white,
        fontFamily: FontFamily.robotoMonoBold,
        fontWeight: "700",
        fontSize: FontSize.size_21xl,
        height: 59,
        top: 0,
    },
    day1: {
        top: 0.26 * Dimensions.get("window").height,
        width: 338,
        left: 30,
        height: 59,
    },
    day2Child: {
        top: 22,
    },
    day2: {
        top: 652,
        width: 338,
        left: 30,
        height: 59,
    },
    transaction11: {
        borderRadius: Border.br_xl,
        backgroundColor: "transparent",
        top: 0,
        left: 0,
    },
    transaction1: {
        top: 267,
        left: 0.146 * Dimensions.get("window").width,
        width: 0.3084 * Dimensions.get("window").width,
    },
    transaction2: {
        top: 397,
        left: 0.146 * Dimensions.get("window").width,
        width: 0.3084 * Dimensions.get("window").width,
    },
    transaction3: {
        top: 527,
        left: 0.146 * Dimensions.get("window").width,
        width: 0.3084 * Dimensions.get("window").width,
    },
    transaction4: {
        top: 737,
        left: 0.146 * Dimensions.get("window").width,
        width: 0.3084 * Dimensions.get("window").width,
    },
    transaction5: {
        top: 867,
        left: 0.146 * Dimensions.get("window").width,
        width: 0.3084 * Dimensions.get("window").width,
    },
    home: {
        backgroundColor: Color.gray,
        flex: 1,
        width: "100%",
        // height: "100%",
        // overflow: "hidden",
    },
});

export default Home;
