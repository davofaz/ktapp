import { combineReducers } from 'redux'

import sermon from './sermonArchive';
import event from './whatsOn';
import contact from './contact';
import navigation from './navigation';
import mag from './rT';

export default combineReducers({
    sermon,
    event,
    contact,
    mag,
    navigation,
})
