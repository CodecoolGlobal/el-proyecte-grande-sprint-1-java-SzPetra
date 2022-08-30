
export async function postData(url='', data={}){
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    return await response.json();
}

export const getData = async (url) => {
    let response = await fetch(url);
    return await response.json();
}
