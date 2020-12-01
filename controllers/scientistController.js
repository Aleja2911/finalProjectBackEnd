const client = require("../client");

const scientistController ={
    getAll: (req, res)=> {
       client
       .query("SELECT * FROM scientist")
       .then((data) => res.json(data.rows))
       .catch((err) => console.log(err));
   },
   
   getOne: (req, res) => {
    const { id } = req.params;
    client
    .query("SELECT * FROM scientist WHERE id=$1", [id])
    .then((data)=> res.json(data.rows))
    .catch((err) => console.log(err))
  },

  addScientist: (req, res) => {
    const {
        first_name,
        last_name,
        area_expertise,
        field,
        issue_tackled,
        wiki_link,
        picture,
        short_description 
    } = req.body;
    const text = "INSERT INTO scientist (first_name, last_name, area_expertise, field, issue_tackled, wiki_link, picture, short_description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
    const values = [first_name,
        last_name,
        area_expertise,
        field,
        issue_tackled,
        wiki_link,
        picture,
        short_description ];
    client
    .query(text, values)
    .then((data)=> res.json(data.rows))
    .catch((err) => console.log(err))
  },

  deleteScientist: (req, res) => {
    const { id } = req.params; 
    client
    .query("DELETE FROM scientist WHERE id=$1 RETURNING *", [id])
    .then((data) => res.send('scientist row has been deleted'))
    .catch((err) => console.log(err))
  }
}


module.exports = scientistController; 

