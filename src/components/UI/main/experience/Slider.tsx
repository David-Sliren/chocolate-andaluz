export const Slider = () => {
  return (
    <article className="w-full lg:w-2/3 flex items-center justify-center gap-2 md:gap-4 relative">
      <button className="bg-mint-green text-forest-green rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0 shadow-md">
        <i className="fa-solid fa-chevron-left text-sm md:text-base"></i>
      </button>
      <div className="flex gap-4 overflow-hidden w-full">
        <img
          alt="Church View"
          className="w-full md:w-1/2 rounded-2xl object-cover h-[300px] md:h-[450px]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNINy_yba8VojMnPaCY5eS1Ija5yTFR8NM2Qv6JhRd7RodgnquTuiTpj2jzvFx6zdNXggTLx7pMto7rbzQmmmbU7mC3IeeO67QYPOIBTM0HE4UcXVjO-sOV79a87vd4US58p_0N9zREBOWLh9I0uZysJngJ6H2x6RVpQ1i4Fryvz9M2RHALHlHkCkQ_ZEE-5I5fdKX925-VIYr1qbnTH3h3eRijfFCSZOo5wTXRUYG9WF_r3Zx2k8_5A"
        />
        <img
          alt="Cacao Pod"
          className="hidden md:block w-1/2 rounded-2xl object-cover h-[450px]"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUxBozEQAOehot_kyPQEC51SJ7Ef7RSL4vaGvJRqinAADzLwV_f9pKPZw385cgeH5-T2_fRQA96bpIxAgDZzCxiJBOq2xfOYbf3yXE47AQPY_gqeQ4DeI29e28pMWBcyun1KhntlKsgzaXk1S6rd-lyGHSjagqILW5_jC77_anY0sNSKQUofRPThM5aB7Pp3SZLY5lm174JnlpyLjkUTG8w-E6P4YcnS41cIIDgLPeAnkG85oQJEEL8w"
        />
      </div>
      <button className="bg-mint-green text-forest-green rounded-full w-8 h-8 md:w-10 md:h-10 flex items-center justify-center flex-shrink-0 shadow-md">
        <i className="fa-solid fa-chevron-right text-sm md:text-base"></i>
      </button>
      {/* <!-- Dots --> */}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2">
        <div className="w-2 h-2 rounded-full bg-forest-green"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
        <div className="w-2 h-2 rounded-full bg-gray-300"></div>
      </div>
    </article>
  );
};
