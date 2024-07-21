# RUVIMBO CHARITY PROGRAM

This is a simple web application built with Flask that enables online payments for a charity organization using Stripe as the payment processor.

#### Video Demo:  <https://youtu.be/iaJVcliVi4k>

#### Description:

Basically this program is about helping the deprived youth of Southern Africa. We are collecting donations from different location. Donations of any kind excluding food products will be accepted, be it feminine hygiene products, clothing, school stationery, toys or cash donations. VERY IMPORTANT: ALL CASH DONATIONS ARE SAFELY HANDLED AND DEPOSITED INTO THE CHARITY BANK WHICH MEANS THEY'RE SECURED FROM THE MOMENT THEY'RE SENT. WE DON'T GIVE DIRECT CASH FUNDS TO THE YOUTH BUT IT IS USED TO BUY ALL BASIC NECESSITIES FOR THEM e.g. School stationery, sanitary pads, fresh food and etc.

#### Prerequisites:

To run this application, make sure you have the following installed:

- Python (version 3.6 or higher)
- Flask (version 2.0.1 or higher)
- Stripe API keys (publishable key and secret key)

#### Installation:

pip install flask-sqlalchemy
pip install flask-login
pip install stripe

#### Start the application:

flask run

The application will be available at http://localhost:5000.

#### File Descriptions:

app.py: is run to start the website.

views.py: The main Flask application file containing the routes and payment handling logic.

models.py: This file includes the database schema (sqlalchemy) and necessary table structures for the project. It should be executed to set up the database before running the application.

auth.py: This module provides utility functions used throughout the application. It includes functions for email validation, and password hashing.

init.py_ it makes the _system_ folder a python package

templates/: Directory containing the HTML templates for rendering the web pages.

static/: Directory for static assets like css files, fonts,images and javacripts files.

#### Design Choices:

During the development of the "RUVIMBO CHARITY PROGRAM" project, several design choices were debated and made. Here are some of the key decisions and the reasons behind them:

Database Schema: We carefully designed the database schema to ensure optimal performance and data integrity. We used normalized tables to eliminate data redundancy and applied appropriate indexing to speed up query execution.

Password Hashing: Security is a top priority for the "RUVIMBO CHARITY PROGRAM" project. We implemented a robust password hashing mechanism using bcrypt to protect user passwords. This ensures that even in the event of a data breach, user passwords remain securely encrypted.

Responsive UI: We made the application's user interface responsive and mobile-friendly to provide a seamless experience across different devices. This design choice enables users to access and manage their tasks conveniently from their desktop computers, tablets, or smartphones.

#### Usage:

Visit the home page of the application in your web browser.
Find and click the "Donate" button.
You will be redirected to the Stripe Checkout page where you fill up the forms to complete the payment.
On Stripe Checkout page for the card enter quad number 4242 4242 4242 4242, enter greater year and on CVC and ZIP enter any digits
After successful payment, you will see a confirmation page with a thank you message.

#### Directory Structure:

The project directory structure is as follows:

project/
  ├── instance/
  │   ├── database.db
  │
  ├── system/
  │   ├── _init_.py
  │   ├── auth.py
  │   ├── models.py
  │   └── views.py
  ├── static/
  ├── css/
  │   ├── nav.css
  │   └── payment.css
  ├── font-aws/
  │   ├── all.css
  │   └── all.js
  ├── img/
  │   ├── bg.jpg
  │   ├── charity.jpg
  │   ├── hands.jpg
  │   ├── help.jpg
  │   ├── icons.png
  │   └── youth.jpg
  ├── js/
  │   └── payment.js
  │
  ├── templates/
  │   ├── about.html
  │   ├── base.html
  │   ├── home.html
  │   ├── login.html
  │   ├── payment.html
  │   ├── sign_up.html
  │   ├── success_payment.html
  │   └── wedo.html
  │
  ├── app.py
  └── README.md

#### References:

Integrating Stripe payments with Flask (Article on DEV Community)[1]
Flask Stripe Payment App (GitHub Repository)[2]
Stripe Payments with Python Flask (GitHub Repository)[3]