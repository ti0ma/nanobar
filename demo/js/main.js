// enable highlight
//hljs.initHighlightingOnLoad();

var gos = document.getElementsByClassName('doc_go');

var topito = new Nanobar();

for (go in gos) {
	if (gos.hasOwnProperty( go ) && go !== 'length') {
		gos[go].addEventListener( "click", function (e) {
			var donde = e.currentTarget.getAttribute('go');
			topito.go( donde );
		});
	}
}
setTimeout(function(){
	topito.go( 50 );
}, 1000);
