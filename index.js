import express from 'express'
import morgan from 'morgan'
import handlebars  from "express-handlebars"
import path from 'path'
import routesPublicaciones from './src/routes/routesPublicaciones.js'
import methodOverride from 'method-override'
import fileUpload from 'express-fileupload'
import { conectarDB } from './config/db.js'

const app = express()

const __dirname = path.resolve();
app.use(methodOverride('_method'))
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true })) 
app.use(express.json()) 
app.use(
  fileUpload({
    limits: { },
    useTempFiles: true,
   // dir for windows PC
    tempFileDir: path.join(__dirname, './tmp'),
  }),
);
// -------------- Configuracion Handlebars ----------------------------------
app.engine("hbs", handlebars({
  extname: "hbs",
  defaultLayout: "index",
  layoutsDir: path.join(__dirname, "/src/views/layouts"),
  partialsDir: path.join(__dirname, "/src/views/partials"),
}));
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'hbs');
// servidor
conectarDB()
routesPublicaciones(app)


app.listen(3000, () => {
    console.log(`el servidor esta corriendo en http://localhost:${3000}`)
  })
  
