// import express from 'express';
// import { isAuth, login, logout, register } from '../controllers/userController.js';
// import authUser from '../middlewares/authUser.js';

// const userRouter = express.Router();

// userRouter.post('/register', register)
// userRouter.post('/login', login)
// userRouter.get('/is-auth', authUser, isAuth)
// userRouter.get('/logout', authUser, logout)

// export default userRouter.
import express from 'express';
import { loginUser, logoutUser } from '../controllers/userController.js';

const router = express.Router();

router.post('/login', loginUser);
router.get('/logout', logoutUser);

export default router;
