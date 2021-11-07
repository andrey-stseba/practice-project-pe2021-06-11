const { Router } = require('express');
const contestController = require('./../controllers/contestController');
const checkToken = require('./../middlewares/checkToken');
const basicMiddlewares = require('./../middlewares/basicMiddlewares');
const upload = require('./../utils/fileUpload');

const contsetsRouter = Router();

contsetsRouter.post(
  '/dataForContest',
  checkToken.checkToken,
  contestController.dataForContest
);

contsetsRouter.get(
  '/',
  checkToken.checkToken,
  contestController.getCustomersContests
);

contsetsRouter.get(
  '/:contestId',
  checkToken.checkToken,
  basicMiddlewares.canGetContest,
  contestController.getContestById
);
contsetsRouter.post(
  '/updateContest',
  checkToken.checkToken,
  upload.updateContestFile,
  contestController.updateContest
);
contsetsRouter.post(
  '/getAllContests',
  checkToken.checkToken,
  basicMiddlewares.onlyForCreative,
  contestController.getContests
);
module.exports = contsetsRouter;
