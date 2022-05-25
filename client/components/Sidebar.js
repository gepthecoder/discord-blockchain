import styles from '../styles/sidebar.module.css'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import avatar1 from '../assets/avatar-1.webp'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.webp'
import avatar4 from '../assets/avatar-4.webp'

import RoomAvatar from './RoomAvatar'

const dummyChannels = [
    {
        id: 1,
        name: 'general',
        avatar: avatar1,
    },
    {
        id: 2,
        name: 'general',
        avatar: avatar2,
    },
    {
        id: 3,
        name: 'general',
        avatar: avatar3,
    },
    {
        id: 4,
        name: 'general',
        avatar: avatar4,
    },
]

const Sidebar = () => {
    const router = useRouter()
    const [channels, setChannels] = useState(dummyChannels)

    return (
        <div className={styles.wrapper}>
            {
                channels.map((channel, index) => (
                    <RoomAvatar 
                        key={index}
                        id={channel.roomId}
                        avatar={channel.avatar}
                        name={channel.roomName}
                    />
                ))
            }
        </div>
    )
}

export default Sidebar