import PendingIcon from "../../assets/pendingIcon.svg";
import Button from "../global/Button";

type PendingModalProps = {  
    closeModal: () => void;  
  };  

const PendingModal: React.FC<PendingModalProps> = ({ closeModal }) => {

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50 g-white bg-opacity-10 backdrop-blur-sm">
      <div className="max-w-[442px] bg-white rounded-[8px] p-12">
        <img
          src={PendingIcon}
          alt="Registration is currently pending approval"
          className="justify-self-center mb-4"
        />
        <p className="font-medium text-[24px] text-center text-[#FF9900] mt-2">
          Pending
        </p>
        <p className="text-[14px] text-[#1A1619] text-center mt-4 mb-2 font-normal">
          Your registration is awaiting approval from our partnership team.
        </p>

        <Button type="button" className="w-full" onClick={closeModal}>
          Done
        </Button>
      </div>
    </div>
  );
};

export default PendingModal;
