import { useState, useEffect } from 'react';
import InputField from './inputField';

function HttpRequestComponent() {
    const [message, setMessage] = useState('');
    const [itemId, setItemId] = useState('');
    const [itemData, setItemData] = useState('');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/')
        .then(response => response.json())
        .then(data => setMessage(data.message))
        .catch(error => console.error("Error fetching message", error))
    }, []);

    const handleInputChange = (event) => {
        setItemId(event.target.value)
    }

    const fetchItem = () => {
        if (itemId) {
            fetch(`http://127.0.0.1:8000/items/${itemId}`)
            .then(response => response.json())
            .then(data => setItemData(data))
            .catch(error => console.error("Error fetching item", error));
        }
    }
    return (
        <div>
            <h1>React frontend</h1>
            <p>Message form FastAPI: {message}</p>
            <div>
                <InputField onChange = {handleInputChange} value = {itemId}/>
                <p>id: {itemId}</p>
                <button onClick={fetchItem}>Fetch item {itemId}</button>
                {itemData && <p>Item Data: {JSON.stringify(itemData)}</p>}
            </div>
        </div>
    )
};


export default HttpRequestComponent;