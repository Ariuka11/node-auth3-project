const bcrypt = require('bcryptjs')
const db = require('../data/dbConfig')

module.exports = {
    find,
    findBy,
    findById,
    add
}

function find() {
    return db("users").select('id', 'username', 'department')
}

function findBy(filter) {
    return db("users")
        .select("id", "username", "password", "department")
        .where(filter)
}

function findById(id) {
    return db("users")
        .select("id", "username", "department")
        .where({ id })
        .first()
}

async function add(user) {
    user.password = await bcrypt.hash(user.password, 13)

    const [id] = await db('users').insert(user)
    return findById(id)
}

