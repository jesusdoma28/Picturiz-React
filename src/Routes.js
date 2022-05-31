import '../App.css';

function App() {
  return (

    <div className="App">

      {/* <!-- component --> */}
      <div class="min-h-screen flex justify-center items-center bg-gray-500">
        <div class="bg-white p-10 border-[1px] -mt-10 border-slate-200 rounded-md flex flex-col items-center space-y-5">
          <div class="py-8">
            <img width="30" class="-mt-10" src="https://www.paypalobjects.com/images/shared/momgram@2x.png" />
          </div>
          <div class="flex flex-col mt-2 mb-40 bg-blue-400 rounded">
            <label for='email' class='font-bold'>Email</label>
            <input class="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="E-Mail" id='email' />
          </div>
          <div class="flex flex-col bg-blue-400 rounded">
            <label for='password' class='font-bold'>Password</label>
            <input class="p-3 border-[1px] border-slate-500 rounded-sm w-80" placeholder="Password" id='password' />
            <p class="font-bold text-[#0070ba] bg-white">Forgot password?</p>
          </div>
          <div class="flex flex-col space-y-5 w-full">
            <button class="w-full bg-[#0070ba] rounded-3xl p-3 text-white font-bold transition duration-200 hover:bg-[#003087]">Log in</button>
            <div class="flex items-center justify-center border-t-[1px] border-t-slate-300 w-full relative">
              <div class="-mt-1 font-bod bg-white px-5 absolute">Or</div>
            </div>
            <button class="w-full border-blue-900 hover:border-[#003087] hover:border-[2px] border-[1px] rounded-3xl p-3 text-[#0070ba] font-bold transition duration-200">Sign Up</button>
          </div>
        </div>
      </div>
    </div >
  );
}

export default App;
