
export const getUsers = () => new Promise((resolve, reject) => {
    try {
        const urlApiUsers = 'http://localhost/api/users';
        const reponse = fetch(urlApiUsers);
        resolve(reponse);
        
    } catch (error) {
        reject(error);
    }
});

export const getProducts = () => new Promise((resolve, reject) => {
    try {
        const urlApiProducts = 'http://localhost/api/products';
        const reponse = fetch(urlApiProducts);
        resolve(reponse);
        
    } catch (error) {
        reject(error);
    }
});
