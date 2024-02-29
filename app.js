

const forecast = (addres , callback) => {
    const url = 'http://api.weatherapi.com/v1/current.json?key=08f2913a3d794ca186e71403242802&q=' + addres 
const request = require('request')
    request({url , json:true} , (error , response) => {
        if(error){
            // console.log('you have error');
            callback('you have error' , undefined)
        }else if(response.body.error) {
            // console.log(response.body.error.message);
            callback(response.body.error.message , undefined)
        }else{
            // console.log(response.body.location.name , response.body.current.condition.text);
            callback(undefined , {
                city :  response.body.location.name,
                state :  response.body.current.condition.text
            }
                
                    
                    
                
                )
        }
        
    })

}

const value = process.argv[2]
forecast (value , (error , data) => {
    console.log("ERROR :" , error);
    console.log("DATA :" , data);
})
