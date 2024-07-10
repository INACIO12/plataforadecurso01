import { Cursos } from "./@/components/Cursos"
import { HeadMenu } from "./@/components/HeadMenu"

function App() {

  return (
    <>
      <div className="bg-zinc-900 h-[100vh] text-white pt-7 pl-10 pr-10">
        <HeadMenu />
        <Cursos />
      </div>
      
    </>
  )
}

export default App
