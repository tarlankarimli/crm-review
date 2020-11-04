import React, {useContext} from 'react';
import { Modal } from 'antd';
import customerContext from 'components/context/customerContext'

function Details({visible, setVisible}) {
    const {customer} = useContext(customerContext);
    return (
        <div>
            <Modal
                title={`${customer.name} ${customer.surname}`}
                visible={visible}
                onCancel={()=>{setVisible(false)}}
                footer = {false}
            >
                <h3>Email</h3>
                <p>{customer.email}</p>
                <h3>Birth date</h3>
                <p>{customer.birthdate}</p>
                <h3>Communication</h3>
                <p>{customer.communication}</p>
            </Modal>
        </div>
    )
}

export default Details;
