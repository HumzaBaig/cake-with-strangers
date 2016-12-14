import React from 'react';
import HostContainer from  './host_container';

const hostContainer = (currentUser) => {
  if (currentUser)
    return (<HostContainer />);
};

const HostPage = ({ session }) => {

  return (
    <div className="container light-background">
      <section className="host-container">
        <h2 className="host-header">Bro, let us come thru</h2>
          {hostContainer(session.currentUser)}
      </section>
    </div>
  );
};

export default HostPage;
