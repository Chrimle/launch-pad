import { StyleSheet } from "react-native";
import theme from "../../../../theme";

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-start',
        alignItems: 'center',
        borderBottomStyle: 'solid',
        borderBottomWidth: '1px',
        borderBottomColor: theme.PRIMARY_COLOR,
        padding: '10px',
        margin: '5px',
        marginTop: '15px',
        textDecorationLine: 'none',
    },
    containerHover: {
        backgroundColor: theme.PRIMARY_COLOR,
    },
    text: {
        flex: 1,
        textAlignVertical: 'center',
        textAlign: 'center',
        color: 'white',
        whiteSpace: 'nowrap'
    },
    textHover: {
        color: theme.SECONDARY_COLOR,
    },
});

export default styles;