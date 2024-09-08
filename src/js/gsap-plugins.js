import { gsap } from "gsap/dist/gsap";
    
import { CustomEase } from "gsap/dist/CustomEase";
import { RoughEase, ExpoScaleEase, SlowMo } from "gsap/dist/EasePack";

/* The following eases are Club GSAP perks */
import { CustomBounce } from "gsap/dist/CustomBounce"; // extends CustomEase
import { CustomWiggle } from "gsap/dist/CustomWiggle"; // extends CustomEase
    
import { Flip } from "gsap/dist/Flip";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Observer } from "gsap/dist/Observer";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { Draggable } from "gsap/dist/Draggable";
import { MotionPathPlugin } from "gsap/dist/MotionPathPlugin";
import { EaselPlugin } from "gsap/dist/EaselPlugin";
import { PixiPlugin } from "gsap/dist/PixiPlugin";
import { TextPlugin } from "gsap/dist/TextPlugin";

/* The following plugins are Club GSAP perks */
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";
import { ScrollSmoother } from "gsap/dist/ScrollSmoother";
import { GSDevTools } from "gsap/dist/GSDevTools";
import { InertiaPlugin } from "gsap/dist/InertiaPlugin";
import { MorphSVGPlugin } from "gsap/dist/MorphSVGPlugin";
import { MotionPathHelper } from "gsap/dist/MotionPathHelper";
import { Physics2DPlugin } from "gsap/dist/Physics2DPlugin";
import { PhysicsPropsPlugin } from "gsap/dist/PhysicsPropsPlugin";
import { ScrambleTextPlugin } from "gsap/dist/ScrambleTextPlugin";
import { SplitText } from "gsap/dist/SplitText";


gsap.registerPlugin(Flip,ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin,EaselPlugin,PixiPlugin,TextPlugin,DrawSVGPlugin,ScrollSmoother,GSDevTools,InertiaPlugin,MorphSVGPlugin,MotionPathHelper,Physics2DPlugin,PhysicsPropsPlugin,ScrambleTextPlugin,SplitText,RoughEase,ExpoScaleEase,SlowMo,CustomEase,CustomBounce,CustomWiggle);