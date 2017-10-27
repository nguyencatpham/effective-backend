"use strict";

import {
    async
} from 'asyncawait'
import topics from '../models/topic'
import path from 'path'
import config from "config"
import _ from 'lodash'
import camelResult from '../helpers/camel-result'
import util from 'util'
import sequelize from '../../config/database'

export const topicServices = {
    getAll: (offset = 0, limit = 10) => new Promise((resolve, reject) => {
        topics.findAll({
                offset,
                limit
            })
            .then(response => {
                resolve(camelResult.convertArr(response));
            })
            .catch((error) => {
                reject(error)
            })
    }),
    getOne: (id) => new Promise((resolve, reject) => {
        topics.findAll({
                where: {
                    id: id
                }
            })
            .then(response => {
                resolve(camelResult.convertArr(response));
            })
            .catch((error) => {
                reject(error)
            })
    }),
    insert: (topic) => new Promise((resolve, reject) => {
        sequelize.query('INSERT INTO topic (name,description,type) VALUES (:name,:description,:type)', {
                replacements: {
                    name: topic.name,
                    description: topic.description,
                    type: topic.type
                },
                type: sequelize.QueryTypes.INSERT
            }).then(response => resolve(camelResult.convertArr(response)))
            .catch((error) => {
                reject(error)
            })
    }),
    update: (topic) => new Promise((resolve, reject) => {
        topics.update({
            name: topic.name,
            description: topic.description,
            type: topic.type
        },{
            where:{
                id: topic.id
            }
        })
    }),
    destroy: (id) => new Promise((resolve, reject) => {
       topics.destroy({
           where:{
               id:id
           }
       })
    })
}
export default topicServices