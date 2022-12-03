// on créer un tableau qui contient des Classe
var classes = [];
var index = 0;

class Classe {
    constructor(div) {
        this.titre = div.querySelector(".inputName").value;
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
        this.listeI = [];
        this.listeH = [];
        this.divClass = div;
        index++;
    }

    addClassI(classe) {
        Classe.listeI.push(classe);
    }

    addClassH(classe) {
        Classe.listeH.push(classe);
    }

    setCoord() {
        this.x = this.divClass.offsetLeft;
        this.y = this.divClass.offsetTop;
    }

    setDimension() {
        this.width = this.divClass.offsetWidth
        this.height = this.divClass.offsetHeight
    }      

    setTitre() {
        this.titre = this.divClass.querySelector("#input").textContent;
    }
}





























function createClass() {
    // on ajoute a la div main-content
    var mainContent = document.querySelector('.main-content');
    // on crée une div de classe "class"
    var newClass = document.createElement('div');
    // on rend la div draggable
    //newClass.setAttribute('draggable', 'true');
    newClass.className = 'class';
    // mettre sur la methode dragend la fonction relache
    //newClass.addEventListener('dragend', relache);


    // on créer une div de classe "top-class"
    var topClass = document.createElement('div');
    topClass.className = 'top-class';
    // on dit que la div est draggable
    topClass.setAttribute('draggable', 'true');
    topClass.addEventListener('dragend', relache);

    // on l'ajoute a la newClass
    newClass.appendChild(topClass);  

    // on ajoute a la div top-class un a avec <i class="fa-regular fa-trash"></i>
    var a = document.createElement('a');
    // on met la class remove sur le a
    a.className = 'remove';
    a.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    a.addEventListener('click', remove);
    topClass.appendChild(a);

    // on ajoute un a avec <i class="fa-light fa-arrow-right"></i>
    var a = document.createElement('a');
    a.innerHTML = '<i class="fa-sharp fa-solid fa-arrow-right"></i>';
    a.addEventListener('click', showArrowField);
    topClass.appendChild(a);
    // on set l'id de l'arrow a "arrowField"
    a.setAttribute('id', 'arrowField');

    // on crée un div de classe "titre-class" 
    var titreClass = document.createElement('div');
    // on ajoute la div titreClass a la div newClass
    newClass.appendChild(titreClass);
    titreClass.className = 'titre-class';
    // on ajoute un Label a la div titreClass
    var input = document.createElement('input');
    //on set la class de l'input a "inputName"
    input.className = 'inputName';
    input.innerHTML = 'Nom Class';
    titreClass.appendChild(input);
    // on met comme text du input "Nom Class"
    input.setAttribute('placeholder', 'Nom Class');


    // on ajoute un hr a la div newClass
    var hr = document.createElement('hr');
    newClass.appendChild(hr);


    // on crée une div attribut-div
    var attributDiv = document.createElement('div');
    attributDiv.className = 'attribut-div';
    // on ajoute la div attributDiv a la div newClass
    newClass.appendChild(attributDiv);
    var a = document.createElement('a');
    a.innerHTML = '<i class="fa-solid fa-plus"></i>';
    attributDiv.appendChild(a);
    a.addEventListener('click', addAttribut);
    var input = document.createElement('input');
    // on rend le Label editable
    input.setAttribute('placeholder', 'Attribut');
    // on set l'id de l'input a "input"
    input.setAttribute('id', 'input');
    attributDiv.appendChild(input);
    

    // on ajoute un hr a la div newClass
    var hr = document.createElement('hr');
    newClass.appendChild(hr);


    // on crée une div methode-div
    var methodeDiv = document.createElement('div');
    methodeDiv.className = 'methode-div';
    // on ajoute la div methodeDiv a la div newClass
    newClass.appendChild(methodeDiv);
    // on ajout un a avec <i class="fa-solid fa-plus"></i>
    var a = document.createElement('a');
    a.innerHTML = '<i class="fa-solid fa-plus"></i>';
    methodeDiv.appendChild(a);
    // on met la function addMethod sur le a
    a.addEventListener('click', addMethod);
    // on ajoute un Label a la div methodeDiv
    var input = document.createElement('input');
    // on rend le Label editable
    input.setAttribute('contenteditable', 'true');
    input.setAttribute('placeholder', 'Methode');
    input.setAttribute('id', 'input');
    methodeDiv.appendChild(input);


    // on ajoute la div a la div main-content
    mainContent.appendChild(newClass);

    // on créer un class et on l'ajoute au tableau
    var classe = new Classe(newClass);
    classes.push(classe);
}

function relache(e) {
    console.log('relache');
    // on prend la div qui a ete relachee
    var div = e.target.parentNode;
    // on prend la position de la souris
    var x = e.clientX - 75;
    var y = e.clientY - 75;
    // on set la position de la div a la position de la souris
    // si x ou y est negatif on set a 0
    if (x < 0) {
        x = 0;
    }
    if (y < 0) {
        y = 0;
    }
    div.style.left = x + 'px';
    div.style.top = y + 'px';

}

function addMethod(e) {
    // on ajoute a la div un input
    var div = e.target.parentNode.parentNode;
    var input = document.createElement('input');
    // on set l'id de l'input a "input"
    input.setAttribute('id', 'input');
    div.appendChild(input);
    // placeholder
    input.setAttribute('placeholder', 'Methode');
}

function addAttribut(e) {
    // on ajoute a la div un input
    var div = e.target.parentNode.parentNode;
    var input = document.createElement('input');
    // on set l'id de l'input a "input"
    input.setAttribute('id', 'input');
    div.appendChild(input);
    // placeholder
    input.setAttribute('placeholder', 'Attribut');
}

function remove(e) {
    var div = e.target;
    // on remove le parent du parent de la div
    div.parentNode.parentNode.parentNode.remove();
}

function showArrowField(e) {

    var div = e.target.parentNode.parentNode;

    var classDiv = document.querySelectorAll('.inputName');

    // on créer une div pour afficher chaque fleche
    var arrowField = document.createElement('div');
    arrowField.className = 'arrow-zone';
    div.appendChild(arrowField);

    var a = document.createElement('a');
    a.innerHTML = '<i class="fa-solid fa-minus"></i>';
    a.addEventListener('click', removeArrowField);
    arrowField.appendChild(a);

    for (var i = 0; i < classDiv.length; i++) {
        if (classDiv[i].parentNode.parentNode != div.parentNode.parentNode) {
            // on ajoute un a avec le titre de chaque input
            var a = document.createElement('a');
            a.innerHTML = '<i class="fa-sharp fa-solid fa-arrow-right"> </i> '+classDiv[i].value;
            a.addEventListener('click', addArrow(e, classDiv[i]));
            console.log(classDiv[i].value);
            arrowField.appendChild(a);
        }
    }

}

function setClasses() {
    var classDiv = document.querySelectorAll('.class');

    var newClasse = []
    // pour chaque div de classDiv on créer un objet Classe
    for (var i = 0; i < classDiv.length; i++) {
        var classe = new Classe(classDiv[i]);
        newClasse.push(classe);
    }

    classes = newClasse;
}

function removeArrowField(e) {
    e.target.parentNode.remove();
}

function addArrow(e, classDiv) {
    
}
