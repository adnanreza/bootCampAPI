/**
 * @desc Get all bootcamps
 * @route GET /api/v1/bootcamps
 * @access Public
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: 'true', msg: 'Show all bootcamps' });
};

/**
 * @desc Get a single bootcamps
 * @route GET /api/v1/bootcamps/:id
 * @access Public
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: 'true', msg: `Show bootcamp ${req.params.id}` });
};

/**
 * @desc Create new bootcamp
 * @route POST /api/v1/bootcamps/
 * @access Private
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: 'true', msg: 'Create new bootcamp' });
};

/**
 * @desc Update bootcamp
 * @route PUT /api/v1/bootcamps/:id
 * @access Private
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: 'true', msg: `Update bootcamp ${req.params.id}` });
};

/**
 * @desc Delete bootcamp
 * @route DELETE /api/v1/bootcamps/:id
 * @access Private
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: 'true', msg: `Delete bootcamp ${req.params.id}` });
};
