export const login = (data) => new Promise((resolve, reject) => {
    try {
        const urlApiLogin = 'http://localhost/api/login';
        const reponse = fetch(urlApiLogin, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        resolve(reponse);
        
    } catch (error) {
        reject(error);
    }
});