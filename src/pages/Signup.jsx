import Heading from '../components/Heading';
import SubHeading from '../components/SubHeading';
import InputBox from '../components/InputBox';
import Button from '../components/Button';
import GoogleButton from '../components/GoogleButton';

export default function Signup() {
  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
        <Heading label="NGO NAME" />
        <SubHeading label="SIGNUP" />
          <InputBox placeholder="NAME" />
          <InputBox placeholder="EMAIL" />
          <InputBox placeholder="PASSWORD" type="password" />
          <InputBox placeholder="CONFIRM PASSWORD" type="password" />
          <InputBox placeholder="REGISTRATION TYPE" type="select" />
          <Button label="Sign Up" onClick={() => {}} />
          <GoogleButton onClick={() => {}} />
      </div>

      <div className="hidden lg:flex w-full lg:w-1/2 items-center justify-center p-8">
        <img
          src="../assets/image.png"
          alt="NGO"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
