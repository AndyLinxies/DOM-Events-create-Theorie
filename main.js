//On Vise directement le noeud pour la création,la supression et le remplacement. on ne vise pas l'Element (Child et non elementChild par exemple)

//1- on cree la balise dans le document, 2- On y rajoute du texte 3-On place a balise à l'endroit souhaité

//Pour creer un li dans le document
let li = document.createElement('li');
//Pour mettre du texte dans le li
li.innerText = "JE SUIS ICI";
//Selection du ul
let ul = document.querySelector('ul');
//A la fin des enfants de l'ul on rajoute le li 
ul.appendChild(li);


let li2 = document.createElement('li');
li2.innerText = "JE SUIS LE PREMIER ENFANT";
//insertBefore sert à inserer AVANT ou APRES.
//ul.insertBefore veut dire dans enfants de l'ul
//En premier ce qu'on veut inserer, en second l'endroit où on le fait 
ul.insertBefore(li2, ul.firstChild);

let li3 = document.createElement('li');
li3.innerText = "JE SUIS PLACE APRES";

//ul.insertBefort va de nouveau insérer dans les enfants de l'ul
//ul donne un nodeModule donc ul.children[3] renvoit au li à l'index 3. nextSibling renvoit au frere (Et non NextElementSibling)
ul.insertBefore(li3, ul.children[3].nextSibling);
let div = document.createElement('div');
let h1 = document.createElement('h1');
h1.innerText = "Mihai est délicieux";

//div.appendChild(h1) A la fin des enfants de la div on rajoute le h1
div.appendChild(h1);
//On remonte au niveau du NOEUD parent de l'ul qui est le body et ensuite on insert dans ses enfants la div tout à la fin du body (ul.parentNode = body et lastChild = à la fin)
ul.parentNode.insertBefore(div, ul.parentNode.lastChild);

//Remplacer un élément (Fonctionne de la même manière que la création)
let replace = document.createElement('li');
replace.innerText = "JE SUIS LE REMPLACANT";

//Suppression d'un élément, fonctionne de la même manière que la création et le remplacement
//RAPPEL On peut mettre les [] ici car l'ul renvoie à une nodeList
//ul.removeChild veut dire: dans les enfants de l'ul (les li),on supprime l'enfant de l'ul à l'index 2
ul.removeChild(ul.children[2]);

//Dans les enfants de l'ul on remplace replace (le li) par le li à l'index 2
ul.replaceChild(replace, ul.children[2]);


// console.log(ul);