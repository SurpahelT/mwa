const schoolData = require ("../data/school.json");

module.exports.getAll=function(req, res){
  console.log("GET all Students");
  res.status(200).json(schoolData);
}

module.exports.getOne=function(req,res){
  console.log("Get one Student");
  const id=(req.params.studentId - 1);
  const oneStudent=schoolData[id];
  res.status(200).json(oneStudent);
}