"use strict";

import {async} from 'asyncawait'
import topics from '../models/topic'
import path from 'path'
import config from "config"
import _ from 'lodash'
import camelResult from '../helpers/camel-result'
import util from 'util'

export const topicServices = {
    getAll: () => new Promise((resolve, reject)=>{
            topics.findAll()
            .then(response => {
                resolve(camelResult.convertArr(response));
            })
            .catch((error)=>{
                reject(error)
            })
        })
}
export default topicServices