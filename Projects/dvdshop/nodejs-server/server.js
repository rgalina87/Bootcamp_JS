const exp = require('express');
const cors = require('cors');
const DB = require('./modules/db.js')

const app = exp();
app.use(cors());


app.get('/getAllCustomers', (req, res) => {
  const  {offset} = req.query
  DB.getCustomer(offset)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send({message:err.datail})
  })
})

app.get('/search', (req,res) => {
  const {q} = req.query
  console.log('q', q)
  DB.searchCustomer(q)
  .then(data => {
    console.log('data', data)
    res.send(data)
  })
  .catch(err => {
    console.log('err', err)
    res.send({message:err.datail})
  })
})

app.get('/getCountCustomers', (rea, res) => {
  DB.getCount()
      .then(data => {
        res.send(data)
      })
})

app.listen(9000, () => {
  console.log('listen on 9000');
})
