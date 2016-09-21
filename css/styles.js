import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "course-list": {
        "display": "flex",
        "WebkitBoxOrient": "horizontal",
        "WebkitBoxDirection": "normal",
        "MsFlexDirection": "row",
        "flexDirection": "row",
        "MsFlexFlow": "row wrap",
        "flexFlow": "row wrap",
        "WebkitBoxPack": "justify",
        "MsFlexPack": "justify",
        "justifyContent": "space-between",
        "WebkitBoxAlign": "stretch",
        "MsFlexAlign": "stretch",
        "alignItems": "stretch",
        "paddingTop": 10,
        "paddingRight": 0,
        "paddingBottom": 10,
        "paddingLeft": 0
    },
    "licourse": {
        "width": "30%",
        "border": "0px red solid",
        "minWidth": 150,
        "height": "100%"
    },
    "teacher": {
        "textAlign": "left"
    },
    "fall": {
        "color": "rgba(80, 80, 80, .9)",
        "textAlign": "left"
    }
});