// js/collections/todos.js

var app = app || {};

// Todo Collection
// ------------------------

// The collection of todos is backed by localStorage instead of a remote server.
var TodoList = Backbone.Collection.extend({

    // Reference to this collections model.
    model: app.Todo,

    // save all of the todo items under the todo-backbone namespace.
    // note tha tyou will need to have the BAckbone localStorage plug-in
    // loaded inside your page in order for this to work.
    // if testing in the console without this present, comment out the next line
    // to avoid running into an exception.
    localStorage: new Backbone.LocalStorage('todos-backbone'),

    // Filter down the list of all todo items that are finished.
    completed: function() {
        return this.filter(function( todo ) {
            return todo.get('completed');
        });
    },

    // filter down the list to only todo items that are still not finished.
    remaining: function() {
    // apply allowus to define the context of this within our function scope.
        return this.without.apply( this, this.completed() );
    },

    // We keep the todos in sequential order, despite being saved by unordered
    // GUID in the database. This generates the next order number for new items.
    nextOrder: function() {
        if ( !this.length ) {
            return 1;
        }
        
        return this.last().get('order') + 1;
    },

    // Todos are sorted by their original insertion order.
    comparator: function() {
        return todo.get('order');
    }
});

// Create our global collection of todos.
app.Todos = new TodoList();
