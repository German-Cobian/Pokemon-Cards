import React from 'react';

const Typelist = (props) => {
  const {
    id, name, url,
  } = props;

  return (
    <>
      <div className="py-3" key={id}>
        <div className="d-flex flex-row justify-content-start">
          <h4 className="me-5">{name}</h4>
          <p className="">{url}</p>
        </div>
      </div>
    </>
  );
};

export default Typelist;
