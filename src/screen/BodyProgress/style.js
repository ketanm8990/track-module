import { StyleSheet } from "react-native";

const styleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(231, 231, 235)',
    },
    backgroundColorView: {
        backgroundColor: 'rgb(29, 157, 158)'
    },
    headerView: {
        height: 70,
        backgroundColor: 'rgb(29, 157, 158)',
        justifyContent:'center'
    },
    linerView: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0,
        height: 40,
        width: 200,
    }, 
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginBottom: 10
    },
    headerTitle: {
        flex: 1,
        textAlign: 'center',
        fontSize: 16,
        // fontFamily: 'HKGrotesk-Bold',
        color: 'rgb(255, 255, 255)',
        lineHeight: 22,
        marginRight: 20
    },
    arrowLeftIconStyle: {
        height: 20,
        width: 20,
        tintColor: '#fff'
    },
    subContainer: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: -15,
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