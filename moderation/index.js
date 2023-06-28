const app = require("express")();
const bodyPareser = require("body-parser");
const axios = require("axios");

app.use(bodyPareser.json());

app.post("/events", async (req, res) => {
  if (req.body.type === "CommentCreated") {
    const { data } = req.body;
    const status = data.content.includes("orange") ? "rejected" : "approved";

    await axios.post("http://event-bus-srv:4005/events", {
      type: "CommentModerated",
      data: {
        id: data.id,
        postId: data.postId,
        status,
        content: data.content,
      },
    });
  }

  res.send({});
});

app.listen(4003, () => console.log("Listening on 4003"));
