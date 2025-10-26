"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { AnimatedLayerButton } from "@/components/button";
import { Badge } from "@/components/ui/badge";

gsap.registerPlugin(SplitText, useGSAP);

const ShaderPlane = ({
    vertexShader,
    fragmentShader,
    uniforms
}) => {
	const meshRef = useRef(null);
	const { size } = useThree();

	useFrame((state) => {
		if (meshRef.current) {
			const material = meshRef.current.material;
			material.uniforms.u_time.value = state.clock.elapsedTime * 0.5;
			material.uniforms.u_resolution.value.set(size.width, size.height, 1.0);
		}
	});

	return (
        <mesh ref={meshRef}>
            <planeGeometry args={[2, 2]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={uniforms}
                side={THREE.FrontSide}
                depthTest={false}
                depthWrite={false} />
        </mesh>
    );
};

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision highp float;

  varying vec2 vUv;
  uniform float u_time;
  uniform vec3 u_resolution;
  uniform sampler2D u_channel0;

  vec2 toPolar(vec2 p) {
      float r = length(p);
      float a = atan(p.y, p.x);
      return vec2(r, a);
  }

  vec2 fromPolar(vec2 polar) {
      return vec2(cos(polar.y), sin(polar.y)) * polar.x;
  }

  void mainImage(out vec4 fragColor, in vec2 fragCoord) {
      vec2 p = 6.0 * ((fragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y);

      vec2 polar = toPolar(p);
      float r = polar.x;
      float a = polar.y;

      vec2 i = p;
      float c = 0.0;
      float rot = r + u_time + p.x * 0.100;
      for (float n = 0.0; n < 4.0; n++) {
          float rr = r + 0.15 * sin(u_time*0.7 + float(n) + r*2.0);
          p *= mat2(
              cos(rot - sin(u_time / 10.0)), sin(rot),
              -sin(cos(rot) - u_time / 10.0), cos(rot)
          ) * -0.25;

          float t = r - u_time / (n + 30.0);
          i -= p + sin(t - i.y) + rr;

          c += 2.2 / length(vec2(
              (sin(i.x + t) / 0.15),
              (cos(i.y + t) / 0.15)
          ));
      }

      c /= 8.0;

      // COLOR PALETTE: Electric Blue/Cyan → Hot Pink/Magenta → Bright Orange/Yellow
      vec3 cyan = vec3(0.0, 1.0, 1.0);      // #00FFFF
      vec3 magenta = vec3(1.0, 0.0, 1.0);   // #FF00FF
      vec3 orange = vec3(1.0, 0.65, 0.0);   // Bright Orange/Yellow
      
      float colorMix = c * 0.6;
      vec3 baseColor;
      if (colorMix < 0.5) {
          baseColor = mix(cyan, magenta, colorMix * 2.0);
      } else {
          baseColor = mix(magenta, orange, (colorMix - 0.5) * 2.0);
      }
      
      vec3 finalColor = baseColor * smoothstep(0.0, 1.0, c * 0.6);

      fragColor = vec4(finalColor, 1.0);
  }

  void main() {
      vec4 fragColor;
      vec2 fragCoord = vUv * u_resolution.xy;
      mainImage(fragColor, fragCoord);
      gl_FragColor = fragColor;
  }
`;

const SyntheticHero = ({
    title = "An experiment in light, motion, and the quiet chaos between.",
    description = "Experience a new dimension of interaction — fluid, tactile, and alive. Designed for creators who see beauty in motion.",
    badgeText = "React Three Fiber",
    badgeLabel = "Experience",

    ctaButtons = [
		{ text: "Explore the Canvas", href: "#explore", primary: true },
		{ text: "Learn More", href: "#learn-more" },
	],

    microDetails = [
		"Immersive shader landscapes",
		"Hand-tuned motion easing",
		"Responsive, tactile feedback",
	]
}) => {
	const sectionRef = useRef(null);
	const badgeWrapperRef = useRef(null);
	const headingRef = useRef(null);
	const paragraphRef = useRef(null);
	const ctaRef = useRef(null);
	const microRef = useRef(null);
	const shaderUniforms = useMemo(() => ({
        u_time: { value: 0 },
        u_resolution: { value: new THREE.Vector3(1, 1, 1) },
    }), []);

	useGSAP(() => {
        if (!headingRef.current) return;

        document.fonts.ready.then(() => {
            const split = new SplitText(headingRef.current, {
                type: "lines",
                wordsClass: "hero-lines",
            });

            gsap.set(split.lines, {
                filter: "blur(16px)",
                yPercent: 24,
                autoAlpha: 0,
                scale: 1.04,
                transformOrigin: "50% 100%",
            });

            if (badgeWrapperRef.current) {
                gsap.set(badgeWrapperRef.current, { autoAlpha: 0, y: -8 });
            }
            if (paragraphRef.current) {
                gsap.set(paragraphRef.current, { autoAlpha: 0, y: 8 });
            }
            if (ctaRef.current) {
                gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });
            }

            const microItems = microRef.current
                ? Array.from(microRef.current.querySelectorAll("li"))
                : [];
            if (microItems.length > 0) {
                gsap.set(microItems, { autoAlpha: 0, y: 6 });
            }

            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            if (badgeWrapperRef.current) {
                tl.to(badgeWrapperRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0);
            }

            tl.to(split.lines, {
                filter: "blur(0px)",
                yPercent: 0,
                autoAlpha: 1,
                scale: 1,
                duration: 0.9,
                stagger: 0.12,
            }, 0.1);

            if (paragraphRef.current) {
                tl.to(paragraphRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.55");
            }

            if (ctaRef.current) {
                tl.to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, "-=0.35");
            }

            if (microItems.length > 0) {
                tl.to(microItems, { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 }, "-=0.25");
            }
        });
    }, { scope: sectionRef });

	return (
        <section
            ref={sectionRef}
            className="relative flex items-center justify-center min-h-screen overflow-hidden">
            <div className="absolute inset-0 z-0">
				<Canvas>
					<ShaderPlane
                        vertexShader={vertexShader}
                        fragmentShader={fragmentShader}
                        uniforms={shaderUniforms} />
				</Canvas>
			</div>
            <div className="relative z-10 flex flex-col items-center text-center px-6">
				<div ref={badgeWrapperRef}>
					<Badge
                        className="mb-6 bg-white/10 hover:bg-white/15 text-cyan-300 backdrop-blur-md border border-cyan-400/30 uppercase tracking-wider font-medium flex items-center gap-2 px-4 py-1.5">
						<span 
                            className="text-[10px] font-light tracking-[0.18em] text-cyan-100/80">
							{badgeLabel}
						</span>
						<span 
                            className="h-1 w-1 rounded-full bg-pink-400/80" />
						<span 
                            className="text-xs font-light tracking-tight text-pink-200">
							{badgeText}
						</span>
					</Badge>
				</div>

				<h1
                    ref={headingRef}
                    className="text-5xl md:text-7xl max-w-4xl font-playfair font-semibold tracking-tight text-white mb-4"
                    style={{
                        textShadow: '0 0 40px rgba(255,255,255,0.15), 0 0 80px rgba(255,255,255,0.1)',
                    }}>
					{title}
				</h1>

				<p
                    ref={paragraphRef}
                    className="text-cyan-50/90 text-lg max-w-2xl mx-auto mb-10 font-cormorant font-light">
					{description}
				</p>

				<div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
					{ctaButtons.map((button, index) => {
						if (button.href) {
							return (
								<a key={index} href={button.href}>
									<AnimatedLayerButton className="font-playfair">
										{button.text}
									</AnimatedLayerButton>
								</a>
							);
						}

						return (
							<AnimatedLayerButton key={index} className="font-playfair">
								{button.text}
							</AnimatedLayerButton>
						);
					})}
				</div>

				{microDetails.length > 0 && (
					<ul
                        ref={microRef}
                        className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-light tracking-tight text-cyan-100/70">
						{microDetails.map((detail, index) => (
							<li key={index} className="flex items-center gap-2">
								<span className="h-1 w-1 rounded-full bg-orange-400/80" />
								{detail}
							</li>
						))}
					</ul>
				)}
			</div>
        </section>
    );
};

export default SyntheticHero;