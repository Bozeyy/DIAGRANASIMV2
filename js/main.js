function createClass() {
    // on ajoute a la div main-content
    var mainContent = document.querySelector('.main-content');
    // on crée une div de classe "class"
    var newClass = document.createElement('div');
    // on rend la div draggable
    newClass.setAttribute('draggable', 'true');
    newClass.className = 'class';
    // on ajoute la div a la div main-content
    mainContent.appendChild(newClass);
}


