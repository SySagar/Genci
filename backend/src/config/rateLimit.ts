import { rateLimit } from 'express-rate-limit'


const apiLimiter = rateLimit({
	windowMs:  10 * 1000, 
	limit: 5, 
	standardHeaders: 'draft-7'
})

export default apiLimiter;