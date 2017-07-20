
import {createSnapshot} from '../createSnapshot'

import data from './About.json'

createSnapshot('About view loads and renders as expected', data.payload)
