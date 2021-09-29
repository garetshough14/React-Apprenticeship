import React from 'react'

const ProfileCard = () => {
    return (
        <div className="base-card">
            <img className="Garet" src={`${process.env.PUBLIC_URL}/photo.jpg`} alt="Garet Hough" />
            <h1>Garet Hough (He/Him)</h1>
            <p>React Native Apprentice</p>
        </div>
    )
}

export default ProfileCard

