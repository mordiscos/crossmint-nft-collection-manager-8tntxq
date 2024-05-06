import axios from 'axios';

// Define your API key and endpoint
const API_KEY = 'your_crossmint_api_key';
const BASE_URL = 'https://www.crossmint.com/api/2022-06-09/collections/';

// Define the collection metadata
const collectionData = {
    chain: "polygon",
    metadata: {
        name: "Sample NFT Collection",
        imageUrl: "https://www.crossmint.com/assets/crossmint/logo.png",
        description: "This is a sample NFT collection",
        symbol: "XMINT"
    },
    fungibility: "non-fungible",
    supplyLimit: 1000,
    payments: {
        price: "0.01",
        recipientAddress: "0xYourWalletAddress"
    },
    reuploadLinkedFiles: true
};

// Function to create an NFT collection
async function createCollection() {
    try {
        const response = await axios.post(BASE_URL, collectionData, {
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json'
            }
        });

        console.log('Collection created successfully:', response.data);
    } catch (error) {
        console.error('Failed to create collection:', error.response?.data || error.message);
    }
}

// Call the function to execute the collection creation
createCollection();
