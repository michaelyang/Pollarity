import { StyleSheet } from 'react-native';

import { theme } from "../../index"
const { windowWidth, fontSize, normalize, fontFamily } = theme;

const styles = StyleSheet.create({
    container:{
        marginBottom: 5
    },

    inputContainer:{
        width: windowWidth - 60,
        height: normalize(65),
        fontSize: fontSize.regular + 2,
        paddingHorizontal: 10,
        fontWeight: "300",
        borderBottomColor: "#b3bac4",
    }
});

export default styles;