const express = require('express');
require('./services/passport');
 
const app = express();

require('./routes/authRoutes.js')(app);


// app.get('/', (req, res) => {
//     res.send({
//         hi: 'there'
//     });
// });

const PORT = process.env.PORT || 5000;
app.listen(PORT);