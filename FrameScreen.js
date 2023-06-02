import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "./GlobalStyles";

const FrameScreen = () => {
    return (
        <View style={styles.homeParent}>
            <View style={[styles.home, styles.ocrLayout]}>
                <View style={[styles.viewDashboardParent, styles.groupChildLayout]}>
                    <Image
                        style={styles.viewDashboardIcon}
                        contentFit="cover"
                        source={require("./assets/viewdashboard.png")}
                    />
                    <LinearGradient
                        style={[styles.groupChild, styles.groupChildLayout]}
                        locations={[0, 1]}
                        colors={["rgba(255, 187, 187, 0.4)", "rgba(114, 49, 92, 0.4)"]}
                    />
                    <Text style={[styles.homepage, styles.todayTypo]}>HomePage</Text>
                </View>
                {/* <Image style={styles.timelineIcon} contentFit="cover" source={require("./assets/timeline.png")} /> */}
                <View style={[styles.day1, styles.dayLayout]}>
                    {/* <Image
                        style={[styles.day1Child, styles.childLayout]}
                        contentFit="cover"
                        source={require("./assets/ellipse-1.png")}
                    /> */}
                    <Text style={[styles.today, styles.dayLayout]}>Today</Text>
                </View>
                <View style={[styles.day2, styles.dayLayout]}>
                    {/* <Image
                        style={[styles.day2Child, styles.childLayout]}
                        contentFit="cover"
                        source={require("./assets/ellipse-1.png")}
                    /> */}
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
        </View>
    );
};

const styles = StyleSheet.create({
    ocrLayout: {
        height: 932,
        width: 430,
        backgroundColor: Color.gray,
        position: "absolute",
        overflow: "hidden",
    },
    groupChildLayout: {
        height: 219,
        left: 0,
        width: 430,
        position: "absolute",
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
        width: 339,
        position: "absolute",
    },
    barGroupLayout: {
        width: 381,
        position: "absolute",
    },
    textTypo2: {
        width: 48,
        color: Color.normalGrey,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        letterSpacing: 0.1,
        fontSize: FontSize.size_sm,
        height: 21,
        textAlign: "left",
        top: 0,
        position: "absolute",
    },
    textTypo1: {
        width: 44,
        color: Color.normalGrey,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        letterSpacing: 0.1,
        fontSize: FontSize.size_sm,
        height: 21,
        textAlign: "left",
        top: 0,
        position: "absolute",
    },
    barLayout2: {
        height: 220,
        top: 0,
    },
    barLayout: {
        opacity: 0.04,
        width: 56,
        height: 220,
        backgroundColor: "transparent",
        top: 0,
        position: "absolute",
    },
    barLayout1: {
        width: 56,
        position: "absolute",
    },
    rectangleLayout: {
        height: 38,
        width: 89,
        top: 0,
        position: "absolute",
    },
    weekTypo: {
        color: Color.materialThemeSysLightTertiaryFixedDim,
        height: 20,
        top: 8,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        letterSpacing: 0.1,
        fontSize: FontSize.size_sm,
        textAlign: "left",
        position: "absolute",
    },
    statsTypo: {
        width: 160,
        color: Color.lightpink_100,
        letterSpacing: 0.2,
        fontSize: FontSize.size_5xl,
        textAlign: "left",
        fontFamily: FontFamily.robotoMonoBold,
        fontWeight: "700",
        top: 0,
        left: 0,
        position: "absolute",
    },
    totalLayout: {
        height: 153,
        borderRadius: Border.br_3xs,
        width: 381,
        backgroundColor: "transparent",
        left: 0,
        position: "absolute",
    },
    bodyPosition: {
        width: 374,
        backgroundColor: "transparent",
        left: 28,
        position: "absolute",
    },
    dateTypo: {
        height: 31,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        fontSize: FontSize.size_mid,
        color: Color.lightpink_100,
        top: 202,
        fontFamily: FontFamily.robotoMonoBold,
        fontWeight: "700",
        position: "absolute",
    },
    horizontalLayout: {
        height: 2,
        width: 374,
        backgroundColor: Color.gray,
    },
    verticalLayout: {
        height: 707,
        width: 2,
        top: 196,
        backgroundColor: Color.gray,
        position: "absolute",
    },
    textTypo: {
        height: 16,
        fontSize: FontSize.size_smi_5,
        width: 77,
        textAlign: "left",
        color: Color.white,
        fontFamily: FontFamily.robotoMonoBold,
        fontWeight: "700",
        left: 0,
        position: "absolute",
    },
    dashboardPosition: {
        top: 190,
        height: 932,
        width: 430,
        backgroundColor: Color.gray,
        position: "absolute",
        overflow: "hidden",
    },
    dashboardLayout: {
        height: 130,
        width: 326,
        left: 52,
        backgroundColor: "transparent",
        position: "absolute",
        borderRadius: Border.br_xl,
    },
    iconLayout: {
        maxHeight: "100%",
        maxWidth: "100%",
        left: "18.14%",
        height: "5.36%",
        position: "absolute",
        overflow: "hidden",
    },
    home1Typo: {
        fontSize: FontSize.size_11xl,
        left: 156,
        color: Color.lightpink_100,
        textAlign: "left",
        fontFamily: FontFamily.robotoMonoBold,
        fontWeight: "700",
        position: "absolute",
    },
    svgrepoIconLayout: {
        height: 50,
        width: 50,
        left: 78,
        position: "absolute",
        overflow: "hidden",
    },
    aboutChildLayout1: {
        height: 146,
        width: 412,
        position: "absolute",
        borderRadius: Border.br_xl,
    },
    aboutChildLayout: {
        height: 116,
        width: 116,
        position: "absolute",
    },
    viewDashboardIcon: {
        top: 131,
        height: 32,
        width: 34,
        left: 28,
        position: "absolute",
        overflow: "hidden",
    },
    groupChild: {
        backgroundColor: "transparent",
        top: 0,
    },
    homepage: {
        top: 119,
        width: 288,
        height: 62,
        left: 78,
        position: "absolute",
    },
    viewDashboardParent: {
        top: -50,
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
        top: 0,
    },
    day1: {
        width: 338,
        left: 30,
        height: 59,
        top: 202,
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
        backgroundColor: "transparent",
        top: 0,
        left: 0,
        borderRadius: Border.br_xl,
    },
    transaction1: {
        top: 267,
        left: 63,
        width: 339,
    },
    transaction2: {
        top: 397,
        left: 63,
        width: 339,
    },
    transaction3: {
        top: 527,
        left: 63,
        width: 339,
    },
    transaction4: {
        top: 737,
        left: 63,
        width: 339,
    },
    transaction5: {
        top: 867,
        left: 63,
        width: 339,
    },
    home: {
        left: 166,
        top: 192,
        width: 430,
        backgroundColor: Color.gray,
    },
    text: {
        left: 0,
    },
    text1: {
        left: 196,
        width: 45,
        color: Color.normalGrey,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        letterSpacing: 0.1,
        fontSize: FontSize.size_sm,
        height: 21,
        textAlign: "left",
        top: 0,
        position: "absolute",
    },
    text2: {
        left: 67,
    },
    text3: {
        left: 262,
    },
    text4: {
        left: 132,
    },
    text5: {
        left: 325,
    },
    descriptionGroup: {
        top: 235,
        left: 3,
        width: 373,
        height: 21,
        position: "absolute",
    },
    barDefault: {
        left: 260,
    },
    barDefault1: {
        left: 0,
    },
    barDefault2: {
        left: 65,
    },
    line: {
        top: 220,
        height: 0,
        left: 0,
    },
    barActive1: {
        opacity: 0.16,
        height: 220,
        top: 0,
        backgroundColor: "transparent",
        left: 0,
    },
    barActive: {
        left: 130,
        height: 220,
        top: 0,
    },
    barDefault3: {
        left: 195,
    },
    barDefault4: {
        left: 325,
    },
    barGroup: {
        width: 381,
        position: "absolute",
        left: 0,
    },
    chartAndDescription: {
        top: 109,
        left: 8,
        height: 256,
    },
    shadow: {
        top: 14,
        borderRadius: 100,
        width: 53,
        height: 29,
        opacity: 0.24,
        backgroundColor: Color.lightpink_100,
        left: 18,
        position: "absolute",
    },
    rectangle: {
        shadowColor: "rgba(54, 59, 100, 0.08)",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowRadius: 24,
        elevation: 24,
        shadowOpacity: 1,
        borderRadius: Border.br_41xl,
        height: 38,
        left: 0,
        backgroundColor: Color.lightpink_100,
    },
    day: {
        left: 29,
        color: Color.darkslateblue,
        width: 30,
        height: 20,
        top: 8,
        fontFamily: FontFamily.interMedium,
        fontWeight: "500",
        letterSpacing: 0.1,
        fontSize: FontSize.size_sm,
        textAlign: "left",
        position: "absolute",
    },
    filledButtonActive: {
        width: 89,
        height: 43,
        top: 0,
        left: 0,
        position: "absolute",
    },
    rectangle1: {
        backgroundColor: Color.darkslateblue,
        borderRadius: Border.br_41xl,
        height: 38,
        left: 0,
    },
    week: {
        left: 23,
        width: 42,
    },
    filledButtonDefault: {
        left: 102,
    },
    month: {
        left: 20,
        width: 49,
    },
    filledButtonDefault1: {
        left: 204,
    },
    year: {
        left: 27,
        width: 34,
    },
    filledButtonDefault2: {
        left: 305,
    },
    buttonGroup: {
        top: 51,
        height: 43,
        width: 394,
        left: 0,
        position: "absolute",
    },
    graphView: {
        height: 36,
    },
    sectionAllStatistic: {
        top: 198,
        height: 365,
        width: 394,
        left: 18,
        position: "absolute",
    },
    stats: {
        height: 68,
    },
    totalExpenditure: {
        top: 52,
    },
    totalExpenditure1: {
        top: 232,
    },
    statistics: {
        left: 26,
        height: 333,
        top: 599,
        overflow: "hidden",
    },
    analyticsChild: {
        top: 425,
        left: 47,
        width: 137,
        height: 60,
        borderRadius: Border.br_3xs,
        position: "absolute",
    },
    analytics: {
        top: 191,
        left: 660,
    },
    image1Icon: {
        width: 455,
        height: 1020,
        top: 0,
        left: 0,
        position: "absolute",
    },
    ocr: {
        left: 1167,
        top: 192,
        width: 430,
        backgroundColor: Color.gray,
    },
    headingBars: {
        borderTopLeftRadius: Border.br_xl,
        borderTopRightRadius: Border.br_xl,
        height: 44,
        top: 196,
        width: 374,
    },
    date: {
        left: 53,
        width: 46,
    },
    transaction: {
        left: 138,
        width: 116,
        height: 31,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        textAlign: "center",
        fontSize: FontSize.size_mid,
        color: Color.lightpink_100,
        top: 202,
        fontFamily: FontFamily.robotoMonoBold,
        fontWeight: "700",
        position: "absolute",
    },
    amount: {
        width: 66,
        left: 305,
    },
    body: {
        top: 242,
        borderBottomRightRadius: Border.br_xl,
        borderBottomLeftRadius: Border.br_xl,
        height: 663,
    },
    horizontalDividersItem: {
        marginTop: 50,
    },
    horizontalDividers: {
        height: 664,
        paddingHorizontal: 0,
        paddingVertical: 28,
        top: 255,
        width: 374,
        left: 28,
        position: "absolute",
        overflow: "hidden",
    },
    verticalDividerL: {
        left: 121,
    },
    verticalDividerR: {
        left: 265,
    },
    text6: {
        top: 0,
    },
    text7: {
        top: 48,
    },
    text8: {
        top: 99,
    },
    text9: {
        top: 150,
    },
    text10: {
        top: 201,
    },
    dates: {
        left: 38,
        height: 214,
        width: 77,
        top: 255,
        position: "absolute",
    },
    spreadsheetView: {
        left: 1674,
        top: 192,
        width: 430,
        backgroundColor: Color.gray,
    },
    dashboardChild: {
        top: 234,
    },
    dashboardItem: {
        top: 394,
    },
    dashboardInner: {
        top: 559,
    },
    rectangleLineargradient: {
        top: 724,
    },
    groupIcon: {
        width: "12.49%",
        top: "29.4%",
        right: "69.37%",
        bottom: "65.24%",
    },
    analytics2: {
        top: 439,
        width: 164,
        height: 54,
    },
    home1: {
        top: 278,
        width: 78,
        height: 42,
    },
    spreadsheet1: {
        top: 602,
        width: 199,
        height: 44,
    },
    developers: {
        top: 767,
        width: 188,
        height: 47,
    },
    vectorIcon: {
        width: "13%",
        top: "46.57%",
        right: "68.86%",
        bottom: "48.07%",
    },
    spreadsheetSvgrepoCom1Icon: {
        top: 599,
    },
    code1115SvgrepoCom1Icon: {
        top: 764,
    },
    dashboard: {
        left: 2181,
    },
    aboutPageChild: {
        top: 208,
        left: 64,
        backgroundColor: "transparent",
    },
    aboutPageItem: {
        top: 755,
        left: 0,
    },
    aboutPageInner: {
        top: 575,
        left: 62,
        backgroundColor: "transparent",
    },
    aboutPageChild1: {
        top: 389,
        left: -46,
        backgroundColor: "transparent",
    },
    ellipseIcon: {
        top: 221,
        left: 78,
    },
    aboutPageChild2: {
        top: 404,
        left: 236,
    },
    aboutPageChild3: {
        top: 590,
        left: 78,
    },
    aboutPageChild4: {
        top: 770,
        left: 224,
    },
    aboutPage: {
        left: 2688,
    },
    homeParent: {
        backgroundColor: "#484853",
        flex: 1,
        width: "100%",
        height: 1404,
        overflow: "hidden",
        borderRadius: Border.br_xl,
    },
});

export default FrameScreen;
