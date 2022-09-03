const { Router } = require('express');
const { employeesGet,employeesPut,employeesPost,employeesDelete} = require ('../controllers/employees')
const router = Router();

router.get('/', employeesGet);

router.put('/:id', employeesPut);

router.post('/',employeesPost);

router.delete('/',employeesDelete);


module.exports = router;