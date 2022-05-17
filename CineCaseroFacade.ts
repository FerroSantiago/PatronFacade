export class Amplificador{
    encender(){
        console.log("Prendiendo amplificador");
    }

    apagar(){
        console.log("Apagando amplificador");
    }

    seleccionarFuente(fuente: string){
        console.log("Fuente seleccionada= " + fuente);
    }

    seleccionarVolumen(volumen : number){
        console.log("Volumen seleccionado= " + volumen);
    }
}

export class ReproductorBluray{
    encender(){
        console.log("Prendiendo blueray");
    }

    apagar(){
        console.log("Apagando blueray");
    }

    play(){
        console.log("Reproduciendo disco");
    }
}

export class Luces{
    oscurecer(){
        console.log("Oscureciendo luces");
    }
    encender(){
        console.log("Encendiendo luces");
    }
}

export class TV{
    encender(){
        console.log("Prendiendo TV");
    }
    
    apagar(){
        console.log("Apagando TV");
    }
}

export class Pochoclera{
    encender(){
        console.log("Prendiendo pochoclera");
    }
    
    apagar(){
        console.log("Apagando pochoclera");
    }

    pop(){
        console.log("Reventando granos de maiz");
    }
}

export class Facade{
    private bluray: ReproductorBluray;
    private amp: Amplificador;
    private luces: Luces;
    private tv: TV;
    private pochoclera: Pochoclera;

    constructor(blueray: ReproductorBluray, amp: Amplificador, luces: Luces, tv: TV, pochoclrea: Pochoclera){
        this.bluray = blueray
        this.amp = amp;
        this.luces = luces;
        this.tv = tv;
        this.pochoclera = pochoclrea;
    }

    public verPelicula(){
        this.pochoclera.encender();
        this.pochoclera.pop();

        this.luces.oscurecer();

        this.tv.encender();

        this.amp.encender();
        this.amp.seleccionarFuente("blueray");
        this.amp.seleccionarVolumen(5);

        this.bluray.encender();
        this.bluray.play();
    }

    public terminarPelicula(){
        this.pochoclera.apagar();
        this.amp.apagar();
        this.tv.apagar();
        this.bluray.apagar();
        this.luces.encender();
    }
}

let blueray = new ReproductorBluray();
let amp = new Amplificador();
let luces = new Luces();
let tv = new TV();
let pochoclera = new Pochoclera();

let cineCasero = new Facade(blueray, amp, luces, tv, pochoclera)
cineCasero.verPelicula();
