import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 2.5;
const CARD_WIDTH = CARD_HEIGHT + 50;

const styles = StyleSheet.create({
    scrollView: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 0,
    },
    endPadding: {
        paddingRight: width - CARD_WIDTH,
    },
    iconCard: {
        display: 'flex',
        padding: 6,
        elevation: 2,
        marginHorizontal: 6,
        height: CARD_HEIGHT,
        width: CARD_WIDTH / 2,
        overflow: "hidden",
    },
    card: {
        padding: 6,
        elevation: 2,
        backgroundColor: "#c0e8f9",
        marginHorizontal: 6,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOpacity: 0.8,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
        borderColor: '#b8d3d1',
        borderWidth: 2
    },
    textContent: {
        flex: 1,
    },
    cardtitle: {
        fontSize: 26,
        marginTop: 5,
        color: '#1a281f',
        fontWeight: "bold",
    },
    cardDescription: {
        fontSize: 15,
        color: "#1a281f",
    },
});

module.exports = styles;