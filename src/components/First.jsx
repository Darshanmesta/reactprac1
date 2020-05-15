import React from "react";

const First = props => {
  const { datas } = props;
  const dataList = datas.map(item => {
    return (
      <div key={item.name}>
        <h2>{item.name}</h2>
        <h2>{item.email}</h2>
        <br />
      </div>
    );
  });

  return <div>{dataList}</div>;
};

export default First;
