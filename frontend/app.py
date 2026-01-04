from flask import Flask, render_template, url_for

app = Flask(__name__)

@app.route('/')
def root():
    return render_template('header.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/issues')
def issues():
    return render_template('issues.html')
