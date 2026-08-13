// Electric Wires Generator
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    
    // Patterns of SVG wire paths for variety
    const wirePatterns = [
        // Pattern 1: Double parallel wires with central circuit loop
        `
        <svg class="wire-svg" viewBox="0 0 1200 36" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Green Line -->
            <path class="wire-path-base" d="M0,18 L400,18 L430,8 L770,8 L800,18 L1200,18" />
            <path class="wire-pulse-green" d="M0,18 L400,18 L430,8 L770,8 L800,18 L1200,18" />
            <circle class="wire-node" cx="430" cy="8" r="3.5" />
            <circle class="wire-node" cx="770" cy="8" r="3.5" />
            
            <!-- Blue Line -->
            <path class="wire-path-base-blue" d="M0,26 L380,26 L410,28 L790,28 L820,26 L1200,26" />
            <path class="wire-pulse-blue" d="M0,26 L380,26 L410,28 L790,28 L820,26 L1200,26" />
            <circle class="wire-node-blue" cx="410" cy="28" r="3" />
            <circle class="wire-node-blue" cx="790" cy="28" r="3" />
        </svg>
        `,
        // Pattern 2: Zig-zag circuit node
        `
        <svg class="wire-svg" viewBox="0 0 1200 36" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path class="wire-path-base" d="M0,12 L500,12 L530,24 L670,24 L700,12 L1200,12" />
            <path class="wire-pulse-green" d="M0,12 L500,12 L530,24 L670,24 L700,12 L1200,12" />
            <circle class="wire-node" cx="530" cy="24" r="3.5" />
            <circle class="wire-node" cx="670" cy="24" r="3.5" />

            <path class="wire-path-base-blue" d="M0,20 L480,20 L510,8 L690,8 L720,20 L1200,20" />
            <path class="wire-pulse-blue" d="M0,20 L480,20 L510,8 L690,8 L720,20 L1200,20" />
            <circle class="wire-node-blue" cx="510" cy="8" r="3" />
            <circle class="wire-node-blue" cx="690" cy="8" r="3" />
        </svg>
        `,
        // Pattern 3: Straight electric wire with multiple pulse nodes
        `
        <svg class="wire-svg" viewBox="0 0 1200 36" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path class="wire-path-base" d="M0,18 L1200,18" />
            <path class="wire-pulse-green" d="M0,18 L1200,18" />
            <circle class="wire-node" cx="300" cy="18" r="3.5" />
            <circle class="wire-node" cx="600" cy="18" r="4" />
            <circle class="wire-node" cx="900" cy="18" r="3.5" />

            <path class="wire-path-base-blue" d="M0,24 L1200,24" />
            <path class="wire-pulse-blue" d="M0,24 L1200,24" />
            <circle class="wire-node-blue" cx="450" cy="24" r="3" />
            <circle class="wire-node-blue" cx="750" cy="24" r="3" />
        </svg>
        `
    ];

    // Insert wire dividers between sections
    sections.forEach((section, index) => {
        if (index < sections.length - 1) {
            const divider = document.createElement('div');
            divider.className = 'wire-divider';
            divider.innerHTML = wirePatterns[index % wirePatterns.length];
            section.after(divider);
        }
    });
});
