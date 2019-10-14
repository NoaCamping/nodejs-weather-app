const request=require('request')

const forecast=(latitude, longitude, callback)=>{

    const url='https://api.darksky.net/forecast/d84ad2b6e489e1a45b2e5029bde75dc8/'+latitude+','+longitude

    request({url: url, json: true},(error,response)=>{
        if(error){
            callback('unable to connect to weather service', undefined)
        }
        else if(response.body.error)
        {
            callback('unable to find location',undefined)
        }
        else{
            callback(undefined, response.body.daily.data[0].summary)
        }
    })
}

module.exports=forecast