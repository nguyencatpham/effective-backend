import {async,await} from 'asyncawait'
import topicService from '../services/topicService'

export const controller = {
    getAll : async function(req, res, next){
        let result = await(topicService.findAll().catch(function(err) {
            return res.status(500).send();
        }));
    
        res.status(200).send(result)
    }
}
export default controller