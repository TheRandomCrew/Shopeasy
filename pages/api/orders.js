import { MongoDB } from '@nano-sql/adapter-mongo'
import { nSQL } from '@nano-sql/core'

const connectMiddleware = (handler) => async (req, res) => {
  const dbName = 'shopeasy'

  if (!nSQL().listDatabases().includes(dbName)) {
    await nSQL().createDatabase({
      id: dbName,
      mode: new MongoDB(process.env.DB_SHOPEASY_MONGO, {
        useUnifiedTopology: true,
      }),
      tables: [
        {
          name: 'order',
          model: {
            'id:uuid': { pk: true },
            'products:string': { notNull: true },
            'client:string': { notNull: true },
            'createdAt:date': { default: () => new Date() },
          },
        },
      ],
      version: 1,
    })
  }
  nSQL().useDatabase(dbName)

  return handler(req, res)
}

const getOrders = async (_, res) => {
  try {
    const notes = await nSQL('order').query('select').exec()

    res.status(200).json({
      ok: true,
      message: 'Data retrieved!',
      data: notes,
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      message: 'Error while getting Data from DB',
      errors: [error.message],
    })
  }
}

const postOrder = async (req, res) => {
  const { client, products } = req.body
  const errors = {}

  if (!title) errors['client'] = 'Client is required'

  if (!content) errors['products'] = 'Products are required'

  if (Object.keys(errors).length > 0)
    return res.status(422).json({
      ok: false,
      message: 'Input Data not provided!',
      errors,
    })

  const [order] = await nSQL('order')
    .query('upsert', { client, products })
    .exec()

  res.status(201).json({
    ok: true,
    message: 'Data Created!',
    data: order,
  })
}

const handler = (req, res) => {
  switch (req.method) {
    case 'POST':
      return postOrder(req, res)
    case 'GET':
      return getOrders(req, res)
    default:
      return res.status(404).json({
        ok: false,
        message: 'Not Found',
        errors: ['Endpoint not in the API!'],
      })
  }
}

export default connectMiddleware(handler)
