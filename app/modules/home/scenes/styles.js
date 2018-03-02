import { StyleSheet } from 'react-native';
import { theme } from "../index";
const { padding, color, fontSize, fontFamily, windowWidth, normalize } = theme;

const resizeMode = 'contain';

const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor: "#30425a",
  },

  topContainer:{
      flexDirection: 'row'
  },

  image:{
    width: 60,
    height: 60,
    backgroundColor: 'white',
    resizeMode,
  },

  icon:{
    marginTop: 5,
    marginLeft: 5,
    width: 90,
    height: 90,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title:{
      fontSize: fontSize.large + 5,
      lineHeight: fontSize.large + 7,
      fontFamily: fontFamily.bold,
      color:color.white,
      letterSpacing: 1,
      textAlign: 'center',
      marginVertical: 10
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

  questionContainer:{
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 15,
    height: '70%',
  },

  questionText: {
    marginTop: 10,
    fontSize: fontSize.large + 3,
    fontFamily: fontFamily.bold,
    textAlign: 'center'
  },

  choice: {
    backgroundColor: 'grey'
  }
});

export default styles;
