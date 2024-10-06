const Navbar = () => {
    return (
      <div className="navbar-wrapper flex justify-between px-7 py-7 border-stone-200 border-b-2 items-center">
        <div className="logo-contr  font-bold text-3xl tracking-tight">
          WhatBytes
        </div>
        <div className="user-contr flex px-2 py-2 border-2 border-stone-200 rounded ">
                <div className="picture rounded-full w-7 h-7 flex items-center justify-center">
                    <img className='rounded-full w-7 h-7 ' src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
          </div>
          <div className="name font-bold pl-2.5">Rohan Sharma</div>
        </div>
      </div>
    );
}

export default Navbar