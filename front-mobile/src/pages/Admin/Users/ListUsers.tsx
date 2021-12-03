import React, { useState, useEffect} from "react";
import { Text, ScrollView, TouchableOpacity, ActivityIndicator} from "react-native";
import { SearchInput, UserCard} from "../../../components";
import { deleteUser, getUsers } from "../../../services";

import { admin, text } from "../../../styles";

interface ProductsProps {
    setScreen: Function;
    setProductId: Function;
}

const Users: React.FC<ProductsProps> = ( props ) => {
    
    const [search, setSearch ] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    const { setScreen, setProductId } = props;

    async function handleDelete(id: number) {
        setLoading(true);
        const res = await deleteUser(id);
        fillUsers();
    }

    function handleEdit(id: number) {
        setProductId(id);
        setScreen("editProduct");
    }

    async function fillUsers(){
        setLoading(true);
        const res = await getUsers();

        setUsers(res.data.content);
        setLoading(false);

    }

    useEffect(()=> {
        fillUsers();
    }, []);

    const data = search.length > 0 ? users.filter(user => user.firstName.toLowerCase().includes(search.toLowerCase())) : users;

    return (
        <ScrollView contentContainerStyle={admin.container}>
            <TouchableOpacity style={admin.addButton} onPress={() => setScreen("newProduct")}>
                <Text style={text.addButtonText}>Adicionar </Text>
            </TouchableOpacity>
            <SearchInput 
                search={search} 
                setSearch={setSearch} 
                placeholder="Nome do usuário"
            />
            { loading ? (<ActivityIndicator size="large" />
            ) : ( 
                data.map((user) => {
                    const { id } = user;
                  return (

                  <UserCard  
                    {...user} 
                    key={id} 
                    role="admin"
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                  />
             )})
             )}
        </ScrollView>

    )
}

export default Users;