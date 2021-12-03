import { StyleSheet, Dimensions } from "react-native";
import { color } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;

        const colors = {
            white: "#FFFFFF",
            lightGray: "#F2F2F2",
            mediumGray: "#9E9E9E",
            darkGray: "#263238",
            borderGray: "#F1F1F1",
            black: "#000000",
            primary: "#407BEE",
            secondary: "#33569B",
            bluePill: "#407BFF61",
            red: "#DF5753",

        };

//TEXT //
        const text = StyleSheet.create({
            regular: {
                fontSize: 16,
                fontWeight: "400",
                textAlign: "center",
                color: colors.mediumGray,

            },
            bold: {
                fontSize: 26,
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: 15,
                color: colors.darkGray,
            },
            primaryText: {
                fontSize: 16,
                fontWeight: "bold",
                textTransform: "uppercase",
                color: colors.white,
                marginLeft: 17,
            },

            productName: {
                fontSize: 16,
                fontWeight: "bold",
            },

            currency: {
                fontSize: 16,
                fontWeight: "300",
                color: colors.mediumGray,
            },

            productPrice: {
                fontSize: 30,
                color: colors.primary,
                fontWeight: "bold",
                
            },

            goBackText: {
                fontSize: 18,
                fontWeight: "bold",
                textTransform: "uppercase",
                color: colors.darkGray,
                marginLeft: 16,

            },
            productDetailsName: {
                fontSize: 30,
                fontWeight: "bold",
                marginTop: 10,
                color: colors.darkGray,
            },

            productDescription: {
                fontSize: 16,
                fontWeight: "400",
                color: colors.mediumGray,

            },

            loginTitle: {
                fontSize: 30,
                color: colors.darkGray,
                fontWeight: "400",
                textTransform: "uppercase",
                marginBottom: 50,

            },

            logoutText: {
                color: colors.white,
            },

            addButtonText: {
                color: colors.white,
                textTransform: "uppercase",
                fontWeight: "bold",
            },

            deleteText:{
                textTransform: "uppercase",
                fontWeight: "bold",
                color: colors.red,
            },

            saveText:{
                textTransform: "uppercase",
                fontWeight: "bold",
                color: colors.white,
            },


            editText: {        
                textTransform: "uppercase",
                fontWeight: "bold",
                color: colors.mediumGray,

            },

            uploadText: {
                color: colors.white,
                textTransform: "uppercase",
                fontWeight: "bold",
            },

            fileSize: {
                color: colors.primary,
                fontSize: 10,
                fontWeight: "300",
                marginVertical: 5,
                padding: 2,
            },
            fileSizeBold: {
                fontWeight: "bold",
            },

            userName: {
                fontSize: 16,
                fontWeight: "400",
                padding: 3,
            },
            emailName: {
                fontSize: 16,
                fontWeight: "400",
                padding: 3,
            },

            campInfo: {
                color: colors.mediumGray,
                fontSize: 12,
                padding: 3,
            },

        });

//THEME //

        const theme = StyleSheet.create({
            container: {
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
            },

            card: {
                width: "100%",
                height: "100%",
                backgroundColor: colors.white,
                borderRadius: 20,
                shadowColor: colors.black,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.35,
                shadowRadius: 3.84,
                alignItems: "center",
                justifyContent: "space-around",
            },

            draw: {
                width: 313,
                height: 225,
            },

            textContainer: {
                paddingHorizontal: 20,
                
            },
            primaryButton: {
                width: 290,
                height: 50,
                backgroundColor: colors.primary,
                borderRadius: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                
            },
            arrowContainer: {
                width: 50,
                height: 50,
                backgroundColor: colors.secondary,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                alignItems: "center",
                justifyContent: "center",

            },

    // Product Card
            scrollContainer: {
                padding: 10,
            },

            productCard: {
                width: "100%",
                backgroundColor: colors.white,
                borderRadius: 10,
                shadowColor: colors.black,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                textShadowRadius: 3.84,
                alignItems: "center",
                justifyContent: "space-around",
                marginVertical: 10,

            },

            productDescription: {
                width: "100%",
                padding: 20,
                borderTopColor: colors.lightGray,
                borderTopWidth: 1,    
            },

            priceContainer: {
                width: "90%",
                flexDirection: "row",
                marginTop: 10,
                
            },
            productImg: {
                width: 140,
                height: 140,
                marginTop: 16,
            },
    //User

            userData: {
                width: "100%",
                padding: 20,
                borderTopColor: colors.lightGray,
                borderTopWidth: 1,    
            },
            userInfo: {
                flexDirection: "row",

            },
  


    //Search Input

            inputContainer: {
                width: "100%",
                height: 60,
                backgroundColor: colors.white,
                borderRadius: 10,
                shadowColor: colors.black,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                textShadowRadius: 3.84,
                alignItems: "center",
                marginVertical: 12.5,
                paddingVertical: 10,

            },

            searchInput: {
                width: "90%",
                height: 40,
                borderBottomWidth: 0.5,
                borderBottomColor: colors.borderGray,
            },

    // Product Details

            detailsContainer: {
                backgroundColor: colors.lightGray,
                padding: 20,
            },

            detailCard: {
                width: "100%",
                height: "100%",
                backgroundColor: colors.white,
                borderRadius: 20,
                shadowColor: colors.black,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                justifyContent: "space-around",
                padding: 20,
            },

            goBackContainer: {
                width: 290,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
                marginVertical: 10,
            },

            productImageContainer: {
                width: "100%",
                borderWidth: 1,
                borderColor: colors.lightGray,
                alignItems: "center",
                borderRadius: 20,
            },

            productImage: {
                width: 220,
                height: 220,    
            },

            scrollTextContainer: {
                marginVertical: 20,
                padding: 10,
                borderWidth: 0.5,
                borderRadius: 8,
                borderColor: colors.lightGray,
                

            },

    // Login Page

            loginCard: {
                width: "100%",
                height: "100%",
                backgroundColor: colors.white,
                borderRadius: 20,
                shadowColor: colors.black,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.35,
                shadowRadius: 3.84,
                alignItems: "center",
                justifyContent: "center",
            },

            form: {
                marginVertical: 10,
            },

            passwordGroup: {
                flexDirection: "row",
                alignItems: "center",
                marginVertical: 25,
            },

            textInput: {
                width: 290,
                height: 50,
                borderWidth: 1,
                borderColor: colors.mediumGray,
                borderRadius: 10,
                padding: 10,
            },

            toggle: {
                margin: -40,
            },

            buttonContainer: {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
            },

            deleteBtn: {
                width: "48%",
                height: 40,
                borderWidth: 1,
                borderColor: colors.red,
                marginVertical: 10,
                alignItems: "center",
                justifyContent:"center",
                borderRadius: 10,

            },

            editBtn: {
                width: "48%",
                height: 40,
                borderWidth: 1,
                borderColor: colors.mediumGray,
                marginVertical: 10,
                alignItems: "center",
                justifyContent:"center",
                borderRadius: 10,

            },

    // Admin Products Form

            formContainer: {
                width: deviceWidth,
                padding: 20,

            },

            formCard: {
                width: "100%",
                height: "100%",
                backgroundColor: colors.white,
                borderRadius: 20,
                padding: 20,
                shadowColor: colors.black,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                alignItems: "center",
                justifyContent: "space-around",

            },

            modalContainer: {
                width: deviceWidth,
                height: deviceHeight,
                backgroundColor: "#00000033",
                alignItems: "center",
                justifyContent: "center",
            },

            modalContent: {
                width: 305,
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50%",
                backgroundColor: colors.white,
                borderRadius: 20,
                padding: 20,
                shadowColor: colors.black,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,


            },

            modalItem: {
                width: "100%",
                backgroundColor: colors.lightGray,
                padding: 10,
                marginVertical: 5,
                borderRadius: 5,
            },

            formInput: {
                width: "100%",
                maxWidth: "100%",
                height: 50,
                borderWidth: 1,
                borderColor: colors.mediumGray,
                borderRadius: 10,
                padding: 10,
                marginVertical: 15,
            },

            textArea:{
                width: "100%",
                maxWidth: "100%",
                height: 200,
                borderWidth: 1,
                borderColor: colors.mediumGray,
                borderRadius: 10,
                padding:10,
                marginVertical: 15,
                textAlignVertical:'top',
            },

            selectInput: {
                width: "100%",
                maxWidth: "100%",
                height: 50,
                borderWidth: 1,
                color: colors.red,
                borderColor: colors.mediumGray,
                borderRadius: 10,
                padding: 10,
                justifyContent: "center",
            },

            uploadBtn: {
                width: "100%",
                maxWidth: "100%",
                height: 40,
                backgroundColor: colors.mediumGray,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
            },

            saveBtn: {
                width: "48%",
                height: 40,
                borderWidth: 1,
                backgroundColor: colors.primary,
                marginVertical: 10,
                alignItems: "center",
                justifyContent:"center",
                borderRadius: 10,

            },

        });

//NAV//
        const nav = StyleSheet.create({
            leftText: {
                color: colors.white,
                fontWeight: "bold",
                marginLeft: 10,
            },

            drawer: {
                marginRight: 0,
                paddingRight: 10,
                
            },

            options: {
                width: deviceWidth,
                height: 190,
                backgroundColor: colors.primary,
                marginTop: 200,
                marginRight: 0,
                padding: 20,
                justifyContent: "space-between",
                borderRadius: 8,
            },

            option: {
                paddingVertical: 5,
                
            },

            textOption: {
                color: colors.lightGray,
                textTransform: "uppercase",
            },

            textActive: {
                color: colors.white,
                fontWeight: "bold",
            },

            logoutBtn: {
                width: 80,
                height: 30,
                marginTop: 10,
                borderWidth: 1,
                borderColor: colors.white,
                backgroundColor: colors.secondary,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 20,
            },
        });
//TABBAR//
        const tabbar = StyleSheet.create({
            container: {
                width: deviceWidth,
                height: 80,
                backgroundColor: colors.white,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
            },

            pill: {
                padding: 15,
                backgroundColor: colors.lightGray,
                borderRadius: 30,
            },

            pillActive: {
                backgroundColor: colors.bluePill,
            },
            pillText: {
                fontWeight: "bold",
                color: colors.mediumGray,
            },

            pillTextActive: {
                color: colors.primary,
            },
        });
//ADMIN //
        const admin = StyleSheet.create({
            container:{
                paddingBottom: 90,
                padding: 10,
                alignItems: "center",
                height: "auto",
            },

            addButton:{
                width: "100%",
                height: 40,
                backgroundColor: colors.primary,
                margin: 10,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
            },

        });

        export { colors, theme, text, nav, tabbar, admin };