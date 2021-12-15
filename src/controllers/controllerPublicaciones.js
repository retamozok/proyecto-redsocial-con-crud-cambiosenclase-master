import Publicacion from '../models/publicaciones.js'

let publicaciones = [
  
]




export const viewpubli = async (req,res)=>{
  try{
    const posteos = await Publicacion.find().lean()
    res.status(200).render('publicacion',{publicaciones:posteos})
  }catch(e){
    console.log(e)
  }
    
}





export const create = async (req,res)=>{

  req.body.url = Math.floor(Math.random()*1000000000) + ".png" 

  try {

    const publicacion = await Publicacion(req.body)
    publicacion.save()
    const EDFile = req.files.url
    
    EDFile.mv(`./public/img/${publicacion.url}`,err => {
      if(err) return res.status(500).send({ message : err })
      return res.status(200).render("nofound",{message:"error al cargar"})
      })
  
    res.status(200).redirect('/instagram')
  }
  catch (e) {console.log(e)}

  
 }





 export const del = async (req,res) =>{
  try {
    const productfound = await Publicacion.find({_id:req.body._id}).lean()
    if ((Object.entries (productfound).length === 0)) {
      return res.status(200).render("nofound"),{message: "no se encontró la publicación"}
      }

      await Publicacion.deleteOne({_id:req.body._id})
        res.status(200).redirect('/instagram')

}

catch (e) {console.log(e)}

}


export const update = async (req,res) =>{
  
try {
  const productfound = await Publicacion.find({_id:req.body._id}).lean()
      if ((Object.entries(productfound).length === 0)) {
        return res.status(200).render("nofound",{message:"no se encontro el posteo"})
      }
  await Publicacion.findOneAndUpdate(
    { _id: req.body._id },
    { $set: product},
    { new: true }
  )
  
} 
catch (e) { console.log(e)}

}
  
 