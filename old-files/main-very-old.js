



// const canvasCollection = document.getElementsByClassName('my-canvas'); // altro metodo per prendere elementi, questi ultimi due meglio non usarli
// const canvasA = canvasCollection[0];  // prendiamo il primo elemento canvas nell'html collection
// console.log(canvasA)

// const canvasCollection2 = document.getElementsByTagName('canvas');  
// const canvasB = canvasCollection2[0];
// console.log(canvasB)

// const canvasC = document.querySelector('.my-canvas');  // per classe

// const canvasD = document.querySelector('#my-canvas');  // per id

// const canvasE = document.querySelector('canvas');

// const canvasCollection3 = document.querySelectorAll('.my-canvas')   // qui prendiamo tutti gli elementi




const canvas = document.getElementById('canvas1');
// console.log(canvas.width);
// console.log(canvas.height);
const ctx = canvas.getContext('2d');  // ctx abbreviazione di context


// ctx.rect(10, 10, 100, 100);  // per disegnare un rettangolo, 10 10 sono coordinate x e y e 100 100 sono le dimensioni

// ctx.rect(canvas.width-110, canvas.height-110, 100, 100);    qui ad esempio prendiamo la larghezza 900 e togliamo 100 e 10 

// ctx.rect(canvas.width-110, 10, 100, 100);

// ctx.rect(10, canvas.height-110, 100, 100);

// ctx.fill()  // per riempire il rettangolo

// ctx.fillStyle = '#ff0000';

// ctx.strokeStyle = '#00ff00';

// ctx.lineWidth = 15;  

// ctx.fillRect(10, 10, 100, 100);

// ctx.strokeRect(200, 200, 100, 100);   // stroke per il bordo

// ctx.clearRect(50, 50, 20, 20);  // ripulisce una parte rettangolare



// disegnare un cerchio

// ctx.beginPath();  

// ctx.arc(canvas.width/2, canvas.height/2, 200, 0, 2 * Math.PI);     // /2 per farlo partire dal centro, 

// ctx.stroke();

// ctx.fill();


// triangolo

// ctx.beginPath();

// ctx.moveTo(50, 50);  // prende le coordinate del punto da cui partire senza fare niente

// ctx.lineTo(100, 100);  // per fare la linea, parte da 50 50 e arriva a 100 100

// ctx.lineTo(50, 150);

// ctx.lineTo(50, 50);

// ctx.fill();

