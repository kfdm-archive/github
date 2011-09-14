$(document).ready(function(){
	$.getJSON('https://api.github.com/users/kfdm/repos?callback=?',function(json){
		$('table#github tbody').html('');
		$.each(json.data, function(i, repo) {
			var tmpl = $('section#templates tr').clone();
			//console.log(repo);
			//console.log(tmpl);
			$.each(repo, function(key,field){
				tmpl.find('td.'+key).html(field);
			});
			tmpl.appendTo('table#github');
		});
	});
})
