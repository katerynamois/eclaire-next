export async function POST(request) {
  const order = await request.json();

  if (!order.items || order.items.length === 0) {
    return Response.json({ error: "The cart is empty" }, { status: 400 });
  }

  const total = order.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const orderId = Date.now();
  console.log(`New order #${orderId}:`, order.items.length, "products,", total, "kr.");

  return Response.json(
    { orderId, total, message: "Thank you for your order!" },
    { status: 201 }
  );
}
