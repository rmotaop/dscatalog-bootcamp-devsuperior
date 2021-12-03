import React, {useState, useEffect} from "react";
import {View, Text, ScrollView, TouchableOpacity, Image, Modal, TextInput, ActivityIndicator, Alert } from "react-native";
import arrow from "../../../assets/leftArrow.png";
import { createCategory, getCategories } from "../../../services";
import { theme, text } from "../../../styles";
import Toast from 'react-native-tiny-toast';


interface FormCategoryProps {
    setScreen: Function;
};

const FormProduct: React.FC<FormCategoryProps> = ( props ) => {

    const { setScreen } = props;
    const [ loading, setLoading ] = useState(false);
    const [ categories, setCategories ] = useState([])
    const [ showCategories, setShowCategories ] = useState(false);
    const [ category, setCategory ] = useState({
        name: "",

    });

    function handleSave() {
        newCategory();
    }



    async function newCategory() {
        setLoading(true);
        const cat = replaceCategory();
        const data = { 
            ...category,
            
        };
        try {
            await createCategory(data);
            setScreen("categories");
            Toast.showSuccess("categoria criada com sucesso!");
        } catch (res) {
            Toast.show("erro ao salvar...");
        }
        setLoading(false);
        
    }

    function replaceCategory() {
        const cat = categories.find(category => categories.name );
        return cat.id;
    }

    async function loadCategories() {
        setLoading(true);
        const res = await getCategories();
        setCategories(res.data.content);

        setLoading(false);
    }

    useEffect(() => {
        loadCategories();
    }, []);

    return (
        <View style={theme.formContainer}>
            {
                loading ? ( <ActivityIndicator size={"large"}/>
                ) : (
                    <View style={theme.formCard}>
                        <ScrollView>
 
                         <Modal 
                            visible={showCategories} 
                            animationType="fade"
                            transparent={true}
                            presentationStyle="overFullScreen"
                            
                            >
                            <View style={theme.modalContainer}>
                                  <ScrollView contentContainerStyle={theme.modalContent}>
                                      {
                                          categories.map((cat) => (
                                              <TouchableOpacity 
                                                style={theme.modalItem}
                                                key={cat.id}
                                                onPress={() => {
                                                    setCategory({ ...category });
                                                    setShowCategories(!showCategories);
                                                }}
                                              >
                                                <Text>{cat.name}</Text>
                                              </TouchableOpacity>
                                          ))
                                      }
                                  </ScrollView>
                            </View>
                        </Modal>
                        <TouchableOpacity 
                            style={theme.goBackContainer}
                            onPress={() => setScreen("categories")}>
                            <Image source={arrow}/>
                            <Text style={text.goBackText}>Voltar</Text>
                        </TouchableOpacity>

                        <TextInput 
                            placeholder="nome da categoria" 
                            style={theme.formInput}
                            value={category.name}
                            onChangeText={(e) => setCategory({...category, name: e})}
                        />

                        <TouchableOpacity 
                            style={theme.selectInput}
                            onPress={() => setShowCategories(!showCategories)}
                        >
                            <Text 
                                style={category.length === 0 
                                    ? 
                                    {color: "#cecece"}
                                    : 
                                    {color: "#000"}}
                            > 
                             {
                                product.categories.length === 0 ? "Escolha uma categoria" : product.categories
                             }
                            </Text>
                          
                        </TouchableOpacity>

                   <TextInputMask
                        type={"money"}
                        placeholder="Preço"
                        style={theme.formInput}
                        value={product.price}
                        onChangeText={(e) => setProduct({...product, price: e})}
                   
                   />

                        <TouchableOpacity 
                            activeOpacity={0.8} 
                            style={theme.uploadBtn}
                            onPress={selectImage}
                        >
                            <Text style={text.uploadText}>Carregar imagem</Text>
                        </TouchableOpacity>
                        <Text style={text.fileSize}>
                            As imagens dever ser JPG ou PNG e não devem ultrapassar <Text style={text.fileSizeBold}>5 mb</Text>.
                        </Text>
                        {
                            image !== "" && (
                                <TouchableOpacity 
                                    onPress={selectImage} 
                                    activeOpacity={0.9} 
                                    style={{
                                        width: "100%",
                                        height: 150,
                                        borderRadius: 10,
                                        marginVertical: 10,
                                    }}
                                >
                                    <Image 
                                        source={{uri: image}}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 10,
                                        }}
                                    />
                                </TouchableOpacity>
                            )
                        }
                        <TextInput 
                            multiline 
                            placeholder="Descrição" 
                            style={theme.textArea}
                            value={product.description}
                            onChangeText={(e) => setProduct({...product, description: e})}
                        />

                        <View style={theme.buttonContainer}>
                            <TouchableOpacity style={theme.deleteBtn} onPress={() =>{
                                Alert.alert(
                                    "Deseja Cancelar?",
                                    "Os dados inseridos não serão salvos.",
                                    [
                                        {
                                            text: "Voltar",
                                            style: "cancel",
                                        },
                                        {
                                            text: "Confirmar",
                                            onPress: () => setScreen("products"),
                                            style: "default",
                                        }
                                    ]
                                )
                            }}>
                                <Text style={text.deleteText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={theme.saveBtn} onPress={() => handleSave()
                            }>
                                <Text style={text.saveText}>Salvar</Text>
                            </TouchableOpacity>

                        </View>
                        </ScrollView>
                    </View>
                 
                )}
          
        </View>
    );

};

export default FormProduct;