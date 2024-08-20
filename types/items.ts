export interface Items {
    id: number,
    title: string,
    video: string,
    subtitle: string,
    address: {
        street: string,
        suite: string,
        city: string,
        zipcode: string,
        geo: {
            lat: string,
            lng: string,
        },
    },
    phone: string,
    itemSlug: string,
    company: {
        title: string,
        catchPhrase: string,
        bs: string
    },
    thumbnail: string,
}
