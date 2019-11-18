import { combineReducers } from 'redux'

import sermon from './sermonArchive';
import navigation from './navigation';

export default combineReducers({
    sermon,
    navigation,
})