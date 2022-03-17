const { fetchAll, fetch } = require('../../lib/postgres')


const PEOPLE = `
    SELECT
        *
    FROM
        people
`

const BY_AGE = `
    SELECT
        *
    FROM
        people
    WHERE
        person_age BETWEEN $1 AND $2
`

const ADD_PERSON = `
    INSERT INTO
        people(person_name, person_job, person_age)
    VALUES ($1, $2, $3)
    RETURNING *
`

const getPeople = () => fetchAll(PEOPLE)
const getByAge = (min, max) => fetchAll(BY_AGE, min, max)
const addPerson = (name, job, age) => fetch(ADD_PERSON, name, job, age)


module.exports = {
    getPeople,
    getByAge,
    addPerson
}