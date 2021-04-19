import React from 'react';
import { makePrivateRequest } from 'core/utils/request';
import { useForm } from 'react-hook-form';
import BaseForm from '../../BaseForm';
import './styles.scss';



type FormState = {
    name: string;
    price: string;
    description: string;
    imageUrl: string;
}

const Form = () => {
    const { register, handleSubmit, errors } = useForm<FormState>();

    const onSubmit = (data: FormState) => {
        makePrivateRequest({ url: '/products', method: 'POST', data })
    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <BaseForm title="Cadastrar um produto">
                <div className="row">
                    <div className="col-6">
                        <div className="margin-botton-30">
                            <input
                                ref={register({
                                    required: "campo obrigatório",
                                    minLength: {value: 5, message: 'O campo deve ter no mínimo 5 caracteres'},
                                    maxLength: {value: 60, message: 'O campo deve ter no máximo 60 caracteres'}
                                 })}
                                name="name"
                                type="text"
                                className="form-control input-base"
                                placeholder="Nome do Produto"
                            />
                            {errors.name && (
                                <div className="invalid-feedback d-block ">
                                    {errors.name.message}
                                </div>
                            )}
                        </div>

                        <div className="margin-botton-30">
                            <input
                                ref={register({
                                    required: "campo obrigatório",
                                    min: {value: 0, message: 'O preço não pode ser negativo'}
                                
                                })}
                                name="price"
                                type="number"
                                className="form-control input-base"
                                placeholder="Preço do Produto"
                            />
                            {errors.price && (
                                <div className="invalid-feedback d-block ">
                                    {errors.price.message}
                                </div>
                            )}

                        </div>
                        
                        <div className="margin-botton-30">
                            <input
                                ref={register({ required: "campo obrigatório" })}
                                name="imageUrl"
                                type="text"
                                className="form-control input-base"
                                placeholder="Imagem do Produto"
                            />
                                {errors.imageUrl && (
                                <div className="invalid-feedback d-block ">
                                    {errors.imageUrl.message}
                                </div>
                                )}
                        </div>              
               
                    </div>
                    <div className="col-6">
                        <textarea
                            ref={register({ required: "campo obrigatório" })}
                            name="description"
                            className="form-control input-base"
                            placeholder="Descrição"
                            cols={30}
                            rows={10}
                        />
                             {errors.description && (
                                <div className="invalid-feedback d-block ">
                                    {errors.description.message}
                                </div>
                             )}
                    </div>
                </div>

            </BaseForm>

        </form>
    )
}

export default Form;