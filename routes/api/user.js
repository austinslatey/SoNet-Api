const router = require('express').Router();
const {
    getAllUsers,
    getUsersId,
    createAuser,
    addAfriend,
    updateAuser,
    deleteAuser,
    removeAfriend
} = require('../../controllers/user-controller');

router
    .route('/')
    .get(getAllUsers)
    .post(createAuser);

router
    .route('/:id')
    .get(getUsersId)
    .put(updateAuser)
    .delete(deleteAuser)

router
    .route('/:userId/friends/:friendId')
    .post(addAfriend)
    .delete(removeAfriend)

module.exports = router;