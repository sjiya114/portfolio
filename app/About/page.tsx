
function page() {
  return (
    <section className="flex flex-col mt-40 md:flex-row items-center justify-center gap-10 max-md:px-4">
                <div className="relative shadow-2xl shadow-white/40 rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-md w-full h-fit object-cover rounded-2xl"
                        src="./pro.png"
                        alt="profile" />
                </div>
                <div className="text-sm text-slate-600 max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-gray-400">About Me</h1>
                    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r  from-indigo-100 to-[#DDD9FF]"></div>
                    <p className="mt-8 text-lg text-white">Passionate Developer: Enthusiastic about building clean, efficient, and user-friendly web applications using modern technologies like React, Node.js, and MongoDB. </p>
                    <p className="mt-4 text-lg text-white">Problem Solver: Skilled at analyzing challenges, learning new tools quickly, and delivering innovative solutions.</p>
                    <p className="mt-4 text-lg text-white">Collaborative & Driven: Enjoy working in teams, sharing knowledge, and constantly improving both technical and soft skills.</p>
                    
                </div>
            </section>
  )
}

export default page
