declare function require(string): any;

const partial = require('lodash.partial')

import * as HTTPUserGateway from './HTTPUserGateway'

import _LoadUserProfile from './LoadUserProfile'
export const LoadUserProfile = partial(_LoadUserProfile, HTTPUserGateway)
