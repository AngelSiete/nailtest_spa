const { Router } = require('express');
const { employeesGet,employeesGetById, employeesPut,employeesPost,employeesDelete} = require ('../controllers/employees')
const router = Router();

router.get('/', employeesGet);

router.get('/:id', employeesGetById);

router.put('/:id', employeesPut);

router.post('/',employeesPost);

router.delete('/',employeesDelete);


module.exports = router;