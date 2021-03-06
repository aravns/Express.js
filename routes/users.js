const express = require('express')
const router = express.Router()

router.use(logger)


router.get("/", (req, res) => {
    res.send('User List')
});

router.get("/new", (req, res) => {
    res.send("User New From")
})

router.post('/', (req, res) => {
    res.send('Create User')
})

router
    .route('/id:')
    .get((req, res) => {
        // console.log(req.user)
        res.send(`Get User With ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User With ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User With ID ${req.params.id}`)
    })

const users = [{name: 'a7med'}, {name: 'aravan'}]
router.param("id", (req, res, next, id) => {
    req.user = users[id]
    next()
})


function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
  }


module.exports = router;

// router.get('/:id', (req, res) => {
//     res.send(`"User Get" ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     res.send(`"User Get" ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     res.send(`"Delete User Get" ${req.params.id}`)
// })
