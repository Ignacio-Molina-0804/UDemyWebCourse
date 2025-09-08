window.addEventListener("load", () => {
  const validation = new JustValidate(".main__contact");
  let isValidate = false;

  validation
    .addField("#contactName", [
      {
        rule: "required",
        errorMessage: "El nombre es obligatorio",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "El nombre es muy corto!!",
      },
      {
        rule: "maxLength",
        value: 15,
        errorMessage: "El nombre es muy largo!!",
      },
    ])

    .addField("#contactSurname", [
      {
        rule: "required",
        errorMessage: "Los apellidos son obligatorios",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Los apellidos son muy cortos!!",
      },
      {
        rule: "maxLength",
        value: 25,
        errorMessage: "Los apellidos son muy largos!!",
      },
    ])

    .addField("#contactEmail", [
      {
        rule: "required",
        errorMessage: "El email es obligatorio!",
      },
      {
        rule: "email",
        errorMessage: "El email no es valido!",
      },
    ])
    .addField("#contactGender", [
      {
        rule: "required",
        errorMessage: "Selecciona un genero!",
      },
    ])
    .addField("#contactDate", [
      {
        rule: "required",
        errorMessage: "Selecciona tu fecha de nacimiento!",
      },
    ])
    .addField("#contactYears", [
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
