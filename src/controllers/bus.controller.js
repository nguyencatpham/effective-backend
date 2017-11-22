var request = require("request");
const domain = 'http://apicms.ebms.vn'
export const controller = {
    getAllRoute: async(req, res, next) => {
        request({
            method: 'GET',
            url: `${domain}/businfo/getallroute`,
            headers: {
                'cache-control': 'no-cache'
            }
        }, function (error, response, body) {
            if (error) throw new Error(error);
            res.status(200).send(body);
        })
    },
    getRouteById: async(req, res, next) => {
        request({
            method: 'GET',
            url: `${domain}/businfo/getroutebyid/${req.params.routeId}`,
            headers: {
                'cache-control': 'no-cache'
            }
        }, function (error, response, body) {
            if (error) throw new Error(error);
            res.status(200).send(body);
        })
    },
    getVarsByRoute: async(req, res, next) => {
        request({
            method: 'GET',
            url: `${domain}/businfo/getvarsbyroute/${req.params.routeId}`,
            headers: {
                'cache-control': 'no-cache'
            }
        }, function (error, response, body) {
            if (error) throw new Error(error);
            res.status(200).send(body);
        })
    },
    getTimeTableByRoute: async(req, res, next) => {
        request({
            method: 'GET',
            url: `${domain}/businfo//gettimetablebyroute/${req.params.routeId}`,
            headers: {
                'cache-control': 'no-cache'
            }
        }, function (error, response, body) {
            if (error) throw new Error(error);
            res.status(200).send(body);
        })
    },
    getStopByVar: async(req, res, next) => {
        request({
            method: 'GET',
            url: `${domain}/businfo/getstopsbyvar/${req.params.routeId}/${req.params.varId}`,
            headers: {
                'cache-control': 'no-cache'
            }
        }, function (error, response, body) {
            if (error) throw new Error(error);
            res.status(200).send(body);
        })
    },
    getPathByVar: async(req, res, next) => {
        request({
            method: 'GET',
            url: `${domain}/businfo/getpathsbyvar/${req.params.routeId}/${req.params.varId}`,
            headers: {
                'cache-control': 'no-cache'
            }
        }, function (error, response, body) {
            if (error) throw new Error(error);
            res.status(200).send(body);
        })
    },
    getTripByTimeTable: async(req, res, next) => {
        request({
            method: 'GET',
            url: `${domain}/businfo/gettripsbytimetable/${req.params.routeId}/${req.params.timeTableId}`,
            headers: {
                'cache-control': 'no-cache'
            }
        }, function (error, response, body) {
            if (error) throw new Error(error);
            res.status(200).send(body);
        })
    },
}

export default controller