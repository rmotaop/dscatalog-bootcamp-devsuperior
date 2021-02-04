import React from 'react';
import { ReactComponent as ArrowIcon } from 'core/assets/images/arrow.svg';
import './styles.scss';
import { generateList } from 'core/utils/list';


type Props = {
    totalpages: number;
    activePage: number;
    onChange: (item: number) => void;
}

const Pagination = ({ totalpages, activePage, onChange }: Props) => {
    const items = generateList(totalpages);
    const previousClass = totalpages > 0 && activePage > 0 ? 'page-active' : 'page-inactive';
    const nextClass = (activePage + 1) < totalpages? 'page-active' : 'page-inactive';

    return (
        <div className="pagination-container">
            <ArrowIcon 
                className={`pagination-previous ${previousClass}`}
                onClick={() => onChange(activePage - 1)}
            />
            
            {items.map(item => (
                <div 
                    key={item}
                    className={`pagination-item ${item === activePage ? 'active' : ''} `}
                    onClick={() => onChange(item )}
                >
                   {item + 1}
                </div>
            ))}
                
            <ArrowIcon 
                className={`pagination-next ${nextClass}`}
                onClick={() => onChange(activePage + 1)}
            />
        </div>
);

}

export default Pagination;