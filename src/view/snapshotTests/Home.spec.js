
import {createSnapshot} from './createSnapshot'

import homeData from './actionPayloads/Home.json'

createSnapshot('Home view loads and renders as expected', homeData.payload)
