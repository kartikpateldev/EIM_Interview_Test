const express = require('express')
const router = express.Router();
const userModule = require('../modules/user');

router.post('/', async (req, res, next) => {
    try {
        const result = await userModule.addUser(req.body)
        if (result.success) {
            res.json({
                success: true,
                data: result.data
            })
            return
        } else {
            res.json({
                success: false,
                error: result.error
            })
        }
    } catch (error) {
        console.error(error.message)
        res.json({
            success: false,
            message: error
        });
    }
})

router.get('/', async (req, res, next) => {
    try {
        const result = await userModule.getUser(req.query.id)
        if (result.success) {
            res.json({
                success: true,
                data: result.data
            })
            return
        } else {
            res.json({
                success: false,
                error: result.error
            })
        }
    } catch (error) {
        console.error(error.message)
        res.json({
            success: false,
            message: error
        });
    }
})

router.patch('/', async (req, res, next) => {
    try {
        const result = await userModule.updateUser(req.query.id, req.body)
        if (result.success) {
            res.json({
                success: true,
                data: result.data
            })
            return
        } else {
            res.json({
                success: false,
                error: result.error
            })
        }
    } catch (error) {
        console.error(error.message)
        res.json({
            success: false,
            message: error
        });
    }
})

router.delete('/', async (req, res, next) => {
    try {
        const result = await userModule.deleteUser(req.query.id)
        if (result.success) {
            res.json({
                success: true,
                data: result.data
            })
            return
        } else {
            res.json({
                success: false,
                error: result.error
            })
        }
    } catch (error) {
        console.error(error.message)
        res.json({
            success: false,
            message: error
        });
    }
})

module.exports = router;
