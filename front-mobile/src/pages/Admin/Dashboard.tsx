import React, { useState } from "react";

import { View, Text } from "react-native";
import { TabBar } from "../../components";

import Products from "./Products/ListProducts";
import FormProduct from "./Products/FormProduct";
import EditProduct from "./Products/EditProduct";
import Categories from "./Categories/ListCategories";
import Users from "./Users/ListUsers";

interface pagesProps {
    products: String;
    categories: String;
    users: String;
};



const Dashboard: React.FC = () => {
    const [screen, setScreen] = useState({
        products: String,
        categories: String,
        users: String,
    });

    const [ productId, setProductId ] = useState(0);
    const [ categoryId, setCategoryId ] = useState(0);
    const [ userId, setUserId ] = useState(0);
return (
    <View >
        <TabBar 
            screen={screen} 
            setScreen={setScreen}

        />
        {screen === "products" && <Products setScreen={setScreen} setProductId={setProductId}/>}
        {screen === "newProduct" && <FormProduct setScreen={setScreen}/>}
        {screen === "editProduct" && <EditProduct setScreen={setScreen} productId={productId}/>}
        {screen === "categories" && <Categories setScreen={setScreen} setCategoryId={setCategoryId}/>}
        {screen === "users" && <Users setScreen={setScreen} setUserId={setUserId}/>}

    </View>

);

};

export default Dashboard;