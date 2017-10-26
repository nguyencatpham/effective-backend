import async from 'asyncawait/async'
import topicService from '../services/topic.service'

export const controller = {
    getAll: async  (req, res, next)=> {
        let result = await (topicService.getAll()
            .catch(function(err) {
                return res.status(500).send();
            })
            // .then((e)=>{
            //     console.log(e)
            // })
        );
        console.log('result', result)
        res.status(200).send(result);
    }
}

export default controller