const fs = require('fs');

let content = fs.readFileSync('components/Plans.tsx', 'utf8');

const additionalCards = `            {/* PREPARATORY CARD */}
            <Link 
                to="/plans/preparatory"
                className="relative group overflow-hidden rounded-3xl h-96 shadow-xl border border-gray-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-white"
            >
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                    <span className="font-sans lowercase tracking-[0.2em] text-rr-blue text-lg mb-2">preparatory</span>
                    
                    <h2 className="font-oswald font-bold text-5xl sm:text-6xl text-gray-900 tracking-tight leading-none mb-0">
                        MUSIC
                    </h2>
                    
                    <div className="relative mt-2">
                        <span className="uppercase tracking-widest text-sm text-gray-600 font-bold bg-gray-100 px-6 py-2 rounded-full">
                            Program
                        </span>
                    </div>
                </div>
                
                {/* Bottom Bar Accent */}
                <div className="absolute bottom-0 w-full h-2 bg-rr-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Link>

            {/* ON STAGE CARD */}
            <Link 
                to="/plans/onstage"
                className="relative group overflow-hidden rounded-3xl h-96 shadow-xl border border-gray-200 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl bg-white"
            >
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
                    <span className="font-sans lowercase tracking-[0.2em] text-rr-blue text-lg mb-2">on stage</span>
                    
                    <h2 className="font-oswald font-bold text-5xl sm:text-6xl text-gray-900 tracking-tight leading-none mb-0">
                        MUSIC
                    </h2>
                    
                    <div className="relative mt-2">
                        <span className="uppercase tracking-widest text-sm text-gray-600 font-bold bg-gray-100 px-6 py-2 rounded-full">
                            Program
                        </span>
                    </div>
                </div>
                
                {/* Bottom Bar Accent */}
                <div className="absolute bottom-0 w-full h-2 bg-rr-blue transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </Link>`;

content = content.replace(
    `            </Link>
        </div>
        
        <div className="mt-16 text-center">`,
    `            </Link>

${additionalCards}
        </div>
        
        <div className="mt-16 text-center">`
);

content = content.replace(
    `Contamos con dos programas especializados según tu nivel y objetivos.`,
    `Contamos con diversos programas especializados según tu nivel y objetivos.`
);

fs.writeFileSync('components/Plans.tsx', content);

