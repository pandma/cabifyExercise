module.exports = (app) => {
  app.use((req, res, next) => {
    res.status(404).json({ errorMessage: "This route does not exist" });
  });

  app.use((err, req, res, next) => {
    console.error("ERROR", req.method, req.path, err);

    if (err.response && err.response.data.includes(`This is a "controlled" 500 error.`)) {
      res.status(500).json({ message: "this is a controlled 500 error" })
    }

    else {
      err.response ?
        res.status(err.response.status).json({ message: `${err.message}` })
        :
        res.status(err.statusCode).json({ message: `${err.message}` })
    }
  });

};
