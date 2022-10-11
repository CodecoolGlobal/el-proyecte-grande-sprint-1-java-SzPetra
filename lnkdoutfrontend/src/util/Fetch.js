
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
    const token = localStorage.getItem('header');
    let response = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': JSON.parse(token)
        }
    });
    return await response.json();
}
