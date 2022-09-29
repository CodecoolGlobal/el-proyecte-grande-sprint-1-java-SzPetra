
export async function postData(url='', data={}){
    return await fetch(url, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        method: 'POST',
        body: JSON.stringify(data)
    })
}

export const getData = async (url) => {
    const token = localStorage.getItem('Authorization');
    let response = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': {token}
        }
    });
    return await response.json();
}
