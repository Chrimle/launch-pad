import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        borderStyle: 'solid',
        borderWidth: '5px',
        borderColor: theme.PRIMARY_COLOR,
        backgroundColor: 'black',
        padding: '10px',
        borderRadius: '25px'
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
        height: '50px',
        width: '50px',
    },
});

export default styles;