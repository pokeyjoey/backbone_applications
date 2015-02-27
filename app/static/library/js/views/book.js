// library/js/views/book.js

var app = app || {};

app.BookView = Backbone.view.extend({
    tagName: 'div',
    className: 'bookContainer',
    template: _.template( $('#bookTemplate').html() ),

    render: function() {
        // this.el is what we defined in tagName, use $el to get access to 
        // JQuery html() function.
        this.$el.html( this.template( this.model.attributes ));

        return this;
    }
});