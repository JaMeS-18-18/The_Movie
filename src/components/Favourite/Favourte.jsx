import { configureStore} from '@reduxjs/toolkit'
import { Checked } from '../Store/Store'

const store= configureStore({
    reducer:{
        favourite: Checked
    }
})
 export default store