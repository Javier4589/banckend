//const hola=(req,res)=>res.send('hola')
const personaCTRL={}
const Persona = require('../models/Persona.model')

personaCTRL.getPersonas=async(req,res)=>{
    //res.send('get Persona')
    const persona = await Persona.find();
    res.json(persona);
}

personaCTRL.createPersona=async(req,res)=>{
    const newPersona= new Persona(req.body)
    await newPersona.save()
    console.log(newPersona.id)
    
    res.send('create Persona')
}
personaCTRL.getPersona=async(req,res)=>{
    //console.log(req.params)
    const persona= await Persona.findById(req.params.id)
    res.send(persona);
}
personaCTRL.editPersonas=async(req,res)=>{
    await Persona.findByIdAndUpdate(req.params.id, req.body)
    res.json({status:'Dato Actualizado'})
}
personaCTRL.deletePersonas=async(req,res)=>{
   
const persona= await  Persona.findByIdAndDelete(req.params.id)
res.json( {status:'Dato Eliminado'});
//res.send(persona)
}

module.exports=personaCTRL;