import { StyleSheet } from "react-native";
import theme from "../../../theme.js";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: '3px',
        borderColor: theme.PRIMARY_COLOR,
        backgroundColor: 'black',
        padding: '25px',
        borderRadius: '15px',
        textDecorationLine: 'none',
        marginBottom: '10px',
        height: '50px',
        width: '250px'
    },
    containerHover: {
        backgroundColor: theme.PRIMARY_COLOR,
    },
    text: {
        marginLeft: '10px',
        justifyContent: 'center',
        textAlignVertical: 'center',
        textAlign: 'center',
        color: theme.PRIMARY_COLOR,
    },
    textHover: {
        color: theme.SECONDARY_COLOR,
    },
    icon: {
        width: '50px',
        height: '50px',
    },
});

export default styles;