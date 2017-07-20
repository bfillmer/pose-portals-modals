
import {createSnapshot} from '../createSnapshot'

import homeData from './Home.json'

createSnapshot('Home view loads and renders as expected', homeData.payload)
