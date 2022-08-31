
export async function postData(url='', data={}){
    const response = await fetch(url, {
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        },
        method: 'POST',
        body: JSON.stringify(data)
    }).then((response) => {
        if (response.ok) {
            console.log(response);
        }
    });
}

export const getData = async (url) => {
    let response = await fetch(url);
    return await response.json();
}
