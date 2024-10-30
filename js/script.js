//  Curtousy of ChatGPT 

// Select the form element by its ID
const form = document.getElementById('empForm');

// Add a submit event listener to the form element
form.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();

    // Create a FormData object to access input values
    const formData = new FormData(form);

    // Get the values of "id" and "name" inputs
    const id = formData.get('id');
    const name = formData.get('name');
    const ext = formData.get('ext');
    const email = formData.get('email');
    const dept = formData.get('dept');

    // Log the values
    console.log(`ID: ${id}`);
    console.log(`Name: ${name}`);
    console.log(`Extension: ${ext}`);
    console.log(`Email: ${email}`);
    console.log(`Department: ${dept}`);

    // Perform additional actions here
    console.log('Some messages have been moved.');
});
