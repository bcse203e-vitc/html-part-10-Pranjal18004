function submitOrder() {
    const size = document.querySelector('input[name="size"]:checked').value;
    const toppings = Array.from(document.querySelectorAll('input[name="toppings"]:checked'))
                          .map(topping => topping.value);
    document.getElementById('orderSummary').innerText = `You ordered a ${size} pizza with ${toppings.join(', ')}.`;
}