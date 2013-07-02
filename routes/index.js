
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
  	title: 'Topic sorter | Aletheia',
  	currentPath: 'home' 
  })
};
exports.about = function(req, res){
  res.render('about', { 
  	title: 'Topic sorter | Aletheia',
  	currentPath: 'about'
  })
};