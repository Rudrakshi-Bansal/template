import { useState } from 'react';
import Button from '../components/Button';
import GoogleButton from '../components/GoogleButton';
import Heading from '../components/Heading';
import InputBox from '../components/InputBox';
import SubHeading from '../components/SubHeading';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-sm">
          <div className="mb-8">
            <Heading label={"NGO NAME"} />
            <SubHeading label={"LOGIN"} />
          </div>

          <div className="space-y-6">
            <InputBox placeholder="EMAIL" type="email" />
            <InputBox placeholder="PASSWORD" type="password" />
            <InputBox placeholder="REGISTRATION TYPE" type="select" />
          </div>

          <div className="mt-8">
            <Button label="Login" onClick={() => {}} className="w-full" />
          </div>

          <GoogleButton onClick={() => {}} />
        </div>
      </div>
      <div className="w-full lg:w-2/5 flex items-center justify-center p-8 bg-white">
        <img src="./picture.png" alt="" />
      </div>
    </div>
)}