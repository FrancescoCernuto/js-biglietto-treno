const tripLength = parseInt(
    prompt("Quanti chilometri vorresti percorrere?", "Es: 10").replace(
      "Es: ",
      " "
    )
  );
  const personAge = parseInt(
    prompt("Quanti anni hai?", "Es: 27").replace("Es: ", " ")
  );

  const pricePerKilometer = 0.21;
  let ticketPrice = pricePerKilometer * tripLength;
  
  