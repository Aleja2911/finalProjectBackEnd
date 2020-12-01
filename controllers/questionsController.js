const client = require("../client");

const questionsController ={
     getAll: (req, res)=> {
        client
        .query("SELECT * FROM questions")
		.then((data) => res.json(data.rows))
		.catch((err) => console.log(err));
    }, 

    getOne: (req, res) => {
      const { id } = req.params;
      client
      .query("SELECT * FROM questions WHERE id=$1", [id])
      .then((data)=> res.json(data.rows))
      .catch((err) => console.log(err))
    },

    addQuestion: (req, res) => {
      const {
        question_name,
	      issue_tackled
      } = req.body;
      const text = "INSERT INTO questions (question_name, issue_tackled) VALUES ($1, $2) RETURNING *";
      const values = [question_name, issue_tackled];
      client
      .query(text, values)
      .then((data)=> res.json(data.rows))
      .catch((err) => console.log(err))
    },

    deleteQuestion: (req, res) => {
      const { id } = req.params; 
      client
      .query("DELETE FROM questions WHERE id=$1 RETURNING *", [id])
      .then((data) => res.json(data.rows))
      .catch((err) => console.log(err))
    }
}

module.exports = questionsController;

