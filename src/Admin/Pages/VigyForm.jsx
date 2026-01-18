import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../components/RegisterAdmin/InputField';
import SelectField from '../components/RegisterAdmin/SelectField';
import FileInput from '../components/RegisterAdmin/FileInput';
import axios from 'axios';


const VigyForm = () => {
 const [activeTab, setActiveTab] = useState('personal');
 const [formData, setFormData] = useState({
   personal: {},
   contact: {},
   banking: {},
   verification: {},
   additional: {}
 });


 const tabs = [
   { id: 'personal', label: 'Personal' },
   { id: 'contact', label: 'Contact' },
   { id: 'banking', label: 'Banking' },
   { id: 'verification', label: 'Verification' },
   { id: 'additional', label: 'Additional' },
 ];


 const handleTabChange = (direction) => {
   const currentIndex = tabs.findIndex(tab => tab.id === activeTab);
   let newIndex;


   if (direction === 'next') {
     newIndex = Math.min(currentIndex + 1, tabs.length - 1);
   } else {
     newIndex = Math.max(currentIndex - 1, 0);
   }


   if (newIndex !== currentIndex) {
     setActiveTab(tabs[newIndex].id);
   }
 };


 const handleInputChange = (e) => {
   const { name, value, type } = e.target;
   let processedValue = value;
    if (type === 'file') {
     processedValue = e.target.files[0];
   } else {
     const inputProcessors = {
     aadhaarNumber: val => val.replace(/\D/g, '').slice(0, 12),
     phoneNumber: val => val.replace(/\D/g, '').slice(0, 10),
     email: val => val.toLowerCase(),
     bankAccountName: val => val.toUpperCase(),
     bankBranch: val => val.toUpperCase(),
     ifscCode: val => val.toUpperCase(),
     bankAccountNumber: val => val.replace(/\D/g, '').slice(0, 18),
   };
  
   processedValue = inputProcessors[name] ? inputProcessors[name](value) : value;
 }


 setFormData(prevData => ({
   ...prevData,
   [activeTab]: {
     ...prevData[activeTab],
     [name]: processedValue
   }
 }));
};


 const validateEmail = (email) => {
   return email.includes('@');
 };


 const indianBanks = [
   { value: '', label: 'Select bank' },
   { value: 'SBI', label: 'State Bank of India' },
   { value: 'HDFC', label: 'HDFC Bank' },
   { value: 'ICICI', label: 'ICICI Bank' },
   { value: 'PNB', label: 'Punjab National Bank' },
   { value: 'BOB', label: 'Bank of Baroda' },
   { value: 'AXIS', label: 'Axis Bank' },
   { value: 'KOTAK', label: 'Kotak Mahindra Bank' },
   { value: 'IDBI', label: 'IDBI Bank' },
   { value: 'UBI', label: 'Union Bank of India' },
   { value: 'CANARA', label: 'Canara Bank' },
 ];


 const renderTabContent = () => {
   const currentFormData = formData[activeTab] || {};


   switch (activeTab) {
     case 'personal':
       return (
         <>
           <InputField
             label="Full Name"
             name="fullname"
             value={currentFormData.fullname || ''}
             onChange={handleInputChange}
             placeholder="Enter your full name"
             required
           />
           <InputField
             label="Date of Birth"
             name="dob"
             value={currentFormData.dob || ''}
             onChange={handleInputChange}
             type="date"
             required
           />
           <SelectField
             label="Gender"
             name="gender"
             value={currentFormData.gender || ''}
             onChange={handleInputChange}
             options={[
               { value: '', label: 'Select gender (optional)' },
               { value: 'male', label: 'Male' },
               { value: 'female', label: 'Female' },
               { value: 'other', label: 'Other' }
             ]}
           />
           <InputField
             label="Aadhaar Number"
             name="aadhaarNumber"
             value={currentFormData.aadhaarNumber || ''}
             onChange={handleInputChange}
             placeholder="Enter your aadhaar number"
             required
             maxLength={12}
             pattern="\d{12}"
             title="Aadhaar number must be 12 digits"
           />
         </>
       );
     case 'contact':
       return (
         <>
           <InputField
             label="Email Address"
             name="email"
             value={currentFormData.email || ''}
             onChange={handleInputChange}
             type="email"
             placeholder="Enter your email"
             required
             validate={validateEmail}
             errorMessage="Please enter a valid email address with '@' symbol"
           />
           <InputField
             label="Phone Number"
             name="phoneNumber"
             value={currentFormData.phoneNumber || ''}
             onChange={handleInputChange}
             type="tel"
             placeholder="Enter your phone number"
             required
             maxLength={10}
             pattern="\d{10}"
             title="Phone number must be 10 digits"
           />
           <InputField
             label="Physical Address"
             name="address"
             value={currentFormData.address || ''}
             onChange={handleInputChange}
             placeholder="Enter your address"
             required
           />
         </>
       );
     case 'banking':
       return (
         <>
           <InputField
             label="Bank Account Name"
             name="bankAccountName"
             value={currentFormData.bankAccountName || ''}
             onChange={handleInputChange}
             placeholder="Enter account name"
             required
             style={{textTransform: 'uppercase'}}
           />
           <InputField
             label="Bank Account Number"
             name="bankAccountNumber"
             value={currentFormData.bankAccountNumber || ''}
             onChange={handleInputChange}
             placeholder="Enter account number"
             required
             minLength={8}
             maxLength={18}
             pattern="\d{8,18}"
             title="Bank account number must be 8 to 18 digits"
           />
           <SelectField
             label="Bank Name"
             name="bankName"
             value={currentFormData.bankName || ''}
             onChange={handleInputChange}
             options={indianBanks}
             required
           />
           <InputField
             label="Bank Branch"
             name="bankBranch"
             value={currentFormData.bankBranch || ''}
             onChange={handleInputChange}
             placeholder="Enter bank branch"
             required
             style={{textTransform: 'uppercase'}}
           />
           <InputField
             label="IFSC Code"
             name="ifscCode"
             value={currentFormData.ifscCode || ''}
             onChange={handleInputChange}
             placeholder="Enter IFSC code"
             required
             maxLength={11}
             pattern="^[A-Z]{4}0[A-Z0-9]{6}$"
             title="IFSC code must be 11 characters long, start with 4 uppercase letters, followed by a 0, and end with 6 alphanumeric characters"
             style={{textTransform: 'uppercase'}}
           />
         </>
       );
     case 'verification':
       return (
         <>
           <h2 className="text-lg font-semibold mb-4 text-gray-700">
             Verification Documents <span className="text-red-500 text-sm">(only 50kb max, .pdf, .jpg, .jpeg, .png)</span>
           </h2>
          
           <FileInput
             label="Pan Card"
             name="panCard"
             onChange={handleInputChange}
             accept=".pdf,.jpg,.jpeg,.png"
             required
             maxSize={50 * 1024}
           />
          
           <FileInput
             label="Proof of Address (e.g.,Aadhaar card,Driving Licenese)"
             name="addressProof"
             onChange={handleInputChange}
             accept=".pdf,.jpg,.jpeg,.png"
             required
             maxSize={50 * 1024}
           />
           <FileInput
             label="Profile Picture"
             name="profilePicture"
             onChange={handleInputChange}
             accept="image/*"
             maxSize={50 * 1024}
           />
         </>
       );
     case 'additional':
       return (
         <>
           <InputField
             label="Referral Code"
             name="referralCode"
             value={currentFormData.referralCode || ''}
             onChange={handleInputChange}
             placeholder="Enter referral code (optional)"
           />
           <InputField
             label="Promotional Code"
             name="promotionalCode"
             value={currentFormData.promotionalCode || ''}
             onChange={handleInputChange}
             placeholder="Enter promotional code (optional)"
           />
         </>
       );
     default:
       return null;
   }
 };


 const handleSubmit = async (e) => {
   e.preventDefault();


   const formDataToSend = new FormData();


   // Append all form fields to formDataToSend
   Object.keys(formData).forEach(tab => {
     Object.keys(formData[tab]).forEach(field => {
       if (field === 'panCard' || field === 'addressProof' || field === 'profilePicture') {
         formDataToSend.append(field, formData[tab][field], formData[tab][field].name);
       } else {
         formDataToSend.append(field, formData[tab][field]);
       }
     });
   });


   try {
     const response = await axios.post('https://www.vigybag.com/api/vigy_form', formDataToSend, {
       headers: {
         'Content-Type': 'multipart/form-data',
       },
     });
    //  console.log(response.data);
     console.log('Form submitted successfully!');
     // Handle successful submission (e.g., show success message, redirect)
   } catch (error) {
     console.error('Error submitting form:', error);
     // Handle error (e.g., show error message)
   }
 };


 return (
   <div className='bg-[#fff5edff]'>
     <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8 bg-white shadow-lg rounded-lg mt-1 mb-3">
       <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">Registration Form</h1>
      
       <div className="mb-6 overflow-x-auto">
         <div className="flex border-b whitespace-nowrap">
           {tabs.map((tab) => (
             <button
               key={tab.id}
               className={`px-4 py-2 text-sm sm:text-base ${
                 activeTab === tab.id
                   ? 'border-b-2 border-blue-500 text-blue-600'
                   : 'text-gray-500 hover:text-gray-700'
               }`}
               onClick={() => setActiveTab(tab.id)}
             >
               {tab.label}
             </button>
           ))}
         </div>
       </div>


       <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
         {renderTabContent()}


         {activeTab === 'additional' && (
           <div className="mt-8">
             <h2 className="text-lg font-semibold mb-4 text-gray-700">Terms and Conditions</h2>
             <div className="space-y-2">
               <label className="flex items-center">
                 <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" required />
                 <span className="ml-2 text-sm text-gray-700">
                   I agree to the <Link to="/termsAndCondition" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">terms and conditions</Link>
                 </span>
               </label>
               <label className="flex items-center">
                 <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" required />
                 <span className="ml-2 text-sm text-gray-700">
                   I agree to the <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">privacy policy</Link>
                 </span>
               </label>
             </div>
           </div>
         )}


         <div className="flex justify-between mt-8">
           <button
             type="button"
             onClick={() => handleTabChange('previous')}
             className="px-4 py-2 bg-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out shadow-md"
             disabled={activeTab === tabs[0].id}
           >
             Previous
           </button>
           {activeTab !== tabs[tabs.length - 1].id ? (
             <button
               type="button"
               onClick={() => handleTabChange('next')}
               className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out shadow-md"
             >
               Next
             </button>
           ) : (
             <button
               type="submit"
               className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-150 ease-in-out shadow-md"
             >
               Submit Registration
             </button>
           )}
         </div>
       </form>
     </div>
   </div>
 );
};


export default VigyForm;
