
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
  	title: 'Idea sorter | Aletheia',
  	currentPath: 'home' 
  })
};
exports.about = function(req, res){
  res.render('about', { 
  	title: 'Idea sorter | Aletheia',
  	currentPath: 'about'
  })
};