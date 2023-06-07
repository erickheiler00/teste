import mongoose from 'mongoose' // biblioteca para interagir com o mongodb
import config from 'config'

// conexão com o mongodb
mongoose.connect(config.get('mongo.uri'))

export default mongoose

