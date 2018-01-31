var express = require('express');

//Require corresponding controller here
var testController = require('../controllers/test.controller');

const router = express.Router();

router.route('/')
  /** GET /api/test - Get list of test */
  .get(testController.list);

  /** POST /api/test - Create new test */
  //.post(validate(paramValidation.createUser), testController.create);

router.route('/:testId')
  /** GET /api/test/:testId - Get test */
  .get(testController.get);

  /** PUT /api/test/:testId - Update test */
  //.put(validate(paramValidation.updateUser), testController.update)

  /** DELETE /api/test/:testId - Delete test */
  //.delete(testController.remove);

/** Load user when API with testId route parameter is hit */
router.param('testId', testController.load);

module.exports = router;

