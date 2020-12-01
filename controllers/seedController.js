const db = require("../client");

module.exports.create = async(req, res, next) => {
 	const query =
`CREATE TABLE "questions" (
	"id" serial NOT NULL,
	"question_name" varchar(255) NOT NULL UNIQUE,
	"issue_tackled" varchar(255) NOT NULL,
	CONSTRAINT "questions_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "scientist" (
	"id" serial NOT NULL,
	"first_name" varchar(255) NOT NULL,
	"last_name" varchar(255) NOT NULL,
	"area_expertise" varchar(1000) NOT NULL,
	"field" varchar(1000) ARRAY NOT NULL,
	"issue_tackled" varchar(1000) ARRAY  NOT NULL,
	"wiki_link" varchar(1000) NOT NULL,
	"picture" varchar(1000) NOT NULL,
	"short_description" varchar (400),
	CONSTRAINT "scientist_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


CREATE TABLE "university_program" (
	"id" serial NOT NULL,
	"program_name" varchar(255) NOT NULL,
	"university_name" varchar(255) NOT NULL,
	"duration" varchar(30) NOT NULL,
	"program_site" varchar(255) NOT NULL,
	"country" varchar(255) NOT NULL,
	"city" varchar(255) NOT NULL,
	"field" varchar(500) ARRAY NOT NULL,
	CONSTRAINT "university_program_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "universities" (
	"id" serial NOT NULL,
	"institution_name" varchar(255) NOT NULL,
	"institution_country_code" varchar(20) NOT NULL,
	"institution_city" varchar(255) NOT NULL,
	"website" varchar(255) NOT NULL,
	CONSTRAINT "universities_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "scientist_has_question" (
	"scientist_id" integer NOT NULL,
	"question_id" integer NOT NULL,
	CONSTRAINT "scientist_has_question_pk" PRIMARY KEY ("scientist_id","question_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "scientist_has_program" (
	"scientist_id" integer NOT NULL,
	"program_id" integer NOT NULL,
	CONSTRAINT "scientist_has_program_pk" PRIMARY KEY ("scientist_id","program_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "universities_has_program" (
    "program_id" serial NOT NULL,
	"unviersities_id" serial NOT NULL,
	CONSTRAINT "universities_has_program_pk" PRIMARY KEY ("program_id","unviersities_id")
)	WITH (
    OIDS=FALSE
    ); `
;
try {
    await db.query(query);
    res.send("Database successfully created");
} catch(e){
    console.log(e.message)
}

};




module.exports.destroy = async (req, res, next) => {
	const nukeQuery = `
		  DROP TABLE IF EXISTS questions;
		  DROP TABLE IF EXISTS scientist;
		  DROP TABLE IF EXISTS university_program;
		  DROP TABLE IF EXISTS universities;
		  DROP TABLE IF EXISTS scientist_has_question;
		  DROP TABLE IF EXISTS scientist_has_program;
		  DROP TABLE IF EXISTS universities_has_program;
	  `;
	try {
	  await db.query(nukeQuery);
	  res.send("Database successfully wiped clean");
	} catch (e) {
	  console.log({ destroyDatabaseError: e.message });
	}
  };