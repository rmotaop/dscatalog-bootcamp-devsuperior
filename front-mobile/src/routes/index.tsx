import React from "react"
import {createStackNavigator} from '@react-navigation/stack'
import { Text } from "react-native";
import { Home, Catalog, ProductDetails, Login, Dashboard, Categories, Users } from '../pages';


import { NavBar } from "../components";
import { colors, nav } from "../styles";


const Stack = createStackNavigator();

const HeaderText: React.FC = () => <Text style={nav.leftText}>DS Catalog</Text>;



const Routes: React.FC = () => {

    return (
        <Stack.Navigator
            screenOptions={{ 
                headerTitle: " ",
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerLeft: () => <HeaderText/> ,
                headerRight: () => <NavBar/>,
            }}
        > 
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Catalog" component={Catalog} />
            <Stack.Screen name="ProductDetails" component={ProductDetails}/>
            <Stack.Screen name="Login" component={Login}/>
            {/* Dashboard administrativo*/}
            <Stack.Screen name="Dashboard" component={Dashboard}/>
            {/*<Stack.Screen name="Categories" component={Categories}/>
            <Stack.Screen name="Users" component={Users}/>*/}

        </Stack.Navigator>
    );
};

export default Routes;