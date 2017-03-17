import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "boxSizing": "border-box",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "*:before": {
        "boxSizing": "border-box",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "*:after": {
        "boxSizing": "border-box",
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "body": {
        "background": "#fff",
        "color": "#444",
        "fontFamily": "\"Helvetica Neue\", Arial, serif",
        "fontSize": 22,
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "fontWeight": "200",
        "WebkitFontSmoothing": "antialiased",
        "MozOsxFontSmoothing": "grayscale"
    },
    "h1": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0
    },
    "h2": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0
    },
    "h3": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0
    },
    "h4": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 15,
        "marginLeft": 0
    },
    "nav": {
        "display": "inline",
        "listStyle": "none",
        "marginTop": 1,
        "marginRight": 0,
        "marginBottom": 1,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0
    },
    "nav li": {
        "display": "inline",
        "marginRight": 1
    },
    "p": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "ul": {
        "marginTop": 10,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "skills ul li": {
        "marginLeft": 30
    },
    "a": {
        "color": "#00b8d4",
        "fontWeight": "600",
        "textDecoration": "none",
        "borderBottom": "3px solid #00b8d4",
        "paddingTop": 3,
        "paddingRight": 3,
        "paddingBottom": 3,
        "paddingLeft": 3
    },
    "a:hover": {
        "backgroundColor": "#00b8d4",
        "color": "white"
    },
    "a:active": {
        "position": "relative",
        "top": 1
    },
    "aactive": {
        "borderBottom": "none"
    },
    "content-wrapper": {
        "lineHeight": 1.4,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto",
        "maxWidth": 900,
        "paddingTop": 30,
        "paddingRight": 25,
        "paddingBottom": 30,
        "paddingLeft": 25
    },
    "header": {
        "alignItems": "center",
        "backgroundColor": "#EFEFEF",
        "backgroundImage": "url('bg.jpg')",
        "backgroundPosition": "cover",
        "backgroundRepeat": "no-repeat",
        "backgroundSize": "100% auto",
        "borderTop": "4px solid #e91e63",
        "color": "#FFFFFF",
        "display": "flex",
        "flexDirection": "column",
        "height": 40 * vh,
        "justifyContent": "center",
        "minHeight": 250,
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "position": "relative",
        "textAlign": "center"
    },
    "header:before": {
        "background": "rgba(0, 0, 0, .7)",
        "bottom": 0,
        "content": "' '",
        "display": "block",
        "left": 0,
        "position": "absolute",
        "right": 0,
        "top": 0,
        "zIndex": 1
    },
    "header *": {
        "position": "relative",
        "zIndex": 2,
        "textShadow": "1px 1px 10px black"
    },
    "header h1": {
        "fontSize": 4,
        "fontWeight": "100"
    },
    "header h2": {
        "fontSize": 2.1,
        "fontWeight": "100",
        "marginTop": 5,
        "marginRight": 0,
        "marginBottom": 5,
        "marginLeft": 0
    },
    "skills": {
        "background": "#f00",
        "color": "white"
    },
    "footer": {
        "marginTop": 2,
        "backgroundColor": "#444",
        "color": "#eee"
    },
    "footer h1": {
        "fontSize": 16
    },
    "footer p": {
        "fontSize": 14
    }
});