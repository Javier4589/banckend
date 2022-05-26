const{Schema,model} =require('mongoose')

const personaSchema = new Schema({
    nombre:{ type:String, require:true},
    ApPaterno:{type:String,require:true},
    ApMaterno:{type:String,require:true}
},{
    timestamps:true,
    versionKey:false
})

module.exports = model('Persona',personaSchema);