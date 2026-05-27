import { useState } from 'react';

export default function ProductRequest() {
    const [formData, setFormData] = useState({
        productName: '',
        description: '',
        email: '',
        quantity: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        console.log('Attempting to send email...');

        let data;
        data = {
            to: formData.email,
            subject: `Confirmation of Product Request: ${formData.productName}`,
            text: `Product Name: ${formData.productName}\nDescription: ${formData.description}\nQuantity: ${formData.quantity}\nEmail: ${formData.email}`,
        };
        document.getElementById('submit-button').disabled = true;
        document.getElementById('submit-button').style.backgroundColor = 'lightgray';
        sendEmail(data);
        document.getElementById('submit-button').disabled = false;
        document.getElementById('submit-button').style.backgroundColor = '#007bff';
    };

    const sendEmail = (data) => {
        fetch('https://ding-a-ling-website-backend.onrender.com/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                console.log('Email sent:', result);
                alert('Product request submitted successfully!');
                setFormData({
                    productName: '',
                    description: '',
                    email: '',
                    quantity: '',
                });
            })
            .catch(error => {
                console.error('Error sending email:', error)
                alert('There was an error submitting your request. Backend server is down.')
            });
    }

    return (
        <div style={{ width: 'auto', maxWidth: '500px', margin: 'auto', padding: '10px', justifyContent: 'center', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
            <h1>Product Request</h1>
            <p>Time to complete varies on item and quantity.</p>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="productName">Product Name:</label>
                    <input
                        type="text"
                        placeholder='Custom Knife'
                        id="productName"
                        name="productName"
                        value={formData.productName}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        placeholder='3 inch blade, oak handle, brass spacer roughly .5 inches in length'
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        style={{ width: '100%', minHeight: '75px', maxHeight: '200px', padding: '8px', marginTop: '5px', boxSizing: 'border-box', resize: 'vertical' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        placeholder='example123@gmail.com'
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
                    />
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="quantity">Quantity:</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        min="1"
                        max="99"
                        required
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', marginTop: '5px', boxSizing: 'border-box' }}
                    />
                </div>

                <button id="submit-button" type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Submit Request
                </button>
            </form>
        </div>
    );
}