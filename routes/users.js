const router = require("express").Router();
const UsersManager = require("../managers/users");

router.post("/", async (req, res) => {
  try {
    let data = await UsersManager.create(req.body);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.post("/getByEmailAndPassword", async (req, res) => {
  try {
    let data = await UsersManager.getByEmailAndPassword(req.body);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.post("/getByEmail", async (req, res) => {
  try {
    let data = await UsersManager.getByEmail(req.body);
    if(data) return res.status(400).send('User already exist with this email.');
    else return res.status(200).send('Email Available');
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let data = await UsersManager.update(req.params.id, req.body);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    let data = await UsersManager.getAll();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let data = await UsersManager.getById(req.params.id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let data = await UsersManager.delete(req.params.id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.post("/deleteByEmailAndPassword", async (req, res) => {
  try {
    let data = await UsersManager.deleteByEmailAndPassword(req.body);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

module.exports = router;
