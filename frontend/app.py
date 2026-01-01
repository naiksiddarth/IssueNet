from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def root():
    return render_template('header.html')

@app.route('/login')
def login():
    return render_template('login.html')