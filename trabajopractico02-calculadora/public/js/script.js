
//REalizamos un if para activar el foco de la ventana
document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "visible") {
        document.title = "Calculadora | Doriass";
        $("#favicon").attr("href", "images/calculator.ico");
    } else {
        document.title = "CALCULADORA NODE.JS DORIASS";
        $("#favicon").attr("href", "/images/calculator.ico");
    }
})

// Inicio del loader
function loader() {
    document.querySelector(".loader-container").classList.add("fade-out");
  }
  function fadeOut() {
    setInterval(loader, 500);
  }
  window.onload = fadeOut;
// fin del loader

const lightTheme = "./css/light.css";
const darkTheme = "./css/dark.css";
const sunIcon = "images/SunIcon.svg";
const moonIcon = "images/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
  const calculatedValue = eval(value || null);
  if (isNaN(calculatedValue)) {
    res.value = "No se puede";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  } else {
    res.value = calculatedValue;
  }
}

// Cambio de tema oscuro o blanco (iner de texto)
function changeTheme() {
  const theme = document.getElementById("theme");
  setTimeout(() => {
    toast.innerHTML = "Calculadora";
  }, 1500);
  if (theme.getAttribute("href") === lightTheme) {
    theme.setAttribute("href", darkTheme);
    themeIcon.setAttribute("src", sunIcon);
    toast.innerHTML = "Modo Oscuro 🌙";
  } else {
    theme.setAttribute("href", lightTheme);
    themeIcon.setAttribute("src", moonIcon);
    toast.innerHTML = "Modo Claro ☀️";
  }
}

// Muestra el valor ingresado en la pantalla.
function liveScreen(enteredValue) {
  if (!res.value) {
    res.value = "";
  }
  res.value += enteredValue;
}

//Agregar un controlador de eventos en el documento para manejar las entradas del teclado.
document.addEventListener("keydown", keyboardInputHandler);

//función para manejar las entradas del teclado
function keyboardInputHandler(e) {
  // para corregir el comportamiento predeterminado del navegador,
  // comportamiento no deseado cuando alguna tecla ya estaba enfocada.
  e.preventDefault();
  // agarrando la pantalla en vivo

  //numeros
  if (e.key === "0") {
    res.value += "0";
  } else if (e.key === "1") {
    res.value += "1";
  } else if (e.key === "2") {
    res.value += "2";
  } else if (e.key === "3") {
    res.value += "3";
  } else if (e.key === "4") {
    res.value += "4";
  } else if (e.key === "5") {
    res.value += "5";
  } else if (e.key === "6") {
    res.value += "6";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "7") {
    res.value += "7";
  } else if (e.key === "8") {
    res.value += "8";
  } else if (e.key === "9") {
    res.value += "9";
  }

  //operaciones
  if (e.key === "+") {
    res.value += "+";
  } else if (e.key === "-") {
    res.value += "-";
  } else if (e.key === "*") {
    res.value += "*";
  } else if (e.key === "/") {
    res.value += "/";
  }

  //decimales
  if (e.key === ".") {
    res.value += ".";
  }

  //al precionar enter funcion de resultado
  if (e.key === "Enter") {
    calculate(result.value);
  }

  //retroceso para eliminar la última entrada
  if (e.key === "Backspace") {
    const resultInput = res.value;
    //remove the last element in the string
    res.value = resultInput.substring(0, res.value.length - 1);
  }
}