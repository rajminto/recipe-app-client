import React from 'react'
import styles from './profile-header.module.scss'

import Card from '../../../shared/Card'

const ProfileHeader = ({ user }) => {
  return (
    <Card className={styles.profileHeaderContainer}>
      <h1>Welcome, {user.name}!</h1>
      <p>From here you can:</p>
      <ul>
        <li>Create new recipes</li>
        <li>Edit recipes you have created</li>
        <li>Delete recipes you have created</li>
        <li>View recipes you have created and saved</li>
      </ul>
    </Card>
  )
}

export default ProfileHeader