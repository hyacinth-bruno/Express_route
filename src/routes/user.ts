// user.ts
import { Request, Router, Response } from "express";

const userList = [
    {id: 1, name: "Andrea", age:3},
    {id: 2, name: "Helen", age:4},
    {id: 3, name: "Hanna", age:5},
]


const userRouter = Router();

//POST => endpoint: http://localhost:5000/users
userRouter.post("/users", (req: Request, res: Response) => {
    //request, response
    const newUser = req.body;
    userList.push(newUser);
    res.json(userList);
});

// GET => endpoint: http://localhost:5000/users/
userRouter.get("/", (req: Request, res: Response) => {
    res.json("This is a get method for user");
});

userRouter.delete("/users/:id", (req: Request, res: Response) => {

    const userId = req.params; 
    const result = userList.filter((user) => user.id !== Number(userId.id));
    res.json(result);
});

export default userRouter;
