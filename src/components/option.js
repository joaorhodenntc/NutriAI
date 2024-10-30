export default function Option({ letter, text, onClick }) {
    return (
      <div onClick={onClick} className="flex flex-row items-center mt-4 bg-white w-full rounded-xl p-2 cursor-pointer hover:bg-[#a9de80] group shadow" >
        <div className="bg-[#aed88d] w-8 h-8 p-4 rounded-full text-center flex justify-center items-center group-hover:bg-[#fefefe]">
            <p>{letter}</p>
        </div>
        <h1 className="ml-3">{text}</h1>
      </div>
    );
  }