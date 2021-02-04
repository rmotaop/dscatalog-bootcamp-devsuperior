import React from 'react';
import BaseForm from '../../BaseForm';
import './styles.scss';

const Form = () => {
    return (
        <BaseForm title="Cadastrar um produto">
          <div className="row">
              <div className="col-6">
              <span>Produto</span>
              <input type="text" className="form-control" placeholder="Nome do Produto"/>
              </div>
          </div>

        </BaseForm>
    )
}

export default Form;