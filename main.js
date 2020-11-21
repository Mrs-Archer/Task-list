const $taskContainer = $(".la-task-input-container")
const $inputField = $(".la-task-input")


function addNewTask(){
  const $taskListItem = $(document.createElement("div"))
    .addClass("la-task-list-item")
    .html($inputField.val());
    const $removeButton = $(document.createElement("button"))
      .addClass("la-task-item-remove").html('<i class="fas fa-trash-alt"></i>').click(function(){
        $taskListItem.remove()
      });

      $taskListItem.append($removeButton)

    $taskContainer.append($taskListItem);
    $inputField.val("")
}

