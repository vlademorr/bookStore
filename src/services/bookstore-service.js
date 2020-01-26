export default class BookStoreService {
    data = [
        {
            id: 1,
            title: 'Harry Potter & The Philosophers Stone',
            author: 'J. K. Rowling',
            price: 10,
            coverImage: 'https://images11.cosmopolitan.ru/upload/gallery/596/596090201c4de0b364001bd49c4a68f3.jpg'
        },
        {
            id: 2,
            title: 'Harry Potter & The Chamber of Secrets',
            author: 'J. K. Rowling',
            price: 20,
            coverImage: 'https://images11.cosmopolitan.ru/upload/gallery/ab7/ab7dd2af0a098008a321098836e42caa.jpg'
        },
        {
            id: 3,
            title: 'Harry Potter & The Prisoner of Azkaban',
            author: 'J. K. Rowling',
            price: 30,
            coverImage: 'https://images11.cosmopolitan.ru/upload/gallery/cec/cec5f5b38b6d03ccc5a524c948dcc9af.jpg'
        },
        {
            id: 4,
            title: 'Harry Potter & The Goblet of Fire',
            author: 'J. K. Rowling',
            price: 40,
            coverImage: 'https://images11.cosmopolitan.ru/upload/gallery/9f7/9f74ec9cf3d0f7c6901ab1f04f9dd33d.jpg'
        },
        {
            id: 5,
            title: 'Harry Potter & The Order of the Phoenix',
            author: 'J. K. Rowling',
            price: 50,
            coverImage: 'https://images11.cosmopolitan.ru/upload/gallery/cdd/cdd8dd865c145ddeb644b2bdae452199.jpg'
        },
        {
            id: 6,
            title: 'Harry Potter & The Half-Blood Prince',
            author: 'J. K. Rowling',
            price: 60,
            coverImage: 'https://images11.cosmopolitan.ru/upload/gallery/72d/72d3ae82a73659a60f395c7c6b3ad2e0.jpg'
        },
        {
            id: 7,
            title: 'Harry Potter & The Deathly Hallows',
            author: 'J. K. Rowling',
            price: 60,
            coverImage: 'https://images11.cosmopolitan.ru/upload/gallery/212/21204f3da38c70fada5ea63a013a8ebf.jpg'
        },
        {
            id: 8,
            title: 'The Cuckoo’s Calling',
            author: 'Robert Galbraith',
            price: 60,
            coverImage: 'https://miro.medium.com/max/645/1*HJNe4pI2HsRpkfIc_tPv9A.jpeg'
        },
        {
            id: 9,
            title: 'The Silkworm',
            author: 'Robert Galbraith',
            price: 60,
            coverImage: 'https://i1.rozetka.ua/goods/8547263/60036611_images_8547263051.jpg'
        }
    ];
    getBooks(){
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(this.data)
            }, 750);
        });
    }
}