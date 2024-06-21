import { StyleSheet } from "react-native";
import theme from "../../theme";


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.BACKGROUND_COLOR,
    }
});

export default styles;