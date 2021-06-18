class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('h2');
        this.title = createElement('h1');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display(){
        this.title.html("Battle Maison");
        this.title.position(displayWidth/2-30,15);

        this.input.position(130,160);
        this.button.position(250,200);

        this.button.mousePressed(()=>{
            this.button.hide();
            this.greeting.hide();
            this.input.hide();
            this.title.hide();

            player.name = this.input.value();
            playerCount=+1; 
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            
            this.greeting.html("Hello " + player.name);
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    })
}
}