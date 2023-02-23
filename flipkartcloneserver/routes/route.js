import express from 'express';

const router = express.Router()


// import controller
import { userSignup } from '../controller/user-controller.js'

router.post('/signup', userSignup)

export default router;
