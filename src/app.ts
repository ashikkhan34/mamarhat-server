import express from 'express';
import cors from 'cors'
import { foodRouter } from './model/app/foods/foods.route.js';
import { globalErrorHandler } from './model/middleware/globalErrorHandler.js';
import cookieParser from 'cookie-parser'
import { categoryRouter } from './model/app/category/category.route.js';
import { orderRouter } from './model/app/order/order.route.js';
import { reviewRouter } from './model/app/review/review.route.js';
import { userRouter } from './model/app/user/user.route.js';
import { cartRouter } from './model/app/cart/cart.route.js';
import { authRouter } from './model/auth/auth.route.js';
import { restaurantRouter } from './model/app/restaurant/restaurant.route.js';

const app = express()

app.use(cors())
app.use(express.json())
app.use(globalErrorHandler)
app.use(cookieParser());

app.use('/api/food',foodRouter)
app.use('/api/category',categoryRouter)
app.use('/api/order',orderRouter)
app.use('/api/review',reviewRouter)
app.use('/api/user',userRouter)
app.use('/api/cart',cartRouter)
app.use('/api/auth',authRouter)
app.use('/api/restaurant',restaurantRouter)

app.get('/', (req, res) => {
  res.send('mamarhat is running')
})

export default app;