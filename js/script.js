//  Curtousy of ChatGPT 

// Select the form element by its ID
const form = document.getElementById('empForm');

// Add a submit event listener to the form element
form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Create a FormData object to access input values
    const formData = new FormData(form);

    // Get the values of "id" and "name" inputs
    const id = formData.get('id');
    const name = formData.get('name');

    // Log the values
    console.log(`ID: ${id}`);
    console.log(`Name: ${name}`);

    // Perform additional actions here
    console.log('Form submitted!');
});
