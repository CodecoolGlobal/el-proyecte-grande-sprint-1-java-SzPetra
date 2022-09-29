
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
    let response = await fetch(url);
    return await response.json();
}
