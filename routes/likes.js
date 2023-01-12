const router = require("express").Router();
const LikesManager = require("../managers/likes");

router.post("/", async (req, res) => {
  try {
    let alreadyExists = await LikesManager.getByUserAndAdId(req.body);
    if (alreadyExists) {
      await LikesManager.delete(alreadyExists._id);
      res.status(400).send("Already Exists");
    } else {
      let data = await LikesManager.create(req.body);
      return res.status(200).send(data);
    }
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let data = await LikesManager.update(req.params.id, req.body);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    let data = await LikesManager.getAll();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let data = await LikesManager.getById(req.params.id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.get("/getByAdId/:id", async (req, res) => {
  try {
    let data = await LikesManager.getByAdId(req.params.id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.get("/getByUserId/:id", async (req, res) => {
  try {
    let data = await LikesManager.getByUserId(req.params.id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.post("/getByUserAndAdId", async (req, res) => {
  try {
    let data = await LikesManager.getByUserAndAdId(req.body);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let data = await LikesManager.delete(req.params.id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

module.exports = router;
