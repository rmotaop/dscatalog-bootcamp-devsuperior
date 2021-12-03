import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { tabbar } from "../styles";


interface TabBarProps {
    screen: string;
    setScreen: Function;

    screen1: string;
    setScreen1: Function;

    screen2: string;
    setScreen2: Function;
}

const TabBar: React.FC<TabBarProps> =  (props) => {
   
    const { screen, setScreen, screen1, setScreen1, screen2, setScreen2 } = props;


    function changeScreen(page: string){
        setScreen(page);

    }
    /*function changeScreen1(page1: string){
        setScreen1(page1);

    }
    function changeScreen2(page2: string){
        setScreen2(page2);
    }*/

    return (
        <View style={tabbar.container}>
            
           

            <TouchableOpacity 
                style={[tabbar.pill, screen === "products" && tabbar.pillActive]} 
                onPress={() => changeScreen("products")}
                activeOpacity={0.7}
            >
                 <Text style={[tabbar.pillText, screen === "products" && tabbar.pillTextActive]}>Produtos</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[tabbar.pill, screen === "categories" && tabbar.pillActive]} 
                onPress={() => changeScreen("categories")}

                activeOpacity={0.7}
            >
                 <Text style={[tabbar.pillText, screen === "categories" && tabbar.pillTextActive]}>Categorias</Text>
            </TouchableOpacity>


                <TouchableOpacity 
                style={[tabbar.pill, screen === "users" && tabbar.pillActive]} 
                onPress={() => changeScreen("users")}
                activeOpacity={0.7}
            >
                 <Text style={[tabbar.pillText, screen === "users" && tabbar.pillTextActive]}>Usuários</Text>
            </TouchableOpacity>

            
        
                
        </View>
    )
}

export default TabBar;