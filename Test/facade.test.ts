import {Amplificador, ReproductorBluray, Luces, TV, Pochoclera ,Facade} from "../CineCaseroFacade" ;

test('CuandoSeleccionarFuente_Deberia_ImrpimirFuente', () => {
    let blueray = new ReproductorBluray();
    let amp = new Amplificador();
    let luces = new Luces();
    let tv = new TV();
    let pochoclera = new Pochoclera();

    const cineCasero = new Facade(blueray, amp, luces, tv, pochoclera);
    expect(amp.seleccionarFuente("blueray")).toBe('Fuente seleccionada= blueray');
})

test('CuandoEncenderReproductor_Deberia_EncederReproductor', () => {
    let blueray = new ReproductorBluray();
    let amp = new Amplificador();
    let luces = new Luces();
    let tv = new TV();
    let pochoclera = new Pochoclera();

    const cineCasero = new Facade(blueray, amp, luces, tv, pochoclera);
    expect(blueray.encender()).toBe('Prendiendo blueray');
})

test('CuandoVerPelicula_Deberia_RealizarComandosCorrectos', () => {
    let blueray = new ReproductorBluray();
    let amp = new Amplificador();
    let luces = new Luces();
    let tv = new TV();
    let pochoclera = new Pochoclera();

    const cineCasero = new Facade(blueray, amp, luces, tv, pochoclera);
    cineCasero.verPelicula();
    expect(blueray.estado).toBe(true);
    expect(tv.estado).toBe(true);
    expect(luces.estado).toBe(false);
    expect(amp.estado).toBe(true);
    expect(pochoclera.estado).toBe(true);
})

test('CuandoTerminarPelicula_Deberia_RealizarComandosCorrectos', () => {
    let blueray = new ReproductorBluray();
    let amp = new Amplificador();
    let luces = new Luces();
    let tv = new TV();
    let pochoclera = new Pochoclera();

    const cineCasero = new Facade(blueray, amp, luces, tv, pochoclera);
    cineCasero.terminarPelicula();
    expect(blueray.estado).toBe(false);
    expect(tv.estado).toBe(false);
    expect(luces.estado).toBe(true);
    expect(amp.estado).toBe(false);
    expect(pochoclera.estado).toBe(false);
})
