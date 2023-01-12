const router = require("express").Router();
const AdsManager = require("../managers/ads");

router.post("/", async (req, res) => {
  try {
    let data = await AdsManager.create(req.body);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.put("/:id", async (req, res) => {
  try {
    let data = await AdsManager.update(req.params.id, req.body);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    let data = await AdsManager.getAll();
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    let data = await AdsManager.getById(req.params.id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.get("/getByUserId/:id", async (req, res) => {
  try {
    let data = await AdsManager.getByUserId(req.params.id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    let data = await AdsManager.delete(req.params.id);
    return res.status(200).send(data);
  } catch (err) {
    return res.status(501).send({ message: err.message });
  }
});

module.exports = router;
