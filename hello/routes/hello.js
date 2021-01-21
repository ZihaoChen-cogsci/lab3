
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameToShow = req.params.userName;
  if (nameToShow ===underfined){
    nameToShow = 'World';
  }
  console.log("Name is " + nameToShow);
  res.render('index', {
  	'name': nameToShow,
  });
};
