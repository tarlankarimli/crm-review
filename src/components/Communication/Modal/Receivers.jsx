import React from 'react';
import { Modal } from 'antd';
import Receive from './Receive'

function Receivers({visible, setVisible}) {
    return (
        <div>
            <Modal
                title="Receivers"
                visible={visible}
                onCancel={()=>{setVisible(false)}}
                okText = "Send">
                <Receive/>
                
            </Modal>
        </div>
    )
}

export default Receivers;
