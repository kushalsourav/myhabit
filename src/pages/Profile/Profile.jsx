import React, { useEffect } from 'react'
import Quotes from '../../components/Quotes/Quotes';
import { useAuth } from '../../contexts/AuthContext/AuthContext';
import { useData } from '../../contexts/DataContext/DataContext';
import "./Profile.css";

const Profile = () => {
  const {data, setData} = useData();
  const {authState} = useAuth();
  const Quote = require('inspirational-quotes');

  useEffect(() => {
    setData({type:"QUOTE", quote:Quote.getQuote()})
  },[Quote, setData]);

  return (
      <div>
          <div className="personal-information">
              <h2>Personal information</h2>
              <div className="personal-details">
                  <p className="user-email">Email: {authState.userData.email}</p>
                  <p className="user-name">Firstname : {authState.userData.firstName}</p>
                  <p className="user-name">  Lastname : {authState.userData.lastName}</p>
              </div>
          </div>
          <Quotes text={data.quote.text} author={data.quote.author} />
      </div>
  );
};

export default Profile;