import { Router } from 'express';
import { getUserAboveAge, getUsers, getRandomUser, checkUserExist, createUser } from '../controllers/user.controllers.js';
const userRouter = Router();

userRouter.route('/createUser').post(createUser);
userRouter.route('/randomUser').get(getRandomUser);
userRouter.route('/checkUser').post(checkUserExist);
userRouter.route('/userAge').post(getUserAboveAge);
userRouter.route('/users').get(getUsers);

export { userRouter };