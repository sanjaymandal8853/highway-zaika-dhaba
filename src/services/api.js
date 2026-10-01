
const API_URL = import.meta.env.VITE_API_URL;

export async function getMenu() {
  const response = await fetch(`${API_URL}/menu`);

  if (!response.ok) {
    throw new Error("Failed to load menu");
  }

  return response.json();
}

export async function submitOrder(orderData) {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Order failed");
  }

  return data;
}

export async function submitReservation(reservationData) {
  const response = await fetch(`${API_URL}/reservations`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reservationData),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message || "Reservation failed"
    );
  }

  return data;
}