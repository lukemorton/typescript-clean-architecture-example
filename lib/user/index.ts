import * as partial from 'lodash.partial'

import * as HTTPUserGateway from './HTTPUserGateway'

import _LoadUserProfile from './LoadUserProfile'
export const LoadUserProfile = partial(_LoadUserProfile, HTTPUserGateway)
