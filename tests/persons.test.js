const Person = require('../models/person')
const mongoose = require('mongoose')

const app = require('../app')
const supertest = require('supertest')

const api = supertest(app)

const peopleInDb = async () => {
  const people = await Person.find({})

  return people.map(p => p.toJSON())
}

const getIdfromDb = async () => {
  const people = await Person.find({})

  const peopleArray = people.map(p => p.toJSON())
  return peopleArray[0].id
}

const generateFakeId = async () => {
  const p = await new Person({ fname: 'random', lname: 'name' }).save()
  const id = p.id
  await Person.findByIdAndDelete(id)

  return id
}

describe('when there is one person in db', () => {
  const intialPerson = {
    fname: 'Sharad',
    lname: 'S'
  }

  beforeEach(async () => {
    await Person.deleteMany({})

    const person = new Person(intialPerson)

    await person.save()
  })

  test('GET returns one person', async () => {
    const people = await peopleInDb()
    const response = await api.get('/api/persons')

    expect(response.body).toHaveLength(people.length)
    expect(response.status).toBe(200)
  })


  test('POST adds the correct person', async () => {
    const initialPeople = await peopleInDb()

    const newPerson = {
      fname: 'Bill',
      lname: 'Gates'
    }

    await api
      .post('/api/persons')
      .send(newPerson)
      .expect(201)
      .expect('Content-Type', /application\/json/)

    const people = await peopleInDb()
    expect(people).toHaveLength(initialPeople.length + 1)
    expect(people.map(p => p.fname)).toContain('Bill')
  })

  test('DELETE removes the person', async () => {
    const id = await getIdfromDb()

    await api
      .delete(`/api/persons/${id}`)
      .expect(204)

    const people = await peopleInDb()
    expect(people).toHaveLength(0)
  })

  test('PUT updates the person', async () => {
    const id = await getIdfromDb()

    const updatePerson = {
      fname: 'Sharad',
      lname: 'Swaminathan'
    }

    await api
      .put(`/api/persons/${id}`)
      .send(updatePerson)
      .expect(200)

    const people = await peopleInDb()
    expect(people.map(p => p.lname)).toContain('Swaminathan')
  })
})

afterAll(() => {
  mongoose.connection.close()
})