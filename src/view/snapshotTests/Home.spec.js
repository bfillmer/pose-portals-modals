
import {createSnapshot} from './createSnapshot'

import homeData from './actionPayloads/Home.json'
import homeWithOverlay from './actionPayloads/HomeWithOverlay.json'

createSnapshot('Home view loads and renders as expected', homeData.payload)
createSnapshot('Home view displays overlay loader as expected', homeWithOverlay.payload)
