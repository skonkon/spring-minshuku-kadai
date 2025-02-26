const stripe = Stripe('pk_test_51Qwng3KP48iI9eCWDJbhWm8RV5Q2LkpEzIc10hCLaVWUrXF9Zr2bImZUUj3hVbkkvwahpj6aLNZEDHopRnGluRJ800fx9bGijy');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});