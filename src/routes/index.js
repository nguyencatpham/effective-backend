var topicRoute = require('./topicRoute');

export const routers = {
    resolve : (app)=>{
        app.use('/topics', topicRoute)
    }
}

export default routers