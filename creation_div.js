// affichez les divs HTML décrites dans le tableau ci-dessous
var divs = [
  {
    couleur:'red',
    largeur:200,
    hauteur:40,
    texte:"div rouge"
  },
  {
    couleur:'blue',
    largeur:100,
    hauteur:80,
    texte:"div bleu"
  },
  {
    couleur:'orange',
    largeur:300,
    hauteur:10,
    texte:"div orange"
  },
];

for (var i in divs){
var newDiv = document.createElement("div");
document.body.appendChild(newDiv);
newDiv.style.background = divs[i].couleur;
newDiv.style.width = divs[i].largeur+"px";
newDiv.style.height = divs[i].hauteur+"px";
newDiv.textContent = divs[i].texte;
}

//boucle for : pour parcourir un tableau
// boucle for ... in : pour parcourir un tableau d'objets et donc cibler les propriétés des objets.
