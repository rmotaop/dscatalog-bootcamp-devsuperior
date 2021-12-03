import React, { useState, useEffect} from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import menu from "../assets/menu.png";
import { doLogout, isAuthenticated } from "../services/auth";
import { nav, text } from "../styles";

const NavBar: React.FC = () => {
    const [ show, setShow ] = useState(false);
    const [authenticated, setAuthenticated] = useState(false);
    const navigation = useNavigation();
    const route = useRoute();

    function navigate(path: any) {
        if (path) {
            setShow(false);
            navigation.navigate(path);
        }
        setShow(false);
    }

    async function logged() {
        const result = await isAuthenticated();
    
        result ? setAuthenticated(true) : setAuthenticated(false);
      }

    function logout(){
        doLogout();
        navigation.navigate("Login");
    }

    useEffect(() => {
        logged();
      }, [])

    return (
        <>
            <>      
                <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={nav.drawer} 
                    onPress={()=> setShow(!show)}
                >
                <Image source={menu}/>

                </TouchableOpacity>
                    {show ? (
                        <View style={nav.options}>
                            <TouchableOpacity 
                                style={nav.option } 
                                onPress={() => navigate("Home")}
                            >
                                <Text 
                                    style={[
                                    nav.textOption, 
                                    route.name === "Home" ? nav.textActive : null, 
                                    ]}
                                > 
                                    Home 
                                </Text> 
                            </TouchableOpacity >

                            <TouchableOpacity 
                                style={nav.option}
                                onPress={() => navigate("Catalog")}
                            > 
                                <Text style={[
                                    nav.textOption, 
                                    route.name === "Catalog" ? nav.textActive : null,
                                    ]}
                                > 
                                    Catalogo 
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={nav.option}
                                onPress={() => navigate("Login")}
                            >
                                <Text style={[
                                    nav.textOption, 
                                    route.name === "ADM" ? nav.textActive : null,
                                    ]}
                                > 
                                    ADM 
                                </Text>
                            </TouchableOpacity>


                            <TouchableOpacity 
                                style={nav.option}
                                onPress={() => navigate("Dashboard")}
                            >
                                <Text style={[
                                    nav.textOption, 
                                    route.name === "Dashboard" ? nav.textActive : null,
                                    ]}
                                > 
                                    DASHBOARD 
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity 
                                style={nav.logoutBtn}
                                onPress={() => logout()}
                            >
                                <Text style={[
                                    nav.textOption, 
                                    
                                    ]}
                                > 
                                    SAIR 
                                </Text>
                            </TouchableOpacity>
                                             
                          </View> 
                    ): null}
                </>
            
        
      </>
    )            
};


export default NavBar;