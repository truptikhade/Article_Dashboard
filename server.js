require('dotenv').config();
const connectdb = require('./src/config/db');
const app = require('./src/app');
const logger = require('./src/config/logger');

const startserver= async () => {
    await connectdb();
    const PORT = 8000;
    app.listen(PORT,()=>{
         logger.info(`Server running on port ${PORT}`);
    });
}
  
startserver();