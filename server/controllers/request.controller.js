export default class RequestController {
  static addRequest(req, res, next) {
    const request = req.inputs
    res.status(201).send({
      message: `request created succesfully`,
      request
    })
  }

  static getRequests(req, res) {

  }

  static getRequest(req, res) {
    console.log(req);
  }

  static updateRequest(req, res) {
    console.log(req);
  }

  static deleteRequest(req, res) {
    console.log(req)
  }
}