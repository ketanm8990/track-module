import { StyleSheet } from 'react-native';
import Colors from './Colors';

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 55
    },
    headerTitle: {
        fontSize: 20,
        color: Colors.White,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    backgroundPrimary: {
        backgroundColor: Colors.Primary
    },
    flexOne: {
        flex: 1
    },
    flexRow: {
        flexDirection: 'row'
    },
    flexColumn: {
        flexDirection: 'column'
    },
    centerAlign: {
        alignItems: 'center'
    },
    centerJustify: {
        justifyContent: 'center'
    },
    shadow: {
        backgroundColor: Colors.White,
        shadowOffset: { width: 0, height: 0 },
        shadowColor: 'grey',
        shadowOpacity: 0.2,
        shadowRadius: 10
    },
});

export default styles;
