import { Router } from 'express';
import { AuthenticateUserController } from './controller/AuthenticateUserController';
import { CreateMessageController } from './controller/CreateMessageController';
import { GetLastThreeMessagesController } from './controller/GetLastThreeMessagesController';
import { UserProfileController } from './controller/UserProfileController';

import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const router = Router();

router.post('/authenticate', new AuthenticateUserController().handle);

router.post('/messages', ensureAuthenticated, new CreateMessageController().handle);

router.get('/messages/last3', new GetLastThreeMessagesController().handle);

router.get('/profile', ensureAuthenticated, new UserProfileController().handle);

export { router };