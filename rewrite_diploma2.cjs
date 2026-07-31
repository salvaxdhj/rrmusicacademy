const fs = require('fs');

let content = fs.readFileSync('components/DiplomaPlans.tsx', 'utf8');

content = content.replace(
    `<h3 className="font-['Oswald'] text-4xl text-gray-900 uppercase tracking-wide mb-2">Instrumento Principal</h3>
                                    <p className="text-gray-500 text-sm italic mb-8 border-b border-gray-100 pb-6">Enfocado a la formación y desarrollo técnico musical.</p>`,
    `<h3 className="font-['Oswald'] text-4xl text-gray-900 uppercase tracking-wide mb-2">Instrumento Principal</h3>
                                    <p className="text-gray-500 text-sm italic mb-8 border-b border-gray-100 pb-6">Enfocado a la formación y desarrollo técnico musical. (Clases Grupales)</p>`
);

content = content.replace(
    `<li className="flex items-center text-gray-700">
                                            <Check className="w-6 h-6 text-rr-blue mr-4 shrink-0" />
                                            <span className="text-lg font-light">Canto o un instrumento a elegir</span>
                                        </li>`,
    `<li className="flex items-center text-gray-700">
                                            <Check className="w-6 h-6 text-rr-blue mr-4 shrink-0" />
                                            <span className="text-lg font-light">Canto o un instrumento a elegir (Grupal)</span>
                                        </li>`
);

content = content.replace(
    `<h3 className="font-['Oswald'] text-4xl text-gray-900 uppercase tracking-wide mb-2">Doble Instrumento</h3>
                                    <p className="text-gray-500 text-sm italic mb-8 border-b border-gray-100 pb-6">Orientado a la formación musical multidisciplinaria.</p>`,
    `<h3 className="font-['Oswald'] text-4xl text-gray-900 uppercase tracking-wide mb-2">Doble Instrumento</h3>
                                    <p className="text-gray-500 text-sm italic mb-8 border-b border-gray-100 pb-6">Orientado a la formación musical multidisciplinaria. (Clases Grupales)</p>`
);

content = content.replace(
    `<li className="flex items-center text-gray-700">
                                            <Check className="w-6 h-6 text-rr-orange mr-4 shrink-0" />
                                            <span className="text-lg font-light">2 horas (Instrumento Principal)</span>
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <Check className="w-6 h-6 text-rr-orange mr-4 shrink-0" />
                                            <span className="text-lg font-light">2 horas (Instrumento Secundario)</span>
                                        </li>`,
    `<li className="flex items-center text-gray-700">
                                            <Check className="w-6 h-6 text-rr-orange mr-4 shrink-0" />
                                            <span className="text-lg font-light">2 horas (Instrumento Principal Grupal)</span>
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <Check className="w-6 h-6 text-rr-orange mr-4 shrink-0" />
                                            <span className="text-lg font-light">2 horas (Inst. Secundario Grupal)</span>
                                        </li>`
);

content = content.replaceAll(
    `Inscribirse <ArrowRight className="w-4 h-4" />`,
    `¡Inscríbete ahora! <ArrowRight className="w-4 h-4" />`
);

// Remove masterclass
const masterclassStart = `                    {/* CURSOS EXCLUSIVOS (MASTERCLASSES) */}`;
const masterclassEnd = `                    {/* COMPLEMENTO ACADÉMICO */}`;
const startIndex = content.indexOf(masterclassStart);
const endIndex = content.indexOf(masterclassEnd);

if (startIndex !== -1 && endIndex !== -1) {
    content = content.substring(0, startIndex) + content.substring(endIndex);
}

content = content.replace(
    `<span className="block text-5xl font-bold text-rr-blue mb-1">+S/100</span>`,
    `<span className="block text-5xl font-bold text-rr-blue mb-1">+S/150</span>`
);

const endContent = `                    </div>

                    {/* INICIO */}
                    <div className="mt-20 text-center pb-12">
                        <span className="inline-block bg-rr-orange text-white font-bold px-8 py-4 rounded-full text-2xl uppercase tracking-widest shadow-lg">
                            Inicio Agosto 2026
                        </span>
                    </div>

                </div>
            </div>`;
content = content.replace(
    `                    </div>

                </div>
            </div>`,
    endContent
);

fs.writeFileSync('components/DiplomaPlans.tsx', content);

