import {createStore} from 'redux'
import { myReduucer } from './reducer'

export const store = createStore(myReduucer)