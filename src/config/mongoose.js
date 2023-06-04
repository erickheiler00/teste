import mongoose from 'mongoose'
import config from 'config'

mongoose.connect(config.get('mongo.uri'))

export default mongoose

