// index.ts
import Express, {Request, Response} from "express";
import productRouter from "./routes/products";
import userRouter from "./routes/user";

const app = Express();
app.use(Express.json());
app.use("/products", productRouter);
app.use("/users", userRouter);

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
