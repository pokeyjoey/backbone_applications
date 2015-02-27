// site/js/models/book.js

var app = app || {};

app.Book = Backbone.model.extend({
        defaults: {
            coverImage: 'static/img/placeholder.png',
            title: 'No title',
            author: 'unknown',
            releaseDate: 'unknown',
            keywords: 'None'
        }
        
});

