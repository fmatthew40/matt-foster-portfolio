// import React, { useState } from 'react';
// // import Nav from './components/Navigation';
// import { emailValidation } from '../../utils/helpers';


// function Contact() {

 
//     const [formState, setFormState] = useState({ name: '', email: '', message: '' });
//     const { name, email, message } = formState;
//     const [errorMessage, setErrorMessage] = useState('');


//     function handleChange(e) {
//         if (!errorMessage) {
//             setFormState({ [e.target.name]: e.target.value})
//         }
//         if (e.target.name==='email') {
//             const isValid = emailValidation(e.target.value);

//         if (!isValid) {
//             setErrorMessage('Please fix your email address!');
//         } else {
//             setErrorMessage('');
//         }  
//             console.log(isValid);
//         } else { 
//             if (!e.target.value.length) {
//                 setErrorMessage(`${e.target.name} must be entered.`);
//             } else { setErrorMessage('')}
//         } 
//         setFormState({...formState, name: e.target.value })
//     }
//     console.log(formState);
//     function handleSubmit(e) {
//         e.preventDefault(); 
//         console.log(formState);
//     }

//     return(

//         <section>
//             <h2>Contact Form</h2>
//             <form id= "contact" onSubmit={handleSubmit}>
//                 <div>
//                     <label htmlFor='name'>Name:</label>
//                     <input type='text' defaultValue={name} onChange={handleChange} name='name' />
//                 </div>
//                 <div>
//                     <label htmlFor="email">Email Address:</label>
//                     <input type="email" defaultValue ={email} name="email" onChange={handleChange}/>
//                 </div>
//                 <div>
//                     <label htmlFor="message">Message:</label>
//                     <textarea name="message" defaultValue={message} rows="6" onChange={handleChange} />
//                 </div>
//                 {errorMessage && (
//                     <div>
//                         <p className="error-text">{errorMessage}</p>
//                     </div>
//                 )}
//                 <button type="submit">Submit</button>
//             </form>
//         </section>
//     )

// }

// export default Contact; 





import React, { useState } from 'react';
import { emailValidation } from '../../utils/helpers';

function Contact() {
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMessage) {
      setFormState({[e.target.name]: e.target.value});
      console.log('Form', formState);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === 'email') {
      const isValid = emailValidation(e.target.value);
      if (!isValid) {
        setErrorMessage('invalid Email!');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} required.`);
      } else {
        setErrorMessage('');
      }
    }
  };

  return (
    <section>
      <h1 >Contact me</h1>
      <form id="contact" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="8" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit Form</button>
      </form>
    </section>
  );
}

export default Contact;