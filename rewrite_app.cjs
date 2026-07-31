const fs = require('fs');

let content = fs.readFileSync('App.tsx', 'utf8');

if (!content.includes('PreparatoryPlans')) {
    content = content.replace(
        `import DiplomaPlans from './components/DiplomaPlans';`,
        `import DiplomaPlans from './components/DiplomaPlans';
import PreparatoryPlans from './components/PreparatoryPlans';
import OnStagePlans from './components/OnStagePlans';`
    );

    content = content.replace(
        `<Route path="/plans/diploma" element={<DiplomaPlans />} />`,
        `<Route path="/plans/diploma" element={<DiplomaPlans />} />
                <Route path="/plans/preparatory" element={<PreparatoryPlans />} />
                <Route path="/plans/onstage" element={<OnStagePlans />} />`
    );
}

fs.writeFileSync('App.tsx', content);

