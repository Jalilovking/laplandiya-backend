const model = require('./model')

module.exports = {
    Query: {
        people: async(_, { ageLimit }) => {
            if(ageLimit == '1'){
                return await model.getByAge(18, 35)
            }else if(ageLimit == '2'){
                return await model.getByAge(36, 60)
            }else if(ageLimit == '3'){
                return await model.getByAge(61, 200)
            }else{
                return await model.getPeople()
            }
        }
    },
    Mutation: {
        addPerson: async(_, { name, job, age }) => {
            console.log(name, job, age)
            const addPerson = await model.addPerson(name, job, age)
            return addPerson
        }
    },
    People: {
        id: global => global.person_id,
        name: global => global.person_name,
        job: global => global.person_job,
        age: global => global.person_age
    }
}