const {Router} = require("express");
const { getUsers, postUsers, deleteUsers, putUsers } = require("../controllers/user.");


const router = Router(); 

router.get('/',  getUsers); 
router.post('/',  postUsers); 
router.put('/:id',  putUsers); 
router.delete('/:id', deleteUsers); 


module.exports = router ;