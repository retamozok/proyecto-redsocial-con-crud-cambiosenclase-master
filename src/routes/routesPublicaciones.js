import * as controllerPublicaciones from '../controllers/controllerPublicaciones.js'


const routesPublicaciones = (app) => {
    app.get('/instagram',controllerPublicaciones.viewpubli)
    app.post('/instagram',controllerPublicaciones.create)
    app.delete('/instagram',controllerPublicaciones.del)
    app.put('/instagram',controllerPublicaciones.update)
}  

export default routesPublicaciones
