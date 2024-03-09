import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../features/addUser/addUser';

const AddUserModal = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyCatchPhrase, setCompanyCatchPhrase] = useState('');
  const [companyBs, setCompanyBs] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const companyData = {
      name: companyName,
      catchPhrase: companyCatchPhrase,
      bs: companyBs,
    };
    dispatch(addUser({ name, email, phone, website, company: companyData }));
    setName('');
    setEmail('');
    setPhone('');
    setWebsite('');
    setCompanyName('');
    setCompanyCatchPhrase('');
    setCompanyBs('');
    onClose();
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        <h3>Add user form</h3>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" required />
        <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder="Website" required />
        <input type="text" value={companyCatchPhrase} onChange={(e) => setCompanyCatchPhrase(e.target.value)} placeholder="Company" required />
        <div className='modal-btns'>
          <button type="submit">Submit</button>
          <button type="button" onClick={onClose}>Close</button>
        </div>
      </form>
    </div>
  );
};

export default AddUserModal;
