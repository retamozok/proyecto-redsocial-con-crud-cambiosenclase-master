let publicaciones = [
  
]

export const viewpubli = (req,res)=>{
    res.status(200).render('publicacion',{publicaciones:publicaciones})
}


export const create = async (req,res)=>{
  let publicacion = req.body
  publicacion.id = Math.floor(Math.random()*1000000000)
  console.log(publicacion)
  publicaciones.push(req.body) 
  publicacion.url = req.body.nombre + req.body.id + ".png" 

  const EDFile = req.files.url
  
  EDFile.mv(`./public/img/${publicacion.url}`,err => {
    if(err) return res.status(500).send({ message : err })
    return res.status(200).render("nofound",{message:"error al cargar"})
    })

  res.status(200).redirect('/instagram')
 }
 
 export const del = (req,res) =>{
  console.log(req.body)
  publicaciones = publicaciones.filter(element => element.id != req.body.id)
  res.status(200).redirect('/instagram')
}


export const update = (req,res) =>{
  console.log(req.body)
  let publicacion = publicaciones.find(element => element.id == req.body.id)
  if(req.body.nombre)  publicacion.nombre = req.body.nombre
  if(req.body.descripcion) publicacion.descripcion = req.body.descripcion
  res.status(200).redirect('/instagram')
}


  
 