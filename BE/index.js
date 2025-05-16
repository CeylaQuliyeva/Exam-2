import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';

const app = express()
const port = 3000

mongoose.connect('mongodb+srv://jeylasgbf206:jeylasgbf206@cluster0.1xsi3cl.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(() => console.log(' NOT Connected!'))

  const dataSchema = new mongoose.Schema({
    img: String, 
    name: String,
    price: Number
  });

  const Exam2 = mongoose.model('Exam2', dataSchema);

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
    const data = await Exam2.find()
  res.send(data)
})
app.get('/:id', async (req, res) => {
    const {id} = req.params
    const data = await Exam2.findById(id)
    res.send(data)
})
app.post('/', async (req, res) => {
    const {body} = req
    const data = await Exam2.create(body)
  res.send(data)
})
app.delete('/:id', async (req, res) => {
    const {id} = req.params
    const {body} = req
    const data = await Exam2.findByIdAndDelete(id, body)
  res.send(data)
})

app.put('/:id', async (req, res) => {
    const {id} = req.params
    const {body} = req
    const data = await Exam2.findByIdAndUpdate(id, body)
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
