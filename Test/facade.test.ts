import {Amplificador, ReproductorBluray, Luces, TV, Pochoclera ,Facade} from "../CineCaseroFacade" ;

test('CuandoSeleccionarFuente_Deberia_ImrpimirFuente', () => {
    let blueray = new ReproductorBluray();
    let amp = new Amplificador();
    let luces = new Luces();
    let tv = new TV();
    let pochoclera = new Pochoclera();

    const cineCasero = new Facade(blueray, amp, luces, tv, pochoclera);
    expect(amp.seleccionarFuente).toBe('Fuente seleccionada= blueray');
})