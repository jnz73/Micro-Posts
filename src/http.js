class EasyHTTP {
    //Make an HTTP GET request

    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    //Make an HTTP POST request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    //Make an HTTP PUT request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    //Make an HTTP DELETE request
    async delete(url) {
        const response = fetch(url, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' }
        });
        const resData = await 'Resource deleted.';
        return resData;
    }
}
export const http = new EasyHTTP();
