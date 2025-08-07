import { useRef, useEffect, memo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText);

const SplitText = ({
    text,
    className = "",
    delay = 100,
    duration = 0.6,
    ease = "power3.out",
    splitType = "chars",
    from = { opacity: 0, y: 40 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = "-100px",
    textAlign = "center",
    onLetterAnimationComplete,
}) => {
    const ref = useRef(null);
    const animationCompletedRef = useRef(false);
    const scrollTriggerRef = useRef(null);

    useEffect(() => {
        if (!ref.current || !text) return;

        const el = ref.current;

        // Wait until fonts are fully loaded
        document.fonts.ready.then(() => {
            animationCompletedRef.current = false;

            const absoluteLines = splitType === "lines";
            if (absoluteLines) el.style.position = "relative";

            let splitter;
            try {
                splitter = new GSAPSplitText(el, {
                    type: splitType,
                    absolute: absoluteLines,
                    linesClass: "split-line",
                });
            } catch (error) {
                console.error("SplitText error:", error);
                return;
            }

            let targets = splitter[splitType] || splitter.chars;

            if (!targets || targets.length === 0) {
                console.warn("No targets found");
                splitter.revert();
                return;
            }

            targets.forEach(t => {
                t.style.willChange = "transform, opacity";
            });

            const startPct = (1 - threshold) * 100;
            const match = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
            const value = match ? parseFloat(match[1]) : 0;
            const unit = match ? match[2] || "px" : "px";
            const sign = value < 0 ? `-=${Math.abs(value)}${unit}` : `+=${value}${unit}`;
            const start = `top ${startPct}%${sign}`;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: el,
                    start,
                    toggleActions: "play none none none",
                    once: true,
                    onToggle: self => (scrollTriggerRef.current = self),
                },
                onComplete: () => {
                    animationCompletedRef.current = true;
                    gsap.set(targets, {
                        ...to,
                        clearProps: "willChange",
                    });
                    onLetterAnimationComplete?.();
                },
            });

            tl.set(targets, { ...from, immediateRender: false, force3D: true });
            tl.to(targets, {
                ...to,
                duration,
                ease,
                stagger: delay / 1000,
                force3D: true,
            });

            return () => {
                tl.kill();
                scrollTriggerRef.current?.kill();
                scrollTriggerRef.current = null;
                gsap.killTweensOf(targets);
                splitter.revert();
            };
        });
    }, [
        text,
        delay,
        duration,
        ease,
        splitType,
        from,
        to,
        threshold,
        rootMargin,
        onLetterAnimationComplete,
    ]);

    return (
        <p
            ref={ref}
            className={`split-parent ${className}`}
            style={{
                textAlign,
                overflow: "hidden",
                display: "inline-block",
                whiteSpace: "normal",
                wordWrap: "break-word",
            }}
        >
            {text}
        </p>
    );
};

export default memo(SplitText);

