var stripe = Stripe('pk_test_51MdMVtEXYbR6zKzz0sjlt0Hj3i0k3F2xnYAU6HsXm4vgw6AtbliYpl3nUuVU8kkbKUUymAVbN4fDZ2USaRDFi6DB00o8BtxFRQ');


// Create an instance of Elements.
var elements = stripe.elements();

// Custom styling can be passed to options when creating an Element.
// (Note that this demo uses a wider set of styles than the guide below.)
var style = {
  base: {
    color: '#32325d',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '16px',
    '::placeholder': {
      color: '#aab7c4'
    }
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};

// Create an instance of the card Element.
var card = elements.create('card', {style: style});

// Add an instance of the card Element into the `card-element` <div>.
card.mount('#card-element');

// Handle real-time validation errors from the card Element.
card.on('change', function(event) {
  var displayError = document.getElementById('card-errors');
  if (event.error) {
    displayError.textContent = event.error.message;
  } else {
    displayError.textContent = '';
  }
});



// Handle form submission.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  var cus_name = document.getElementById("cus_name");
  cus_name.addEventListener("input", () => {
    if (cus_name.validity.tooLong || cus_name.validity.tooShort || cus_name.validity.valueMissing) {
      cus_name.setCustomValidity("Name must be more that 1 character.");
      cus_name.reportValidity();
    } else { cus_name.setCustomValidity(""); }
    });
  
 
  var message = document.getElementById("message");
  message.addEventListener("input", () => {
    if (message.validity.tooLong || message.validity.tooShort || message.validity.valueMissing) {
      message.setCustomValidity("Message must be more than 1 character.");
      message.reportValidity();
    } else { message.setCustomValidity(""); }
    });
  
  var amount = document.getElementById("amount");
  amount.addEventListener("input", () => {
    if (amount.validity.tooLong || amount.validity.tooShort || amount.validity.valueMissing) {
      amount.setCustomValidity("Amount must be more than 1 character.");
      amount.reportValidity();
    } else { amount.setCustomValidity(""); }
    });
  
  var mail = document.getElementById("mail");
  mail.addEventListener("input", () => {
    if (mail.validity.tooLong || mail.validity.tooShort || mail.validity.valueMissing) {
      mail.setCustomValidity("Email must be more than 1 character.");
      mail.reportValidity();
    } else { mail.setCustomValidity(""); }
    });  
  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error.
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server.
      stripeTokenHandler(result.token);
    }
  });
});




// Submit the form with the token ID.
function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);

  // Submit the form
  form.submit();
}