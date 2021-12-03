import React from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { text, theme } from "../styles";


interface ProductProps {
    id: number;
    name: String;
    role?: string;
    handleDelete: Function;
    handleEdit: Function;
}

const ProductCard: React.FC<ProductProps>  = ({
        id, 
        name, 
        role,
        handleDelete,
        handleEdit,
        }) => {
    const navigation = useNavigation();
    return  (
        <TouchableOpacity 
            style={theme.productCard} 
            onPress={() => role ? "" : navigation.navigate("ProductDetails", {id})}
        >
           
            <View style={theme.productDescription}>
                <Text style={text.productName}>{name}</Text>
           

            {
                role === "admin" && (
                    <View style={theme.buttonContainer}>
                        <TouchableOpacity 
                            style={theme.deleteBtn}
                            onPress={() => handleDelete(id)}
                        >
                            <Text style={text.deleteText}>Excluir</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            style={theme.editBtn}
                            onPress={() => handleEdit(id)}
                        >
                            <Text style={text.editText}>Editar</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
             </View>

        </TouchableOpacity>
    );

};

export default ProductCard;