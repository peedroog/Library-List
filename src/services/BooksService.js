import { booksMock } from "../mocks/books";

export function getBooks(){
    return fetch('https://mpa56af7e152431ae8ac.free.beeceptor.com/data')
    .then(response => {
        if (response.ok) {
            return response.json();
        }else{
            return booksMock;
        }
        })
        .then(data => data.library)
}

/*export async function getBooks() {
    try {
        const response = await fetch('https://mpa56af7e152431ae8ac.free.beeceptor.com/data');
        if (!response.ok) {
            throw new Error('Something went wrong');
        }
        const data = await response.json();
        return data.library;
    } catch (error) {
        console.error("Error:", error);
    }
}*/