const client = require("../client");

const uniProgramsController ={
     getAll: (req, res)=> {
        client
        .query("SELECT * FROM university_program")
		.then((data) => res.json(data.rows))
		.catch((err) => console.log(err));
    },
    getOne: (req, res) => {
        const { id } = req.params;
        client
        .query("SELECT * FROM university_program WHERE id=$1", [id])
        .then((data)=> res.json(data.rows))
        .catch((err) => console.log(err))
      },
  
      addProgram: (req, res) => {
        const {
            program_name,
            university_name,
            duration,
            program_site,
            country,
            city,
            field,
        } = req.body;
        const text = "INSERT INTO university_program (program_name, university_name, duration, program_site, country, city, field) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *";
        const values = [program_name, university_name, duration, program_site, country, city, field];
        client
        .query(text, values)
        .then((data)=> res.json(data.rows))
        .catch((err) => console.log(err))
      },
  
      deleteProgram: (req, res) => {
        const { id } = req.params; 
        client
        .query("DELETE FROM university_program WHERE id=$1 RETURNING *", [id])
        .then((data) => res.send('program row has been deleted'))
        .catch((err) => console.log(err))
      } 
}

module.exports = uniProgramsController; 


	