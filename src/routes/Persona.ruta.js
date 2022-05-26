const{Router} = require('express')
const router=Router()
const personaCTRL= require('../cotrollers/Persona.control')
//CRUD
//CREATE-READ-UPDATE-DELETE
//CREATE
router.get('/',personaCTRL.getPersonas);
router.post('/',personaCTRL.createPersona);
router.get('/:id',personaCTRL.getPersona);
router.put('/:id',personaCTRL.editPersonas);
router.delete('/:id',personaCTRL.deletePersonas);

module.exports=router;