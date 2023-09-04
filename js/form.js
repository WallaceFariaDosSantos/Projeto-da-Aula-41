class Form{
    constructor(){
       this.input = createInput("").attribute("placeholder", "Digite Seu Nome...");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER");
        this.title.position(1000, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'black');
        this.input.position(1190, 300);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'white');
        this.button.position(1200, 400);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightgreen');
        this.reset.position(1250, 650);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'darkcyan');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html`
            Olá, espere o
            </br>outro jogador entrar...`;
            this.greeting.position(890, 150);
            this.greeting.style('color', 'black');
            this.greeting.style('font-size', '80px');
        });

        this.reset.mousePressed(() => {
            database.ref("/").set({
              playerCount: 0,
              gameState: 0,
              players: {},
              playersAtEnd: {}
            });
              window.location.reload();

            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();
        });

    }
}