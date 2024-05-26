import { useState } from 'react';
import PrioItem from "./PrioItem";
import { useStore } from '../../data/store.js';

const PrioList = () => {
    const todos = useStore(state => state.todos);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = todos.filter(item => {
        return item.text.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return (
        <div className="prio-list">
            <h2> Vad ska jag göra nu? </h2>
            <div className="list-container">
                <input
                    type="search"
                    placeholder="Filtrera uppgifter"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />

                <div className="prio-items">
                    {filteredItems.map((item, index) => (
                        <PrioItem key={item.id} item={item} num={index + 1} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PrioList;