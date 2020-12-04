const { User } = require('../sequelize')

exports.addUser = function (reqBody) {
    return new Promise((resolve, reject) => {
        try {
            User.create(reqBody)
                .then(user => {
                    return resolve({
                        success: true,
                        data: user
                    })
                })
                .catch(error => {
                    return resolve({
                        success: false,
                        error: error
                    })
                })
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}

exports.getUser = function (id) {
    return new Promise((resolve, reject) => {
        try {
            User.findByPk(id)
                .then(user => {
                    if (user === null) {
                        return resolve({
                            success: false,
                            error: "User not found"
                        })
                    } else {
                        return resolve({
                            success: true,
                            data: user
                        })
                    }
                })
                .catch(error => {
                    return resolve({
                        success: false,
                        error: error
                    })
                })
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}


exports.updateUser = function (id, data) {
    return new Promise((resolve, reject) => {
        try {
            User.findByPk(id)
                .then(user => {
                    if (user === null) {
                        return resolve({
                            success: false,
                            error: "User not found"
                        })
                    } else {
                        user.update(data)
                        .then(user => {
                            return resolve({
                                success: true,
                                data: user
                            })
                        })
                        .catch(error => {
                            console.log("Error: ")
                            console.log(error)
                            return resolve({
                                success: false,
                                error: error
                            })
                        })
                    }
                })
                .catch(error => {
                    console.log("Error2: ")
                    console.log(error)
                    return resolve({
                        success: false,
                        error: error
                    })
                })
        } catch (error) {
            console.log("Error3: ")
            console.log(error)
            console.error(error)
            reject(error)
        }
    })
}

exports.deleteUser = function (id) {
    return new Promise((resolve, reject) => {
        try {
            User.findByPk(id)
                .then(user => {
                    if (user === null) {
                        return resolve({
                            success: false,
                            error: "User not found"
                        })
                    } else {
                        user.destroy()
                        .then(() => {
                            return resolve({
                                success: true,
                                data: "Record deleted."
                            })
                        })
                        .catch(error => {
                            console.log("Error: ")
                            console.log(error)
                            return resolve({
                                success: false,
                                error: error
                            })
                        })
                    }
                })
                .catch(error => {
                    console.log("Error2: ")
                    console.log(error)
                    return resolve({
                        success: false,
                        error: error
                    })
                })
        } catch (error) {
            console.log("Error3: ")
            console.log(error)
            console.error(error)
            reject(error)
        }
    })
}
