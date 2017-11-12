import async from 'asyncawait/async'
import topicService from '../services/topic.service'

export const controller = {
    getAll: async  (req, res, next)=> {
        let result = await (topicService.getAll()
            .catch(function(err) {
                return res.status(500).send();
            })
            
        );
        res.status(200).send(result);
    },
    getOne: async (req, res, next) => {
        let result = await (topicService.getOne(req.params.id)
            .catch(function (err) {
                return res.status(500).send();
            })
        );
        res.status(200).send(result);
    },
    create: async (req, res, next) => {
        let result = await (topicService.insert(req.body)
            .catch(function (err) {
                return res.status(500).send(err.message);
            })
        );
        res.status(201).send(result);
    },
    update: async (req, res, next) => {
        let result = await (topicService.update(req.params.id,req.body)
            .catch(function (err) {
                return res.status(500).send();
            })
        );
        res.status(201).send(result);
    },
    delete: async (req, res, next) => {
        let result = await (topicService.destroy(req.params.id)
            .catch(function (err) {
                return res.status(500).send();
            })
        );
        res.status(204).send(result);
    },
}

export default controller