
//targeting the dom creating new variables.

const inputText = document.getElementById('inputForm');
const btn = document.getElementById('submit');
const submissions = document.getElementById('submissions');

// function to create submissions.

function submitText() { 
   const newSubmission = createSubmissionItem(inputText.value);
   submissions.appendChild(newSubmission);
}

// clearing the input field.

inputText.value = '';

//the event listener waits for the user to click the item and runs the submitText function.

btn.addEventListener('click', submitText) 

//createSubmissionItem puts each submission in a divided feed.

function createSubmissionItem(text) { 
    const submissionItem = document.createElement('div');
    submissionItem.className = 'border p-3 mb-3 mt-3';

    const textElement = document.createElement('p');
    textElement.textContent = text;

    submissionItem.appendChild(textElement);

    const divider = document.createElement('hr');
    submissionItem.appendChild(divider);

    return submissionItem;

}
