$(document).ready(function(){

	var firstTemplate = _.template($('.new-todo').text());

	todoArray = [];

	// Add Button
	$('.add-btn-js').click(function(){

			var description = $('.maininput').val();

			var todo =  {
				description: description,
				done: false,
				id: _.uniqueId('todo')
			}

			var newerTemplate = firstTemplate(todo);

			$('.js-todo-items').prepend(newerTemplate);

			todoArray.push(todo);
		})

	// Delete Button
	$('.js-todo-items').on('click', '.js-remove-todo', function(){

			var parentId = $(this).parent().attr('id');

			todoArray = _.reject(todoArray, function(item){ 
		      return item.id == parentId;
		    });

		    $(this).parent().remove();
		});

	// Complete Button
	$('.js-todo-items').on('click', '.js-complete-todo', function(){

			$(this).parent().toggleClass('done');
			var parentId = $(this).parent().attr('id');
				
			var item = _.findWhere(todoArray, {id: parentId})

			item.done = true;

		});


})