import express from 'express'
import { adminJs, adminJsRouter } from './adminjs'
import { sequelize } from './database'

const app = express()

app.use(adminJs.options.rootPath, adminJsRouter)
app.use(express.static('public'))

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server startet at port ${PORT}`)
  sequelize.authenticate().then(() => {
    console.log('DB Connect sucessfull')
  })
})
