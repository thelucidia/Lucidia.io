import { motion } from 'framer-motion'
import { FunctionComponent } from 'react';
import { useInView } from 'react-intersection-observer';


interface Children {
    children: JSX.Element
}

const LeftRight: FunctionComponent<Children> = ({ children }) => {

    const options = { triggerOnce: false, threshold: 0.5, rootMargin: `${window.innerHeight}px 0px  0px 0px` }
    const [ref, inView] = useInView(options)



    return (
        <motion.div initial={{ opacity: 0, x: -50 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 1, ease: [0.16, 0.77, 0.47, .97] }} ref={ref}>
            {children}
        </motion.div>
    );
}

export default LeftRight;