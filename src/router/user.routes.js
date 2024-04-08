import { create, get, remove } from "../controllers/user.controller";

const userRoutes = app => {
    app.post("/user", create);
    app.get("/user", get);
    app.delete("/user/:id", remove);
};

export default userRoutes;