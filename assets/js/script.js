// 1. Realizar el diagrama de flujo para las siguientes operaciones matemáticas: Suma,
// Resta, División, Multiplicación y el módulo de un número, partiendo de dos números
// ingresados por el usuario.
// Included in Button Diagrama de Flujo.

// 2. Realizar operaciones con dos numeros.
// Pedir al usuario que ingrese dos numeros diferentes y mayores a cero. Para ambos numeros, calcular lo siguiente: Suma, Resta, Division, Multiplicacion, Modulo.
function AdditionQ2() {
  let numberOneQ2 = parseInt(document.getElementById("numberOneQ2").value);
  let numberTwoQ2 = parseInt(document.getElementById("numberTwoQ2").value);
  let AdditionResults = numberOneQ2 + numberTwoQ2;
  document.getElementById(
    "result_additionQ2"
  ).innerHTML = `1) El resultado de la suma es: ${AdditionResults} <br>`;
}
function SubstractionQ2() {
  let numberOneQ2 = parseInt(document.getElementById("numberOneQ2").value);
  let numberTwoQ2 = parseInt(document.getElementById("numberTwoQ2").value);
  let SubstractionResults = numberOneQ2 - numberTwoQ2;
  document.getElementById(
    "result_substractionQ2"
  ).innerHTML = `2) El resultado de la resta es: ${SubstractionResults} <br>`;
}
function MultiplicationQ2() {
  let numberOneQ2 = parseInt(document.getElementById("numberOneQ2").value);
  let numberTwoQ2 = parseInt(document.getElementById("numberTwoQ2").value);
  let MultiplicationResults = numberOneQ2 * numberTwoQ2;
  document.getElementById(
    "result_multiplicationQ2"
  ).innerHTML = `3) El resultado de la multiplicación es: ${MultiplicationResults} <br>`;
}
function DivisionQ2() {
  let numberOneQ2 = parseInt(document.getElementById("numberOneQ2").value);
  let numberTwoQ2 = parseInt(document.getElementById("numberTwoQ2").value);
  let DivisionResults = numberOneQ2 / numberTwoQ2;
  document.getElementById(
    "result_divisionQ2"
  ).innerHTML = `4) El resultado de la división es: ${DivisionResults} <br>`;
}
function ModulusQ2() {
  let numberOneQ2 = parseInt(document.getElementById("numberOneQ2").value);
  let numberTwoQ2 = parseInt(document.getElementById("numberTwoQ2").value);
  let ModulusResults = numberOneQ2 % numberTwoQ2;
  document.getElementById(
    "result_modulusQ2"
  ).innerHTML = `5) El resultado del modulo es: ${ModulusResults} <br>`;
}
function numberValidationQ2(numberOneQ2, numberTwoQ2) {
  console.log(`que entro inicio: ${numberOneQ2} ${numberTwoQ2}`);
  console.log("numero1 " + isNaN(numberOneQ2));
  console.log("numero2" + isNaN(numberTwoQ2));
  if (!isNaN(Number(numberOneQ2)) && !isNaN(Number(numberTwoQ2))) {
    if (numberOneQ2 !== 0 && numberTwoQ2 !== 0 && numberOneQ2 !== numberTwoQ2) {
      console.log(`continuacion ${numberOneQ2} ${numberTwoQ2}`);
      return true;
    } else {
      alert(
        "Debes ingresar numeros mayores a cero y el primer numero debe ser DISTINTO al segundo."
      );
      return false;
    }
  } else {
    alert("Tienes que ingresar solamente numeros, nada de letras.");
    return false;
  }
}
document.getElementById("mainTriggerQ2").addEventListener("click", function () {
  console.log("iniciando Q2.");
  let numberOneQ2 = parseInt(document.getElementById("numberOneQ2").value);
  let numberTwoQ2 = parseInt(document.getElementById("numberTwoQ2").value);
  console.log(`testing Q2 end ${numberOneQ2} ${numberTwoQ2}`);
  let numbersAreValid = false;
  //   do {
  //     let temp = numberValidationQ2(numberOneQ2, numberTwoQ2);
  //     console.log(temp);
  //   } while (numbersAreValid);
  if (numberValidationQ2(numberOneQ2, numberTwoQ2) == true) {
    AdditionQ2();
    SubstractionQ2();
    MultiplicationQ2();
    DivisionQ2();
    ModulusQ2();
  } else {
    return false;
  }
});

// 3. Crear un programa que pida al usuario ingresar la temperatura en grados Celsius y que la transforme a grados Kelvin y Fahrenheit.
// Se debe considerar la siguiente informacion respecto a la equivalencia de las escalas de temperatura:
// 0 Grados Celsius corresponden a 273,15 Kelvin. La fórmula para convertirlos es 0 °C + 273.15 = 273.15 K
// 0 Grados Celsius corresponden a 32 Fahrenheit. La fórmula para convertirlos es (0 °C × 9/5) + 32 = 32 °F

function TransformCelsiusToKelvinQ3() {
  let numberOneQ3 = parseInt(document.getElementById("numberOneQ3").value);
  let ConvertionToKelvinResults = numberOneQ3 + 273.15;
  document.getElementById(
    "result_TransformCelsiusToKelvinQ3"
  ).innerHTML = `1) El resultado de la conversión a grados Kelvin es: ${ConvertionToKelvinResults} K <br>`;
}
function TransformCelsiusToFahrenheitQ3() {
  let numberOneQ3 = parseInt(document.getElementById("numberOneQ3").value);
  let ConvertionToFahreinheitResults = (numberOneQ3 * 9) / 5 + 32;
  document.getElementById(
    "result_TransformCelsiusToFahrenheitQ3"
  ).innerHTML = `2) El resultado de la conversión a grados Fahrenheit es: ${ConvertionToFahreinheitResults} °F <br>`;
}
function numberValidationQ3(numberOneQ3) {
  if (!isNaN(numberOneQ3)) {
    if (numberOneQ3 !== 0) {
      return true;
    } else {
      alert("Debes ingresar numeros mayores a cero.");
      return false;
    }
  } else {
    alert("Tienes que ingresar solamente numeros, nada de letras.");
    return false;
  }
}
document.getElementById("mainTriggerQ3").addEventListener("click", function () {
  let numberOneQ3 = parseInt(document.getElementById("numberOneQ3").value);

  if (numberValidationQ3(numberOneQ3) == true) {
    TransformCelsiusToKelvinQ3();
    TransformCelsiusToFahrenheitQ3();
  } else {
    return false;
  }
});

// 4. Crear un programa que pida al usuario una cantidad de días y que muestre su equivalente en Años, Semanas y Días. Por ejemplo, si el usuario ingresa 373, el resultado debe ser 1 año, 1 semana y 1 día.
// Se debe considerar lo siguiente:
// ● 1 año tiene 365 días
// ● 1 semana tiene 7 días
// Se recomienda usar la función Math.floor para obtener la parte entera de un número decimal.

function CalculateDaysQ4() {
  let numberOneQ4 = parseInt(document.getElementById("numberOneQ4").value);
  let CalculateYearResults = Math.floor(numberOneQ4 / 365);
  let CalculateWeekResults = Math.floor(
    (numberOneQ4 - CalculateYearResults * 365) / 7
  );
  let CalculateDaysResults = (numberOneQ4 % 365) % 7;
  document.getElementById(
    "result_CalculateDaysQ4"
  ).innerHTML = `1) El resultado de la conversión de ${numberOneQ4} días es: ${CalculateYearResults} Año, ${CalculateWeekResults} Semanas, ${CalculateDaysResults} Días. <br>`;
}

function numberValidationQ4(numberOneQ4) {
  if (!isNaN(numberOneQ4)) {
    if (numberOneQ4 !== 0) {
      return true;
    } else {
      alert("Debes ingresar numeros mayores a cero.");
      return false;
    }
  } else {
    alert("Tienes que ingresar solamente numeros, nada de letras.");
    return false;
  }
}
document.getElementById("mainTriggerQ4").addEventListener("click", function () {
  let numberOneQ4 = parseInt(document.getElementById("numberOneQ4").value);
  if (numberValidationQ4(numberOneQ4) == true) {
    CalculateDaysQ4();
  } else {
    return false;
  }
});

// 5. Crear un programa que solicite al usuario 5 números y realice los cálculos que se piden a continuación.
// ● La suma de todos los números.
// ● El promedio de los 5 números ingresados.

function AdditionQ5() {
  let numberOneQ5 = parseInt(document.getElementById("numberOneQ5").value);
  let numberTwoQ5 = parseInt(document.getElementById("numberTwoQ5").value);
  let numberThreeQ5 = parseInt(document.getElementById("numberThreeQ5").value);
  let numberFourQ5 = parseInt(document.getElementById("numberFourQ5").value);
  let numberFiveQ5 = parseInt(document.getElementById("numberFiveQ5").value);
  let AdditionResults =
    numberOneQ5 + numberTwoQ5 + numberThreeQ5 + numberFourQ5 + numberFiveQ5;
  document.getElementById(
    "result_additionQ5"
  ).innerHTML = `1) El resultado de la suma es: ${AdditionResults} <br>`;
}
function AverageQ5() {
  let numberOneQ5 = parseInt(document.getElementById("numberOneQ5").value);
  let numberTwoQ5 = parseInt(document.getElementById("numberTwoQ5").value);
  let numberThreeQ5 = parseInt(document.getElementById("numberThreeQ5").value);
  let numberFourQ5 = parseInt(document.getElementById("numberFourQ5").value);
  let numberFiveQ5 = parseInt(document.getElementById("numberFiveQ5").value);
  let AverageResults =
    (numberOneQ5 + numberTwoQ5 + numberThreeQ5 + numberFourQ5 + numberFiveQ5) /
    5;
  document.getElementById(
    "result_averageQ5"
  ).innerHTML = `2) El resultado del promedio es: ${AverageResults} <br>`;
}
function numberValidationQ5(
  numberOneQ5,
  numberTwoQ5,
  numberThreeQ5,
  numberFourQ5,
  numberFiveQ5
) {
  if (
    !isNaN(numberOneQ5) &&
    !isNaN(numberTwoQ5) &&
    !isNaN(numberThreeQ5) &&
    !isNaN(numberFourQ5) &&
    !isNaN(numberFiveQ5)
  ) {
    if (
      numberOneQ5 !== 0 &&
      numberTwoQ5 !== 0 &&
      numberThreeQ5 !== 0 &&
      numberFourQ5 !== 0 &&
      numberFiveQ5 !== 0
    ) {
      return true;
    } else {
      alert("Debes ingresar numeros mayores a cero.");
      return false;
    }
  } else {
    alert("Tienes que ingresar solamente numeros, nada de letras.");
    return false;
  }
}
document.getElementById("mainTriggerQ5").addEventListener("click", function () {
  let numberOneQ5 = parseInt(document.getElementById("numberOneQ5").value);
  let numberTwoQ5 = parseInt(document.getElementById("numberTwoQ5").value);
  let numberThreeQ5 = parseInt(document.getElementById("numberThreeQ5").value);
  let numberFourQ5 = parseInt(document.getElementById("numberFourQ5").value);
  let numberFiveQ5 = parseInt(document.getElementById("numberFiveQ5").value);

  if (
    numberValidationQ5(
      numberOneQ5,
      numberTwoQ5,
      numberThreeQ5,
      numberFourQ5,
      numberFiveQ5
    ) == true
  ) {
    AdditionQ5();
    AverageQ5();
  } else {
    return false;
  }
});
