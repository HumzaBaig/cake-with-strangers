import React from 'react';

const HostDetail = ({ host }) => (
  <section className="host-detail-container">
    <img className="profile-pic" src={host.profile_pic_url} />
    <h3>{host.username}</h3>
  </section>
);

export default HostDetail;
