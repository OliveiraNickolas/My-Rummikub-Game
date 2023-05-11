import './App.css'
import Player from './components/Player/Players';
import Board from './components/Board/Board';
import Deck from './components/Deck/Deck';
import GameButtons from './components/GameButtons/GameButtons';


function App() {
  return (

    <div className='full-panel grid grid-cols-24 h-screen w-screen bg-zinc-900'>

      <div className='col-span-2 flex flex-col justify-evenly'>
        <Player />
        <Player />
        <Player />
        <Player />
      </div>

          <div className='grid grid-rows-48 col-span-20 h-full w-full'>

              <div className=' row-span-38 h-full w-full flex justify-center justify-items-center'> 
                <Board />
              </div>

              <div className=' row-span-10 h-full w-full'> 
              <Deck />
              </div>

          </div>
       
      
      <div className='col-span-2'>
        <GameButtons />
      </div>
              
    </div>


  )
}

export default App
