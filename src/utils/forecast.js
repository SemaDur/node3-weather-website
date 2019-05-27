const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/9cf05441ab682a4419d25573c7c26e7f/' + latitude + ',' + longitude + '?units=si'

    request({url: url, json: true}, (error, {body}) => { //(error, response)
        if(error){
            callback('Unable to connect to weather api!', undefined)
        } else if(body.error){ //response.body.error
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. There is a ' + body.currently.precipProbability + '% chance of rain.')

        }
    })
}

module.exports = forecast