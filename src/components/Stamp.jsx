import stamp from "../../../../../../../src/assets/stamp.png";
import checkedStamp from "../../../../../../../src/assets/complete-stamp.png";

export default function Stamp({ isChecked }) {
  return (
    <div className="inline-block p-10 border-l border-b">
      <img
        src={isChecked ? stamp : checkedStamp}
        className="w-14 h-14"
        alt="order stamp"
      />
    </div>
  );
}