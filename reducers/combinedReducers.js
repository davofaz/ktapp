import { combineReducers } from 'redux'

import sermon from './sermonArchive';
import event from './whatsOn';
import contact from './contact';
import navigation from './navigation';

export default combineReducers({
    sermon,
    event,
    contact,
    navigation,
})
