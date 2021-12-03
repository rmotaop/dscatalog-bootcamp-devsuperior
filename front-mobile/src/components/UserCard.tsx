import React from "react";
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { text, theme } from "../styles";


interface UserProps {
    id: number;
    firstName: String;
    lastName: String,
    email: String,
    role?: string;
    handleDelete: Function;
    handleEdit: Function;
}

const ProductCard: React.FC<UserProps>  = ({
        id, 
        firstName,
        lastName,
        email, 
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
           
            <View style={theme.userData}>
                <Text style={text.campInfo}> Nome  / email</Text>
                <View style={theme.userInfo}>
                    <Text style={text.userName}> {firstName }</Text>
                    <Text style={text.userName}> {lastName }</Text>
                    <Text style={text.userName}> / </Text>
                    <Text style={text.emailName}> {email }</Text>
                </View>

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