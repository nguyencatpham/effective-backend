"use strict";

import {async} from 'asyncawait'
import models from '../models/topic'
import path from 'path'
import config from "config"
import _ from 'lodash'
import camelResult from '../helpers/camel-result'
import util from 'util'

// let tsconfig = config.get("host")

export const topicServices = {
    findAll: ()=>{
        models.findAll().then(models =>{
            console.log(models)
        })
    }
}
export default topicServices