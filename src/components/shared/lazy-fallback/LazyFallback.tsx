import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function LazyFallback() {
  return (
    <div
      className="fixed bg-bgPrimary dark:bg-darkBgPrimary z-50 top-0 
    left-0 w-screen h-full "
    >
      <div className="flex justify-center items-center w-full h-full">
        <AiOutlineLoading3Quarters className="transition-all animate-spin text-[100px]"></AiOutlineLoading3Quarters>
      </div>
    </div>
  );
}
