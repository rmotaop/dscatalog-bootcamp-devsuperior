import React, {useState, useEffect} from "react";
import { 
    View, 
    Text, 
    ScrollView, 
    TouchableOpacity, 
    Image,
    Modal,
    TextInput, 
    ActivityIndicator, 
    Alert } 
    from "react-native";
import { updateCategory, getCategory, getCategories } from "../../../services";
import { theme, text } from "../../../styles";
import arrow from "../../../assets/leftArrow.png";
import Toast from 'react-native-tiny-toast';

interface EditCategoryProps {
    setScreen1: Function;
    categoryId: number;
};

const EditProduct: React.FC<EditCategoryProps> = ( props ) => {

    const { setScreen1, categoryId } = props;
    const [ loading, setLoading ] = useState(false);
    const [ categories, setCategories ] = useState([])
    const [ showCategories, setShowCategories ] = useState(false);
    const [ category, setCategory ] = useState({
        name: "",

    });
    async function handleSave() {
        setLoading(true);

        const data = { 
            ...category,
        };

        try {
            await updateCategory(data);
            setScreen1("categories");
            Toast.showSuccess("Categoria atualizada com sucesso!");
        } catch (res) {
            Toast.show("erro ao salvar...");
        }
        setLoading(false);
        
    }



    async function loadCategory() {
        setLoading(true);
        const res = await getCategory(categoryId);
        setCategory(res.data);
        setLoading(false);
    }

    useEffect(() => {
        loadCategory();
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
                                          categories && categories.map((cat) => {
                                              const {id, name } = cat;
                                              return (
                                              <TouchableOpacity 
                                                style={theme.modalItem}
                                                key={id}
                                                onPress={() => {
                                                    setCategory({...category  });
                                                    setShowCategories(!showCategories);
                                                }}
                                              >
                                                <Text>{name}</Text>
                                              </TouchableOpacity>
                                          )})
                                      }
                                  </ScrollView>
                            </View>
                        </Modal>
                        <TouchableOpacity 
                            style={theme.goBackContainer}
                            onPress={() => setScreen1("categories")}
                        >
                            <Image source={arrow}/>
                            <Text style={text.goBackText}>Voltar</Text>
                        </TouchableOpacity>

                        <TextInput 
                            placeholder="nome da categoria" 
                            style={theme.formInput}
                            value={category.name}
                            onChangeText={(e) => {
                                setCategory({...category, name: e})
                                }
                            }
                        />

                        <TouchableOpacity 
                            style={theme.selectInput}
                            onPress={() => setShowCategories(!showCategories)}
                        >
                            <Text>
                                {category.length > 0 && category.name}
                            </Text>
                          
                        </TouchableOpacity>

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
                                            onPress: () => setScreen1("categories"),
                                            style: "default",
                                        }
                                    ]
                                )
                            }}>
                                <Text style={text.deleteText}>Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity 
                                style={theme.saveBtn} 
                                onPress={() => handleSave()
                                 }
                            >
                                <Text style={text.saveText}>Salvar</Text>
                            </TouchableOpacity>

                        </View>
                        </ScrollView>
                    </View>
                 
                )}
          
        </View>
    );

};

export default EditProduct;