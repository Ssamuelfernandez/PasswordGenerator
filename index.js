// Definición de los caracteres
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '!"#$%&*@^';

// Función para generar una contraseña
function generatePassword() {
    var characters = getCharacters();
    var length = document.getElementById('length').value;
    var password = '';
    
    for (var i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    
    return password;
}

// Función para obtener los caracteres basados en las selecciones del usuario
function getCharacters() {
    var characters = '';
    characters += (document.getElementById('lowercase').checked) ? lowercase : '';
    characters += (document.getElementById('uppercase').checked) ? uppercase : '';
    characters += (document.getElementById('numbers').checked) ? numbers : '';
    characters += (document.getElementById('symbols').checked) ? symbols : '';
    return characters;
}

// Función para actualizar la visualización de la longitud
function updateLengthDisplay() {
    document.getElementById('length-display').textContent = document.getElementById('length').value;
}

// Función para copiar al portapapeles
function copyToClipboard() {
    var password = document.getElementById('password');
    navigator.clipboard.writeText(password.value).then(function() {
        console.log('Copiado al portapapeles exitosamente!');
    }).catch(function() {
        console.error('Error al copiar al portapapeles');
    });
}

// Event listeners
document.getElementById('length').addEventListener('input', function() {
    updateLengthDisplay();
    document.getElementById('password').value = generatePassword();
});

document.getElementById('lowercase').addEventListener('change', function() {
    document.getElementById('password').value = generatePassword();
});
document.getElementById('uppercase').addEventListener('change', function() {
    document.getElementById('password').value = generatePassword();
});
document.getElementById('numbers').addEventListener('change', function() {
    document.getElementById('password').value = generatePassword();
});
document.getElementById('symbols').addEventListener('change', function() {
    document.getElementById('password').value = generatePassword();
});

document.getElementById('regenerate').addEventListener('click', function() {
    document.getElementById('password').value = generatePassword();
});

document.getElementById('copy').addEventListener('click', copyToClipboard);

// Generar la contraseña inicial
document.getElementById('password').value = generatePassword();

