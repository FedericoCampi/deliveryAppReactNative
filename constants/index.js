export const categories = [
    {
        id: 1,
        name: 'Sushi',
        image: require('../assets/images/sushi1.jpg'),
    },
    {
        id: 2,
        name: 'Camarones',
        image: require('../assets/images/Camarones.jpg'),
    },
    {
        id: 3,
        name: 'Arroz frito',
        image: require('../assets/images/arrozFrito.jpg'),
    },
    {
        id: 4,
        name: 'Ramen',
        image: require('../assets/images/ramen.jpg'),
    },
    {
        id: 5,
        name: 'ChowMein',
        image: require('../assets/images/chowMein.jpg'),
    },
    {
        id: 6,
        name: 'Dimsum',
        image: require('../assets/images/dimsum.jpg'),
    },

]


export const featured = {
    id: 1,
    title: 'Hot and Spicy',
    description: 'soft and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Chinese food',
            image: require('../assets/images/sushi1.jpg'),
            description: 'Asian food',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'Sushi',
                   description: 'Sushi',
                   price: 10,
                   image:  require('../assets/images/sushi1.jpg')
                },
                {
                   id: 2,
                   name: 'Sushi',
                   description: 'Sushi',
                   price: 10,
                   image:  require('../assets/images/sushi2.jpg')
                },
                {
                   id: 3,
                   name: 'Pasta',
                   description: 'Pasta',
                   price: 10,
                   image:  require('../assets/images/pasta.jpg')
                },
            ]
    
        },
        {
            id: 2,
            name: 'Japanese food',
            image: require('../assets/images/ramen.jpg'),
            description: 'Japanese ramen',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Japanese Food',
            dishes: [
                {
                   id: 1,
                   name: 'Salt',
                   description: 'Salted',
                   price: 10,
                   image:  require('../assets/images/salteado.jpg')
                },
                {
                   id: 2,
                   name: 'Arroz frito',
                   description: 'Arroz frito Japanse',
                   price: 10,
                   image:  require('../assets/images/arrozFrito.jpg')
                },
                {
                   id: 3,
                   name: 'Coke',
                   description: 'Coke cola',
                   price: 10,
                   image:  require('../assets/images/cocaCola.jpg')
                },
            ]
    
        }
    ]
}