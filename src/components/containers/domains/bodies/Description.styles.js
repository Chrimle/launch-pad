import { StyleSheet } from "react-native";
import theme from "../../../../assets/theme";


const styles = StyleSheet.create({
    text: {
        backgroundColor: '#353535',
        marginBottom: '15px',
        marginHorizontal: '25px',
        paddingHorizontal: '30px',
        paddingVertical: '15px',
        fontFamily: 'Caveat',
        fontSize: '3vmin',
        textAlign: 'left',
        borderWidth: '1px',
        borderColor: theme.PRIMARY_COLOR,
        borderRadius: '15px',
        color: 'white',
    },
});

export default styles;