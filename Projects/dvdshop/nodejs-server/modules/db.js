const knex = require('knex');

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: 'database090887',
    database: 'dvdrental'
  }
})

const getCustomer = (offset) => {
  return db.select(
    'customer.customer_id',
    'customer.first_name',
    'customer.last_name',
    'customer.email',
    'address.address',
    'city.city',
    'country.country',
    'address.phone'
  )
  .from('customer')
  .orderBy('customer_id')
  .join('address', {'address.address_id':'customer.address_id'})
  .join('city', {'city.city_id':'address.city_id'})
  .join('country', {'country.country_id':'city.country_id'})
  .limit(15).offset(offset)
}

const searchCustomer = (searchSrting) => {
  return db.select(
    'customer.customer_id',
    'customer.first_name',
    'customer.last_name',
    'customer.email',
    'address.address',
    'city.city',
    'country.country',
    'address.phone'
  )
  .from('customer')
  .orderBy('customer_id')
  .join('address', {'address.address_id':'customer.address_id'})
  .join('city', {'city.city_id':'address.city_id'})
  .join('country', {'country.country_id':'city.country_id'})
// .whereRaw('LOWER(country.country) LIKE ?', searchSrting.toLowerCase()+'%')
  .whereRaw('LOWER(customer.last_name) LIKE ?', searchSrting.toLowerCase()+'%')
// .whereRaw('LTRIM(RTRIM(LOWER(country.country))) LIKE ?', searchString.toLowerCase()+'%')
}

const getCount = () => {
  return db('customer').count('customer_id')
}

module.exports = {
  getCustomer,
  searchCustomer,
  getCount,
}
