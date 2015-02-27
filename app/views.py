from flask import render_template
from app import app

@app.route('/index')
def index():
    return render_template('index.html', title='index')

@app.route('/library')
def library():
    return render_template('library/index.html', title='library')

@app.route('/index_canvas')
def index_canvas():
    return render_template('index_canvas.html', title='index_canvas')

@app.route('/index_canvas_test')
def index_canvas_test():
    return render_template('index_canvas_test.html', title='index_canvas')

