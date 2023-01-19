import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import usuarioRoutes from "./routes/usuario.routes.js";
import abueloRoutes from "./routes/abuelo.routes.js";
import casaRoutes from "./routes/casa.routes.js";
import adoptadorRoutes from "./routes/adoptador.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cartaRoutes from "./routes/carta.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(
  bodyParser.json({
    limit: "5000mb",
  })
);

app.use(
  bodyParser.urlencoded({
    limit: "5000mb",
    parameterLimit: 1000000000000,
    extended: true,
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/usuario", usuarioRoutes);
app.use("/api/abuelo", abueloRoutes);
app.use("/api/casa", casaRoutes);
app.use("/api/adoptador", adoptadorRoutes);
app.use("/api/carta", cartaRoutes);

export default app;
