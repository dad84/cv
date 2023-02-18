// Get references to the input and output elements
const input = document.querySelector('.command');
const output = document.querySelector('.output');

// Add a keydown event listener to the input element
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    // Get the trimmed value of the input element
    const command = input.value.trim();
    // Clear the input element
    input.value = '';
    // Call the execute function with the command
    execute(command);
  }
});

// Define the execute function
function execute(command) {
  let result = '';

  // Use a switch statement to determine the result based on the command
  switch (command) {
    case 'help':
      result = `
        Available commands:
        - help: display this help message
        - about: display information about me
        - project: display my last projects and experience
        - skills: display my skills and experience
        - contact: display my contact information
      `;
      break;
      
      case 'about':
      result = `
        My name is Kostas, highly motivated with a passion for building innovative and scalable solutions. Proficient in JavaScript, blockchain, Python, and CSS, with experience in developing decentralized applications and contributing to the development of the Elastic programming language..
      `;
      break;
    
    case 'project':
      result = `
        Independent Developer for "Adopto" :
        - Designed and developed "Adopto", a website that generates AI-generated articles and images
        - Utilized natural language processing and computer vision to create high-quality and relevant content
        - Conducted testing and debugging to ensure proper functionality
        
        Developer for XEL :
        - Participated in the development of the Elastic programming language used by XEL
        - Designed and developed decentralized applications using JavaScript, Python, and CSS on the XEL platform
        - Collaborated with cross-functional teams to design and implement new features for the XEL platform
        - Conducted code reviews and provided feedback to other developers to improve the quality of the XEL platform
        - Worked with the XEL community to provide support and assistance in developing decentralized applications


        
      `;
      break;
      
    case 'skills':
      result = `
        - Proficient in JavaScript, blockchain, Python, and CSS
        - Experienced in developing decentralized applications and working with the XEL platform
        - Participated in the development of the Elastic programming language
        - Strong problem-solving and analytical skills
        - Ability to work independently and as part of a team
        - Excellent written and verbal communication skills
        - Experience with natural language processing and computer vision

      `;
      break;

    case 'contact':
      result = `
        Email: kostas.jankus@proton.com
        Phone: 93478799
      `;
      break;

    default:
      result = `Command not found: ${command}`;
  }
  
  // Set the text content of the output element to the command and result
  output.textContent = `$ ${command}\n${result}\n`;
}