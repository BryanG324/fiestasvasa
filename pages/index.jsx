
import Link from 'next/link'
import styles from '../pages/sideBar.module.css'
import Image from 'next/image'
import { IoHome } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { GiCommercialAirplane } from "react-icons/gi";
import CelebrationIcon from '@mui/icons-material/Celebration';
import { FaRegClock } from "react-icons/fa";
import { FaGears } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import cumple from '../pages/cumple.js';

import vasa


export default function Home(){
    return(
        <div className={styles.container}>
            <Image src="/Logo-vasa.png" width={80} height={30}/>
            <div className={styles.links1}>
            <Link href="/"> <span><IoHome/></span> Inicio</Link>
            <Link href="/expediente"> <span><GrDocumentText/></span>  Expediente Empleados</Link>
            <Link href=""> <span><GiCommercialAirplane/></span> Vacaciones</Link>
            <Link href=""> <span><CelebrationIcon/></span> Cumpleaños</Link>
            <Link href=""> <span><FaRegClock/></span> Horas Trabajadas</Link>
            </div>
           <cumple/>
        </div>
    )
}

