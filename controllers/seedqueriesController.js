const db = require("../client");

module.exports.seedPart1 = async (req, res, next) => {
  //Questions query
  const questionsQuery = `
    INSERT INTO questions (question_name, issue_tackled) VALUES
    ('I would like to help protect the environment', 'Environmental preservation'), 
    ('I would like to understand what is the universe made of', 'Physics'), 
    ('I would like to learn how atoms and molecules interact via chemical bonds to form new chemical compounds', 'Chemistry'), 
    ('I would like to work on improving food accessibility', 'Food Accesibility'), 
    ('I would like to help cure diseases','Medicine'), 
    ('I would like to know if there are other universes', 'Understanding the universe' ), 
    ('I would like to help find affordable clean energy', 'Alternative energies'), 
    ('I would like to develop new technologies', 'New technologies'), 
    ('I would like know what the starts have to tell us about us and the universe','Astronomy'),
    ('I would like to know how different are other planets from earth', 'Planetary Science'),
    ('I would like to develop new materials to make safer, more affordable working gears', 'Materials development')
    RETURNING *;
`;
  try {
    const {rows} = await db.query(questionsQuery);
    res.status(201).json(rows)
} 
  catch (e) {
    console.log({ questionSeedError: e.message });
  }
};


module.exports.seedPart2 = async (req, res, next) => {
     // Scientist query
    const scientistsQuery = `
      INSERT INTO scientist (first_name, 
        last_name,
        area_expertise,
        field,
        issue_tackled,
        wiki_link,
        picture) VALUES
      ('Eugenie', 'Clark', 'Ichthyologist', '{"Biology"}', '{"Environmental preservation"}', 'https://en.wikipedia.org/wiki/Eugenie_Clark',	'http://www.alertdiver.com/cdn/13649.jpg'),
      ('Susan', 'Solomon',	'Atmospheric Chemist',	'{"Chemistry"}',	'{"Environmental preservation", "Chemistry"}',	'https://en.wikipedia.org/wiki/Susan_Solomon' , 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Susan_Solomon-Desk_With_Globe.jpg/1024px-Susan_Solomon-Desk_With_Globe.jpg'),
      ('Donna Theo', 'Strickland', 'Physics, Optics, and Lasers', '{"Physics"}', '{"Medicine", "New technologies"}',	'https://en.wikipedia.org/wiki/Donna_Strickland',	'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Donna_Strickland_EM1B5760_%2846183560632%29_%28cropped%29.jpg/220px-Donna_Strickland_EM1B5760_%2846183560632%29_%28cropped%29.jpg'),
      ('Linda', 'Brown Buck', 'Biologist', '{"Biology"}', '{"Medicine"}', 'https://en.wikipedia.org/wiki/Linda_B._Buck', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Linda_Buck_2015_%28cropped%29.jpg/200px-Linda_Buck_2015_%28cropped%29.jpg'),
      ('Carol Widney', 'Greider',	'Molecular Biologist', '{"Biology"}', '{"Medicine"}', 'https://en.wikipedia.org/wiki/Carol_W._Greider', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/GREIDER_Carol_2014_-_Less_vignetting.jpg/220px-GREIDER_Carol_2014_-_Less_vignetting.jpg'),
      ('Elizabeth Helen',	'Blackburn',	'Molecular Biologist', '{"Biology"}', '{"Medicine"}', 'https://en.wikipedia.org/wiki/Elizabeth_Blackburn', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Elizabeth_Blackburn_CHF_Heritage_Day_2012_Rush_001.JPG/250px-Elizabeth_Blackburn_CHF_Heritage_Day_2012_Rush_001.JPG'),
      ('Susan Jocelyn',	'Bell Burnell',	'Astrophysicist',	'{"Physics"}',	'{"Understanding the universe"}',	'https://en.wikipedia.org/wiki/Jocelyn_Bell_Burnell',	'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Launch_of_IYA_2009%2C_Paris_-_Grygar%2C_Bell_Burnell_cropped.jpg/220px-Launch_of_IYA_2009%2C_Paris_-_Grygar%2C_Bell_Burnell_cropped.jpg'),
      ('Jane',	'Morris Goodall',	'Anthropologist and Primatologist',	'{"Biology"}', '{"Environmental preservation"}',	'https://en.wikipedia.org/wiki/Jane_Goodall', 'https://themuslimtimesdotinfodotcom.files.wordpress.com/2019/09/jane-goodall.jpg?w=667'),
      ('Virginia',	'H. Holsinger',	'Chemistry and Food Science',	'{"Chemistry"}',	'{"Food Accesibility", "Chemistry"}',	'https://en.wikipedia.org/wiki/Virginia_Holsinger',	'https://cen.acs.org/content/dam/cen/87/41/8741obits_3.jpg'),
      ('Rachel',	'Louise Carson',	 'Marine Biologist, Conservationist, and Author', '{"Biology"}', '{"Environmental preservation"}',	'https://en.wikipedia.org/wiki/Rachel_Carson',	'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Rachel-Carson.jpg/220px-Rachel-Carson.jpg'),
      ('Lydia',	'Villa-Komaroff',	'Molecular Biology', '{"Biology"}', '{"Materials development"}',	'https://en.wikipedia.org/wiki/Lydia_Villa-Komaroff',	'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Lydia_Villa-Komaroff-2.jpg/220px-Lydia_Villa-Komaroff-2.jpg'),
      ('Chien-Shiung',	'Wu',	'Experimental Physicist', '{"Physics"}', 	'{"Physics"}', 'https://en.wikipedia.org/wiki/Chien-Shiung_Wu',	'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Chien-Shiung_Wu_%281912-1997%29_in_1958.jpg/220px-Chien-Shiung_Wu_%281912-1997%29_in_1958.jpg'),
      ('Ruth Rogan', 'Benerito',	'Chemist',	'{"Chemistry"}',	'{"Materials development", "Chemistry"}',	'https://en.wikipedia.org/wiki/Ruth_R._Benerito', 'https://upload.wikimedia.org/wikipedia/en/9/95/Ruth_R._Benerito.jpg'),
      ('Lise',	'Meitner',	'Physicist', '{"Physics"}',	'{"Physics"}',	'https://en.wikipedia.org/wiki/Lise_Meitner',	'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lise_Meitner_%281878-1968%29%2C_lecturing_at_Catholic_University%2C_Washington%2C_D.C.%2C_1946.jpg/220px-Lise_Meitner_%281878-1968%29%2C_lecturing_at_Catholic_University%2C_Washington%2C_D.C.%2C_1946.jpg'),
      ('Marie',	'Skłodowska Curie',	'Physicist and Chemist',	'{"Physics", "Chemistry"}',	'{"Medicine", "Chemistry"}',	'https://en.wikipedia.org/wiki/Marie_Curie',	'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Marie_Curie_c1920.jpg/220px-Marie_Curie_c1920.jpg'),
      ('Rosalind',	'Franklin',	'Chemist and X-Rray Crystallographer',	'{"Chemistry"}',	'{"Medicine", "Chemistry"}',	'https://en.wikipedia.org/wiki/Rosalind_Franklin',	'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Rosalind_Franklin_%281920-1958%29.jpg/220px-Rosalind_Franklin_%281920-1958%29.jpg'),
      ('Jennifer Anne', 'Doudna',	'Biochemist',	'{"Biology", "Chemistry"}',	'{"Medicine"}',	'https://en.wikipedia.org/wiki/Jennifer_Doudna',	'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Professor_Jennifer_Doudna_ForMemRS.jpg/220px-Professor_Jennifer_Doudna_ForMemRS.jpg'),
      ('Maria',	'Goeppert Mayer',	'Theoretical Physicist',	'{"Physics"}',	'{"Physics"}',	'https://en.wikipedia.org/wiki/Maria_Goeppert_Mayer',	'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Maria_Goeppert-Mayer_portrait.jpg/220px-Maria_Goeppert-Mayer_portrait.jpg'),
      ('Lisa',	'Randall',	'Theoretical Physicist',	'{"Physics"}',	'{"Understanding the universe"}',	'https://en.wikipedia.org/wiki/Lisa_Randall',	'https://upload.wikimedia.org/wikipedia/commons/8/8a/Lisa-randall-at-ted-cropped.jpg'),
      ('Alice Augusta',	'Ball',	'Chemist',	'{"Chemistry"}', '{"Medicine", "Chemistry"}',	'https://en.wikipedia.org/wiki/Alice_Ball',	'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Alicia_Augusta_Ball.jpg/220px-Alicia_Augusta_Ball.jpg'),
      ('Williamina Paton',	'Stevens Fleming',	'Astronomer',	'{"Astronomy"}',	'{"Understanding the universe", "Astronomy"}',	'https://en.wikipedia.org/wiki/Williamina_Fleming',	'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Williamina_Paton_Stevens_Fleming_circa_1890s.jpg/200px-Williamina_Paton_Stevens_Fleming_circa_1890s.jpg'),
      ('Annie',	'Jump Cannon',	'Astronomer',	'{"Astronomy"}', '{"Understanding the universe", "Astronomy"}',	'https://en.wikipedia.org/wiki/Annie_Jump_Cannon',	'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Annie_Jump_Cannon_1922_Portrait.jpg/220px-Annie_Jump_Cannon_1922_Portrait.jpg'),
      ('Isabella',	'Karle',	'Chemist',	'{"Chemistry"}',	'{"Medicine", "Chemistry"}',	'https://en.wikipedia.org/wiki/Isabella_Karle',	'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Isabella-karle-nrl-2009.jpg/220px-Isabella-karle-nrl-2009.jpg'),
      ('Gerty Theresa',	'Cori',	'Biochemist',	'{"Biology", "Chemistry"}',	'{"Medicine"}',	'https://en.wikipedia.org/wiki/Gerty_Cori',	'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Gerty_Theresa_Cori.jpg/220px-Gerty_Theresa_Cori.jpg'),
      ('Caroline',	'Herschel',	'Astronomer',	'{"Astronomy"}',	'{"Understanding the universe", "Astronomy"}',	'https://en.wikipedia.org/wiki/Caroline_Herschel',	'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/1829_Melchior_Gommar_Tieleman%2C_%C3%96lgem%C3%A4lde_Caroline_Herschel_Hannover.tif/lossy-page1-220px-1829_Melchior_Gommar_Tieleman%2C_%C3%96lgem%C3%A4lde_Caroline_Herschel_Hannover.tif.jpg'),
      ('Annie',	'Scott Dill Maunder',	'Astronomer',	'{"Astronomy"}',	'{"Understanding the universe", "Astronomy"}',	'https://en.wikipedia.org/wiki/Annie_S._D._Maunder',	'https://upload.wikimedia.org/wikipedia/commons/f/f6/Annie-Scott-Dill-Maunder-ne-Russell.jpg'),
      ('Sara',	'Seager',	'Astronomer and Planetary Scientist',	'{"Astronomy"}',	'{"Understanding the universe", "Astronomy"}',	'https://en.wikipedia.org/wiki/Sara_Seager',	'https://mediad.publicbroadcasting.net/p/ktep/files/styles/medium/public/201806/seager_sara.jpg'),
      ('Mary Lucy',	'Cartwright',	'Mathematician',	'{"Mathematics"}',	'{"Understanding the universe"}',	'https://en.wikipedia.org/wiki/Mary_Cartwright',	'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Mary_cartwright.jpg/220px-Mary_cartwright.jpg'),
      ('Amalie',	'Emmy Noether',	'Mathematician',	'{"Mathematics"}',	'{"Understanding the universe"}',	'https://en.wikipedia.org/wiki/Emmy_Noether',	'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Noether.jpg/220px-Noether.jpg'),
      ('Sofya',	'Vasilyevna Kovalevskaya',	'Mathematician',	'{"Mathematics"}',	'{"Understanding the universe"}',	'https://en.wikipedia.org/wiki/Sofya_Kovalevskaya',	'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sofja_Wassiljewna_Kowalewskaja_1.jpg/220px-Sofja_Wassiljewna_Kowalewskaja_1.jpg'),
      ('Augusta Ada',	'Lovelace',	'Mathematician and Writer',	'{"Mathematics"}',	'{"New technologies"}',	'https://en.wikipedia.org/wiki/Ada_Lovelace', 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Ada_Byron_daguerreotype_by_Antoine_Claudet_1843_or_1850.jpg'),
      ('Grace',	'Hopper',	'Computer Scientist',	'{"Computer Science"}',	'{"New technologies"}',	'https://en.wikipedia.org/wiki/Grace_Hopper', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg/220px-Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg'),
      ('Gladys',	'Mae West',	'Mathematician',	'{"Mathematics"}',	'{"New technologies"}',	'https://en.wikipedia.org/wiki/Gladys_West',	'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Dr_Gladys_West_Hall_of_Fame.jpg/220px-Dr_Gladys_West_Hall_of_Fame.jpg'),
      ('Maryam',	'Mirzakhani',	'Mathematician',	'{"Mathematics"}',	'{"Planetary Science"}',	'https://en.wikipedia.org/wiki/Maryam_Mirzakhani',	'https://upload.wikimedia.org/wikipedia/commons/b/b1/Maryam_Mirzakhani_in_Seoul_2014.jpg'),
      ('Karen',	'Keskulla Uhlenbeck',	'Mathematician',	'{"Mathematics"}', '{"Physics"}',	'https://en.wikipedia.org/wiki/Karen_Uhlenbeck',	'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Uhlenbeck_Karen_1982_%28cropped%29.jpg/220px-Uhlenbeck_Karen_1982_%28cropped%29.jpg'),
      ('Ingrid',	'Daubechies',	'Physicist and Mathematician',	'{"Mathematics", "Physics"}',	'{"New technologies"}',	'https://en.wikipedia.org/wiki/Ingrid_Daubechies',	'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Ingrid_Daubechies_%282005%29.jpg/220px-Ingrid_Daubechies_%282005%29.jpg'),
      ('Ada E.',	'Yonath',	'Crystallographer',	'{"Chemistry"}', '{"Medicine", "Chemistry"}', 'https://en.wikipedia.org/wiki/Ada_Yonath',	'https://www.lindau-nobel.org/wp-content/uploads/2015/03/Yonath-e1426590932177.jpg'),
      ('Hedy',	'Lamarr',	'Inventor, Actress, and Film Producer - Radio Signals',	'{"Engineering"}',	'{"New technologies"}',	'https://en.wikipedia.org/wiki/Hedy_Lamarr',	'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Hedy_Lamarr_in_The_Heavenly_Body_1944.jpg/220px-Hedy_Lamarr_in_The_Heavenly_Body_1944.jpg'),
      ('Tu',	'Youyou',	'Malariologist and Pharmaceutical Chemist',	'{"Chemistry",  "Medicine"}',	'{"Medicine", "Chemistry"}', 'https://en.wikipedia.org/wiki/Tu_Youyou',	'https://lh3.googleusercontent.com/proxy/f50p-ZkXcz1OoOBGVTTf-eIUJdM67jSGhR08GGp65_16Lai3B8UGCZ1SL9purrI_WJKADXhS-sdSsskgajO-7KKSYIr38la0Zf--8N-XgjpsFIVikKk'),
      ('Rita', 'Levi-Montalcini',	'Neurobiologist',	'{"Neurobiology"}', '{"Medicine"}',	'https://en.wikipedia.org/wiki/Rita_Levi-Montalcini',	'https://upload.wikimedia.org/wikipedia/en/thumb/7/78/Rita_Levi-Montalcini_bandw.jpg/220px-Rita_Levi-Montalcini_bandw.jpg'),
      ('Gertrude Belle',	'Elion',	'Pharmacologist and Biochemist', '{"Biology", "Chemistry",  "Medicine"}',	'{"Medicine", "Chemistry"}', 'https://en.wikipedia.org/wiki/Gertrude_B._Elion',	'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Gertrude_Elion.jpg/220px-Gertrude_Elion.jpg'),
      ('Dorothy Mary',	'Crowfoot Hodgkin',	 'Chemist',  '{"Biology", "Chemistry",  "Medicine"}',	'{"Medicine", "Chemistry"}', 'https://en.wikipedia.org/wiki/Dorothy_Hodgkin',	'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Dorothy_Hodgkin_Nobel.jpg/220px-Dorothy_Hodgkin_Nobel.jpg'),
      ('Barbara',	'McClintock',	'Cytogeneticist',	'{"Medicine"}',	'{"Medicine"}',	'https://en.wikipedia.org/wiki/Barbara_McClintock',	'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Barbara_McClintock_%281902-1992%29_shown_in_her_laboratory_in_1947.jpg/220px-Barbara_McClintock_%281902-1992%29_shown_in_her_laboratory_in_1947.jpg'),
      ('Mary', 'Engle Pennington',	'Refrigeration Engineer and Bacteriological Chemist',	'{"Chemistry",  "Engineering"}',	'{"Food Accesibility", "Chemistry", "New technologies"}',	'https://en.wikipedia.org/wiki/Mary_Engle_Pennington',	'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Mary_Engle_Pennington_%281872-1952%29.jpg/220px-Mary_Engle_Pennington_%281872-1952%29.jpg'),
      ('Virginia',	'Apgar',	'Obstetrical Anesthesiologist',	'{"Chemistry",  "Medicine"}',	'{"Medicine"}',	'https://en.wikipedia.org/wiki/Virginia_Apgar',	'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Virginia-Apgar-July-6-1959.jpg/220px-Virginia-Apgar-July-6-1959.jpg'),
      ('May-Britt',	'Moser',	'Neuroscientist and Psychologist',	'{"Medicine", "Neurobiology"}', '{"Medicine"}',	'https://en.wikipedia.org/wiki/May-Britt_Moser', 'https://www.nobelprize.org/images/may-britt-moser-15191-portrait-medium.jpg'),
      ('Françoise',	'Barré-Sinoussi',	'Virologist',	'{"Medicine", "Biology"}',	'{"Medicine"}',	'https://en.wikipedia.org/wiki/May-Britt_Moser',	'https://www.nobelprize.org/images/may-britt-moser-15191-portrait-medium.jpg'),
      ('Frances',	'Hamilton Arnold',	'Chemical Engineer',	'{"Chemistry", "Engineering"}',	'{"Medicine", "Alternative energies"}',	'https://en.wikipedia.org/wiki/Frances_Arnold',	'https://www.mediatheque.lindau-nobel.org/Content/Assets/Medium/38459___arnold_frances_h_chemistry.jpg'),
      ('Valentina',	'Vladimirovna Tereshkova',	'Engineer and Former Cosmonaut',	'{"Engineering"}',	'{"Space science"}',	'https://en.wikipedia.org/wiki/Valentina_Tereshkova',	'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Valentina_Tereshkova_%28January_1963%29.jpg/170px-Valentina_Tereshkova_%28January_1963%29.jpg'),
      ('Brenda',	'Milner',	'Neuropsychologist',	'{"Medicine", "Neurobiology"}',	'{"Medicine"}',	'https://en.wikipedia.org/wiki/Brenda_Milner',	'https://www.balzan.org/upload/qtasccrbvnb42mm2a1qzl4ce201302201624Milner.jpg'),
      ('Katherine',	'Johnson',	'Mathematician',	'{"Mathematics"}',	'{"Planetary Science"}',	'https://en.wikipedia.org/wiki/Katherine_Johnson',	'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Katherine_Johnson_1983.jpg/220px-Katherine_Johnson_1983.jpg'),
      ('Mary', 	'Jackson',	'Mathematician and Aerospace Engineer',	'{"Engineering"}',	'{"Understanding the universe"}',	'https://en.wikipedia.org/wiki/Mary_Jackson_(engineer)',	'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Mary_Jackson_1979_Portrait_%28LRC-1979-B701_P-07085%29.jpg/220px-Mary_Jackson_1979_Portrait_%28LRC-1979-B701_P-07085%29.jpg'),
      ('Dorothy', 	'Vaughan',	'Mathematician',	'{"Mathematics"}',	'{"Understanding the universe"}',	'https://en.wikipedia.org/wiki/Dorothy_Vaughan',	'https://cdn.shopify.com/s/files/1/0181/1347/files/doroth_vaughan_nasa_2_resize_md.jpg?v=1576107375'),
      ('Claudia', 	'Alexander',	'Planetary Scientist',	'{"Geology"}',	'{"Planetary Science"}', 'https://en.wikipedia.org/wiki/Claudia_Alexander',	'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Claudia_Alexander.jpg/230px-Claudia_Alexander.jpg')
      RETURNING *;`
      ;
  
    try {
        const {rows} = await db.query(scientistsQuery);
    res.status(201).json(rows)
    } catch (e) {
      console.log({ scientistSeedError: e.message });
    }
  
  };


  module.exports.seedPart3 = async (req, res, next) => {
    // university Programs query
   const uniprogramsQuery = `INSERT INTO university_program (program_name, university_name, duration, program_site, country, city, field) VALUES
   ('Chemical Engineer', 'University of Cambridge', '3 years',  'https://www.undergraduate.study.cam.ac.uk/courses/chemical-engineering', 'United Kingdom', 'Cambridge', '{"Chemistry"}'), 
   ('Chemical Engineer', 'University of Cambridge', '3 years',  'https://www.undergraduate.study.cam.ac.uk/courses/computer-science', 'United Kingdom', 'Cambridge', '{"Computer science"}'),  
   ('Engineering', 'University of Cambridge',  '3 years',  'https://www.undergraduate.study.cam.ac.uk/courses/engineering', 'United Kingdom', 'Cambridge', '{"Engineering"}'), 
   ('Manufacturing Engineering', 'University of Cambridge', '3 years',  'https://www.undergraduate.study.cam.ac.uk/courses/manufacturing-engineering', 'United Kingdom', 'Cambridge', '{"Engineering"}'), 
   ('Mathematics', 'University of Cambridge', '3 years', 'https://www.undergraduate.study.cam.ac.uk/courses/mathematics', 'United Kingdom', 'Cambridge', '{"Mathematics"}'), 
   ('Aeronautical Engineering', 'Imperial College London', '4 years', 'https://www.imperial.ac.uk/study/ug/courses/aeronautics-department/aeronautical-engineering/', 'United Kingdom', 'London', '{"Engineering"}'), 
   ('Aeronautics with Spacecraft Engineering', 'Imperial College London', '4 years', 'https://www.imperial.ac.uk/study/ug/courses/aeronautics-department/aeronautics-spacecraft-engineering/', 'United Kingdom', 'London', '{"Engineering"}'), 
   ('Biochemistry', 'Imperial College London', '3 years', 'https://www.imperial.ac.uk/study/ug/courses/life-sciences-department/biochemistry-bsc/', 'United Kingdom', 'London', '{"Engineering", "Biology"}'), 
   ('Biological Sciences', 'Imperial College London', '3 years', 'https://www.imperial.ac.uk/study/ug/courses/life-sciences-department/biological-sciences-bsc/', 'United Kingdom', 'London', '{"Biology"}'), 
   ('Biomedical Engineering', 'Imperial College London', '4 years', 'https://www.imperial.ac.uk/study/ug/courses/bioengineering-department/biomedical-engineering-meng/', 'United Kingdom', 'London', '{"Biology", "Engineering"}'), 
   ('Biotechnology', 'Imperial College London', '3 years', 'https://www.imperial.ac.uk/study/ug/courses/life-sciences-department/biotechnology-bsc/', 'United Kingdom', 'London', '{"Biology"}'), 
   ('Chemical Engineering', 'Imperial College London', '4 years', 'https://www.imperial.ac.uk/study/ug/courses/chemical-engineering-department/chemical-engineering/', 'United Kingdom', 'London', '{"Chemistry", "Engineering"}'), 
   ('Chemistry', 'Imperial College London', '3 years', 'https://www.imperial.ac.uk/study/ug/courses/chemistry-department/chemistry-bsc/', 'United Kingdom', 'London', '{"Chemistry"}'), 
   ('Chemistry with Molecular Physics', 'Imperial College London', '4 years', 'https://www.imperial.ac.uk/study/ug/courses/chemistry-department/chemistry-molecular-physics-msci/', 'United Kingdom', 'London', '{"Chemistry", "Physics"}'), 
   ('Computing', 'Imperial College London', '3 years', 'https://www.imperial.ac.uk/study/ug/courses/computing-department/computing-beng/', 'United Kingdom', 'London', '{"Computer science"}'), 
   ('Computing (Artificial Intelligence and Machine Learning)', 'Imperial College London', '4 years', 'https://www.imperial.ac.uk/study/ug/courses/computing-department/meng-computing-artificial-intelligence/', 'United Kingdom', 'London', '{"Computer science"}'), 
   ('Design Engineering', 'Imperial College London', '4 years', 'https://www.imperial.ac.uk/study/ug/courses/school-design-engineering/design-engineering/', 'United Kingdom', 'London', '{"Engineering"}'), 
   ('Earth and Planetary Science', 'Imperial College London', '3 years', 'https://www.imperial.ac.uk/study/ug/courses/earth-science-department/planetary-science-bsc/', 'United Kingdom', 'London', '{"Planetary Science"}'), 
   ('Ecology and Environmental Biology', 'Imperial College London', '3 years', 'https://www.imperial.ac.uk/study/ug/courses/life-sciences-department/ecology-and-environmental-biology-bsc/', 'United Kingdom', 'London', '{"Enviromental Science", "Biology"}'), 
   ('Electrical and Electronic Engineering', 'Imperial College London', '3 years', 'https://www.imperial.ac.uk/study/ug/courses/electrical-engineering-department/electrical-and-electronic-engineering-beng/', 'United Kingdom', 'London', '{"Engineering"}'), 
   ('Geology', 'Imperial College London', '3 years', 'https://www.imperial.ac.uk/study/ug/courses/earth-science-department/geology-bsc/', 'United Kingdom', 'London', '{"Planetary Science"}'), 
   ('Geophysics', 'Imperial College London', '3 years', 'https://www.imperial.ac.uk/study/ug/courses/earth-science-department/geophysics-bsc/', 'United Kingdom', 'London', '{"Planetary Science"}'), 
   ('Materials Science and Engineering', 'Imperial College London', '3 years', 'https://www.imperial.ac.uk/study/ug/courses/materials-department/materials-science-and-engineering-beng/', 'United Kingdom', 'London', '{"Materials Science", "Engineering"}'), 
   ('Materials with Nuclear Engineering', 'Imperial College London', '4 years', 'https://www.imperial.ac.uk/study/ug/courses/materials-department/materials-with-nuclear-engineering-meng/', 'United Kingdom', 'London', '{"Materials Science", "Physics"}'), 
   ('Mathematics', 'Imperial College London', '3 years', 'https://www.imperial.ac.uk/study/ug/courses/mathematics-department/mathematics-bsc/', 'United Kingdom', 'London', '{"Mathematics"}'), 
   ('Mechanical Engineering', 'Imperial College London', '3 years', 'https://www.imperial.ac.uk/study/ug/courses/mechanical-engineering-department/mechanical-engineering-meng/', 'United Kingdom', 'London', '{"Engineering"}'), 
   ('Medical Biosciences', 'Imperial College London', '3 years', 'https://www.imperial.ac.uk/study/ug/courses/biomedical-science/medical-biosciences/', 'United Kingdom', 'London', '{"Medicine", "Biology"}'), 
   ('Medicine', 'Imperial College London', '6 years', 'https://www.imperial.ac.uk/study/ug/courses/school-of-medicine/medicine/', 'United Kingdom', 'London', '{"Medicine"}'), 
   ('Microbiology', 'Imperial College London', '3 years', 'https://www.imperial.ac.uk/study/ug/courses/life-sciences-department/microbiology-bsc/', 'United Kingdom', 'London', '{"Biology"}'), 
   ('Molecular Bioengineering', 'Imperial College London', '4 years', 'https://www.imperial.ac.uk/study/ug/courses/bioengineering-department/molecular-bioengineering-meng/', 'United Kingdom', 'London', '{"Physics", "Engineering"}'), 
   ('Physics', 'Imperial College London', '3 years', 'https://www.imperial.ac.uk/study/ug/courses/physics-department/physics-bsc/', 'United Kingdom', 'London', '{"Physics"}'), 
   ('Environmental Engineering', 'ETH Zurich', '3 years', 'https://ethz.ch/en/studies/prospective-bachelors-degree-students/bachelors-degree-programmes/architecture-and-civil-engineering/environmental-engineering.html', 'Switzerland', 'Zurich', '{"Enviromental", "Science	Engineering"}'), 
   ('Geospatial Engineering', 'ETH Zurich', '3 years', 'https://ethz.ch/en/studies/prospective-bachelors-degree-students/bachelors-degree-programmes/architecture-and-civil-engineering/geospatial-engineering.html', 'Switzerland', 'Zurich', '{"Planetary Science", "Engineering"}'), 
   ('Electrical Engineering and Information Technology', 'ETH Zurich', '3 years', 'https://ethz.ch/en/studies/prospective-bachelors-degree-students/bachelors-degree-programmes/engineering-sciences/electrical-engineering-and-information-technology.html', 'Switzerland', 'Zurich', '{"Engineering"}'), 
   ('Computer Science (German)', 'ETH Zurich', '3 years', 'https://ethz.ch/de/studium/bachelor/studienangebot/ingenieurwissenschaften/informatik.html', 'Switzerland', 'Zurich', '{"Computer science"}'), 
   ('Mechanical Engineering', 'ETH Zurich', '3 years', 'https://ethz.ch/en/studies/prospective-bachelors-degree-students/bachelors-degree-programmes/engineering-sciences/mechanical-engineering.html', 'Switzerland', 'Zurich', '{"Engineering"}'), 
   ('Materials Science', 'ETH Zurich', '3 years', 'https://ethz.ch/en/studies/prospective-bachelors-degree-students/bachelors-degree-programmes/engineering-sciences/materials-science.html', 'Switzerland', 'Zurich', '{"Materials Science"}'), 
   ('Biology', 'ETH Zurich', '3 years', 'https://ethz.ch/en/studies/prospective-bachelors-degree-students/bachelors-degree-programmes/natural-sciences-and-mathematics/biology.html', 'Switzerland', 'Zurich', '{"Biology"}'), 
   ('Biochemistry – Chemical Biology', 'ETH Zurich', '3 years', 'https://ethz.ch/en/studies/prospective-bachelors-degree-students/bachelors-degree-programmes/natural-sciences-and-mathematics/Biochemie_ChemischeBiologie.html', 'Switzerland', 'Zurich', '{"Biology", "Chemistry"}'), 
   ('Computational Science and Engineering', 'ETH Zurich', '3 years', 'https://ethz.ch/en/studies/prospective-bachelors-degree-students/bachelors-degree-programmes/natural-sciences-and-mathematics/computational-science-and-engineering.html', 'Switzerland', 'Zurich', '{"Computer science"}'), 
   ('Mathematics', 'ETH Zurich', '3 years', 'https://ethz.ch/en/studies/prospective-bachelors-degree-students/bachelors-degree-programmes/natural-sciences-and-mathematics/mathematics.html', 'Switzerland', 'Zurich', '{"Mathematics"}'), 
   ('Pharmaceutical Sciences', 'ETH Zurich', '3 years', 'https://ethz.ch/en/studies/prospective-bachelors-degree-students/bachelors-degree-programmes/natural-sciences-and-mathematics/pharmaceutical-sciences.html', 'Switzerland', 'Zurich', '{"Chemistry", "Biology"}'), 
   ('Physics', 'ETH Zurich', '3 years', 'https://ethz.ch/en/studies/prospective-bachelors-degree-students/bachelors-degree-programmes/natural-sciences-and-mathematics/physics.html', 'Switzerland', 'Zurich', '{"Physics"}'), 
   ('Food Science', 'ETH Zurich', '3 years', 'https://ethz.ch/en/studies/prospective-bachelors-degree-students/bachelors-degree-programmes/system-oriented-natural-sciences/food-science.html', 'Switzerland', 'Zurich', '{"Food Science"}'), 
   ('Earth Science', 'ETH Zurich', '3 years', 'https://ethz.ch/en/studies/prospective-bachelors-degree-students/bachelors-degree-programmes/system-oriented-natural-sciences/earth-sciences.html', 'Switzerland', 'Zurich', '{"Planetary Science"}'), 
   ('Health Sciences and Technology', 'ETH Zurich', '3 years', 'https://ethz.ch/en/studies/prospective-bachelors-degree-students/bachelors-degree-programmes/system-oriented-natural-sciences/health-sciences-and-technology.html', 'Switzerland', 'Zurich', '{"Medicine", "Engineering"}'), 
   ('Biochemistry BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/biochemistry-bsc/', 'United Kingdom', 'London', '{"Chemistry", "Biology"}'), 
   ('Biological Sciences BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/biological-sciences-bsc/', 'United Kingdom', 'London', '{"Biology"}'), 
   ('Biomedical Sciences BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/biomedical-sciences-bsc/', 'United Kingdom', 'London', '{"Biology", "Medicine"}'), 
   ('Infection and Immunity BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/infection-immunity-bsc/', 'United Kingdom', 'London', '{"Medicine", "Biology"}'), 
   ('Neuroscience BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/neuroscience-bsc/', 'United Kingdom', 'London', '{"Neurobiology"}'), 
   ('Pharmacology BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/pharmacology-bsc/', 'United Kingdom', 'London', '{"Chemistry", "Biology"}'), 
   ('Computer Science', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/computer-science-bsc/', 'United Kingdom', 'London', '{"Computer science"}'), 
   ('Bioprocessing of New Medicines (Science and Engineering) BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/bioprocessing-new-medicines-science-engineering-bsc/', 'United Kingdom', 'London', '{"Biology", "Engineering"}'), 
   ('Engineering (Biochemical) BEng', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/engineering-biochemical-beng/', 'United Kingdom', 'London', '{"Engineering", "Biology"}'), 
   ('Engineering (Biomedical) BEng', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/engineering-biomedical-beng/', 'United Kingdom', 'London', '{"Engineering", "Medicine"}'), 
   ('Engineering (Chemical) BEng', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/engineering-chemical-beng/', 'United Kingdom', 'London', '{"Engineering", "Chemistry"}'), 
   ('Engineering (Electronic and Electrical) BEng', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/engineering-electronic-electrical-beng/', 'United Kingdom', 'London', '{"Engineering"}'), 
   ('Engineering (Mechanical) BEng', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/engineering-mechanical-beng/', 'United Kingdom', 'London', '{"Engineering"}'), 
   ('Mathematics BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/mathematics-bsc/', 'United Kingdom', 'London', '{"Mathematics"}'), 
   ('Mathematics and Physics BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/mathematics-physics-bsc/', 'United Kingdom', 'London', '{"Mathematics", "Physics"}'), 
   ('Astrophysics BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/astrophysics-bsc/', 'United Kingdom', 'London', '{"Asthronomy", "Physics"}'), 
   ('Chemistry BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/engineering-chemical-beng/', 'United Kingdom', 'London', '{"Chemistry"}'), 
   ('Chemistry with Mathematics BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/chemistry-mathematics-bsc/', 'United Kingdom', 'London', '{"Chemistry", "Mathematics"}'), 
   ('Earth Sciences BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/earth-sciences-bsc/', 'United Kingdom', 'London', '{"Planetary Science"}'), 
   ('Environmental Geoscience BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/environmental-geoscience-bsc/', 'United Kingdom', 'London', '{"Enviromental Science"}'), 
   ('Geology BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/geology-bsc/', 'United Kingdom', 'London', '{"Planetary Science"}'), 
   ('Geophysics BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/geophysics-bsc/', 'United Kingdom', 'London', '{"Planetary", "Science	Physics"}'), 
   ('Natural Sciences BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/natural-sciences-bsc/', 'United Kingdom', 'London', '{"Biology", "Chemistry"}'), 
   ('Physics BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/physics-bsc/', 'United Kingdom', 'London', '{"Physics"}'), 
   ('Physics with Medical Physics BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/physics-medical-physics-bsc/', 'United Kingdom', 'London', '{"Physics", "Engineering"}'), 
   ('Theoretical Physics BSc', 'UCL', '3 years', 'https://www.ucl.ac.uk/prospective-students/undergraduate/degrees/theoretical-physics-bsc/', 'United Kingdom', 'London', '{"Physics"}'), 
   ('Biological Sciences', 'University of Edinburgh', '4 years', 'https://www.ed.ac.uk/studying/undergraduate/degrees/index.php?action=search&college=SCE&school=313', 'United Kingdom', 'Edinburgh', '{"Biology"}'), 
   ('Chemistry', 'University of Edinburgh', '4 years', 'https://www.ed.ac.uk/studying/undergraduate/degrees/index.php?action=search&college=SCE&school=315', 'United Kingdom', 'Edinburgh', '{"Chemistry"}'), 
   ('Engineering', 'University of Edinburgh', '4 years', 'https://www.ed.ac.uk/studying/undergraduate/degrees/index.php?action=search&college=SCE&school=320', 'United Kingdom', 'Edinburgh', '{"Engineering"}'), 
   ('GeoSciences', 'University of Edinburgh', '4 years', 'https://www.ed.ac.uk/studying/undergraduate/degrees/index.php?action=search&college=SCE&school=314', 'United Kingdom', 'Edinburgh', '{"Planetary Science"}'), 
   ('Informatics ', 'University of Edinburgh', '4 years', 'https://www.ed.ac.uk/studying/undergraduate/degrees/index.php?action=search&college=SCE&school=319', 'United Kingdom', 'Edinburgh', '{"Computer science"}'), 
   ('Mathematics', 'University of Edinburgh', '4 years', 'https://www.ed.ac.uk/studying/undergraduate/degrees/index.php?action=search&college=SCE&school=318', 'United Kingdom', 'Edinburgh', '{"Mathematics"}'), 
   ('Physics and Astronomy', 'University of Edinburgh', '4 years', 'https://www.ed.ac.uk/studying/undergraduate/degrees/index.php?action=search&college=SCE&school=316', 'Germany', 'Munich', '{"Physics", "Asthronomy"}'), 
   ('Astrophysik', 'LMU Munich', '3 years', 'https://www.uni-muenchen.de/studium/studienangebot/studiengaenge/studienfaecher/astrophysik/index.html', 'Germany', 'Munich', '{"Asthronomy", "Physics"}'), 
   ('Bioinformatik', 'LMU Munich', '3 years', 'https://www.uni-muenchen.de/studium/studienangebot/studiengaenge/studienfaecher/bioinform_/index.html', 'Germany', 'Munich', '{"Biology", "Mathematics"}'), 
   ('Biologie', 'LMU Munich', '3 years', 'https://www.uni-muenchen.de/studium/studienangebot/studiengaenge/studienfaecher/biologie/index.html', 'Germany', 'Munich', '{"Biology"}'), 
   ('Chemie', 'LMU Munich', '3 years', 'https://www.uni-muenchen.de/studium/studienangebot/studiengaenge/studienfaecher/chemie/index.html', 'Germany', 'Munich', '{"Chemistry"}'), 
   ('Evolution, Ecology and Systematics', 'LMU Munich', '3 years', 'https://www.uni-muenchen.de/studium/studienangebot/studiengaenge/studienfaecher/evolution/index.html', 'Germany', 'Munich', '{"Enviromental Science"}'), 
   ('Geologie/Paläontologie', 'LMU Munich', '3 years', 'https://www.uni-muenchen.de/studium/studienangebot/studiengaenge/studienfaecher/geologie__/index.html', 'Germany', 'Munich', '{"Enviromental Science"}'), 
   ('Geophysik', 'LMU Munich', '3 years', 'https://www.uni-muenchen.de/studium/studienangebot/studiengaenge/studienfaecher/geophysik/index.html', 'Germany', 'Munich', '{"Physics", "Planetary Science"}'), 
   ('Humanbiologie', 'LMU Munich', '3 years', 'https://www.uni-muenchen.de/studium/studienangebot/studiengaenge/studienfaecher/humanbiol_/index.html', 'Germany', 'Munich', '{"Biology"}'), 
   ('Informatik', 'LMU Munich', '3 years', 'https://www.uni-muenchen.de/studium/studienangebot/studiengaenge/studienfaecher/informatik/index.html', 'Germany', 'Munich', '{"Computer science"}'), 
   ('Mathematik', 'LMU Munich', '3 years', 'https://www.uni-muenchen.de/studium/studienangebot/studiengaenge/studienfaecher/mathematik/index.html', 'Germany', 'Munich', '{"Mathematics"}'), 
   ('Meteorologie', 'LMU Munich', '3 years', 'https://www.uni-muenchen.de/studium/studienangebot/studiengaenge/studienfaecher/meteorolo_/index.html', 'Germany', 'Munich', '{"Physics"}'), 
   ('Mineralogie', 'LMU Munich', '3 years', 'https://www.uni-muenchen.de/studium/studienangebot/studiengaenge/studienfaecher/mineralog_/index.html', 'Germany', 'Munich', '{"Planetary Science"}'), 
   ('Neurosciences', 'LMU Munich', '3 years', 'https://www.uni-muenchen.de/studium/studienangebot/studiengaenge/studienfaecher/neuroscience/index.html', 'Germany', 'Munich', '{"Neurobiology"}'), 
   ('Pharmaceutical Sciences', 'LMU Munich', '3 years', 'https://www.uni-muenchen.de/studium/studienangebot/studiengaenge/studienfaecher/pharmaceu_/index.html', 'Germany', 'Munich', '{"Chemistry"}'), 
   ('Physik', 'LMU Munich', '3 years', 'https://www.uni-muenchen.de/studium/studienangebot/studiengaenge/studienfaecher/physik/index.html', 'Germany', 'Munich', '{"Physics"}'), 
   ('Chemistry', 'King’s College London', '3 years', 'https://www.kcl.ac.uk/study-at-kings/ug/subjects/chemistry', 'United Kingdom', 'London', '{"Chemistry"}'), 
   ('Computer science', 'King’s College London', '3 years', 'https://www.kcl.ac.uk/study-at-kings/ug/subjects/computer-science', 'United Kingdom', 'London', '{"Computer science"}'), 
   ('Engineering', 'King’s College London', '3 years', 'https://www.kcl.ac.uk/study-at-kings/ug/subjects/engineering', 'United Kingdom', 'London', '{"Engineering"}'), 
   ('Mathematics', 'King’s College London', '3 years', 'https://www.kcl.ac.uk/study-at-kings/ug/subjects/mathematics', 'United Kingdom', 'London', '{"Mathematics"}'), 
   ('Physics', 'King’s College London', '3 years', 'https://www.kcl.ac.uk/study-at-kings/ug/subjects/physics', 'United Kingdom', 'London', '{"Physics"}'), 
   ('Biomedical Sciences', 'King’s College London', '3 years', 'https://www.kcl.ac.uk/study-at-kings/ug/subjects/biomedical-sciences', 'United Kingdom', 'London', '{"Biology", "Engineering"}'), 
   ('Biomedicine', 'Karolinska Institute', '3 years', 'https://education.ki.se/programme/1bi17-bachelors-programme-in-biomedicine', 'Sweden', 'Stockholm', '{"Biology", "Engineering"}'),
   ('Biochemistry', 'Technical University of Munich', '3 years', 'https://www.tum.de/en/studies/degree-programs/detail/biochemie-bachelor-of-science-bsc/', 'Germany', 'Munich', '{"Chemistry", "Biology"}'), 
   ('Biogenic Materials', 'Technical University of Munich', '3 years', 'https://www.tum.de/en/studies/degree-programs/detail/biogene-werkstoffe-bachelor-of-science-bsc/', 'Germany', 'Munich', '{"Materials Science"}'), 
   ('Bioinformatics', 'Technical University of Munich', '3 years', 'https://www.tum.de/en/studies/degree-programs/detail/bioinformatik-bachelor-of-science-bsc/', 'Germany', 'Munich', '{"Biology", "Mathematics"}'), 
   ('chemical Biotechnology', 'Technical University of Munich', '3 years', 'https://www.tum.de/en/studies/degree-programs/detail/chemische-biotechnologie-bachelor-of-science-bsc/', 'Germany', 'Munich', '{"Chemistry", "Engineering"}'), 
   ('Chemical Engineering', 'Technical University of Munich', '3 years', 'https://www.tum.de/en/studies/degree-programs/detail/chemical-engineering-bachelor-of-engineering-beng/', 'Germany', 'Munich', '{"Chemistry"}'), 
   ('Chemistry', 'Technical University of Munich', '3 years', 'https://www.tum.de/en/studies/degree-programs/detail/chemie-bachelor-of-science-bsc/', 'Germany', 'Munich', '{"Chemistry"}'), 
   ('Electrical Engineering and Information Technology', 'Technical University of Munich', '3 years', 'https://www.tum.de/en/studies/degree-programs/detail/elektrotechnik-und-informationstechnik-bachelor-of-science-bsc/', 'Germany', 'Munich', '{"Engineering", "Computer science"}'), 
   ('Electronics and Data Engineering', 'Technical University of Munich', '3 years', 'https://www.tum.de/en/studies/degree-programs/detail/electronics-data-engineering-bachelor-of-engineering-beng/', 'Germany', 'Munich', '{"Engineering", "Computer science"}'), 
   ('Biochemistry', 'Heidelberg University', '3 years', 'https://www.bio.uni-heidelberg.de/biochemistry', 'Germany', 'Heidelberg', '{"Chemistry"}'), 
   ('Chemie und Geowissenschaften', 'Heidelberg University', '3 years', 'https://www.timeshighereducation.com/world-university-rankings/heidelberg-university', 'Germany', 'Heidelberg', '{"Chemistry"}'), 
   ('Mathematik und Informatik', 'Heidelberg University', '3 years', 'https://www.timeshighereducation.com/world-university-rankings/heidelberg-university', 'Germany', 'Heidelberg', '{"Mathematics", "Computer science"}'), 
   ('Physics and Astronomy', 'Heidelberg University', '3 years', 'https://www.physik.uni-heidelberg.de/?lang=en', 'Germany', 'Heidelberg', '{"Physics", "Asthronomy"}'), 
   ('Chemistry and chemical engineering', 'École Polytechnique Fédérale de Lausanne', '3 years', 'https://www.epfl.ch/education/bachelor/programs/chemistry-and-chemical-engineering/', 'Switzerland', 'Lausanne', '{"Chemistry", "Engineering"}'), 
   ('Computer science', 'École Polytechnique Fédérale de Lausanne', '3 years', 'https://www.epfl.ch/education/bachelor/programs/computer-science/', 'Switzerland', 'Lausanne', '{"Computer science"}'), 
   ('Electrical and electronic engineering', 'École Polytechnique Fédérale de Lausanne', '3 years', 'https://www.epfl.ch/education/bachelor/programs/electrical-and-electronic-engineering/', 'Switzerland', 'Lausanne', '{"Engineering"}'), 
   ('Environmental sciences and engineering', 'École Polytechnique Fédérale de Lausanne', '3 years', 'https://www.epfl.ch/education/bachelor/programs/environmental-sciences-and-engineering/', 'Switzerland', 'Lausanne', '{"Enviromental Science", "Engineering"}'), 
   ('Materials science and engineering', 'École Polytechnique Fédérale de Lausanne', '3 years', 'https://www.epfl.ch/education/bachelor/programs/materials-science-and-engineering/', 'Switzerland', 'Lausanne', '{"Materials Science", "Engineering"}'), 
   ('Mathematics', 'École Polytechnique Fédérale de Lausanne', '3 years', 'https://www.epfl.ch/education/bachelor/programs/mathematics/', 'Switzerland', 'Lausanne', '{"Mathematics"}'), 
   ('Mechanical engineering', 'École Polytechnique Fédérale de Lausanne', '3 years', 'https://www.epfl.ch/education/bachelor/programs/mechanical-engineering/', 'Switzerland', 'Lausanne', '{"Engineering"}'), 
   ('Microengineering', 'École Polytechnique Fédérale de Lausanne', '3 years', 'https://www.epfl.ch/education/bachelor/programs/microengineering/', 'Switzerland', 'Lausanne', '{"Engineering"}'), 
   ('Physics', 'École Polytechnique Fédérale de Lausanne', '3 years', 'https://www.epfl.ch/education/bachelor/programs/physics/', 'Switzerland', 'Lausanne', '{"Physics"}'), 
   ('Engineering Technology', 'KU Leuven', '3 years', 'https://onderwijsaanbod.kuleuven.be/opleidingen/e/CQ_51601481.htm#activetab=diploma_omschrijving', 'Belgium', 'Leuven', '{"Engineering"}'), 
   ('Aerospace Engineering ', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/03333/beng-aerospace-engineering/', 'United Kingdom', 'Manchester', '{"Engineering"}'), 
   ('Biochemistry', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/00521/bsc-biochemistry/', 'United Kingdom', 'Manchester', '{"Chemistry"}'), 
   ('Medical Biochemistry', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/00602/bsc-medical-biochemistry/', 'United Kingdom', 'Manchester', '{"Chemistry"}'), 
   ('Earth and Planetary Sciences', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/12106/bsc-earth-and-planetary-sciences/', 'United Kingdom', 'Manchester', '{"Biology"}'), 
   ('Environmental Science', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/12124/bsc-environmental-science/', 'United Kingdom', 'Manchester', '{"Environmental Science"}'), 
   ('Chemical Engineering', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/03340/beng-chemical-engineering/', 'United Kingdom', 'Manchester', '{"Chemistry", "Engineering"}'), 
   ('Chemistry', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/00544/bsc-chemistry/', 'United Kingdom', 'Manchester', '{"Chemistry", "Computer science"}'), 
   ('Artificial Intelligence', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/00517/bsc-artificial-intelligence/', 'United Kingdom', 'Manchester', '{"Engineering"}'), 
   ('Computer Science', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/00560/bsc-computer-science/', 'United Kingdom', 'Manchester', '{"Computer science"}'), 
   ('Software Engineering', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/05125/bsc-software-engineering/', 'United Kingdom', 'Manchester', '{"Computer science"}'), 
   ('Mathematics', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/00590/bsc-mathematics/', 'United Kingdom', 'Manchester', '{"Mathematics"}'), 
   ('Computer science and Mathematics', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/00558/bsc-computer-science-and-mathematics/', 'United Kingdom', 'Manchester', '{"Computer science", "Mathematics"}'), 
   ('Mathematics and Physics', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/00592/bsc-mathematics-and-physics/', 'United Kingdom', 'Manchester', '{"Mathematics", "Physics"}'), 
   ('Molecular Biology', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/00614/bsc-molecular-biology/', 'United Kingdom', 'Manchester', '{"Biology"}'), 
   ('Cognitive Neuroscience and Psychology', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/00550/bsc-cognitive-neuroscience-and-psychology/', 'United Kingdom', 'Manchester', '{"Neurobiology"}'), 
   ('Neuroscience', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/00617/bsc-neuroscience/', 'United Kingdom', 'Manchester', '{"Neurobiology"}'), 
   ('Physics', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/00638/bsc-physics/', 'United Kingdom', 'Manchester', '{"Physics"}'), 
   ('Physics with Astrophysics', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/00639/bsc-physics-with-astrophysics/', 'United Kingdom', 'Manchester', '{"Physics", "Asthronomy"}'), 
   ('Physics and Theoretical Physics', 'University of Manchester', '3 years', 'https://www.manchester.ac.uk/study/undergraduate/courses/2021/00642/bsc-physics-with-theoretical-physics/', 'United Kingdom', 'Manchester', '{"Physics"}'), 
   ('Environmental Sciences', 'Wageningen University & Research', '3 years', 'https://www.wur.nl/en/Education-Programmes/Bachelor/bsc-programmes/bsc-environmental-sciences.htm', 'Netherlands', 'Wageningen', '{"Enviromental Science"}'), 
   (' Food Technology', 'Wageningen University & Research', '3 years', 'https://www.wur.nl/en/Education-Programmes/Bachelor/bsc-programmes/bsc-food-technology.htm', 'Netherlands', 'Wageningen', '{"Food Science"}'), 
   ('Animal Sciences', 'Wageningen University & Research', '3 years', 'https://www.wur.nl/en/Education-Programmes/Bachelor/bsc-programmes/bsc-animal-sciences.htm', 'Netherlands', 'Wageningen', '{"Enviromental Science"}'), 
   ('Soil, Water, Atmosphere', 'Wageningen University & Research', '3 years', 'https://www.wur.nl/en/Education-Programmes/Bachelor/bsc-programmes/bsc-soil-water-and-atmosphere.htm', 'Netherlands', 'Wageningen', '{"Planetary Science"}'), 
   ('Astronomy', 'Leiden University', '3 years', 'https://www.universiteitleiden.nl/en/education/study-programmes/bachelor/astronomy', 'Netherlands', 'Leiden', '{"Asthronomy"}') 
   RETURNING *;	
   `;
  
   try {
    
    const {rows} = await db.query(uniprogramsQuery);
res.status(201).json(rows)
    } catch (e) {
      console.log({ uniprogramsSeedError: e.message });
    }
};


// module.exports.seedPart4 = async (req, res, next) => {
//   //Questions query
//   const  scientistHasQuestions= `
//     SELECT * FROM questions JOIN scientist ON scientist.id =  ";
// `;
//   try {
//     const {rows} = await db.query(scientistHasQuestions);
//     res.status(201).json(rows)
// } 
//   catch (e) {
//     console.log({ scientistHasQuestionsError: e.message });
//   }
// };



























