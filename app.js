let amigos = [];
let asignaciones = {};

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("⚠️ Por favor, ingresa un nombre válido.");
    } else if (amigos.includes(nombre)) {
        alert("⚠️ Este nombre ya fue agregado.");
    } else {
        amigos.push(nombre);
        input.value = "";
        actualizarLista();
    }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("⚠️ Se necesitan al menos 2 personas para sortear.");
        return;
    }

    let disponibles = [...amigos];
    asignaciones = {};
    
    for (let amigo of amigos) {
        let posibles = disponibles.filter(a => a !== amigo);
        
        if (posibles.length === 0) {
            alert("⚠️ No se pudo realizar el sorteo correctamente. Inténtalo de nuevo.");
            return;
        }
        
        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        asignaciones[amigo] = elegido;
        
        // Eliminar al elegido de la lista de disponibles
        disponibles = disponibles.filter(a => a !== elegido);
    }

    mostrarResultados();
}

function mostrarResultados() {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    
    for (let amigo in asignaciones) {
        const li = document.createElement("li");
        li.textContent = `${amigo} → ${asignaciones[amigo]}`;
        li.style.backgroundColor = "#FFFFFF"; // Fondo claro para resaltar
        li.style.color = "#6A0DAD"; // Texto en color primario
        li.style.padding = "10px";
        li.style.margin = "5px 0";
        li.style.borderRadius = "5px";
        resultadoLista.appendChild(li);
    }
}
