class Rect{
    constructor(originX, originY, width, height, color = '#000000'){
        this.originX = originX;
        this.originY = originY;
        this.width = width;
        this.height = height;
        this.color = color;
        this.velocityX = (2 * Math.random()) -1;
        this.velocityY = (2 * Math.random()) -1;
       

    }

     animate(canvasWidth, canvasHeight){

    //    if (Math.random() > 0.99) {
    //     this.velocityX = (2 * Math.random()) -1;
    //    }

    //    if (Math.random() > 0.99) {
    //     this.velocityY = (2 * Math.random()) -1;
    //    }


        if (this.originX < 0 || this.originX + this.width > canvasWidth ) {
            this.velocityX = this.velocityX * -1;
        } 

        if(this.originY < 0 || this.originY + this.height > canvasHeight){
            this.velocityY = this.velocityY * -1;
         }
            
        // if (this.originX + this.width > canvas.width) {
        //     this.velocityX = this.velocityX * -1; 
        // }
               
        // if (this.originY + this.height > canvas.height) {
        //     this.velocityY = this.velocityY * -1;  
        // }

        this.originX += this.velocityX;
        this.originY += this.velocityY;
     }

    draw(ctx){

        ctx.fillStyle = this.color;
        ctx.fillRect(this.originX, this.originY, this.width, this.height);
    }


    static random(canvasWidth, canvasHeight){
        
        const randomRed = Math.floor(256 * Math.random());
        const randomGreen = Math.floor(256 * Math.random());
        const randomBlue = Math.floor(256 * Math.random());

        const rgbString = `rgb(${randomRed}, ${randomGreen}, ${randomBlue}, ${Math.random()})`
        

       const randomWidth = 200 * Math.random();
       const randomHeight = 200 * Math.random();

       const randomX = (canvasWidth - randomWidth) * Math.random();  // (canvasWidth - randomWidth) per non fare uscire i rettangoli dalla canvas
       const randomY = (canvasHeight - randomHeight) * Math.random();

    //    const newRect = new Rect(randomX, randomY, randomWidth, randomHeight, rgbString);

       const newRect = new Rect(canvasWidth/2, canvasHeight/2, 1, 1, rgbString);

       return newRect;
    }
}