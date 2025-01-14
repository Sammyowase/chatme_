import express from "express"
import authRoutes from "./src/routes/auth.route.js";
const app = express();

app.use("/api/auth", authRoutes )

app.listen(8080, ()=>{
    console.log(`server is running on port 8080`);
    
})