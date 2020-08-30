import React from 'react';
import { shape, string } from 'prop-types';
import styles from './profile-header.module.scss';

import Card from '../../../shared/Card';

const ProfileHeader = ({ user }) => {
  return (
    <Card className={styles.profileHeaderContainer}>
      <h1>Welcome, {user.name}!</h1>
      <div className={styles.headerContent}>
        <div className={styles.headerCard}>
          <img src={user.avatar_url} alt='' />
        </div>
        <div className={styles.headerCard}>
          <h2>About Me</h2>
          <p>{user.bio}</p>
        </div>
        {/* <Card className={styles.headerCard}>
          <p>From here you can:</p>
          <ul>
            <li>Create new recipes</li>
            <li>Edit recipes you have created</li>
            <li>Delete recipes you have created</li>
            <li>View recipes you have created and saved</li>
          </ul>
        </Card> */}
      </div>
    </Card>
  );
};

ProfileHeader.propTypes = {
  user: shape({
    avatar_url: string.isRequired,
    bio: string.isRequired,
    name: string.isRequired
  }).isRequired
};

export default ProfileHeader;
