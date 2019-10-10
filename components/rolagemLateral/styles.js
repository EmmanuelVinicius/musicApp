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
    icon: {
        width: 90,
        height: 90,
        position: 'absolute',
        top: 10,
        right: 10,
    },
    iconCard: {
        display: 'flex',
        padding: 6,
        elevation: 2,
        backgroundColor: "#009",
        marginHorizontal: 6,
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
    },
    card: {
        padding: 6,
        elevation: 2,
        backgroundColor: "#900",
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
    },
    textContent: {
        flex: 1,
    },
    cardtitle: {
        fontSize: 22,
        marginTop: 5,
        fontWeight: "bold",
    },
    cardDescription: {
        fontSize: 12,
        color: "#444",
    },
});

module.exports = styles;