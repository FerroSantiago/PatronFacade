export class Amplificador{
    public estado: boolean = false;

    encender(){
        this.estado = true;
        return ("Prendiendo amplificador");
    }

    apagar(){
        this.estado = false;
        return ("Apagando amplificador");
    }

    seleccionarFuente(fuente: string){
        return "Fuente seleccionada= " + fuente;
    }

    seleccionarVolumen(volumen : number){
        return ("Volumen seleccionado= " + volumen);
    }
}

export class ReproductorBluray{
    public estado: boolean = false;

    encender(){
        this.estado = true;
        return ("Prendiendo blueray");
    }

    apagar(){
        this.estado = false;
        return ("Apagando blueray");
    }

    play(){
        return ("Reproduciendo disco");
    }
}

export class Luces{
    public estado: boolean = true;

    oscurecer(){
        this.estado = false;
        return ("Oscureciendo luces");
    }
    encender(){
        this.estado = true;
        return ("Encendiendo luces");
    }
}

export class TV{
    public estado: boolean = false;
    
    encender(){
        this.estado = true;
        return ("Prendiendo TV");
    }
    
    apagar(){
        this.estado = false;
        return ("Apagando TV");
    }
}

export class Pochoclera{
    public estado: boolean = false;

    encender(){
        this.estado = true;
        return ("Prendiendo pochoclera");
    }
    
    apagar(){
        this.estado = false;
        return ("Apagando pochoclera");
    }

    pop(){
        return ("Reventando granos de maiz");
    }
}

export class Facade{
    private blueray: ReproductorBluray;
    private amp: Amplificador;
    private luces: Luces;
    private tv: TV;
    private pochoclera: Pochoclera;

    constructor(blueray: ReproductorBluray, amp: Amplificador, luces: Luces, tv: TV, pochoclrea: Pochoclera){
        this.blueray = blueray;
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

        this.blueray.encender();
        this.blueray.play();
    }

    public terminarPelicula(){
        this.pochoclera.apagar();
        this.amp.apagar();
        this.tv.apagar();
        this.blueray.apagar();
        this.luces.encender();
    }
}