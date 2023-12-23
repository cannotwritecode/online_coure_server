import express from 'express'
import authCtrl from '../controllers/auth.controller'
import userCtrl from '../controllers/user.controller'

const router = express.Router()

router.route('/api/users').get(userCtrl.list).post(userCtrl.create)

router
  .route('/api/users/:userId')
  .get(authCtrl.requireSignin, authCtrl.isAdmin, userCtrl.read)
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)

router.param('userId', userCtrl.userByID)

export default router
