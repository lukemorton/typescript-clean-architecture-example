declare function require(string): any;

const partial = require('lodash.partial')

import * as FakeUserGateway from './FakeUserGateway'

import _LoadUserProfile from './LoadUserProfile'
export const LoadUserProfile = partial(_LoadUserProfile, FakeUserGateway)
