import React, { useState, useEffect} from "react";
import { Text, ScrollView, TouchableOpacity, ActivityIndicator} from "react-native";
import { SearchInput, CategoryCard} from "../../../components";
import { deleteProduct, listCategories } from "../../../services";

import { admin, text } from "../../../styles";

interface CategoriesProps {
    setScreen: Function;
    setProductId: Function;
}

const Categories: React.FC<CategoriesProps> = ( props ) => {
    
    const [search, setSearch ] = useState("");
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    const { setScreen, setProductId } = props;

    async function handleDelete(id: number) {
        setLoading(true);
        const res = await deleteProduct(id);
        fillCategories();
    }

    function handleEdit(id: number) {
        setProductId(id);
        setScreen("editProduct");
    }

    async function fillCategories(){
        setLoading(true);
        const res = await listCategories();

        setCategories(res.data.content);
        setLoading(false);

    }

    useEffect(()=> {
        fillCategories();
    }, []);

    const data = search.length > 0 ? categories.filter(category => category.name.toLowerCase().includes(search.toLowerCase())) : categories;

    return (
        
        <ScrollView contentContainerStyle={admin.container}>

            <TouchableOpacity style={admin.addButton} onPress={() => setScreen("newProduct")}>
                <Text style={text.addButtonText}>Adicionar </Text>
            </TouchableOpacity>
            <SearchInput 
                search={search} 
                setSearch={setSearch} 
                placeholder="Nome da Categoria"
            />
            { loading ? (<ActivityIndicator size="large" />
            ) : ( 
                data.map((category) => {
                    const { id } = category;
                  return (

                  <CategoryCard  
                    {...category} 
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

export default Categories;