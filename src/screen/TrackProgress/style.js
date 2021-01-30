import { StyleSheet } from "react-native";

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(231, 231, 235)',
    },
    backgroundColorView: {
        backgroundColor: 'rgb(29, 157, 158)'
    },
    headerStyle: {
        height: 115,
        backgroundColor: 'rgb(29, 157, 158)'
    },
    headerTitleView: {
        marginLeft: 20,
        marginTop: 20
    },
    headerTitle: {
        fontSize: 24,
        // fontFamily: 'HKGrotesk-Bold',
        color: 'rgb(255, 255, 255)',
    },
    headerSubTitle: {
        fontSize: 15,
        // fontFamily: 'HKGrotesk-Medium',
        color: 'rgb(255, 255, 255)'
    },
    headerBackgoundImg: {
        height: 115,
        width: 270,
        position: 'absolute'
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: -20,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    flatlistStyle: {
        marginLeft: 20,
        marginRight: 20 
    },
    renderItemView: {
        flex: 1,
        paddingTop: 18,
        paddingBottom: 18,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'rgb(242, 242, 242)',
        backgroundColor: "rgb(255,255,255)",
        flexDirection: "row",
        alignItems: 'center',
        marginBottom: 15
    },
    renderIcon: {
        marginRight: 15,
        height: 44,
        width: 44 
    },
    renderTitle: {
        // fontFamily: "HKGrotesk-Bold",
        fontWeight: 'bold',
        fontSize: 16,
        color: "rgb(34,34,34)",
    },
    renderDesText: {
        // fontFamily: "HKGrotesk-Medium",
        fontSize: 14,
        color: "rgb(85,85,85)",
        marginTop: 1,
    },
    arrow: {
        height: 15,
        width: 15
    }
});

export default styleSheet;