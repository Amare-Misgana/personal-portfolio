import { useEffect, useRef, useState } from "react"
import styles from "./GlassBox.module.css"

const GlassBox = ({ padding = 0, borderColor = 'transparent', borderStyle = 'none', borderWidth = '1px', borderRadius = 0, background = 'transparent', children }) => {
    const [mouesXY, setMouesXY] = useState([0, 0])
    const [windowMouseXY, setWindowMouseXY] = useState([0, 0])
    const lightEffectRef = useRef(null)
    const mainContainerRef = useRef(null)
    const borderGlowRef = useRef(null)


    useEffect(() => {
        if (mainContainerRef.current) {
            mainContainerRef.current.style.setProperty("--borderWidth", borderWidth);
            const handleMouseMove = (e) => {
                const rect = mainContainerRef.current.getBoundingClientRect();
                setWindowMouseXY([e.clientX - rect.left, e.clientY - rect.top]);
            };
            window.addEventListener("mousemove", handleMouseMove);
            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };
        }
    }, [borderWidth]);





    useEffect(() => {
        borderGlowRef.current.style.left = windowMouseXY[0] + 'px'
        borderGlowRef.current.style.top = windowMouseXY[1] + 'px'
    }, [windowMouseXY])


    useEffect(() => {
        lightEffectRef.current.style.left = mouesXY[0] + 'px';
        lightEffectRef.current.style.top = mouesXY[1] + 'px';
    }, [mouesXY])

    return (
        <div ref={mainContainerRef} onMouseMove={e => {
            const rect = e.currentTarget.getBoundingClientRect();

            setMouesXY([
                e.clientX - rect.left,
                e.clientY - rect.top
            ]);

        }}
            className={styles.GlassBoxContainer} style={{ borderRadius: borderRadius }}>
            <div ref={borderGlowRef} className={styles.borderGlow}></div>
            <div className={styles.content} style={{ padding: padding, background: background, borderRadius: borderRadius }}>
                <div ref={lightEffectRef} className={styles.lightEffect}></div>
                {children}
            </div>
        </div>
    )
}

export default GlassBox