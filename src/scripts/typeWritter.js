class TypeWritter {
    constructor(txtElement, words, wait = 3000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        //current index of word
        const current = this.wordIndex % this.words.length;
        //Get full text of current word
        const fulltxt = this.words[current];

        //check if deleting
        if (this.isDeleting) {
            //remove char
            this.txt = fulltxt.substring(0, this.txt.length - 1);
        } else {
            //add char
            this.txt = fulltxt.substring(0, this.txt.length + 1);
        }

        //insert txt
        this.txtElement.innerHTML = ` <span class="txt">${this.txt} </span>  `;

        //Type speed
        let typeSpeed = 300;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        //check si the word is completed
        if (!this.isDeleting && this.txt === fulltxt) {
            // pause at end
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), 500);
    }
}

document.addEventListener('DOMContentLoaded', init);

function init() {
    loadTextWritter('profession');
    loadTextWritter('search');
}

function loadTextWritter(element) {
    const txtElement = document.getElementById(element);
    const words = JSON.parse(txtElement.getAttribute('data-text'));
    const wait = txtElement.getAttribute('data-wait');

    new TypeWritter(txtElement, words, wait);
}
