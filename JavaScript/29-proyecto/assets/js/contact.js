window.addEventListener("load", () => {
  const validation = new JustValidate(".main__contact");
  let isValidate = false;

  validation
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "El nombre es obligatorio",
      },
      {
        rule: "minLenght",
        value: 3,
        errorMessage: "El nombre es muy corto!!",
      },
      {
        rule: "maxLenght",
        value: 15,
        errorMessage: "El nombre es muy largo!!",
      },
    ])

    .addField("#surname", [
      {
        rule: "required",
        errorMessage: "Los apellidos son obligatorios",
      },
      {
        rule: "minLenght",
        value: 3,
        errorMessage: "Los apellidos son muy cortos!!",
      },
      {
        rule: "maxLenght",
        value: 25,
        errorMessage: "Los apellidos son muy largos!!",
      },
    ])

    .addField("#email", [
      {
        rule: "required",
        errorMessage: "El email es obligatorio!",
      },
      {
        rule: "email",
        errorMessage: "El email no es valido!",
      },
    ])
    .addField("#gender", [
      {
        rule: "required",
        errorMessage: "Selecciona un genero!",
      },
    ])
    .addField("#date", [
      {
        rule: "required",
        errorMessage: "Selecciona te fecha de nacimiento!",
      },
    ])
    .addField("#years", [
      {
        rule: "required",
        errorMessage: "La edad es obligatoria!",
      },
      {
        rule: "integer",
        errorMessage: "Solo son validos los numeros!",
      },
    ])
    .onSuccess(() => {

        isValidate = true

        alert("TODO EL VALIDO!!")

    })
});
