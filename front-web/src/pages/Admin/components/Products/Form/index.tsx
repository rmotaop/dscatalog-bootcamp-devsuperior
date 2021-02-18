import { makeRequest } from 'core/utils/request';
import React, { useState } from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';


type FormState = {
    name: string;
    price: string;
    category: string;
    description: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>; 


const Form = () => {
    const [formData, setFormData] = useState<FormState>({
        name: '',
        price: '',
        category: '',
        description: ''
    }); 
 

    const handleOnChange = (event: FormEvent ) => {
            const name = event.target.name;
            const value = event.target.value;

        setFormData(data => ({ ...data, [name]: value }));
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)  => {
        event.preventDefault();
        const payload = {
            ...formData,
            imgUrl:'https://www.bing.com/images/search?view=detailV2&ccid=WLqR7FUB&id=D24C6B5F8CDEA672663EA27FE030FF58D2D62C8B&thid=OIP.WLqR7FUBfELKUfjG64hOngHaHa&mediaurl=https%3a%2f%2fassets-prd.ignimgs.com%2f2020%2f06%2f12%2fplaystation-5-button-02-1591933908407.jpg&exph=1961&expw=1961&q=playstation+5&simid=607999827410092804&ck=F0C95CDFE10C1D00E543F77728CBBB60&selectedIndex=1&qft=+filterui%3aaspect-square&FORM=IRPRST&ajaxhist=0',
         categories: [{ id: formData.category }]
        }
        makeRequest({url: './products', method: 'POST', data: payload})
    }

    return (

       <form onSubmit={handleSubmit}>
            <BaseForm title="Cadastrar um produto">
            <div className="row">
                <div className="col-6">
                <span>Produto</span>
                <input 
                   value={formData.name}
                    name="name"
                    type="text" 
                    className="form-control  mb-4" 
                    onChange={handleOnChange}
                    placeholder="Nome do Produto"
                    />

                <span>Categoria</span>
                <select value={formData.category} className="form-control mb-4" onChange={handleOnChange}
                name="category"
                >
                <option value="1">Livros</option>    
                <option value="3">Computadores</option>
                <option value="2">Eletrônicos</option>            
                </select>

                <span>Preço</span>
                <input 
                   value={formData.price}
                    name="price"
                    type="text" 
                    className="form-control" 
                    onChange={handleOnChange}
                    placeholder="Preço do Produto"
                    />
                </div>
                <div className="col-6">
                    <textarea 
                        name="description" 
                        value={formData.description}
                        onChange={handleOnChange}
                        className="form-control"
                        cols={30} 
                        rows={10}
                        
                    />

                    
                </div>
            </div>

            </BaseForm>

       </form>
    )
}

export default Form;