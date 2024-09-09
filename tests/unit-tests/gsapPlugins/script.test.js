import { gsap } from "gsap";

import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);

gsap.to("#circle", { duration: 1, morphSVG: "#hippo" });