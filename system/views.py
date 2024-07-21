from flask import Blueprint, render_template, request, redirect, url_for, flash 
from flask_login import  login_required, current_user
from .models import Donation, User
from .import db, usd 
from .import  DB_NAME
import stripe


views = Blueprint('views', __name__)

public_key = "pk_test_51MdMVtEXYbR6zKzz0sjlt0Hj3i0k3F2xnYAU6HsXm4vgw6AtbliYpl3nUuVU8kkbKUUymAVbN4fDZ2USaRDFi6DB00o8BtxFRQ"
stripe.api_key = "sk_test_51MdMVtEXYbR6zKzzLjaPqsTgVech9HRkgS0RB23bkW5GHeBIWV4591iU2kBDQIEwbM7SvYhUkTx1u69dsdBLDDlc00rmjqzCzH"



@views.route('/')
@login_required
def home():
    return render_template("home.html", user=current_user, public_key=public_key)
    
@views.route('/about')
def about():
    return render_template("about.html", user=current_user)

@views.route('/wedo')
def wedo():
    return render_template("wedo.html", user=current_user)

@views.route('/success_payment')
def success_payment():
    amount = request.args.get('amount')
    return render_template('success_payment.html', user=current_user, amount=usd(amount))     

@views.route('/payment')
def payment():
    return render_template("payment.html", user=current_user)

@views.route('/charge', methods=['GET','POST'])
def charge():

    if request.method == 'POST':
        cus_name = request.form.get('cus_name')
        amount = request.form.get('amount')
        description = request.form.get('message')
        mail = request.form.get('mail')

        
        
        if len(description) < 2:
            flash('Description too short!', category='error')
        else:
             new_donation = Donation(donation_description=description, donation_amount=amount, user_id=current_user.id)
             db.session.add(new_donation)
             db.session.commit()
             

    customer = stripe.Customer.create(
        email = mail,
        name = cus_name,
        source = request.form.get('stripeToken'))

    charge = stripe.Charge.create(
        customer = customer, 
        amount = int(amount), 
        currency = 'usd', 
        description = description
        )
    
        

    return redirect(url_for('views.success_payment' ,amount=amount))