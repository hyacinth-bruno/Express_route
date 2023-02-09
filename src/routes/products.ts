// write product routes here
// product.ts
import { Request, Router, Response } from "express";
const productList = [
    {id: 1, name: "Andrea", age:3},
    {id: 2, name: "Helen", age:4},
    {id: 3, name: "Hanna", age:5},
]

const productRouter = Router();

//POST => endpoint: http://localhost:5000/products
productRouter.post("/products", (req: Request, res: Response) => {
    const newproduct = req.body;
    productList.push(newproduct);
    res.json(productList);
});

// GET => endpoint: http://localhost:5000/products/
productRouter.get("/", (req: Request, res: Response) => {
    res.json("This is a get method for product");
});

//DELETE => endpoint: http://localhost:5000/products/:id
productRouter.delete("/products/:id", (req: Request, res: Response) => {

    const productId = req.params; 
    const result = productList.filter((product) => product.id !== Number(productId.id));
    res.json(result);
});

export default productRouter;
