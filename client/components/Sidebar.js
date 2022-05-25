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
        roomId: 1,
        roomName: 'general',
        avatar: avatar1,
    },
    {
        roomId: 2,
        roomName: 'random',
        avatar: avatar2,
    },
    {
        roomId: 3,
        roomName: 'chill',
        avatar: avatar3,
    },
    {
        roomId: 4,
        roomName: 'buildspace',
        avatar: avatar4,
    },
]

const Sidebar = () => {
    const router = useRouter()
    const [channels, setChannels] = useState(dummyChannels)

    useEffect(() => {
        fetchChannels()
    }, [])

    const fetchChannels = async () => {
        try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_API_URL}/getchannels`,
            )
                
            const data = await response.json()
            console.log(data, '🌵')
            setChannels(data)
      
            router.push(`?channel=${data[0].roomId}&name=${data[0].roomName}`)
          } catch (error) { console.error(error) }
    }

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