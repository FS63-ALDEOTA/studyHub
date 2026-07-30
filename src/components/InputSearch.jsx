import { Search } from "lucide-react";

const InputSearch = () => {
  return (
    <div className="relative">
      <Search 
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        size={20}
      />

      <input
        type="text"
        placeholder="Buscar atividades"
        className="pl-11 border border-[#CCC3D8] bg-[#F0F3FF] rounded-3xl py-2 w-87 cursor-pointer outline-none"
      />
    </div>

  );
};

export default InputSearch;