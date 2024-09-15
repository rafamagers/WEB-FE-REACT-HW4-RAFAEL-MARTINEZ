function Header(props) {
  const { title } = props;
  return (
    <header className="flex justify-center items-center w-full h-[80px] bg-[#F5F5F5] border-b">
      <div className="text-5xl text-center text-[#247BA0]">
        League of Cards
      </div>
    </header>
  );
}

export default Header;
