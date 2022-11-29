//Type casting allows you to convert a variable from one type to another.
//Use the as keyword or <> operator for type castings.

//let user = document.querySelector('name').value =>Property 'value' does not exist on type 'Element'.
let userElement = document.querySelector("name") as HTMLInputElement;
let username = userElement.value;

let feedbackElement = document.querySelector("feedback");
let feedback = (feedbackElement as HTMLInputElement).value;
