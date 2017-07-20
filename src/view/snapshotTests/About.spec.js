
import {createSnapshot} from './createSnapshot'

import data from './actionPayloads/About.json'

createSnapshot('About view loads and renders as expected', data.payload)
