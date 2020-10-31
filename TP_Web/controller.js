// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;
	this.drawing = drawing;
		this.canvas = canvas;
		this.ctx = ctx;
	new DnD(canvas,this);


this.onInteractionStart = function(dnd){
	console.log('start');
	var rect = document.getElementById("butRect");
	var col = document.getElementById("colour");
	var spinner = document.getElementById("spinnerWidth");
	var butLine = document.getElementById('butLine');
	if(rect.checked){
		this.currentShape  = new Rectangle(dnd.x1, dnd.y1, dnd.x2, dnd.y2, spinner.value, col.value);
	}
	else{
		this.currentShape  = new Line(dnd.x1, dnd.y1, dnd.x2, dnd.y2, spinner.value, col.value);
		}
	}.bind(this);

this.onInteractionUpdate = function(dnd){

	this.drawing.paint(this.ctx,this.canvas);
	var rect = document.getElementById("butRect");
	var col = document.getElementById("colour");
	var spinner = document.getElementById("spinnerWidth");

	if(rect.checked){
		this.currentShape  = new Rectangle(dnd.x1, dnd.y1, dnd.x2, dnd.y2, spinner.value, col.value);
	}
	else{
		this.currentShape  = new Line(dnd.x1, dnd.y1, dnd.x2, dnd.y2, spinner.value, col.value);
		}
	this.currentShape.paint(this.ctx);
//}
/*if(butLine.checked){
	this.currEditingMode = editingMode.line;

}
else if (rect.checked){
	this.currEditingMode = editingMode.rect;
}
switch(this.currEditingMode){

	// le cas ou c'est la ligne
	case editingMode.line:{
		this.currentShape = new Line(DnD.x1,DnD.y1,DnD.x2,DnD.y2,this.currLineWidth,this.currColour);
		break;
	}

	// le cas ou c'est le rectangle
	case editingMode.rect:{
		this.currentShape = new Rectangle(DnD.x1,DnD.y1,DnD.x2-DnD.x1,DnD.y2-DnD.y1,this.currLineWidth,this.currColour);
		break;
	}
	}*/
}.bind(this);


this.onInteractionEnd = function(dnd){
	console.log('end');

		this.currentShape.x2 = dnd.x2;
		this.currentShape.y2 = dnd.y2;
		this.drawing.form.push(this.currentShape);
		this.drawing.paint(this.ctx,this.canvas);

}.bind(this);

};
