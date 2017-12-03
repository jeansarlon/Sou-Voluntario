import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "jk-rating-stars-container button": {
        "cursor": "pointer"
    },
    "jk-rating-stars-container": {
        "display": "flex"
    },
    "jk-rating-stars-container button material-icons": {
        "fontSize": 30
    },
    "jk-rating-stars-container star-button": {
        "textShadow": "0.06em .04em #000000"
    },
    "jk-rating-stars-container star-buttonstar-on material-icons": {
        "color": "#EE9A00"
    },
    "jk-rating-stars-container star-buttonstar-off material-icons": {
        "color": "#ddd"
    },
    "jk-rating-stars-container[read-only=\"true\"] button": {
        "cursor": "default"
    }
});