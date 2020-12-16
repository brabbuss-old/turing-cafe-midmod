export const getReservationsData = async () => {
  const response = await fetch(
  "http://localhost:3001/api/v1/reservations"
  ).then(response => response.json())
  .catch((error) => console.log(error));
  return response
}