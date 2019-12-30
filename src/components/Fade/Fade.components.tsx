import React from 'react';
import './Fade.css';
import { Spin } from 'antd';

type FadeProps = {
    load: boolean
};

const FadeComponent = ({load} : FadeProps) => {
  return (
    <div>
        {
            load && <div className="fade">
                <Spin className="spin" size="large" />
            </div>
        }
    </div>
  );
}

export default FadeComponent;
