// js/views/todos.js

var app = app || {};

// Todo item view
// --------------

// The DOM element for a todo item
app.TodoView = Backbone.View.extend({

    // is a list tag
    tagName: 'li',

    // Cache the template function for a single item
    template: _.template( $('#item-template').html() ),

    // the dome events specific to an item
    events: {
        'dblclick label': 'edit',
        'keypress .edit': 'updateOnEnter',
        'blur .edit': 'close'
    },

    // The TodoView listens for changes to its model, rerendering.
    // Since theres a one to one correspondence between a Todo and a TodoView
    // in this app, we set a direct reference on the model for convenience.
    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
    },

    // Rerenders the titles of the todo item.
    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) );
        this.$input = this.$('.edit');
        return this;
    },

    // switch this view into editing mode, displaying the input filed.
    edit: function() {
        this.$el.addClass('editing');
        this.$input.focus();
    },

    // Close the diting mode saving changes to the todo.
    close: function() {
        var value = this.$input.val().trim();

        if ( value ) {
            this.model.save({ title: value });
        }

        this.$el.removeClass('editing');
    },

    // if you hit enter we are through editing the item.
    updateOnEnter: function( e ) {
        if ( e.which === ENTER_KEY ) {
            this.close();
        }
    }
});
