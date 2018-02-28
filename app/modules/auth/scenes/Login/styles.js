import { StyleSheet } from 'react-native';
import { theme } from "../../index"
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = 'contain';

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#30425a",
    },

    topContainer:{
        flex:1,
        paddingHorizontal:15,
        justifyContent:"center",
        alignItems:"center",
    },

    image:{
        height: 125.5,
        width: 101,
        marginVertical: padding * 4,
        resizeMode
    },

    title:{
        fontSize: fontSize.large + 5,
        lineHeight: fontSize.large + 7,
        fontFamily: fontFamily.bold,
        color:color.white,
        letterSpacing: 1
    },

    subText:{
        color: "#414141",
        fontSize: fontSize.large,
        lineHeight: fontSize.large + 10,
        marginVertical:padding * 2
    },

    logoContainer:{
        paddingBottom: padding * 5,
        justifyContent:"center",
        alignItems:"center",
    },

    forgotText:{
        textAlign:"center",
        color:color.light_grey,
        marginBottom: padding,
        fontSize: fontSize.regular,
        fontFamily: fontFamily.light,
    },
    //===============================

    bottomContainer:{
        paddingVertical: padding * 3,
        shadowColor: "#000000",
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0
        }
    },

    buttonContainer:{
        justifyContent:"center",
        alignItems:"center"
    },

    containerView:{
        width: windowWidth - 40
    },

    socialButton:{
        height: normalize(55),
        borderRadius:4,
        marginTop:0,
        marginBottom:0
    },

    button:{
        backgroundColor: "#FF553F",
        height: normalize(55)
    },

    buttonText:{
        fontSize: fontSize.regular + 2,
        fontFamily: fontFamily.medium
    },

    bottom:{
        flexDirection: "row",
        justifyContent:"center",
        alignItems:"center",
        marginTop: padding * 2
    },

    bottomText:{
        fontSize: fontSize.regular,
        fontFamily: fontFamily.light,
        marginRight: 5,
        color: color.light_grey
    },

    signInText:{
        fontSize: fontSize.regular,
        color: "#FF553F",
        fontFamily: fontFamily.medium
    },

    orContainer:{
        justifyContent:"center",
        alignItems:"center",
        height: 40,
        width: windowWidth
    },

    divider:{
        backgroundColor: '#D0D5DA',
        position:"absolute",
        top:19,
        left: 20,
        right: 20
    },

    orText:{
        backgroundColor: 'white',
        fontSize: fontSize.regular,
        fontFamily: fontFamily.medium,
        color: "#414141",
        paddingHorizontal: padding
    }
});

export default styles;
