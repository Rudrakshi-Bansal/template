import Heading from "../components/Heading";
import { ProfilePicture } from "../components/ProfilePicture";
import Button from "../components/Button";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

export const VolunteerSignup = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row bg-white">
            <div className="w-full flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-sm">
                    <div className="mb-16">
                        <Heading label={"NGO NAME"} />
                        <SubHeading label={"ADD WORK"} />
                    </div>

                    <div className="flex justify-center my-12">
                        <ProfilePicture />
                    </div>

                    <div className="space-y-6">
                        <InputBox placeholder="VOLUNTEER NAME" />
                        <InputBox placeholder="AADHAR ID" />
                    </div>

                    <div className="mt-20">
                        <Button label="Submit" onClick={() => {}} className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}