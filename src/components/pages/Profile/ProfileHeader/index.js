import React from 'react';
import PropTypes from 'prop-types';
import styles from './profile-header.module.scss';

import Card from '../../../shared/Card';

const ProfileHeader = ({ user }) => {
  return (
    <Card className={styles.profileHeaderContainer}>
      <h1>Welcome, {user.name}!</h1>
      <div className={styles.headerContent}>
        <Card className={styles.headerCard}>
          <img src={user.avatar_url} alt='' />
        </Card>
        <Card className={styles.headerCard}>
          <h2>About Me</h2>
          <p>{user.bio}</p>
        </Card>
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
  user: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired
};

export default ProfileHeader;
