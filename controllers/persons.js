const personRouter = require('express').Router()
const Person = require('../models/person')

personRouter.get('/', async (request, response) => {
  const people = await Person.find({})

  response.json(people)
})

personRouter.get('/:id', async (request, response) => {
  const person = await Person.findById(request.params.id)

  if (person) {
    response.json(person)
  } else {
    response.status(404).send({ error: 'invalid id' })
  }
})

personRouter.post('/', async (request, response) => {
  const body = request.body

  if (!body.fname || !body.lname) {
    response.status(400).send({ error: 'first or last name missing' })
  }

  const person = new Person({
    fname: body.fname,
    lname: body.lname
  })

  const result = await person.save()
  response.status(201).json(result)
})

personRouter.put('/:id', async (request, response) => {
  const body = request.body

  if (!body.fname || !body.lname) {
    response.status(400).send({ error: 'first or last name missing' })
  }

  const person = {
    fname: body.fname,
    lname: body.lname
  }

  const updatedPerson = await Person.findByIdAndUpdate(request.params.id, person, { new:true, runValidators: true })
  if (updatedPerson) {
    response.json(updatedPerson)
  } else {
    response.status(404).end()
  }
})

personRouter.delete('/:id', async (request, response) => {
  await Person.findByIdAndDelete(request.params.id)

  response.status(204).end()
})

module.exports = personRouter
