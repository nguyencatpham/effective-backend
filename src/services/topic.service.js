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
                resolve(response);
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
                resolve(response);
            })
            .catch((error) => {
                reject(error)
            })
    }),
    insert: async (topic) => new Promise((resolve, reject) => {
        topics.create(topic)
            .then(response => resolve(response.dataValues))
            .catch((error) => {
                reject(error)
            })
    }),
    update: (id,topic) => new Promise((resolve, reject) => {
        topics.update(topic, {
                where: {
                    id: id
                }
            })
            .then(response => resolve(response.dataValues))
            .catch((error) => {
                reject(error)
            })
    }),
    destroy: (id) => new Promise((resolve, reject) => {
        topics.destroy({
            where: {
                id: id
            }
        })
        .then(response => resolve(response.dataValues))
        .catch((error) => {
            reject(error)
        })
    })
}
export default topicServices