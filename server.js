const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const coffee = {
    'ethiopia':{
        'sizeoz': '5.07',
        'cup': 'gran lungo',
        'notes': 'floral, complex',
        'roast': '4',
        'description': 'A naturally flowery coffee that develops aromatic complexity from its signature drying method.',
        'price': '1.15',
        'limited': 'false'
    },

    'unknown':{
        'sizeoz': 'unknown',
        'cup': 'unknown',
        'notes': 'unknown',
        'roast': 'unknown',
        'description': 'unknown',
        'price': 'unknown',
        'limited': 'false'
    },

    'columbia':{
        'sizeoz': '7.77',
        'cup': 'coffee',
        'notes': 'washed, arabica',
        'roast': '5',
        'description': 'Enjoy hint of candied apple and red berry notes in this sweet and winey Vertuo coffee.',
        'price': '1.30',
        'limited': 'false'
    }
}

app.get('/', (require, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const coffeeName = request.params.name.toLowerCase()
    if( coffee[coffeeName]) {
        response.json(coffee[coffeeName])
    }else{
        response.json(coffee['unknown'])
    }

})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}! Betta Go Catch It!`)
})