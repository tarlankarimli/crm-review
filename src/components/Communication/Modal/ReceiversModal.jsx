import React from 'react';
import { Modal } from 'antd';
import Receivers from './Receivers'

function ReceiversModal({visible, setVisible}) {
    return (
        <div>
            <Modal
                title="Receivers"
                visible={visible}
                onCancel={()=>{setVisible(false)}}
                okText = "Send">
                <Receivers/>
                
            </Modal>
        </div>
    )
}

export default ReceiversModal;
